#!/usr/bin/env python3
"""
VSCP class editor: a local web application for editing the VSCP class and
event (type) definitions in ../classes and running the scripts in ../script.

    python3 editor/app.py [--port 8100] [--host 127.0.0.1] [--no-browser]

Only the Python standard library is used. The server listens on 127.0.0.1 by
default; it edits files and runs scripts, so do not expose it to a network.
"""

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import threading
import time
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CLASSES_DIR = os.path.join(ROOT, "classes")
SCRIPT_DIR = os.path.join(ROOT, "script")
GENERATED_DIR = os.path.join(ROOT, "generated")
STATIC_DIR = os.path.join(HERE, "static")

sys.path.insert(0, HERE)
from model import ModelError, Repository  # noqa: E402

repo = Repository(CLASSES_DIR)
write_lock = threading.Lock()  # One edit or script run at a time

# ---------------------------------------------------------------------------
# Scripts
# ---------------------------------------------------------------------------

# How dowork.sh runs each generator: arguments and the file in ../generated
# that gets the output (None: the script writes its own files).
PRESETS = [
    {"id": "timestamp", "script": "make_timestamp.py", "args": [], "output": None,
     "title": "Version timestamps", "writes": "generated/version.json, version.jsonp"},
    {"id": "c_class", "script": "make_c_class_header.py", "args": [], "output": "vscp-class.h",
     "title": "C class header"},
    {"id": "c_type", "script": "make_c_type_header.py", "args": [], "output": "vscp-type.h",
     "title": "C type header"},
    {"id": "hashclass", "script": "make_vscphelper_hashclass.py", "args": [], "output": "vscp-hashclass.h",
     "title": "vscphelper class hash"},
    {"id": "hashtype", "script": "make_vscphelper_hashtype.py", "args": [], "output": "vscp-hashtype.h",
     "title": "vscphelper type hash"},
    {"id": "units_h", "script": "make_vscphelper_units.py", "args": [], "output": "vscp-units.h",
     "title": "vscphelper unit table (C)"},
    {"id": "units_json", "script": "make_vscphelper_units.py", "args": ["json"], "output": "vscp-units.json",
     "title": "Unit expressions (JSON)"},
    {"id": "py_class", "script": "make_python_class_header.py", "args": [], "output": "vscp-class.py",
     "title": "Python class constants"},
    {"id": "py_type", "script": "make_python_type_header.py", "args": [], "output": "vscp-type.py",
     "title": "Python type constants"},
    {"id": "json", "script": "make_json.py", "args": [], "output": "vscp-hashtypeevents.json",
     "title": "JSON"},
    {"id": "jsonp", "script": "make_json.py", "args": ["jsonp"], "output": "vscp-hashtypeevents.jsonp",
     "title": "JSONP"},
    {"id": "xml", "script": "make_xml.py", "args": ["jsonp"], "output": "vscp-hashtypeevents.xml",
     "title": "XML"},
    {"id": "js_class", "script": "make_js_class_constants.py", "args": ["jsonp"], "output": "vscp-class.js",
     "title": "JavaScript class constants"},
    {"id": "node_class", "script": "make_nodejs_class_constants.py", "args": ["jsonp"],
     "output": "node_vscp-class.js", "title": "Node.js class constants"},
    {"id": "js_type", "script": "make_js_type_constants.py", "args": ["jsonp"], "output": "vscp-type.js",
     "title": "JavaScript type constants"},
    {"id": "node_type", "script": "make_nodejs_type_constants.py", "args": ["jsonp"],
     "output": "node_vscp-type.js", "title": "Node.js type constants"},
    {"id": "sidebar", "script": "make_docs_sidebar.py", "args": [], "output": "vscp-events/sidebar.md",
     "title": "Documentation sidebar"},
    {"id": "docs", "script": "make_docs.py", "args": ["-o", "../generated/vscp-events"], "output": None,
     "title": "Documentation", "writes": "generated/vscp-events/*.md"},
    {"id": "sql", "script": "make_sqlite_db.py", "args": ["jsonp"], "output": "vscp-hashtypeevents.sql",
     "title": "SQL (and SQLite database)", "sqlite": "vscp-hashtypeevents.sqlite3"},
]

