"""
Model for the VSCP class definitions in ../classes.

Files and how they relate:

    classes/list_class.xml         The classes in publishing order (<item name="class_10_measurement.xml"/>)
    classes/class_<id>_<name>.xml  One class: <class id name token [alternative-token] [events]> with its <type> events
    classes/<class>.md             Description of the class
    classes/<class>.<type>.md      Description of one event (type) of the class

A class with an events="class_0_protocol.xml" attribute has no types of its own:
it uses the types (and their <class>.<type>.md descriptions) of that class.

Edits are made on the file text. Only the start tag of a changed class or the
block of a changed type is rewritten, so everything else in a file (formatting,
comments, the other types) stays byte for byte as it was.
"""

import os
import re
import tempfile
import xml.etree.ElementTree as ET
from html import escape as _html_escape

LIST_FILE = "list_class.xml"
LEVEL1_MAX_CLASS = 511  # Level I classes 0-511, Level II 512-65535

# Attribute order used when a start tag is written
CLASS_ATTR_ORDER = ["id", "name", "token", "alternative-token", "events"]
TYPE_ATTR_ORDER = ["id", "name", "token", "alternative-token", "comment"]

DEFAULT_TYPE_INNER = """
        <render>
            <vscpworks
                variables=""
                template="No data"
            />
        </render>
    """


class ModelError(Exception):
    """An edit that can not be made. The message is shown to the user."""


# ---------------------------------------------------------------------------
# Scanning
# ---------------------------------------------------------------------------


class Element:
    """An element found in a file: its name, depth and where it is in the text."""

    def __init__(self, name, depth, start, start_tag_end, end, self_closing):
        self.name = name
        self.depth = depth
        self.start = start  # Index of "<"
        self.start_tag_end = start_tag_end  # Index after the ">" of the start tag
        self.end = end  # Index after the ">" of the end tag (or of the start tag if self closing)
        self.self_closing = self_closing


def scan(text):
    """Find the elements in an XML text. Handles comments, processing
    instructions, CDATA and quoted attribute values (which may contain ">")."""
    elements = []
    stack = []
    i = 0
    n = len(text)
    while True:
        i = text.find("<", i)
        if i < 0:
            break
        if text.startswith("<!--", i):
            j = text.find("-->", i + 4)
            if j < 0:
                raise ModelError("Unterminated comment")
            i = j + 3
            continue
        if text.startswith("<![CDATA[", i):
            j = text.find("]]>", i)
            if j < 0:
                raise ModelError("Unterminated CDATA")
            i = j + 3
            continue
        if text.startswith("<?", i) or text.startswith("<!", i):
            j = text.find(">", i)
            if j < 0:
                raise ModelError("Unterminated declaration")
            i = j + 1
            continue
        if text.startswith("</", i):
            j = text.find(">", i)
            if j < 0:
                raise ModelError("Unterminated end tag")
            name = text[i + 2 : j].strip()
            if not stack or stack[-1].name != name:
                raise ModelError("Unexpected end tag </%s>" % name)
            el = stack.pop()
            el.end = j + 1
            i = j + 1
            continue
        # Start tag: read the name, then up to ">" outside quotes
        m = re.compile(r"<([A-Za-z_][\w.\-:]*)").match(text, i)
        if not m:
            raise ModelError("Bad tag at offset %d" % i)
        j = m.end()
        quote = None
        while j < n:
            c = text[j]
            if quote:
                if c == quote:
                    quote = None
            elif c in "\"'":
                quote = c
            elif c == ">":
                break
            j += 1
        if j >= n:
            raise ModelError("Unterminated start tag <%s" % m.group(1))
        self_closing = text[j - 1] == "/"
        el = Element(m.group(1), len(stack), i, j + 1, j + 1 if self_closing else None, self_closing)
        elements.append(el)
        if not self_closing:
            stack.append(el)
        i = j + 1
    if stack:
        raise ModelError("Unclosed element <%s>" % stack[-1].name)
    return elements


