#!/bin/sh

# This script generates and uplodas generated files from
# VSCP definitions. Arguments are
# ftpserver username password
# and a folder "events" is expected to be available on the
# root public_html folder of this server.
# Usage cmd host user password

# Version timestamps
python3 make_timestamp.py
echo "uploading timestamps"
md5sum /tmp/version.json >/tmp/version.json.md5
md5sum /tmp/version.jsonp >/tmp/version.jsonp.md5
curl -T /tmp/version.json ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/version.json.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/version.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/version.jsonp.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/version.json
rm /tmp/version.json.md5
rm /tmp/version.jsonp
rm /tmp/version.jsonp.md5

# Generate class definition header for C/C++
python3 make_c_class_header.py >/tmp/vscp_class.h
cp /tmp/vscp_class.h ../../vscp/src/vscp/common/
cp /tmp/vscp_class.h ../../vscp-firmware/common/
md5sum /tmp/vscp_class.h >/tmp/vscp_class.h.md5
echo "uploading vscp_class.h"
curl -T /tmp/vscp_class.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_class.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_class.h
rm /tmp/vscp_class.h.md5

# Generate type definition header for C/C++
python3 make_c_type_header.py >/tmp/vscp_type.h
cp /tmp/vscp_type.h ../../vscp/src/vscp/common/
cp /tmp/vscp_type.h ../../vscp-firmware/common/
md5sum /tmp/vscp_type.h >/tmp/vscp_type.h.md5
echo "uploading vscp_type.h"
curl -T /tmp/vscp_type.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_type.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_type.h
rm /tmp/vscp_type.h.md5

# Generate hash class data for vscphelper
python3 make_vscphelper_hashclass.py >/tmp/vscp_hashclass.h
cp /tmp/vscp_hashclass.h ../../vscp/src/vscp/common/
md5sum /tmp/vscp_hashclass.h >/tmp/vscp_hashclass.h.md5
echo "uploading vscp_hashclass.h"
curl -T /tmp/vscp_hashclass.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_hashclass.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_hashclass.h
rm /tmp/vscp_hashclass.h.md5

# Generate hash type data for vscphelper
python3 make_vscphelper_hashtype.py >/tmp/vscp_hashtype.h
cp /tmp/vscp_hashtype.h ../../vscp/src/vscp/common/
md5sum /tmp/vscp_hashtype.h >/tmp/vscp_hashtype.h.md5
echo "uploading vscp_hashtype.h"
curl -T /tmp/vscp_hashtype.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_hashtype.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_hashtype.h
rm /tmp/vscp_hashtype.h.md5

# Generate class definition header for python3
python3 make_python_class_header.py >/tmp/vscp_class.py
cp /tmp/vscp_class.py ../../pyvscp/vscp/
md5sum /tmp/vscp_class.py >/tmp/vscp_class.py.md5
echo "uploading vscp_class.py"
curl -T /tmp/vscp_class.py ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_class.py.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_class.py
rm /tmp/vscp_class.py.md5

# Generate class definition header for python3
python3 make_python_type_header.py >/tmp/vscp_type.py
cp /tmp/vscp_type.py ../../pyvscp/vscp/
md5sum /tmp/vscp_type.py >/tmp/vscp_type.py.md5
echo "uploading vscp_type.py"
curl -T /tmp/vscp_type.py ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_type.py.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_type.py
rm /tmp/vscp_type.py.md5

# Generate and upload JSON
python3 make_json.py >/tmp/vscp_events.json
md5sum /tmp/vscp_events.json >/tmp/vscp_events.json.md5
echo "uploading vscp_events.json"
curl -T /tmp/vscp_events.json ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_events.json.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_events.json
rm /tmp/vscp_events.json.md5

# Generate and upload JSONP
python3 make_json.py jsonp >/tmp/vscp_events.jsonp
md5sum /tmp/vscp_events.jsonp >/tmp/vscp_events.jsonp.md5
echo "uploading vscp_events.jsonp"
curl -T /tmp/vscp_events.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_events.jsonp.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_events.jsonp
rm /tmp/vscp_events.jsonp.md5

# Generate and upload XML
python3 make_xml.py jsonp >/tmp/vscp_events.xml
md5sum /tmp/vscp_events.xml >/tmp/vscp_events.xml.md5
echo "uploading vscp_events.xml"
curl -T /tmp/vscp_events.xml ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_events.xml.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_events.xml
rm /tmp/vscp_events.xml.md5