MAX_SHOWN_OUTPUT = 200_000
SCRIPT_TIMEOUT = 900


def list_scripts():
    files = sorted(f for f in os.listdir(SCRIPT_DIR) if f.endswith((".py", ".sh")))
    presets = []
    for p in PRESETS:
        if p["script"] in files:
            q = dict(p)
            q["writes"] = p.get("writes") or "generated/" + p["output"]
            if p.get("sqlite"):
                q["writes"] += ", generated/" + p["sqlite"]
            presets.append(q)
    return {"scripts": files, "presets": presets, "have_sqlite3": shutil.which("sqlite3") is not None}


def clip(text):
    if len(text) <= MAX_SHOWN_OUTPUT:
        return text
    return text[:MAX_SHOWN_OUTPUT] + "\n... (%d more characters not shown)" % (len(text) - MAX_SHOWN_OUTPUT)


def run_process(cmd, secrets=()):
    start = time.time()
    try:
        proc = subprocess.run(
            cmd, cwd=SCRIPT_DIR, capture_output=True, text=True, timeout=SCRIPT_TIMEOUT,
            stdin=subprocess.DEVNULL,
        )
        out, err, code = proc.stdout, proc.stderr, proc.returncode
    except subprocess.TimeoutExpired as ex:
        out = ex.stdout or ""
        err = (ex.stderr or "") + "\nStopped after %d s" % SCRIPT_TIMEOUT
        out, err, code = (out.decode() if isinstance(out, bytes) else out), err, -1
    shown = " ".join(cmd)
    for s in secrets:
        if s:
            out, err, shown = out.replace(s, "***"), err.replace(s, "***"), shown.replace(s, "***")
    return {"command": shown, "returncode": code, "stdout": out, "stderr": err,
            "seconds": round(time.time() - start, 2)}


def run_preset(preset_id):
    p = next((x for x in PRESETS if x["id"] == preset_id), None)
    if p is None:
        raise ModelError("Unknown preset %r" % preset_id)
    os.makedirs(GENERATED_DIR, exist_ok=True)
    if p["id"] == "docs":
        os.makedirs(os.path.join(GENERATED_DIR, "vscp-events"), exist_ok=True)
    result = run_process([sys.executable, p["script"]] + p["args"])
    result["title"] = p["title"]
    if p["output"] and result["returncode"] == 0:
        target = os.path.join(GENERATED_DIR, p["output"])
        os.makedirs(os.path.dirname(target), exist_ok=True)
        with open(target, "w", encoding="utf-8", newline="") as f:
            f.write(result["stdout"])
        result["saved"] = "generated/" + p["output"]
        result["stdout"] = "(%d characters written to %s)" % (len(result["stdout"]), result["saved"])
        if p.get("sqlite") and shutil.which("sqlite3"):
            db = os.path.join(GENERATED_DIR, p["sqlite"])
            if os.path.exists(db):
                os.unlink(db)
            with open(target, "r", encoding="utf-8") as sql:
                proc = subprocess.run(["sqlite3", db], stdin=sql, capture_output=True, text=True,
                                      timeout=SCRIPT_TIMEOUT)
            result["stderr"] += proc.stderr
            if proc.returncode == 0:
                result["saved"] += ", generated/" + p["sqlite"]
            else:
                result["returncode"] = proc.returncode
    result["stdout"] = clip(result["stdout"])
    result["stderr"] = clip(result["stderr"])
    return result


