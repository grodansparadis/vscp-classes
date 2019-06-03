#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2019 Ake Hedman,
# Grodans Paradis AB <info@grodansparadis.com>
#
# Make JSON data from VSCP class & type
# definitions
#

import sys
import glob
# https://docs.python.org/3/library/xml.etree.elementtree.html
import xml.etree.ElementTree as ET
import time
import datetime

xclass = {}
order_list = []  # class list order
class_list = []  # List with class attributes
type_list = []  # List with type attributes

args = sys.argv[1:]
nargs = len(args)

# JSONP
if (1 == nargs):
    if (args[0] == "jsonp"):
        print("myFunc(")

# Read classes list to get list order
class_tree = ET.parse('../classes/list_class.xml')
class_root = class_tree.getroot()
for child in class_root.iter('item'):
    order_list.append(child.attrib['name'])

if len(order_list) == 0:
    print("No classes defined in class list!")
    sys.exit()

print("{")
print("\"Generated\" : \"", datetime.datetime.now(), "\",")
print("\"events\": [")

# Fill class table with data
cnt = 0
for vscp_class in order_list:

    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()

    # Get description
    description = ""
    with open('../classes/' + type_root.attrib["id"] + '.md', 'r') as myfile:
        description = myfile.read()
        description = description.replace("\"", "\\\"")
        description = description.replace("\n", "\\n")
        description = description.replace("\r", "\\r")
        description = description.replace("\t", "\\t")

    outstr = "{\n" + \
        "\t\"class\": " + type_root.attrib["id"] + ",\n" + \
        "\t\"name\": \"" + type_root.attrib["name"] + "\",\n" + \
        "\t\"token\": \"" + type_root.attrib["token"] + "\",\n" + \
        "\t\"description\": \"" + description + "\",\n" + \
        "\t\"types\": ["

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
            with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
                description = myfile.read()
                description = description.replace("\"", "\\\"")
                description = description.replace("\n", "\\n")
                description = description.replace("\r", "\\r")
                description = description.replace("\t", "\\t")

            unitstr = "["
            if (10 == int(type_root.attrib["id"]) ) :
                unitstr += "1"
                for unit in child.iter('unit'):
                    unitstr += "\t\t\"id\": \"" + unit.attrib["id"] + ",\n"
                    unitstr += "\t\t\"name\": \"" + unit.attrib["Name"] + ",\n"
                    unitstr += "\t\t\"description\": \"" + unit.attrib["Description"] + ",\n"
                    try:
                        unitstr += "\t\t\"conversion\": \"" + unit.attrib["conversion"] + ",\n"
                    except:
                        unitstr += "\t\t\"conversion\": \"0\",\n"
            unitstr += "]"

            outstr += "\t{\n\t\t\"type\": " + child.attrib["id"] + ",\n" + \
                "\t\t\"token\": \"" + child.attrib["token"] + "\",\n" + \
                "\t\t\"name\": \"" + child.attrib["name"] + "\",\n" + \
                "\t\t\"units\": " + unitstr + ",\n" + \
                "\t\t\"description\": \"" + description + "\"\n" + \
                "\t},\n"

        if len(outstr) > 2:
            print(outstr[:len(outstr)-2])
        print("\t]")

        if cnt < (len(order_list)-1):
            print("},")
        else:
            print("}")

    else:
        classid = type_root.attrib["id"]
        fname = '../classes/' + events
        type_tree = ET.parse(fname)
        type_root = type_tree.getroot()

        outstr = ""
        for child in type_root.iter('type'):

            # Get description
            description = ""
            with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
                description = myfile.read()
                description = description.replace("\"", "\\\"")
                description = description.replace("\n", "\\n")
                description = description.replace("\r", "\\r")
                description = description.replace("\t", "\\t")

            unitstr = "["
            if (10 == classid ) :
                for unit in child.iter('unit'):
                    unitstr += "\t\t\"id\": \"" +unit.attrib["id"] + ",\n"
                    unitstr += "\t\t\"name\": \"" +unit.attrib["name"] + ",\n"
                    unitstr += "\t\t\"description\": \"" +unit.attrib["description"] + ",\n"
                    unitstr += "\t\t\"conversion\": \"" +unit.attrib["conversion"] + ",\n"
            unitstr += "]"

            outstr += "\t{\n\t\t\"type\": " + child.attrib["id"] + ",\n" + \
                "\t\t\"token\": \"" + child.attrib["token"] + "\",\n" + \
                "\t\t\"name\": \"" + child.attrib["name"] + "\",\n" + \
                "\t\t\"units\": " + unitstr + ",\n" + \
                "\t\t\"description\": \"" + description + "\"\n" + \
                "\t},\n"

        print(outstr[:len(outstr)-2])
        print("\t]")

        if cnt < (len(order_list)-1):
            print("},")
        else:
            print("}")

    cnt += 1

print("]}")

# JSONP
if (1 == nargs):
    if (args[0] == "jsonp"):
        print(");")
