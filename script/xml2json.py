#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (C) 2000-2021 Ake Hedman, 
# The VSCP Project <info@grodansparadis.com>
#
# Convert XML file to JSON  xml2json filename.xml >filename.json
#
# - Class token
# print( o['class']['@token'])    
#
# - All types
# print( o['class']['type'])
#
# - Name for Type=6   
# print( o['class']['type'][6]['@name'])
#
# - Unit =  Degrees celsius 
# print( o['class']['type'][6]['units']['unit'][1])  
#
# - # UTF8 symbol for degrees celsius
# print( o['class']['type'][6]['units']['unit'][1]['@symbol-utf8'])  
#
# - Conversion formula to unit = 0
# print( o['class']['type'][6]['units']['unit'][1]['@conversion'])
#
# - Number of defined units
# print( "Number of units = ", len(o['class']['type'][6]['units']['unit']) )
#
# o = json.loads(jsonData)
# if 'class' not in o
#   raise ValueError("No target in given data")
# o.get('Peace')        # returns None
# o.get('Peace', 'War') # returns War

import sys
import os
import getopt
import glob
import xmltodict, json

def usage():
    print("usage: xml2json.py inputfile.xml >outputfile.json ")
    print("---------------------------------------------")
    print("-h/--help    - This text.")
    print("-v/--verbose - Print output also to screen.")
#    print("-o/--outdir  - Folder to write output files to.")
#    print("               defaults to current folder.")

path = '../classes/class_10_measurement.xml'
data = ''

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
        os.makedirs(outdir, exist_ok=True)

# Read input file
types = open(path,'r')
indata =  types.read()
types.close()

if bverbose:
    print( "Inputdata\n", indata  )
    print('--------------------------------------------------------------------------')

o = xmltodict.parse(indata)
outdata = json.dumps(o)

if bverbose:
#   print( outdata )
    # print( o['class']['@token'])            # class token
    # print( o['class']['type'])              # All types
    # print
    # print( o['class']['type'][6]['@name'])  # Name for Type=6
    # print( o['class']['type'][6]['units']['unit'][1])  # Degrees celsius
    # print( o['class']['type'][6]['units']['unit'][1]['@symbol-utf8'])   # Symbol for degrees celsius
    print( "Number of units = ", len(o['class']['type'][6]['units']['unit']) )
    print( o['class']['type'][6]['units']['unit'][1]['@conversion'])    # Conversion formula to unit 0
    print( o['class']['type'][6]['units']['unit'][2]['@conversion'])
    print( o['class']['type'][6]['units']['unit'][8]['@conversion'] in o)

# Write the file
#file = open(outdir + "/" + filename,"w")
#file.write(outstr)
#file.close