def run_script(name, args):
    if name not in list_scripts()["scripts"]:
        raise ModelError("No script %r" % name)
    if not isinstance(args, list) or not all(isinstance(a, str) for a in args):
        raise ModelError("Arguments must be a list of strings")
    secrets = []
    if name.endswith(".sh"):
        cmd = ["sh", name] + args
        if name == "dowork.sh" and len(args) >= 3:
            secrets.append(args[2])  # FTP password
    else:
        cmd = [sys.executable, name] + args
    result = run_process(cmd, secrets)
    result["stdout"] = clip(result["stdout"])
    result["stderr"] = clip(result["stderr"])
    return result


def git_status():
    try:
        proc = subprocess.run(["git", "status", "--porcelain", "--", "classes"], cwd=ROOT,
                              capture_output=True, text=True, timeout=30)
    except (OSError, subprocess.TimeoutExpired):
        return {"available": False, "files": []}
    if proc.returncode != 0:
        return {"available": False, "files": []}
    files = [{"status": line[:2].strip(), "path": line[3:]} for line in proc.stdout.splitlines() if line]
    return {"available": True, "files": files}


def git_diff(path):
    if not re.match(r"^classes/[\w.\-]+$", path):
        raise ModelError("Bad path")
    proc = subprocess.run(["git", "diff", "--", path], cwd=ROOT, capture_output=True, text=True, timeout=30)
    text = proc.stdout
    if not text and os.path.exists(os.path.join(ROOT, path)):
        # Untracked: show the whole file
        with open(os.path.join(ROOT, path), encoding="utf-8") as f:
            text = "".join("+" + line for line in f)
    return clip(text)


# ---------------------------------------------------------------------------
# HTTP
# ---------------------------------------------------------------------------

ROUTES = []


def route(method, pattern):
    def wrap(fn):
        ROUTES.append((method, re.compile("^" + pattern + "$"), fn))
        return fn
    return wrap


@route("GET", r"/api/classes")
def api_classes(body):
    return repo.summary()


@route("POST", r"/api/classes")
def api_new_class(body):
    return {"id": repo.new_class(body)}


@route("GET", r"/api/classes/(\d+)")
def api_class(body, cid):
    return repo.class_detail(int(cid))


@route("PUT", r"/api/classes/(\d+)")
def api_save_class(body, cid):
    repo.save_class(int(cid), body)
    return repo.class_detail(int(cid))


@route("DELETE", r"/api/classes/(\d+)")
def api_delete_class(body, cid):
    return {"removed": repo.delete_class(int(cid))}


@route("POST", r"/api/classes/(\d+)/types")
def api_add_type(body, cid):
    return {"id": repo.add_type(int(cid), body)}


@route("GET", r"/api/classes/(\d+)/types/(\d+)")
def api_type(body, cid, tid):
    return repo.type_detail(int(cid), int(tid))


@route("PUT", r"/api/classes/(\d+)/types/(\d+)")
def api_save_type(body, cid, tid):
    return {"id": repo.save_type(int(cid), int(tid), body)}


@route("DELETE", r"/api/classes/(\d+)/types/(\d+)")
def api_delete_type(body, cid, tid):
    repo.delete_type(int(cid), int(tid))
    return {}


@route("POST", r"/api/classes/(\d+)/types/(\d+)/copy")
def api_copy_type(body, cid, tid):
    to_class = int(body.get("to_class", cid))
    return {"class": to_class, "id": repo.copy_type(int(cid), int(tid), to_class, body)}


@route("GET", r"/api/check")
def api_check(body):
    return repo.check()


@route("GET", r"/api/scripts")
def api_scripts(body):
    return list_scripts()


@route("POST", r"/api/scripts/preset")
def api_run_preset(body):
    return run_preset(body.get("id"))


@route("POST", r"/api/scripts/run")
def api_run_script(body):
    return run_script(body.get("script"), body.get("args") or [])


@route("GET", r"/api/git")
def api_git(body):
    return git_status()


