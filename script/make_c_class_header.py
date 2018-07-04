#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2018 Ake Hedman, Grodans Paradis AB <info@grodansparadis.com>
#
# Make c header for VSCP class definitions "vscp/src/vscp/common/vscp_class.h"
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
    order_list.append( child.attrib['name'] )

if len(order_list) == 0:
    print("No classes defined in class list!")
    sys.exit() 

# Get copyright header
with open('../cheaders/prefix_class.txt', 'r') as myfile:
  data = myfile.read()
print(data)

print("/*")
print("            !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!")
print("                           This file is auto-generated")
print("                see https://github.com/grodansparadis/vscp-classes")
print("                        Generated:", datetime.datetime.now())
print("*/")

print(" ")
print("#ifndef VSCP_CLASS_H")
print("#define VSCP_CLASS_H")
print(" ")

for vscp_class in order_list:
    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()

    outstr = "#define VSCP_" + type_root.attrib["token"]
    outstr = outstr.replace(".","_")
    outstr += " "
    while len(outstr)<45:
        outstr += " "
    outstr = outstr + type_root.attrib["id"]
    outstr += " "
    while len(outstr)<55:
        outstr += " "
    outstr = outstr + "/* " + type_root.attrib["name"] + " */"
    print(outstr)

print(" ") 
print("#endif")
print(" ")