#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (C) 2000-2021 Ake Hedman, The VSCP Project <info@grodansparadis.com>
#
# Make hashclass definitions, vscp/src/vscp/common/vscphelper.cpp 
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

# Read classes list to get list order
class_tree = ET.parse('../classes/list_class.xml')
class_root = class_tree.getroot()
for child in class_root.iter('item'):
#    print( child.tag, child.attrib['name'] )
    #print( child.attrib['name'] )
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
    #print "type root tag",type_root.tag
    outstr = "\tm_hashClass[ " + \
                type_root.attrib["id"] + \
                " ] = _(\"" + \
                type_root.attrib["token"] + \
                "\");"
    outstr = outstr.replace(".","_")
    print(outstr)

print(" ") 
