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
python3 make_c_class_header.py >../generated/vscp-class.h
cp ../generated/vscp-class.h ../../vscp/src/vscp/common/
cp ../generated/vscp-class.h ../../vscp-firmware/common/
md5sum ../generated/vscp-class.h >../generated/vscp-class.h.md5
echo "uploading vscp-class.h"
curl -T ../generated/vscp-class.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-class.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-class.h
rm ../generated/vscp-class.h.md5
fi

# Generate type definition header for C/C++
python3 make_c_type_header.py >../generated/vscp-type.h
cp ../generated/vscp-type.h ../../vscp/src/vscp/common/
cp ../generated/vscp-type.h ../../vscp-firmware/common/
md5sum ../generated/vscp-type.h >../generated/vscp-type.h.md5
echo "uploading vscp-type.h"
curl -T ../generated/vscp-type.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-type.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-type.h
rm ../generated/vscp-type.h.md5
fi

# Generate hash class data for vscphelper
python3 make_vscphelper_hashclass.py >../generated/vscp-hashclass.h
cp ../generated/vscp-hashclass.h ../../vscp/src/vscp/common/
md5sum ../generated/vscp-hashclass.h >../generated/vscp-hashclass.h.md5
echo "uploading vscp-hashclass.h"
curl -T ../generated/vscp-hashclass.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-hashclass.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-hashclass.h
rm ../generated/vscp-hashclass.h.md5
fi

# Generate hash type data for vscphelper
python3 make_vscphelper_hashtype.py >../generated/vscp-hashtype.h
cp ../generated/vscp-hashtype.h ../../vscp/src/vscp/common/
md5sum ../generated/vscp-hashtype.h >../generated/vscp-hashtype.h.md5
echo "uploading vscp-hashtype.h"
curl -T ../generated/vscp-hashtype.h ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-hashtype.h.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-hashtype.h
rm ../generated/vscp-hashtype.h.md5
fi

# Generate class definition header for python3
python3 make_python_class_header.py >../generated/vscp-class.py
cp ../generated/vscp-class.py ../../pyvscpclasses
md5sum ../generated/vscp-class.py >../generated/vscp-class.py.md5
# Make compressed lib for classes
zip -j ../generated/python_vscp-class.zip ../generated/vscp-class.py ../generated/vscp-class.py.md5
md5sum ../generated/python_vscp-class.zip >../generated/python_vscp-class.zip.md5
echo "uploading vscp-class.py"
curl -T ../generated/vscp-class.py ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-class.py.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/python_vscp-class.zip ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/python_vscp-class.zip.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-class.py
rm ../generated/vscp-class.py.md5
rm ../generated/python_vscp-class.zip
rm ../generated/python_vscp-class.zip.md5
fi

# Generate class definition header for python3
python3 make_python_type_header.py >../generated/vscp-type.py
cp ../generated/vscp-type.py ../../pyvscptypes
md5sum ../generated/vscp-type.py >../generated/vscp-type.py.md5
# Make compressed lib for types
zip -j ../generated/python_vscp-type.zip ../generated/vscp-type.py ../generated/vscp-type.py.md5
md5sum ../generated/python_vscp-type.zip >../generated/python_vscp-type.zip.md5
echo "uploading vscp-type.py"
curl -T ../generated/vscp-type.py ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-type.py.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/python_vscp-type.zip ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/python_vscp-type.zip.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-type.py
rm ../generated/vscp-type.py.md5
rm ../generated/python_vscp-type.zip
rm ../generated/python_vscp-type.zip.md5
fi

# Generate and upload JSON
python3 make_json.py >../generated/vscp-hashtypeevents.json
md5sum ../generated/vscp-hashtypeevents.json >../generated/vscp-hashtypeevents.json.md5
echo "uploading vscp-hashtypeevents.json"
curl -T ../generated/vscp-hashtypeevents.json ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-hashtypeevents.json.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-hashtypeevents.json
rm ../generated/vscp-hashtypeevents.json.md5
fi

# Generate and upload JSONP
python3 make_json.py jsonp >../generated/vscp-hashtypeevents.jsonp
md5sum ../generated/vscp-hashtypeevents.jsonp >../generated/vscp-hashtypeevents.jsonp.md5
echo "uploading vscp-hashtypeevents.jsonp"
curl -T ../generated/vscp-hashtypeevents.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-hashtypeevents.jsonp.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-hashtypeevents.jsonp
rm ../generated/vscp-hashtypeevents.jsonp.md5
fi

# Generate and upload XML
python3 make_xml.py jsonp >../generated/vscp-hashtypeevents.xml
md5sum ../generated/vscp-hashtypeevents.xml >../generated/vscp-hashtypeevents.xml.md5
echo "uploading vscp-hashtypeevents.xml"
curl -T ../generated/vscp-hashtypeevents.xml ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-hashtypeevents.xml.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-hashtypeevents.xml
rm ../generated/vscp-hashtypeevents.xml.md5
fi

