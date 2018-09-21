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
curl -T /tmp/version.json ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/version.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/version.json
rm /tmp/version.jsonp

# Generate class definition header for C/C++
python3 make_c_class_header.py >/tmp/vscp_class.h
cp /tmp/vscp_class.h ../../vscp/src/vscp/common/
cp /tmp/vscp_class.h ../../vscp-firmware/common/
echo "uploading vscp_class.h"
curl -T /tmp/vscp_class.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_class.h

# Generate type definition header for C/C++
python3 make_c_type_header.py >/tmp/vscp_type.h
cp /tmp/vscp_type.h ../../vscp/src/vscp/common/
cp /tmp/vscp_type.h ../../vscp-firmware/common/
echo "uploading vscp_type.h"
curl -T /tmp/vscp_type.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_type.h

# Generate hash class data for vscphelper
python3 make_vscphelper_hashclass.py >/tmp/vscp_hashclass.h
cp /tmp/vscp_hashclass.h ../../vscp/src/vscp/common/
echo "uploading vscp_hashclass.h"
curl -T /tmp/vscp_hashclass.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_hashclass.h

# Generate hash type data for vscphelper
python3 make_vscphelper_hashtype.py >/tmp/vscp_hashtype.h
cp /tmp/vscp_hashtype.h ../../vscp/src/vscp/common/
echo "uploading vscp_hashtype.h"
curl -T /tmp/vscp_hashtype.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_hashtype.h

# Generate class definition header for python3
python3 make_python_class_header.py >/tmp/vscp_class.py
cp /tmp/vscp_class.py ../../pyvscp/vscp/
echo "uploading vscp_class.py"
curl -T /tmp/vscp_class.py ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_class.py

# Generate class definition header for python3
python3 make_python_type_header.py >/tmp/vscp_type.py
cp /tmp/vscp_type.py ../../pyvscp/vscp/
echo "uploading vscp_type.py"
curl -T /tmp/vscp_type.py ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_type.py

# Generate and upload JSON
python3 make_json.py >/tmp/vscp_events.json
echo "uploading vscp_events.json"
curl -T /tmp/vscp_events.json ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_events.json

# Generate and upload JSONP
python3 make_json.py jsonp >/tmp/vscp_events.jsonp
echo "uploading vscp_events.jsonp"
curl -T /tmp/vscp_events.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_events.jsonp

# Generate and upload XML 
python3 make_xml.py jsonp >/tmp/vscp_events.xml
echo "uploading vscp_events.xml"
curl -T /tmp/vscp_events.xml ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_events.xml

# Generate and upload SQL
python3 make_sqlite_db.py jsonp >/tmp/vscp_events.sql
echo "Building vscp_data.sqlite3"
sqlite3 /tmp/vscp_events.sqlite3 < /tmp/vscp_events.sql
cp /tmp/vscp_events.sqlite3 ../../vscp/database
echo "uploading vscp_events.sql"
curl -T /tmp/vscp_events.sql ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/vscp_events.sqlite3 ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_events.sql
rm /tmp/vscp_events.sqlite3

# Generate and upload js class constants
python3 make_js_class_constants.py jsonp >/tmp/vscp_class.js
echo "uploading vscp_class.js"
curl -T /tmp/vscp_class.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_class.js

# Generate and upload js type constants
python3 make_js_type_constants.py jsonp >/tmp/vscp_type.js
echo "uploading vscp_type.js"
curl -T /tmp/vscp_type.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
rm /tmp/vscp_type.js

# Generate and upload documentation
mkdir -p /tmp/vscp-events
python3 make_docs_sidebar.py >/tmp/vscp-events/sidebar.md
cp /tmp/vscp-events/sidebar.md ../../vscp-doc-spec/
python3 make_docs.py -o /tmp/vscp-events
tar -czf /tmp/vscp_docs.tgz -C /tmp/vscp-events/ .
curl -T /tmp/vscp_docs.tgz ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
rm /tmp/vscp_docs.tgz
zip -rj /tmp/vscp_docs.zip /tmp/vscp-events/
curl -T /tmp/vscp_docs.zip ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
rm /tmp/vscp_docs.zip
for f in /tmp/vscp-events/*.md; do
    echo "uploading " $f
    cp $f ../../vscp-doc-spec/
    curl -T $f ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
done

rm -rf /tmp/vscp-events


