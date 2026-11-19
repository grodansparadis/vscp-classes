# VSCP class editor

A web application for editing the VSCP class and event definitions in [classes](../classes) and running the scripts in [script](../script).

```bash

```

It opens <http://localhost:8100/> in the browser. Only the Python 3 standard library is needed (Python 3.8 or later). Options:

| Option | |
| --- | --- |
| `--port 8100` | Port to listen on |
| `--host 127.0.0.1` | Address to listen on. The editor changes files and runs scripts: keep it on 127.0.0.1 |
| `--no-browser` | Do not open a browser |

The Markdown preview loads [marked](https://marked.js.org/) from a CDN; without network the description is shown as plain text.

## The files

| File | What |
| --- | --- |
| `classes/list_class.xml` | The classes in publishing order. The scripts only read the classes listed here |
| `classes/class_<id>_<name>.xml` | One class (`<class id name token [alternative-token]>`) and its events (`<type id name token>`) |
| `classes/<class>.md` | The description of the class |
| `classes/<class>.<type>.md` | The description of one event |

A class with `events="class_0_protocol.xml"` (for example class 512) has no events of its own: it uses the events of that class and their `<class>.<type>.md` descriptions. The editor shows these classes with `→ 0` in the class list; their events are edited in the class they come from, and that class lists the classes that use its events.

## Classes

Select a class in the list (the filter finds id, hex id, token or name).

- **Class**: name, token, alternative token and the description (`<id>.md`, Markdown with preview). The id can not be changed; create a new class instead.
- **Delete class** removes the class file, `<id>.md`, the event descriptions and the entry in `list_class.xml`. A class whose events other classes use can not be deleted.
- **New class** creates `class_<id>_<name>.xml` and `<id>.md` and adds the class to `list_class.xml` after the class with the nearest lower id. The class can have its own events or use the events of another class.

## Events

The events of a class are listed with id (decimal and hex), name and token. `no .md` marks an event without a description.

- **Edit** (or click the row): id, name, token, other attributes (`comment`, `alternative-token`, ...), the XML content of the type (render templates, units) and the description (`<class>.<type>.md`). Changing the id moves the event to its place in the file and renames the description.
- **Add event**: the next free id is suggested. A new event gets an empty render template (`No data`) and description.
- **Copy**: to a new id in the same class or to another class, with the XML content and the description.
- **Delete**: removes the event and its description.

Type ids are 0-255 in Level I classes (0-511) and 0-65535 in Level II classes. Ids and tokens must be unique in a class.

Only the changed class start tag or event is rewritten; the rest of the file (formatting, comments, other events) is kept as it is, so the git diff shows only the change. A change that would make the file invalid XML is refused and the file is not touched. Files are written to a temporary file first and then renamed.

## Check

Lists problems in `classes/`: class files that are not in `list_class.xml` (the scripts skip them), listed files that do not exist, invalid XML, duplicate class or type ids and tokens, `events=` pointing to a missing class, events without a description and descriptions without a class or event.

## Scripts

- **Run** / **Run all generators** runs the generators like [dowork.sh](../script/dowork.sh) does (same arguments) and writes their output to `generated/`. Nothing is uploaded or copied to other projects. The SQL generator also builds the SQLite database when the `sqlite3` command is installed.
- **Run a script** runs any script in `script/` with the given arguments and shows its output without saving it.
- **dowork.sh** runs the full publish: it deletes `generated/*`, regenerates everything, uploads with FTP and copies the files into the neighbouring projects (`../vscp`, `../vscp-firmware`, `../vscp-doc-spec`, ...). It asks for the FTP host, user and password (the password is not shown in the output) and for confirmation.

Scripts run one at a time, in the `script` folder, with a 15 minute limit.

## Changes

Lists the files in `classes/` that differ from the last git commit, and shows the diff of a selected file. Commit with git as usual.

## Tests

```bash
python3 -m unittest discover -s editor
```

The tests work on a temporary copy of `classes/`.