def parse_attrs(start_tag):
    """Attributes of a start tag, in order, with entities resolved."""
    tag = start_tag.rstrip()
    if tag.endswith("/>"):
        tag = tag[:-2] + ">"
    if not tag.endswith(">"):
        tag += ">"
    name = re.match(r"<([\w.\-:]+)", tag).group(1)
    root = ET.fromstring(tag[:-1] + "></" + name + ">")
    # ElementTree keeps attribute order (Python 3.8+)
    return dict(root.attrib)


def xml_attr(value):
    return _html_escape(value, quote=True).replace("&#x27;", "'")


def build_start_tag(name, attrs, order, indent, self_closing=False):
    """A start tag in the style of the class files: one attribute per line."""
    keys = [k for k in order if k in attrs] + [k for k in attrs if k not in order]
    lines = []
    for idx, key in enumerate(keys):
        prefix = "<%s " % name if idx == 0 else indent + "    "
        lines.append('%s%s="%s" ' % (prefix, key, xml_attr(str(attrs[key]))))
    if not lines:
        lines.append("<%s " % name)
    return "\n".join(lines) + ("/>" if self_closing else ">")


def line_span(text, start, end):
    """Extend [start, end) to whole lines when only whitespace surrounds it."""
    s = start
    while s > 0 and text[s - 1] in " \t":
        s -= 1
    if s > 0 and text[s - 1] != "\n":
        s = start
    e = end
    while e < len(text) and text[e] in " \t":
        e += 1
    if e < len(text) and text[e] == "\n":
        e += 1
    elif e < len(text) and text[e] == "\r" and text[e + 1 : e + 2] == "\n":
        e += 2
    else:
        e = end
    return s, e


def atomic_write(path, text):
    directory = os.path.dirname(path)
    fd, tmp = tempfile.mkstemp(prefix=".tmp-", dir=directory)
    try:
        with os.fdopen(fd, "w", encoding="utf-8", newline="") as f:
            f.write(text)
        if os.path.exists(path):
            os.chmod(tmp, os.stat(path).st_mode & 0o777)
        else:
            os.chmod(tmp, 0o644)
        os.replace(tmp, path)
    except BaseException:
        if os.path.exists(tmp):
            os.unlink(tmp)
        raise


def read_text(path):
    with open(path, "r", encoding="utf-8", newline="") as f:
        return f.read()


def to_int(value, what, low, high):
    try:
        v = int(str(value).strip(), 0)
    except (TypeError, ValueError):
        raise ModelError("%s must be a number" % what)
    if not low <= v <= high:
        raise ModelError("%s must be %d-%d" % (what, low, high))
    return v


# ---------------------------------------------------------------------------
# One class file
# ---------------------------------------------------------------------------