@route("POST", r"/api/git/diff")
def api_git_diff(body):
    return {"diff": git_diff(body.get("path", ""))}


STATIC_TYPES = {".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
                ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml"}


class Handler(BaseHTTPRequestHandler):
    server_version = "VSCPClassEditor/1.0"
    allowed_hosts = set()

    def log_message(self, fmt, *args):
        if os.environ.get("VSCP_EDITOR_LOG"):
            super().log_message(fmt, *args)

    def send(self, code, payload, ctype="application/json; charset=utf-8"):
        data = payload if isinstance(payload, bytes) else json.dumps(payload).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        self.wfile.write(data)

    def guard(self):
        # Refuse other host names (DNS rebinding) and cross-site writes: a
        # write must be JSON with the editor's header, which a foreign page
        # can not send without a CORS preflight that this server never allows.
        host = (self.headers.get("Host") or "").lower()
        if host not in self.allowed_hosts:
            self.send(403, {"error": "Unknown host %s" % host})
            return False
        if self.command != "GET":
            if self.headers.get("X-VSCP-Editor") != "1" or \
                    not (self.headers.get("Content-Type") or "").startswith("application/json"):
                self.send(403, {"error": "Refused"})
                return False
        return True

    def handle_any(self):
        if not self.guard():
            return
        path = urlparse(self.path).path
        if not path.startswith("/api/"):
            return self.static(path)
        body = {}
        length = int(self.headers.get("Content-Length") or 0)
        if length:
            try:
                body = json.loads(self.rfile.read(length).decode("utf-8"))
            except (ValueError, UnicodeDecodeError):
                return self.send(400, {"error": "Bad JSON"})
            if not isinstance(body, dict):
                return self.send(400, {"error": "Bad JSON"})
        for method, pattern, fn in ROUTES:
            m = pattern.match(path)
            if m and method == self.command:
                try:
                    if method == "GET":
                        result = fn(body, *m.groups())
                    else:
                        with write_lock:
                            result = fn(body, *m.groups())
                    return self.send(200, result)
                except ModelError as ex:
                    return self.send(400, {"error": str(ex)})
                except Exception as ex:  # Shown to the (local) user
                    return self.send(500, {"error": "%s: %s" % (type(ex).__name__, ex)})
        self.send(404, {"error": "Not found"})

    def static(self, path):
        if self.command != "GET":
            return self.send(405, {"error": "Method not allowed"})
        name = "index.html" if path in ("/", "") else path.lstrip("/")
        if not re.match(r"^[\w\-]+\.(html|js|css|svg)$", name):
            return self.send(404, {"error": "Not found"})
        file = os.path.join(STATIC_DIR, name)
        if not os.path.isfile(file):
            return self.send(404, {"error": "Not found"})
        with open(file, "rb") as f:
            self.send(200, f.read(), STATIC_TYPES[os.path.splitext(name)[1]])

    do_GET = do_POST = do_PUT = do_DELETE = handle_any


def main():
    ap = argparse.ArgumentParser(description="Edit the VSCP class definitions in a browser")
    ap.add_argument("--host", default="127.0.0.1", help="address to listen on (default 127.0.0.1)")
    ap.add_argument("--port", type=int, default=8100, help="port (default 8100)")
    ap.add_argument("--no-browser", action="store_true", help="do not open a browser")
    a = ap.parse_args()
    hosts = {a.host, "localhost", "127.0.0.1", "[::1]"}
    Handler.allowed_hosts = {"%s:%d" % (h, a.port) for h in hosts}
    server = ThreadingHTTPServer((a.host, a.port), Handler)
    url = "http://%s:%d/" % ("localhost" if a.host in ("127.0.0.1", "0.0.0.0") else a.host, a.port)
    print("VSCP class editor: %s  (classes in %s; Ctrl+C to stop)" % (url, CLASSES_DIR))
    if not a.no_browser:
        threading.Timer(0.5, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
