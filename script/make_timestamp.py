#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (C) 2000-2022 Ake Hedman, The VSCP Project <info@grodansparadis.com>
#
# Generate version files in /tmp  version.json and version.jsonp
#

import sys
import glob
# https://docs.python.org/3/library/xml.etree.elementtree.html
import xml.etree.ElementTree as ET
import time
import datetime

outstr = "{\n \"generated\": \"" + str( datetime.datetime.now() ) + "\"\n}\n"

# Write the json file
file = open("../generated/version.json","w")
file.write(outstr)
file.close

# Write the jsonp file
file = open("../generated/version.jsonp","w")
file.write("myFunc(" + outstr + ");")
file.close