class ClassFile:
    def __init__(self, path):
        self.path = path
        self.filename = os.path.basename(path)
        self.text = read_text(path)
        self._index()

    def _index(self):
        elements = scan(self.text)
        roots = [e for e in elements if e.depth == 0]
        if len(roots) != 1 or roots[0].name != "class":
            raise ModelError("%s: the root element must be <class>" % self.filename)
        self.root = roots[0]
        self.attrs = parse_attrs(self.text[self.root.start : self.root.start_tag_end])
        self.types = []
        for e in elements:
            if e.depth == 1 and e.name == "type":
                attrs = parse_attrs(self.text[e.start : e.start_tag_end])
                inner = "" if e.self_closing else self.text[e.start_tag_end : e.end - len("</type>")]
                self.types.append({"element": e, "attrs": attrs, "inner": inner})

    @property
    def id(self):
        return int(self.attrs["id"])

    @property
    def events(self):
        return self.attrs.get("events", "")

    def type_by_id(self, type_id):
        for t in self.types:
            if int(t["attrs"].get("id", -1)) == type_id:
                return t
        return None

    def _replace(self, start, end, new):
        text = self.text[:start] + new + self.text[end:]
        check_xml(text, self.filename)
        self.text = text
        self._index()

    def set_class_attrs(self, attrs):
        if attrs == self.attrs:
            return
        indent = ""
        new_tag = build_start_tag("class", attrs, CLASS_ATTR_ORDER, indent, self.root.self_closing)
        self._replace(self.root.start, self.root.start_tag_end, new_tag)

    def type_block(self, attrs, inner):
        tag = build_start_tag("type", attrs, TYPE_ATTR_ORDER, "    ", self_closing=False)
        return "    " + tag + inner + "</type>\n"

    def set_type(self, type_id, attrs, inner):
        t = self.type_by_id(type_id)
        if t is None:
            raise ModelError("Type %d is not in %s" % (type_id, self.filename))
        e = t["element"]
        if inner is None:
            inner = t["inner"]
        if attrs == t["attrs"] and inner == t["inner"]:
            return
        if inner == t["inner"] and not e.self_closing:
            # Only the start tag changes
            indent = self._indent_of(e.start)
            new_tag = build_start_tag("type", attrs, TYPE_ATTR_ORDER, indent)
            self._replace(e.start, e.start_tag_end, new_tag)
        else:
            s, end = line_span(self.text, e.start, e.end)
            self._replace(s, end, self.type_block(attrs, inner or DEFAULT_TYPE_INNER))

    def _indent_of(self, pos):
        s = self.text.rfind("\n", 0, pos) + 1
        ws = self.text[s:pos]
        return ws if ws.strip() == "" else "    "

    def add_type(self, attrs, inner):
        """Add a type in id order."""
        if self.root.self_closing:
            raise ModelError("%s has no body (it uses the events of %s)" % (self.filename, self.events))
        new_id = int(attrs["id"])
        block = self.type_block(attrs, inner if inner else DEFAULT_TYPE_INNER)
        after = None
        for t in self.types:
            if int(t["attrs"]["id"]) < new_id:
                after = t
        if after is not None:
            _, pos = line_span(self.text, after["element"].start, after["element"].end)
            block = "\n" + block
        else:
            first = self.types[0] if self.types else None
            if first is not None:
                pos, _ = line_span(self.text, first["element"].start, first["element"].end)
                block = block + "\n"
            else:
                # Empty class: put it before </class>
                end_tag = self.text.rfind("</class>")
                pos = self.text.rfind("\n", 0, end_tag) + 1
                block = block + "\n"
                if not self.text[:pos].endswith("\n\n"):
                    block = "\n" + block
        self._replace(pos, pos, block)

    def delete_type(self, type_id):
        t = self.type_by_id(type_id)
        if t is None:
            raise ModelError("Type %d is not in %s" % (type_id, self.filename))
        e = t["element"]
        s, end = line_span(self.text, e.start, e.end)
        # Remove one blank line that separated it from the next type
        rest = self.text[end:]
        m = re.match(r"[ \t]*\n", rest)
        if m and s > 0 and self.text[s - 2 : s] == "\n\n":
            end += m.end()
        self._replace(s, end, "")

    def save(self):
        atomic_write(self.path, self.text)


def check_xml(text, filename):
    try:
        ET.fromstring(text.encode("utf-8"))
    except ET.ParseError as ex:
        raise ModelError("%s would not be valid XML: %s" % (filename, ex))


# ---------------------------------------------------------------------------
# All classes
# ---------------------------------------------------------------------------


