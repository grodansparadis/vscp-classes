#!/bin/sh

# This script generates and uplodas generated files from
# VSCP definitions. Arguments are
# ftpserver username password
# and a folder "events" is expected to be available on the
# root public_html folder of this server.
#
# Usage: ./dowork.sh host user password ["save"]

# Remove old generated data
rm -rf ../generated/*

# Version timestamps
python3 make_timestamp.py
echo "uploading timestamps"
md5sum ../generated/version.json >../generated/version.json.md5
md5sum ../generated/version.jsonp >../generated/version.jsonp.md5
curl -T ../generated/version.json ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/version.json.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/version.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/version.jsonp.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/version.json
rm ../generated/version.json.md5
rm ../generated/version.jsonp
rm ../generated/version.jsonp.md5
fi

# Generate class definition header for C/C++
python3 make_c_class_header.py >../generated/vscp_class.h
cp ../generated/vscp_class.h ../../vscp/src/vscp/common/
cp ../generated/vscp_class.h ../../vscp-firmware/common/
md5sum ../generated/vscp_class.h >../generated/vscp_class.h.md5
echo "uploading vscp_class.h"
curl -T ../generated/vscp_class.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_class.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_class.h
rm ../generated/vscp_class.h.md5
fi

# Generate type definition header for C/C++
python3 make_c_type_header.py >../generated/vscp_type.h
cp ../generated/vscp_type.h ../../vscp/src/vscp/common/
cp ../generated/vscp_type.h ../../vscp-firmware/common/
md5sum ../generated/vscp_type.h >../generated/vscp_type.h.md5
echo "uploading vscp_type.h"
curl -T ../generated/vscp_type.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_type.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_type.h
rm ../generated/vscp_type.h.md5
fi

# Generate hash class data for vscphelper
python3 make_vscphelper_hashclass.py >../generated/vscp_hashclass.h
cp ../generated/vscp_hashclass.h ../../vscp/src/vscp/common/
md5sum ../generated/vscp_hashclass.h >../generated/vscp_hashclass.h.md5
echo "uploading vscp_hashclass.h"
curl -T ../generated/vscp_hashclass.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_hashclass.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_hashclass.h
rm ../generated/vscp_hashclass.h.md5
fi

# Generate hash type data for vscphelper
python3 make_vscphelper_hashtype.py >../generated/vscp_hashtype.h
cp ../generated/vscp_hashtype.h ../../vscp/src/vscp/common/
md5sum ../generated/vscp_hashtype.h >../generated/vscp_hashtype.h.md5
echo "uploading vscp_hashtype.h"
curl -T ../generated/vscp_hashtype.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_hashtype.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_hashtype.h
rm ../generated/vscp_hashtype.h.md5
fi

# Generate class definition header for python3
python3 make_python_class_header.py >../generated/vscp_class.py
cp ../generated/vscp_class.py ../../pyvscpclasses
md5sum ../generated/vscp_class.py >../generated/vscp_class.py.md5
# Make compressed lib for classes
zip -j ../generated/python_vscp_class.zip ../generated/vscp_class.py ../generated/vscp_class.py.md5
md5sum ../generated/python_vscp_class.zip >../generated/python_vscp_class.zip.md5
echo "uploading vscp_class.py"
curl -T ../generated/vscp_class.py ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_class.py.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/python_vscp_class.zip ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/python_vscp_class.zip.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_class.py
rm ../generated/vscp_class.py.md5
rm ../generated/python_vscp_class.zip
rm ../generated/python_vscp_class.zip.md5
fi

# Generate class definition header for python3
python3 make_python_type_header.py >../generated/vscp_type.py
cp ../generated/vscp_type.py ../../pyvscptypes
md5sum ../generated/vscp_type.py >../generated/vscp_type.py.md5
# Make compressed lib for types
zip -j ../generated/python_vscp_type.zip ../generated/vscp_type.py ../generated/vscp_type.py.md5
md5sum ../generated/python_vscp_type.zip >../generated/python_vscp_type.zip.md5
echo "uploading vscp_type.py"
curl -T ../generated/vscp_type.py ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_type.py.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/python_vscp_type.zip ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/python_vscp_type.zip.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_type.py
rm ../generated/vscp_type.py.md5
rm ../generated/python_vscp_type.zip
rm ../generated/python_vscp_type.zip.md5
fi

# Generate and upload JSON
python3 make_json.py >../generated/vscp_events.json
md5sum ../generated/vscp_events.json >../generated/vscp_events.json.md5
echo "uploading vscp_events.json"
curl -T ../generated/vscp_events.json ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_events.json.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_events.json
rm ../generated/vscp_events.json.md5
fi

# Generate and upload JSONP
python3 make_json.py jsonp >../generated/vscp_events.jsonp
md5sum ../generated/vscp_events.jsonp >../generated/vscp_events.jsonp.md5
echo "uploading vscp_events.jsonp"
curl -T ../generated/vscp_events.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_events.jsonp.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_events.jsonp
rm ../generated/vscp_events.jsonp.md5
fi

# Generate and upload XML
python3 make_xml.py jsonp >../generated/vscp_events.xml
md5sum ../generated/vscp_events.xml >../generated/vscp_events.xml.md5
echo "uploading vscp_events.xml"
curl -T ../generated/vscp_events.xml ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_events.xml.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_events.xml
rm ../generated/vscp_events.xml.md5
fi

# Generate and upload js class constants
python3 make_js_class_constants.py jsonp >../generated/vscp_class.js
md5sum ../generated/vscp_class.js >../generated/vscp_class.js.md5
cp ../generated/vscp_class.js ../../node-vscp-class/
cp ../generated/vscp_class.js ../../vscp-js/src
echo "uploading vscp_class.js"
curl -T ../generated/vscp_class.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_class.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_class.js
rm ../generated/vscp_class.js.md5
fi

# Generate and upload node.js class constants
python3 make_nodejs_class_constants.py jsonp >../generated/node_vscp_class.js
md5sum ../generated/node_vscp_class.js >../generated/node_vscp_class.js.md5
cp ../generated/node_vscp_class.js ../../node-vscp-class/vscp_class.js
echo "uploading node_vscp_class.js"
curl -T ../generated/node_vscp_class.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/node_vscp_class.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/node_vscp_class.js
rm ../generated/node_vscp_class.js.md5
fi

# Generate and upload js type constants
python3 make_js_type_constants.py jsonp >../generated/vscp_type.js
md5sum ../generated/vscp_type.js >../generated/vscp_type.js.md5
cp ../generated/vscp_type.js ../../node-vscp-type/
cp ../generated/vscp_type.js ../../vscp-js/src
echo "uploading vscp_type.js"
curl -T ../generated/vscp_type.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_type.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp_type.js
rm ../generated/vscp_type.js.md5
fi

# Generate and upload node.js type constants
python3 make_nodejs_type_constants.py jsonp >../generated/node_vscp_type.js
md5sum ../generated/node_vscp_type.js >../generated/node_vscp_type.js.md5
cp ../generated/node_vscp_type.js ../../node-vscp-type/vscp_type.js
echo "uploading node_vscp_type.js"
curl -T ../generated/node_vscp_type.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/node_vscp_type.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/node_vscp_type.js
rm ../generated/node_vscp_type.js.md5
fi

# Generate and upload documentation
mkdir -p ../generated/vscp-events
python3 make_docs_sidebar.py >../generated/vscp-events/sidebar.md
cp ../generated/vscp-events/sidebar.md ../../vscp-doc-spec/_generated_sidebar.md
cat ../../vscp-doc-spec/_main_sidebar.md ../../vscp-doc-spec/_generated_sidebar.md >../../vscp-doc-spec/_sidebar.md
python3 make_docs.py -o ../generated/vscp-events
tar -czf ../generated/vscp_docs.tgz -C ../generated/vscp-events/ .
md5sum ../generated/vscp_docs.tgz >../generated/vscp_docs.tgz.md5
curl -T ../generated/vscp_docs.tgz ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
curl -T ../generated/vscp_docs.tgz.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
if [ "$4" != "save" ]
then
rm ../generated/vscp_docs.tgz
rm ../generated/vscp_docs.tgz.md5
fi
zip -rj ../generated/vscp_docs.zip ../generated/vscp-events/
md5sum ../generated/vscp_docs.zip >../generated/vscp_docs.zip.md5
curl -T ../generated/vscp_docs.zip ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
curl -T ../generated/vscp_docs.zip.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
if [ "$4" != "save" ]
then
rm ../generated/vscp_docs.zip
rm ../generated/vscp_docs.zip.md5
fi
for f in ../generated/vscp-events/*.md; do
    echo "uploading " $f
    cp $f ../../vscp-doc-spec/
    curl -T $f ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
done

# HTML
curl -T ../html/index.html ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate and upload SQL
python3 make_sqlite_db.py jsonp >../generated/vscp_events.sql
md5sum ../generated/vscp_events.sql >../generated/vscp_events.sql.md5
echo "Building vscp_data.sqlite3"
sqlite3 ../generated/vscp_events.sqlite3 < ../generated/vscp_events.sql
cp ../generated/vscp_events.sqlite3 ../../vscp/database
md5sum ../generated/vscp_events.sqlite3 >../generated/vscp_events.sqlite3.md5
echo "uploading vscp_events.sql and vscp_events.sqlite3"
curl -T ../generated/vscp_events.sql ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_events.sql.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_events.sqlite3 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp_events.sqlite3.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
cp ../generated/vscp_events.sqlite3 ~/development/VSCP/vscp/install_files/
if [ "$4" != "save" ]
then
rm ../generated/vscp_events.sql
rm ../generated/vscp_events.sql.md5
rm ../generated/vscp_events.sqlite3
rm ../generated/vscp_events.sqlite3.md5
fi

if [ "$4" != "save" ]
then
rm -rf ../generated/vscp-events
fi

echo The following projects needs to be updated to GitHub
echo "Update ../../vscp-js"
echo "Update ../../node-vscp-class"
echo "Update ../../node-vscp-type"
echo "Update ../../pyvscpclasses"
echo "Update ../../pyvscptypes"
echo "Update ../../vscp-doc-spec (copy sidebar.md -> /_sidebar.md/)"
echo "Update ../../vscp"
