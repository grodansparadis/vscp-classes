#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (c) 2000-2019 Ake Hedman, 
# Grodans Paradis AB <info@grodansparadis.com>
#
# Make event docs. for VSCP specification document
#

import sys
import getopt
import glob
# https://docs.python.org/3/library/xml.etree.elementtree.html
import xml.etree.ElementTree as ET

# Convert decimal number on string form
# to formated hex number (0x.....)
def fmthex(snum):
    if int(snum)<256:
        return str.format('0x{:02X}', int(snum, 10))
    elif int(snum)<65536:
        return str.format('0x{:04X}', int(snum, 10))
    else:    
        return str.format('0x{:08X}', int(snum, 10))

def usage():
    print("usage: make_docs.py -v -o <output-folder> -h ")
    print("---------------------------------------------")
    print("-h/--help    - This text.")
    print("-v/--verbose - Print output also to screen.")
    print("-o/--outdir  - Folder to write output files to.")
    print("               defaults to current folder.")

xclass = {}
order_list = [] # class list order
class_list = [] # List with class attributes
type_list = []  # List with type attributes

# -v --verbose - Show output
# -o --output - Set output folder (current is default).
# -h --help - Show this text
args = sys.argv[1:]
nargs = len(args)

outdir = "./"
bverbose = False

try:
    opts, args = getopt.getopt(args,"hvo:",["help","verbose","outdir="])
except getopt.GetoptError:
    print("unrecognized format!")
    usage()
    sys.exit(2)
for opt, arg in opts:
    if opt in ("-h", "--help"):
        print("HELP")
        usage()
        sys.exit()
    elif opt in ("-v", "--verbose"):
        bverbose = True
    elif opt in ("-o", "--outdir"):
        outdir = arg

# Read classes list to get list order
class_tree = ET.parse('../classes/list_class.xml')
class_root = class_tree.getroot()
for child in class_root.iter('item'):
    order_list.append( child.attrib['name'] )

if len(order_list) == 0:
    print("No classes defined in class list!")
    sys.exit() 

# Fill class table with data 
for vscp_class in order_list:  

    fname = '../classes/' + vscp_class
    type_tree = ET.parse(fname)
    type_root = type_tree.getroot()

    classid = int( type_root.attrib["id"] )

    # Page header
    outstr = "# Class=" + type_root.attrib["id"] + " (" + \
        fmthex( type_root.attrib["id"] ) + ") - " + \
        type_root.attrib["name"] + "\n\n"

    # Print token
    outstr += "    " + type_root.attrib["token"] + "\n\n"

    # Get description
    description = ""
    with open('../classes/' + type_root.attrib["id"] + '.md', 'r') as myfile:

        description = myfile.read()
        outstr += description

    filename = type_root.attrib["token"].lower() + ".md"

    # Types
    events = ""
    try:
        events = type_root.attrib["events"]
    except:
        # 'events' tag does not exist
        for child in type_root.iter('type'):            

            typeid = int(child.attrib["id"])

            outstr += "\n"
            outstr += "## " + \
                "Type=" + child.attrib["id"] +\
                " (" + fmthex(child.attrib["id"]) +\
                ") - " + child.attrib["name"] +\
                " {#type" + child.attrib["id"] + "}"
            outstr += "\n" 
            outstr += "    " + child.attrib["token"]
            outstr += "\n"

            # Get description
            description = ""
            with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
                description = myfile.read()
                outstr += description

            typeid = int(child.attrib["id"])

            outstr += "\n" 
            outstr += "----"
            outstr += "\n"
    else:
        classid = type_root.attrib["id"]
        fname = '../classes/' + events
        type_tree = ET.parse(fname)
        type_root = type_tree.getroot()

        for child in type_root.iter('type'):

            typeid = int(child.attrib["id"])

            outstr += "\n"
            outstr += "## " + \
                "Type=" + child.attrib["id"] +\
                " (" + fmthex(child.attrib["id"]) +\
                ") - " + child.attrib["name"] +\
                " {#type" + child.attrib["id"] + "}"
            outstr += "\n" 
            outstr += "    " + child.attrib["token"]
            
            # Get description
            description = ""
            with open('../classes/' + type_root.attrib["id"] + "." + child.attrib["id"] + '.md', 'r') as myfile:
                description = myfile.read()
                outstr += description
                outstr += "\n"

            typeid = int(child.attrib["id"])
    
            outstr += "\n" 
            outstr += "----"
            outstr += "\n"

    outstr += "\n" + "{% include \"./bottom_copyright.md\" %}"
    if bverbose:
        print(outstr)
    # Write the file
    file = open(outdir + "/" + filename,"w")
    file.write(outstr)
    file.close