class Repository:
    def __init__(self, classes_dir):
        self.dir = os.path.abspath(classes_dir)

    # --- paths ---

    def path(self, name):
        if "/" in name or "\\" in name or name.startswith("."):
            raise ModelError("Bad file name %r" % name)
        return os.path.join(self.dir, name)

    def class_md(self, class_id):
        return self.path("%d.md" % class_id)

    def type_md(self, class_id, type_id):
        return self.path("%d.%d.md" % (class_id, type_id))

    # --- list_class.xml ---

    def list_text(self):
        return read_text(self.path(LIST_FILE))

    def list_items(self):
        root = ET.fromstring(self.list_text().encode("utf-8"))
        return [item.attrib["name"] for item in root.iter("item")]

    def class_files(self):
        return sorted(
            f for f in os.listdir(self.dir) if re.match(r"^class_\d+[._].*\.xml$", f)
        )

    def load(self, filename):
        p = self.path(filename)
        if not os.path.isfile(p):
            raise ModelError("No class file %s" % filename)
        return ClassFile(p)

    def find_class(self, class_id):
        for f in self.class_files():
            if re.match(r"^class_%d[._]" % class_id, f):
                cf = self.load(f)
                if cf.id == class_id:
                    return cf
        raise ModelError("No class with id %d" % class_id)

    # --- reading ---

    def summary(self):
        """All classes in publishing order, followed by files not in the list."""
        listed = self.list_items()
        files = self.class_files()
        names = [n for n in listed if n in files] + [f for f in files if f not in listed]
        out = []
        for name in names:
            try:
                cf = self.load(name)
            except ModelError as ex:
                out.append({"file": name, "error": str(ex)})
                continue
            out.append(
                {
                    "file": name,
                    "id": cf.id,
                    "name": cf.attrs.get("name", ""),
                    "token": cf.attrs.get("token", ""),
                    "events": cf.events,
                    "types": len(cf.types),
                    "listed": name in listed,
                }
            )
        return out

    def users_of(self, filename):
        """Classes that use the events of this class file."""
        users = []
        for f in self.class_files():
            if f == filename:
                continue
            try:
                cf = self.load(f)
            except ModelError:
                continue
            if cf.events == filename:
                users.append({"file": f, "id": cf.id, "token": cf.attrs.get("token", "")})
        return users

    def read_md(self, path):
        return read_text(path) if os.path.isfile(path) else None

    def class_detail(self, class_id):
        cf = self.find_class(class_id)
        detail = {
            "file": cf.filename,
            "attrs": cf.attrs,
            "description": self.read_md(self.class_md(class_id)),
            "users": self.users_of(cf.filename),
            "listed": cf.filename in self.list_items(),
        }
        source = cf
        if cf.events:
            source = self.load(cf.events)
            detail["events_class"] = {"file": source.filename, "id": source.id, "token": source.attrs.get("token", "")}
        detail["types"] = [
            {
                "attrs": t["attrs"],
                "has_md": os.path.isfile(self.type_md(source.id, int(t["attrs"]["id"]))),
            }
            for t in source.types
        ]
        return detail

    def type_detail(self, class_id, type_id):
        cf = self.find_class(class_id)
        if cf.events:
            raise ModelError("Class %d uses the events of %s; edit them there" % (class_id, cf.events))
        t = cf.type_by_id(type_id)
        if t is None:
            raise ModelError("Class %d has no type %d" % (class_id, type_id))
        return {
            "attrs": t["attrs"],
            "inner": t["inner"],
            "description": self.read_md(self.type_md(class_id, type_id)),
        }

    # --- validation helpers ---

    def _type_attrs(self, cf, data, type_id):
        max_type = 255 if cf.id <= LEVEL1_MAX_CLASS else 65535
        attrs = {}
        attrs["id"] = str(to_int(type_id, "Type id", 0, max_type))
        name = (data.get("name") or "").strip()
        if not name:
            raise ModelError("The event needs a name")
        attrs["name"] = name
        attrs["token"] = (data.get("token") or "").strip()
        for key, value in (data.get("extra") or {}).items():
            key = key.strip()
            if not re.match(r"^[A-Za-z_][\w.\-]*$", key) or key in ("id", "name", "token"):
                raise ModelError("Bad attribute name %r" % key)
            if value is not None and str(value) != "":
                attrs[key] = str(value)
        return attrs

    def _check_token(self, cf, token, skip_id):
        if not token:
            return
        for t in cf.types:
            if t["attrs"].get("token") == token and int(t["attrs"]["id"]) != skip_id:
                raise ModelError("Token %s is already used by type %s" % (token, t["attrs"]["id"]))

    def _check_inner(self, inner):
        if inner is None:
            return
        try:
            ET.fromstring(("<type>" + inner + "</type>").encode("utf-8"))
        except ET.ParseError as ex:
            raise ModelError("The XML content is not valid: %s" % ex)

    def _own_class(self, class_id):
        cf = self.find_class(class_id)
        if cf.events:
            raise ModelError("Class %d uses the events of %s; edit them there" % (class_id, cf.events))
        return cf

    # --- type edits ---

    def save_type(self, class_id, type_id, data):
        """Change a type. data: id (new id), name, token, extra, inner, description."""
        cf = self._own_class(class_id)
        t = cf.type_by_id(type_id)
        if t is None:
            raise ModelError("Class %d has no type %d" % (class_id, type_id))
        new_id = int(self._type_attrs(cf, data, data.get("id", type_id))["id"])
        attrs = self._type_attrs(cf, data, new_id)
        self._check_token(cf, attrs["token"], type_id)
        inner = data.get("inner")
        self._check_inner(inner)
        old_md, new_md = self.type_md(class_id, type_id), self.type_md(class_id, new_id)
        if new_id != type_id:
            if cf.type_by_id(new_id) is not None:
                raise ModelError("Class %d already has type %d" % (class_id, new_id))
            if os.path.exists(new_md):
                raise ModelError("%s already exists" % os.path.basename(new_md))
            # Keep the file in id order: remove and add again
            inner_now = t["inner"] if inner is None else inner
            cf.delete_type(type_id)
            cf.add_type(attrs, inner_now if inner_now else DEFAULT_TYPE_INNER)
        else:
            cf.set_type(type_id, attrs, inner)
        cf.save()
        if new_id != type_id and os.path.exists(old_md):
            os.replace(old_md, new_md)
        if data.get("description") is not None:
            atomic_write(new_md, data["description"])
        return new_id

    def add_type(self, class_id, data):
        cf = self._own_class(class_id)
        attrs = self._type_attrs(cf, data, data.get("id"))
        type_id = int(attrs["id"])
        if cf.type_by_id(type_id) is not None:
            raise ModelError("Class %d already has type %d" % (class_id, type_id))
        md = self.type_md(class_id, type_id)
        if os.path.exists(md):
            raise ModelError("%s already exists (left from a deleted type?)" % os.path.basename(md))
        self._check_token(cf, attrs["token"], -1)
        inner = data.get("inner")
        self._check_inner(inner)
        cf.add_type(attrs, inner if inner else DEFAULT_TYPE_INNER)
        cf.save()
        atomic_write(md, data.get("description") or "")
        return type_id

    def copy_type(self, class_id, type_id, to_class_id, data):
        """Copy a type (with its XML content and description) to a new id in the same or another class."""
        src = self._own_class(class_id)
        t = src.type_by_id(type_id)
        if t is None:
            raise ModelError("Class %d has no type %d" % (class_id, type_id))
        merged = {
            "name": data.get("name") or t["attrs"].get("name", ""),
            "token": data.get("token") if data.get("token") is not None else t["attrs"].get("token", ""),
            "extra": {k: v for k, v in t["attrs"].items() if k not in ("id", "name", "token")},
            "id": data.get("id"),
            "inner": t["inner"] or DEFAULT_TYPE_INNER,
            "description": self.read_md(self.type_md(class_id, type_id)) or "",
        }
        return self.add_type(to_class_id, merged)

    def delete_type(self, class_id, type_id):
        cf = self._own_class(class_id)
        cf.delete_type(type_id)
        cf.save()
        md = self.type_md(class_id, type_id)
        if os.path.exists(md):
            os.unlink(md)

    # --- class edits ---

    def save_class(self, class_id, data):
        cf = self.find_class(class_id)
        attrs = dict(cf.attrs)
        for key in ("name", "token", "alternative-token"):
            if key in data:
                value = (data[key] or "").strip()
                if value:
                    attrs[key] = value
                else:
                    attrs.pop(key, None)
        if not attrs.get("name"):
            raise ModelError("The class needs a name")
        if not attrs.get("token"):
            raise ModelError("The class needs a token")
        self._check_class_token(attrs["token"], cf.filename)
        if attrs != cf.attrs:
            cf.set_class_attrs(attrs)
            cf.save()
        if data.get("description") is not None:
            atomic_write(self.class_md(class_id), data["description"])

    def _check_class_token(self, token, skip_file):
        for f in self.class_files():
            if f == skip_file:
                continue
            try:
                if self.load(f).attrs.get("token") == token:
                    raise ModelError("Token %s is already used by %s" % (token, f))
            except ModelError as ex:
                if "already used" in str(ex):
                    raise

    def new_class(self, data):
        class_id = to_int(data.get("id"), "Class id", 0, 65535)
        for f in self.class_files():
            if re.match(r"^class_%d[._]" % class_id, f):
                raise ModelError("Class %d already exists (%s)" % (class_id, f))
        name = (data.get("name") or "").strip()
        token = (data.get("token") or "").strip()
        if not name or not token:
            raise ModelError("The class needs a name and a token")
        self._check_class_token(token, None)
        suffix = (data.get("suffix") or "").strip().lower()
        if not suffix:
            suffix = token.split(".")[-1].lower()
        suffix = re.sub(r"[^a-z0-9_]+", "_", suffix).strip("_")
        if not suffix:
            raise ModelError("The file name needs a name part (letters, digits, _)")
        filename = "class_%d_%s.xml" % (class_id, suffix)
        attrs = {"id": str(class_id), "name": name, "token": token}
        alt = (data.get("alternative-token") or "").strip()
        if alt:
            attrs["alternative-token"] = alt
        events = (data.get("events") or "").strip()
        if events:
            src = self.load(events)
            if src.events:
                raise ModelError("%s itself uses the events of %s; use that class" % (events, src.events))
            attrs["events"] = events
            text = '<?xml version="1.0" encoding="utf-8"?>\n\n' + build_start_tag(
                "class", attrs, CLASS_ATTR_ORDER, "", self_closing=True
            ) + "\n\n"
        else:
            text = (
                '<?xml version="1.0" encoding="utf-8"?>\n\n'
                + build_start_tag("class", attrs, CLASS_ATTR_ORDER, "")
                + "\n\n</class>\n"
            )
        check_xml(text, filename)
        md = self.class_md(class_id)
        atomic_write(self.path(filename), text)
        if not os.path.exists(md):
            atomic_write(md, data.get("description") or "## Description\n\n")
        self._list_insert(filename, class_id)
        return class_id

    def delete_class(self, class_id):
        cf = self.find_class(class_id)
        users = self.users_of(cf.filename)
        if users:
            raise ModelError(
                "Classes %s use the events of this class; delete or change them first"
                % ", ".join(str(u["id"]) for u in users)
            )
        removed = [cf.filename]
        if not cf.events:
            for t in cf.types:
                md = self.type_md(class_id, int(t["attrs"]["id"]))
                if os.path.exists(md):
                    os.unlink(md)
                    removed.append(os.path.basename(md))
        md = self.class_md(class_id)
        if os.path.exists(md):
            os.unlink(md)
            removed.append(os.path.basename(md))
        os.unlink(cf.path)
        self._list_remove(cf.filename)
        return removed

    def _list_insert(self, filename, class_id):
        text = self.list_text()
        items = list(re.finditer(r'^([ \t]*)<item\s+name="([^"]+)"\s*/>[ \t]*\n', text, re.M))
        if any(m.group(2) == filename for m in items):
            return
        after = None
        for m in items:
            mm = re.match(r"class_(\d+)[._]", m.group(2))
            if mm and int(mm.group(1)) < class_id:
                if after is None or int(re.match(r"class_(\d+)[._]", after.group(2)).group(1)) <= int(mm.group(1)):
                    after = m
        indent = items[0].group(1) if items else "    "
        line = '%s<item name="%s" />\n' % (indent, filename)
        if after is not None:
            pos = after.end()
        elif items:
            pos = items[0].start()
        else:
            pos = text.rfind("</classlist>")
        new = text[:pos] + line + text[pos:]
        check_xml(new, LIST_FILE)
        atomic_write(self.path(LIST_FILE), new)

    def _list_remove(self, filename):
        text = self.list_text()
        new = re.sub(r'^[ \t]*<item\s+name="%s"\s*/>[ \t]*\n' % re.escape(filename), "", text, flags=re.M)
        if new != text:
            check_xml(new, LIST_FILE)
            atomic_write(self.path(LIST_FILE), new)

    # --- consistency ---

    def check(self):
        """Problems in the class files: returns a list of {level, file, message}."""
        problems = []

        def add(level, file, message):
            problems.append({"level": level, "file": file, "message": message})

        listed = self.list_items()
        files = self.class_files()
        for name in listed:
            if name not in files:
                add("error", LIST_FILE, "Lists %s, which does not exist" % name)
        for f in files:
            if f not in listed:
                add("warning", f, "Not in %s, so the scripts skip it" % LIST_FILE)
        known_md = set()
        class_ids = {}
        class_tokens = {}
        for f in files:
            try:
                cf = self.load(f)
            except (ModelError, ValueError, KeyError) as ex:
                add("error", f, str(ex))
                continue
            m = re.match(r"class_(\d+)[._]", f)
            if m and int(m.group(1)) != cf.id:
                add("error", f, "File name says class %s but id is %d" % (m.group(1), cf.id))
            if cf.id in class_ids:
                add("error", f, "Class id %d is also used by %s" % (cf.id, class_ids[cf.id]))
            class_ids[cf.id] = f
            tok = cf.attrs.get("token", "")
            if tok in class_tokens:
                add("error", f, "Class token %s is also used by %s" % (tok, class_tokens[tok]))
            class_tokens[tok] = f
            known_md.add("%d.md" % cf.id)
            if not os.path.exists(self.class_md(cf.id)):
                add("warning", f, "No class description %d.md" % cf.id)
            if cf.events:
                if cf.events not in files:
                    add("error", f, "Uses the events of %s, which does not exist" % cf.events)
                else:
                    try:
                        source_events = self.load(cf.events).events
                    except ModelError:
                        source_events = ""
                    if source_events:
                        add("error", f, "Uses the events of %s, which has no events of its own (it uses %s); "
                            "the scripts do not follow this, so the class gets no events. Use events=\"%s\""
                            % (cf.events, source_events, source_events))
                if cf.types:
                    add("warning", f, "Has events=%s and also its own types (they are ignored)" % cf.events)
                continue
            seen_ids, seen_tokens = {}, {}
            for t in cf.types:
                tid = t["attrs"].get("id")
                try:
                    tid_i = int(tid)
                except (TypeError, ValueError):
                    add("error", f, "Type with bad id %r" % tid)
                    continue
                if tid_i in seen_ids:
                    add("error", f, "Type id %d is used twice" % tid_i)
                seen_ids[tid_i] = True
                tok = t["attrs"].get("token", "")
                if tok and tok in seen_tokens:
                    add("warning", f, "Type token %s is used by types %s and %d" % (tok, seen_tokens[tok], tid_i))
                seen_tokens[tok] = tid_i
                known_md.add("%d.%d.md" % (cf.id, tid_i))
                if not os.path.exists(self.type_md(cf.id, tid_i)):
                    add("warning", f, "Type %d has no description %d.%d.md" % (tid_i, cf.id, tid_i))
        for md in sorted(os.listdir(self.dir)):
            if re.match(r"^\d+(\.\d+)?\.md$", md) and md not in known_md:
                add("warning", md, "Description without a class or type")
        return problems