# Generate and upload js class constants
python3 make_js_class_constants.py jsonp >../generated/vscp-class.js
md5sum ../generated/vscp-class.js >../generated/vscp-class.js.md5
cp ../generated/vscp-class.js ../../node-vscp-class/
cp ../generated/vscp-class.js ../../vscp-js/src
echo "uploading vscp-class.js"
curl -T ../generated/vscp-class.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-class.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-class.js
rm ../generated/vscp-class.js.md5
fi

# Generate and upload node.js class constants
python3 make_nodejs_class_constants.py jsonp >../generated/node_vscp-class.js
md5sum ../generated/node_vscp-class.js >../generated/node_vscp-class.js.md5
cp ../generated/node_vscp-class.js ../../node-vscp-class/vscp-class.js
echo "uploading node_vscp-class.js"
curl -T ../generated/node_vscp-class.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/node_vscp-class.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/node_vscp-class.js
rm ../generated/node_vscp-class.js.md5
fi

# Generate and upload js type constants
python3 make_js_type_constants.py jsonp >../generated/vscp-type.js
md5sum ../generated/vscp-type.js >../generated/vscp-type.js.md5
cp ../generated/vscp-type.js ../../node-vscp-type/
cp ../generated/vscp-type.js ../../vscp-js/src
echo "uploading vscp-type.js"
curl -T ../generated/vscp-type.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-type.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/vscp-type.js
rm ../generated/vscp-type.js.md5
fi

# Generate and upload node.js type constants
python3 make_nodejs_type_constants.py jsonp >../generated/node_vscp-type.js
md5sum ../generated/node_vscp-type.js >../generated/node_vscp-type.js.md5
cp ../generated/node_vscp-type.js ../../node-vscp-type/vscp-type.js
echo "uploading node_vscp-type.js"
curl -T ../generated/node_vscp-type.js ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/node_vscp-type.js.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
if [ "$4" != "save" ]
then
rm ../generated/node_vscp-type.js
rm ../generated/node_vscp-type.js.md5
fi

# Generate and upload documentation
mkdir -p ../generated/vscp-events
python3 make_docs_sidebar.py >../generated/vscp-events/sidebar.md
cp ../generated/vscp-events/sidebar.md ../../vscp-doc-spec/_generated_sidebar.md
cat ../../vscp-doc-spec/_main_sidebar.md ../../vscp-doc-spec/_generated_sidebar.md >../../vscp-doc-spec/_sidebar.md
python3 make_docs.py -o ../generated/vscp-events
tar -czf ../generated/vscp-hashtypedocs.tgz -C ../generated/vscp-events/ .
md5sum ../generated/vscp-hashtypedocs.tgz >../generated/vscp-hashtypedocs.tgz.md5
curl -T ../generated/vscp-hashtypedocs.tgz ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
curl -T ../generated/vscp-hashtypedocs.tgz.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
if [ "$4" != "save" ]
then
rm ../generated/vscp-hashtypedocs.tgz
rm ../generated/vscp-hashtypedocs.tgz.md5
fi
zip -rj ../generated/vscp-hashtypedocs.zip ../generated/vscp-events/
md5sum ../generated/vscp-hashtypedocs.zip >../generated/vscp-hashtypedocs.zip.md5
curl -T ../generated/vscp-hashtypedocs.zip ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
curl -T ../generated/vscp-hashtypedocs.zip.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
if [ "$4" != "save" ]
then
rm ../generated/vscp-hashtypedocs.zip
rm ../generated/vscp-hashtypedocs.zip.md5
fi
for f in ../generated/vscp-events/*.md; do
    echo "uploading " $f
    cp $f ../../vscp-doc-spec/
    curl -T $f ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
done

# HTML
curl -T ../html/index.html ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate and upload SQL
python3 make_sqlite_db.py jsonp >../generated/vscp-hashtypeevents.sql
md5sum ../generated/vscp-hashtypeevents.sql >../generated/vscp-hashtypeevents.sql.md5
echo "Building vscp-hashtypedata.sqlite3"
sqlite3 ../generated/vscp-hashtypeevents.sqlite3 < ../generated/vscp-hashtypeevents.sql
cp ../generated/vscp-hashtypeevents.sqlite3 ../../vscp/database
md5sum ../generated/vscp-hashtypeevents.sqlite3 >../generated/vscp-hashtypeevents.sqlite3.md5
echo "uploading vscp-hashtypeevents.sql and vscp-hashtypeevents.sqlite3"
curl -T ../generated/vscp-hashtypeevents.sql ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-hashtypeevents.sql.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-hashtypeevents.sqlite3 ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T ../generated/vscp-hashtypeevents.sqlite3.md5 ftp://"$2:$3"@$1/vscp.org/public_html/events/
cp ../generated/vscp-hashtypeevents.sqlite3 ../../vscp/resources/database
if [ "$4" != "save" ]
then
rm ../generated/vscp-hashtypeevents.sql
rm ../generated/vscp-hashtypeevents.sql.md5
rm ../generated/vscp-hashtypeevents.sqlite3
rm ../generated/vscp-hashtypeevents.sqlite3.md5
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
