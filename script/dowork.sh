#!/bin/sh

# This script generates and uplodas generated files from
# VSCP definitions. Arguments are
# ftpserver username password
# and a folder "events" is expected to be available on the
# root public_html folder of this server.

# Version timestamps
python make_timestamp.py
echo "uploading timestamps"
curl -T /tmp/version.json ftp://"$2:$3"@$1/vscp.org/public_html/events/
curl -T /tmp/version.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate class definition header for C/C++
python make_c_class_header.py >/tmp/vscp_class.h
echo "uploading vscp_class.h"
curl -T /tmp/vscp_class.h ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate type definition header for C/C++
python make_c_type_header.py >/tmp/vscp_type.h
echo "uploading vscp_type.h"
curl -T /tmp/vscp_type.h ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate hash class data for vscphelper
python make_vscphelper_hashclass.py >/tmp/vscp_hashclass.h
echo "uploading vscp_hashclass.h"
curl -T /tmp/vscp_hashclass.h ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate hash type data for vscphelper
python make_vscphelper_hashtype.py >/tmp/vscp_hashtype.h
echo "uploading vscp_hashtype.h"
curl -T /tmp/vscp_hashtype.h ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate and upload JSON
python make_json.py >/tmp/vscp_events.json
echo "uploading vscp_events.json"
curl -T /tmp/vscp_events.json ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate and upload JSONP
python make_json.py jsonp >/tmp/vscp_events.jsonp
echo "uploading vscp_events.jsonp"
curl -T /tmp/vscp_events.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate and upload XML 
python make_xml.py jsonp >/tmp/vscp_events.xml
echo "uploading vscp_events.xml"
curl -T /tmp/vscp_events.xml ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate and upload SQL
python make_sqlite_db.py jsonp >/tmp/vscp_events.sql
echo "uploading vscp_events.sql"
curl -T /tmp/vscp_events.sql ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Generate and upload documentation
mkdir -p /tmp/vscp-events
python make_docs_sidebar.py >/tmp/vscp-events/sidebar.md
python make_docs.py -o /tmp/vscp-events
for f in /tmp/vscp-events/*.md; do
    echo "uploading " $f
    curl -T $f ftp://"$2:$3"@$1/vscp.org/public_html/events/docs/
done