# Generate and upload SQL
python3 make_sqlite_db.py jsonp >/tmp/vscp_events.sql
md5sum /tmp/vscp_events.sql >/tmp/vscp_events.sql.md5
echo "Building vscp_data.sqlite3"
sqlite3 /tmp/vscp_events.sqlite3 < /tmp/vscp_events.sql
cp /tmp/vscp_events.sqlite3 ../../vscp/database
md5sum /tmp/vscp_events.sqlite3 >/tmp/vscp_events.sqlite3.md5
echo "uploading vscp_events.sql and vscp_events.sqlite3"
curl -T /tmp/vscp_events.sql ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_events.sql.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_events.sqlite3 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_events.sqlite3.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_events.sql
rm /tmp/vscp_events.sql.md5
rm /tmp/vscp_events.sqlite3
rm /tmp/vscp_events.sqlite3.md5

# Generate and upload js class constants
python3 make_js_class_constants.py jsonp >/tmp/vscp_class.js
md5sum /tmp/vscp_class.js >/tmp/vscp_class.js.md5
cp /tmp/vscp_class.js ../../node-vscp-class/
cp /tmp/vscp_class.js ../../vscp-js/src
echo "uploading vscp_class.js"
curl -T /tmp/vscp_class.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_class.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_class.js
rm /tmp/vscp_class.js.md5

# Generate and upload node.js class constants
python3 make_nodejs_class_constants.py jsonp >/tmp/node_vscp_class.js
md5sum /tmp/node_vscp_class.js >/tmp/node_vscp_class.js.md5
cp /tmp/node_vscp_class.js ../../node-vscp-class/vscp_class.js
echo "uploading node_vscp_class.js"
curl -T /tmp/node_vscp_class.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/node_vscp_class.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/node_vscp_class.js
rm /tmp/node_vscp_class.js.md5

# Generate and upload js type constants
python3 make_js_type_constants.py jsonp >/tmp/vscp_type.js
md5sum /tmp/vscp_type.js >/tmp/vscp_type.js.md5
cp /tmp/vscp_type.js ../../node-vscp-type/
cp /tmp/vscp_type.js ../../vscp-js/src
echo "uploading vscp_type.js"
curl -T /tmp/vscp_type.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_type.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_type.js
rm /tmp/vscp_type.js.md5

# Generate and upload node.js type constants
python3 make_nodejs_type_constants.py jsonp >/tmp/node_vscp_type.js
md5sum /tmp/node_vscp_type.js >/tmp/node_vscp_type.js.md5
cp /tmp/node_vscp_type.js ../../node-vscp-type/vscp_type.js
echo "uploading node_vscp_type.js"
curl -T /tmp/node_vscp_type.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/node_vscp_type.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/node_vscp_type.js
rm /tmp/node_vscp_type.js.md5

# Generate and upload documentation
mkdir -p /tmp/vscp-events
python3 make_docs_sidebar.py >/tmp/vscp-events/sidebar.md
cp /tmp/vscp-events/sidebar.md ../../vscp-doc-spec/_generated_sidebar.md
cat ../../vscp-doc-spec/_main_sidebar.md ../../vscp-doc-spec/_generated_sidebar.md >../../vscp-doc-spec/_sidebar.md
python3 make_docs.py -o /tmp/vscp-events
tar -czf /tmp/vscp_docs.tgz -C /tmp/vscp-events/ .
md5sum /tmp/vscp_docs.tgz >/tmp/vscp_docs.tgz.md5
curl -T /tmp/vscp_docs.tgz ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
curl -T /tmp/vscp_docs.tgz.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
rm /tmp/vscp_docs.tgz
rm /tmp/vscp_docs.tgz.md5
zip -rj /tmp/vscp_docs.zip /tmp/vscp-events/
md5sum /tmp/vscp_docs.zip >/tmp/vscp_docs.zip.md5
curl -T /tmp/vscp_docs.zip ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
curl -T /tmp/vscp_docs.zip.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
rm /tmp/vscp_docs.zip
rm /tmp/vscp_docs.zip.md5
for f in /tmp/vscp-events/*.md; do
    echo "uploading " $f
    cp $f ../../vscp-doc-spec/
    curl -T $f ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
done

rm -rf /tmp/vscp-events

echo The following projects needs to be updated to GitHub
echo "Update ../../vscp-js"
echo "Update ../../node-vscp-class"
echo "Update ../../node-vscp-type"
echo "Update ../../pyvscp"
echo "Update ../../vscp-doc-spec (sidebar.md -> /SUMMARY.md/)"
