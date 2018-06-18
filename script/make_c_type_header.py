#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2018 Ake Hedman, Grodans Paradis AB <info@grodansparadis.com>
#
# Make c header for VSCP type definitions
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
#else:
#    print len(order_list), "classes defined."  

# Get copyright header
with open('../cheaders/prefix_type.txt', 'r') as myfile:
  data = myfile.read()
print data

print
print "#ifndef VSCP_TYPE_H"
print "#define VSCP_TYPE_H"
print

for vscp_class in order_list:
    fname = '../classes/' + vscp_class
    #print "\\\\ " + fname
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()
    print "\\\\ ", type_root.attrib["token"],"=",type_root.attrib["id"]," - ",type_root.attrib["name"]
    events = ""
    try:
        events = type_root.attrib["events"]
    except:
        for child in type_root.iter('type'):
            #child.append( xclass )
            #print( child.tag, child.attrib )
            outstr = "#define " + child.attrib["token"] + " "
        
            while len(outstr)<52:
                outstr += " "
        
            outstr = outstr + child.attrib["id"] + " "
        
            while len(outstr)<56:
                outstr += " "  
        
            outstr = outstr + "\\\\ " +  child.attrib["name"]    
            print outstr
    else:    
        fname = '../classes/' + events
        #print "\\\\ " + fname
        type_tree = ET.parse(fname)
        type_root = type_tree.getroot()
        #print "\\\\ ", type_root.attrib["token"],"=",type_root.attrib["id"]," - ",type_root.attrib["name"]
    
    #print "\\\\",type_root.attrib["class"]["token"]," ",type_root.attrib["class"]["name"]
    #outstr = "#define " + type_root.attrib["token"]
    #outstr = outstr.replace(".","_")
    #while len(outstr)<40:
    #    outstr += " "
    #outstr = outstr + type_root.attrib["id"]
    #while len(outstr)<50:
    #    outstr += " "
    #outstr = outstr + "\\\\ " + type_root.attrib["name"]
    #print outstr
    #xclass['classid'] = type_root.attrib['id']
    

    print    
# dir
#mylist = [f for f in glob.glob("../classes/*.xml")]
#print mylist
#print "----------------------------------------------------\n"
#mylist.sort()
#print mylist
print 
print "#endif"
print
