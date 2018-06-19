#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2018 Ake Hedman, Grodans Paradis AB <info@grodansparadis.com>
#
# Make records for the sqlite3 database 
#

import sys
import glob
# https://docs.python.org/3/library/xml.etree.elementtree.html
import xml.etree.ElementTree as ET

xclass = {}
order_list = [] # class list order
class_list = [] # List with class attributes
type_list = []  # List with type attributes

# Create class table
with open('../sqlite/create_class_table.sql', 'r') as myfile:
  data = myfile.read()
print data,";"
print

# Create type table
with open('../sqlite/create_type_table.sql', 'r') as myfile:
  data = myfile.read()
print data,";"
print

# Create unit table
with open('../sqlite/create_unit_table.sql', 'r') as myfile:
  data = myfile.read()
print data,";"
print

# Read classes list to get list order
class_tree = ET.parse('../classes/list_class.xml')
class_root = class_tree.getroot()
for child in class_root.iter('item'):
    order_list.append( child.attrib['name'] )

if len(order_list) == 0:
    print "No classes defined in class list!"
    sys.exit() 

# Fill class table with data 

for vscp_class in order_list:        
    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()

    outstr = "INSERT INTO vscp_class (class,name,token,description) VALUES (" + \
        type_root.attrib["id"] + "," + \
        "'" + type_root.attrib["name"] + "'," + \
        "'" + type_root.attrib["token"] + "'"

    # Get description
    description = ""
    with open('../classes/' + type_root.attrib["id"] + '.md', 'r') as myfile:
        description = myfile.read()
        description = description.replace("'","''")
    
    outstr += ",'" + description + "');"

    print outstr    

# Fill in table data

for vscp_class in order_list:
    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()

    events = ""
    try:
        events = type_root.attrib["events"]
    except:
        # 'events' tag does not exist
        for child in type_root.iter('type'):

            outstr = "INSERT INTO vscp_type (type,link_to_class,token,description) VALUES (" + \
                child.attrib["id"] + "," + \
                type_root.attrib["id"] + "," + \
                "'" + type_root.attrib["token"] + "'"

            # Get description
            description = ""
            with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
                description = myfile.read()
                description = description.replace("'","''")
    
            outstr += ",'" + description + "');"    
            print outstr
    else:    
        classid = type_root.attrib["id"]
        fname = '../classes/' + events
        type_tree = ET.parse(fname)
        type_root = type_tree.getroot()

        for child in type_root.iter('type'):

            outstr = "INSERT INTO vscp_type (type,link_to_class,token,description) VALUES (" + \
                child.attrib["id"] + "," + \
                classid + "," + \
                "'" + child.attrib["token"] + "'"

            # Get description
            description = ""
            with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
                description = myfile.read()
                description = description.replace("'","''")
    
            outstr += ",'" + description + "');"
            print outstr

print