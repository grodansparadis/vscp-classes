
This is the original class and type specification for VSCP. Documents and source files are generated from this info. The 'scripts' folder holds scripts to generate different output.

The folder **classes** holds class definitions as xml files with the following structure

```xml
<class id="0"
    name="VSCP Protocol Functionality"
    token="CLASS1.PROTOCOL"
    alternative-token="other token"
    events="n">

<type id="12"
    name="Enter boot loader mode."
    token="" />

</class>
```

**\<events\>** used when this class have the same events as anohter class n.

**\<alternative-token\>** used to set an alternative token.

0.md hoilds class description in Markdown format
0.n.md holds description for types of this class.

Links to other classes should have this format

    [CLASS1.INFORMATION, Type=9 (HEARTBEAT)](./class1.information.md#type9)

### Measurements
The measurement class (10) has a **\<unit\>** token that is used to describe units. Attributes are

* **name** Name for the unit.
* **description** Description of the unit.
* **conversion** Conversion code to convert a value of the unit to a value of unit 0. Javascript is used as pseudo code for the conversion and value is specified as **val** in this code. Set to "0" if a conversion is not possible.

This is how this looks for the temperature measurement type

```xml
<type id="6" name="Temperature" token="VSCP_TYPE_MEASUREMENT_TEMPERATURE" >
        <units>
            <unit id="0" Name="Kelvin" Description="Degrees Kelvin."/>
            <unit id="1" Name="Celsius" Description="Degrees Celsius." conversion="val+273.15 "/>
            <unit id="2" Name="Fahrenheit" Description="Degrees Fahrenheit." conversion="val + 459.67) × 5/9"/>
        </units>
    </type>
```

Note that unit can be in the interval 0-255 as class=10 is used to describe also Level II measurement classes. For Level I classes only unit 0-3 is valid of course.

----

## Folders

* **classes** - VSCP class and type definitions.
* **scripts** - Python scripts that generate output
* **cheaders** - templates for c-headers.
* **python** - Templates for Python.
* **javascript** - Templates for JavaScript.
* **db** - Templates for VSCP database.
* **json** -- Templates for JSON file.

## Scripts

### make_c_class_header.py
Make the vscp_class.h header file.

#### Usage
    make_c_class_header.py >path/vscp_class.h

----


### make_c_type_header.py
Make vscp_type.h header file.

#### Usage
    make_c_type_header.py >path/vscp_ctype.h

----

### make_python_class_header.py
Make the vscp_class.py header file.

#### Usage
    make_python_class_header.py >path/vscp_class.py

----


### make_python_type_header.py
Make vscp_type.py header file.

#### Usage
    make_python_type_header.py >path/vscp_type.py

----

### make_vscphelper_hashclass.py
Make m_hashclass definitions for vscphelper.cpp.

#### Usage
     make_vscphelper_hashclass.py >path/vscp_ctype.h

----


### make_vscphelper_hashtype.py
Make m_hashtype definitions for vscphelper.cpp.

#### Usage
    make_vscphelper_hashtype.py path/vscp_hash_type.h

----


### make_sqlite_db.py
Generate sql for creation of sqlite db.

#### Usage
    make_sqlite_db.py path/dbfile.sql

----


### make_mysql_db.py
Generate sql for creation of mysql db.

#### Usage
    make_mysql_db.py path/dbfile.sql

----


### make_json.py
Make JSON/JSONP data. Use arg "jsonp" for JSONP.

#### Usage
    make_json.py >path/events.json
    or
    make_json.py jsonp >path/events.jsonp

----



### make_xml.py
Make XML data.

#### Usage
     make_xml.py >path/events.xml

----


### make_docs_sidebar.py
Make sidebar content for specification document.

#### Usage
     make_docs_sidebar.py >path/sidebar.md

----


### make_docs.py
Generate documentation for specification document.

#### Usage
    make_docs.py -v -o <output-folder> -h
    ---------------------------------------------
    -h/--help    - This text.
    -v/--verbose - Print output also to screen.
    -o/--outdir  - Folder to write output files to.
                   defaults to current folder.

----

### make_js_class_constants.py
Make class constants for the Javascript library.

#### Usage
    make_js_class_constants.py >path/output

----


### make_js_type_constants.py
Make type constants for the Javascript library.

#### Usage
    make_js_type_constants.py >path/output

----

### make_nodejs_class_constants.py
Make class constants module for node.js.

#### Usage
    make_nodejs_class_constants.py >path/output

----


### make_nodejs_type_constants.py
Make type constants module for the node.js.

#### Usage
    make_nodejs_type_constants.py >path/output

----

### dowork.sh
This is an internal bash script that is used on our internal development system to generate files for different projects and site.

#### Usage
    dowork.sh <ftp-server> <user> <password>

----