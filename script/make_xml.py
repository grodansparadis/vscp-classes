#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2019 Ake Hedman,
# Grodans Paradis AB <info@grodansparadis.com>
#
# Make XML data from VSCP class & type
# definitions
#

import sys
import glob
# https://docs.python.org/3/library/xml.etree.elementtree.html
import xml.etree.ElementTree as ET
import time
import datetime

def replace_specials(str):
    str = str.replace("\"","&quot;")
    str = str.replace("'","&apos;")
    str = str.replace("&","&amp;")
    str = str.replace("<","&lt;")
    str = str.replace(">","&gt;")
    str = str.replace("\n","\\n")
    str = str.replace("\r","\\r")
    str = str.replace("\t","\\t")
    return str

xclass = {}
order_list = [] # class list order
class_list = [] # List with class attributes
type_list = []  # List with type attributes

args = sys.argv[1:]
nargs = len(args)

# Read classes list to get list order
class_tree = ET.parse('../classes/list_class.xml')
class_root = class_tree.getroot()
for child in class_root.iter('item'):
    order_list.append( child.attrib['name'] )

if len(order_list) == 0:
    print("No classes defined in class list!")
    sys.exit()

print("<?xml version=\"1.0\" encoding=\"utf-8\"?>")
print("<!--")
print("              !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!")
print("                             This file is auto-generated")
print("                  see https://github.com/grodansparadis/vscp-classes")
print("                          Generated:", datetime.datetime.now())
print("-->")

print("<vscpevents>")

# Fill class table with data
cnt = 0
for vscp_class in order_list:

    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()

    # Get description
    description = ""
    if sys.version_info[0] < 3:
        with open('../classes/' + type_root.attrib["id"] + '.md', 'r' ) as myfile:
            description = myfile.read()
            description = replace_specials(description)
    else:
        with open('../classes/' + type_root.attrib["id"] + '.md', 'r', encoding="utf8") as myfile:
            description = myfile.read()
            description = replace_specials(description)

    outstr = "<class " + \
        "id=\"" + type_root.attrib["id"] + "\" " + \
        "name=\"" + type_root.attrib["name"] + "\" " + \
        "token=\"" + type_root.attrib["token"] + "\" " + \
        "description=\"" + description + "\" >\n"
    print(outstr)

    # Types
    events = ""
    try:
        events = type_root.attrib["events"]
    except:
        # 'events' tag does not exist
        outstr = ""
        for child in type_root.iter('type'):
            # Get description
            description = ""
            if sys.version_info[0] < 3:
                with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r' ) as myfile:
                    description = myfile.read()
                    description = replace_specials(description)
            else:
                with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r', encoding="utf8") as myfile:
                    description = myfile.read()
                    description = replace_specials(description)

            outstr += "<type id=\"" + child.attrib["id"] + "\" " + \
                "token=\"" + child.attrib["token"] + "\" " + \
                "name=\"" + child.attrib["name"] + "\" " + \
                "description=\"" + description + "\" " + \
                "/>\n"

        print(outstr)
        print("</class>")

    else:
        classid = type_root.attrib["id"]
        fname = '../classes/' + events
        type_tree = ET.parse(fname)
        type_root = type_tree.getroot()

        outstr = ""
        for child in type_root.iter('type'):

            # Get description
            description = ""
            if sys.version_info[0] < 3:
                with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
                    description = myfile.read()
                    description = replace_specials(description)
            else:
                with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r', encoding="utf8") as myfile:
                    description = myfile.read()
                    description = replace_specials(description)

            outstr += "<type id=\"" + child.attrib["id"] + "\" " + \
                "token=\"" + child.attrib["token"] + "\" " + \
                "name=\"" + child.attrib["name"] + "\" " + \
                "description=\"" + description + "\" " + \
                "/>\n"

        print(outstr)
        print("</class>")

print("</vscpevents>")
