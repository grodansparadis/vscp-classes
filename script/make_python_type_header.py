#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2020 Ake Hedman, Grodans Paradis AB <info@grodansparadis.com>
#
# Make c header for VSCP type definitions
#

import sys
import glob
# https://docs.python.org/3/library/xml.etree.elementtree.html
import xml.etree.ElementTree as ET
import time
import datetime

xclass = {}
order_list = [] # class list order
class_list = [] # List with class attributes
type_list = []  # List with type attributes

with open('../classes/list_class.xml', 'r') as myfile:
  data = myfile.read()
#print data

# Read classes list to get list order
class_tree = ET.parse('../classes/list_class.xml')
class_root = class_tree.getroot()
for child in class_root.iter('item'):
    order_list.append( child.attrib['name'] )

if len(order_list) == 0:
    print("No classes defined in class list!")
    sys.exit() 

# Get copyright header
with open('../python/header.txt', 'r') as myfile:
  data = myfile.read()
  print(data)

print("#")
print("#            !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!")
print("#                           This file is auto-generated")
print("#                see https://github.com/grodansparadis/vscp-classes")
print("#                        Generated:", datetime.datetime.now())
print("#")
print(" ")

print(" ")
print("VSCP_TYPE_UNDEFINED                                  = 0")

for vscp_class in order_list:
    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()
    print("\n# ", type_root.attrib["token"],\
        "=",type_root.attrib["id"],\
        " - ",type_root.attrib["name"])
    events = ""
    try:
        events = type_root.attrib["events"]
    except:
        for child in type_root.iter('type'):
            outstr = child.attrib["token"] + " "
        
            while len(outstr)<52:
                outstr += " "

            outstr += " = "
            outstr += child.attrib["id"] + " "
        
            while len(outstr)<56:
                outstr += " "  
        
            
            outstr += "# " +  child.attrib["name"]
            print(outstr)
    else:    
        fname = '../classes/' + events
        type_tree = ET.parse(fname)
        type_root = type_tree.getroot()
        print("# \tEvent types is the same as ", \
                type_root.attrib["token"],"=",type_root.attrib["id"], \
                " - ",type_root.attrib["name"]) 
print(" ") 
print(" ")
