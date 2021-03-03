#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (C) 2000-2021 Ake Hedman, 
# Grodans Paradis AB <info@grodansparadis.com>
#
# Make sidebar list for VSCP specification document
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

#print("## Defined classes") 
for vscp_class in order_list:
    
    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()

    id = int(type_root.attrib["id"])
    if id == 0:
        print("    ")
        print("* Level I events")
        print(" * [Description](./level_i_events.md)")
    elif id == 512:
        print("    ")
        print("* Level I events over level II")
        print(" * [Description](./level_i_events_over_level_ii.md)")
    elif id == 1024:
        print("    ")
        print("* Level II events")
        print(" * [Description](./level_ii_events.md)")

    outstr = " * [" + \
        type_root.attrib["token"] + " = " + \
        type_root.attrib["id"] + " (" + hex(id) + ")](./" + \
        type_root.attrib["token"].lower() + ".md)"
    print(outstr)  

print("    ")
# print("## Defined events")
# print("*Generated: " + str(datetime.datetime.now()) + "*" )

# # Show events 
# cnt = 0
# for vscp_class in order_list:  

#     fname = '../classes/' + vscp_class
#     type_tree = ET.parse(fname)
#     type_root = type_tree.getroot()

#     # Get description
#     description = ""
#     with open('../classes/' + type_root.attrib["id"] + '.md', 'r') as myfile:

#         description = myfile.read()
#         description = description.replace("\"","&quot;")
#         description = description.replace("'","&apos;")
#         description = description.replace("&","&amp;")
#         description = description.replace("<","&lt;")
#         description = description.replace(">","&gt;")
#         description = description.replace("\n","\\n")
#         description = description.replace("\r","\\r")
#         description = description.replace("\t","\\t")

#     id = int(type_root.attrib["id"])
#     if id == 0:
#         print("    ")
#         print("* **[Level I events](./level_i_events.md)**")
#     elif id == 512:
#         print("    ")
#         print("* **[Level I events over level II](./level_i_events_over_level_ii.md)**")
#     elif id == 1024:
#         print("    ")
#         print("* **[Level II events](./level_ii_events.md)**")     

#     outstr = "   * [" + \
#         type_root.attrib["token"] + " = " + \
#         type_root.attrib["id"] + " (" + hex(id) + ")](./" + \
#         type_root.attrib["token"].lower() + ".md)"

#     print(outstr) 

#     # Types
#     events = ""
#     try:
#         events = type_root.attrib["events"]
#     except:
#         # 'events' tag does not exist
#         outstr = ""
#         for child in type_root.iter('type'):            
#             # Get description
#             description = ""
#             with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
#                 description = myfile.read()
#                 description = description.replace("\"","&quot;")
#                 description = description.replace("'","&apos;")
#                 description = description.replace("&","&amp;")
#                 description = description.replace("<","&lt;")
#                 description = description.replace(">","&gt;")
#                 description = description.replace("\n","\\n")
#                 description = description.replace("\r","\\r")
#                 description = description.replace("\t","\\t")

#             typeid = int(child.attrib["id"])
#             outstr = "      * [Type=" + child.attrib["id"] + " (" + hex(typeid) + ") - " + \
#                 child.attrib["name"] + "](./" + \
#                 type_root.attrib["token"].lower() + ".md#type"+ \
#                 child.attrib["id"] + ")"
#             print(outstr)

#     else:
#         classid = type_root.attrib["id"]
#         fname = '../classes/' + events
#         type_tree = ET.parse(fname)
#         type_root = type_tree.getroot()

#         outstr = ""
#         for child in type_root.iter('type'):

#             # Get description
#             description = ""
#             with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
#                 description = myfile.read()
#                 description = description.replace("\"","&quot;")
#                 description = description.replace("'","&apos;")
#                 description = description.replace("&","&amp;")
#                 description = description.replace("<","&lt;")
#                 description = description.replace(">","&gt;")
#                 description = description.replace("\n","\\n")
#                 description = description.replace("\r","\\r")
#                 description = description.replace("\t","\\t")

#             typeid = int(child.attrib["id"])
#             outstr = "      * [Type=" + child.attrib["id"] + " (" + hex(typeid) + ") - " + \
#                 child.attrib["name"] + "](./" + \
#                 type_root.attrib["token"].lower() + ".md#type"+ \
#                 child.attrib["id"] + ")"
#             print(outstr)   

print(" ") 


