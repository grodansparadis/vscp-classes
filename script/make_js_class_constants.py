#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2018 Ake Hedman, Grodans Paradis AB <info@grodansparadis.com>
#
# Generate the vscp.constants.classes object for
#  "https://github.com/grodansparadis/vscp-js/blob/master/src/vscp.js"
#

import sys
import glob
# https://docs.python.org/3/library/xml.etree.elementtree.html
import xml.etree.ElementTree as ET

xclass = {}
order_list = [] # class list order
class_list = [] # List with class attributes
type_list = []  # List with type attributes

#f = open('../classes/list_class.xml', 'r')
#f.close()

#with open('../classes/list_class.xml', 'r') as myfile:
#  data = myfile.read()
#print data

# Read classes list to get list order
class_tree = ET.parse('../classes/list_class.xml')
class_root = class_tree.getroot()
for child in class_root.iter('item'):
#    print( child.tag, child.attrib['name'] )
    #print( child.attrib['name'] )
    order_list.append( child.attrib['name'] )

if len(order_list) == 0:
    print "No classes defined in class list!"
    sys.exit()


print "vscp.constants.classes = {\n"

for vscp_class in order_list:
    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()
    #print "type root tag",type_root.tag
    outstr = "    " + type_root.attrib["token"] + ": " + \
                type_root.attrib["id"] + ","
    outstr = outstr.replace(".","_")
    print outstr
 
print "\n};"