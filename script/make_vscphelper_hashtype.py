#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2019 Ake Hedman, Grodans Paradis AB <info@grodansparadis.com>
#
# Make hashtype definitions, vscp/src/vscp/common/vscphelper.cpp 
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

# Read classes list to get list order
class_tree = ET.parse('../classes/list_class.xml')
class_root = class_tree.getroot()
for child in class_root.iter('item'):
    order_list.append( child.attrib['name'] )

if len(order_list) == 0:
    print("No classes defined in class list!")
    sys.exit() 

print("/*")
print("            !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!")
print("                           This file is auto-generated")
print("                see https://github.com/grodansparadis/vscp-classes")
print("                        Generated:", datetime.datetime.now())
print("*/")
print(" ")

for vscp_class in order_list:
    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()
    print("\n\t// ", type_root.attrib["token"],\
        "=",type_root.attrib["id"],\
        " - ",type_root.attrib["name"])
    events = ""
    try:
        events = type_root.attrib["events"]
    except:
        # 'events' tag does not exist
        for child in type_root.iter('type'):

            outstr = "\tm_hashType[ MAKE_CLASSTYPE_LONG(" + \
                type_root.attrib["id"] + "," + \
                child.attrib["id"] + \
                ") ] = _(\"" + \
                child.attrib["token"] + \
                "\");"
            outstr = outstr.replace(".","_")
            print(outstr)
            #outstr = "#define " + child.attrib["token"] + " "
        
            #while len(outstr)<52:
            #    outstr += " "
        
            #outstr = outstr + child.attrib["id"] + " "
        
            #while len(outstr)<56:
            #    outstr += " "  
        
            # outstr = outstr + "// " +  child.attrib["name"]    
            #print outstr
    else:    
        classid = type_root.attrib["id"]
        fname = '../classes/' + events
        type_tree = ET.parse(fname)
        type_root = type_tree.getroot()
        print("\t// \tEvent types is the same as ", \
                type_root.attrib["token"],"=",type_root.attrib["id"], \
                " - ",type_root.attrib["name"])

        for child in type_root.iter('type'):
            outstr = "\tm_hashType[ MAKE_CLASSTYPE_LONG(" + \
                classid + "," + \
                child.attrib["id"] + \
                ") ] = _(\"" + \
                child.attrib["token"] + \
                "\");"
            outstr = outstr.replace(".","_")
            print(outstr)

print(" ")
