#!/bin/sh

# Upload JSON
python make_json.py >/tmp/vscp_events.json
curl -T /tmp/vscp_events.json ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Upload JSONP
python make_json.py jsonp >/tmp/vscp_events.jsonp
curl -T /tmp/vscp_events.jsonp ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Upload XML 
python make_xml.py jsonp >/tmp/vscp_events.xml
curl -T /tmp/vscp_events.xml ftp://"$2:$3"@$1/vscp.org/public_html/events/

# Upload SQL
python make_sqlite_db.py jsonp >/tmp/vscp_events.sql
curl -T /tmp/vscp_events.sql ftp://"$2:$3"@$1/vscp.org/public_html/events/