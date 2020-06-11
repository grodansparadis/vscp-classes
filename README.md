
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

### Render templates 

A structure

```xml
<render>
    <vscpworks template="......." />
</render>
```

holds one or more mustache named templates used to display information about an events dynamic data content. The first template defined is **vscpworks**. This template is used to display HTML based info about an event. The event is used as argument when the mustache expression is parsed. Meaning all parts of the event can be used. So for example {{vscpData[0]}} is data byte 0, vscpClass is the class, vscpGuid is the GUID and so on.

A typical example is this visualization for CLASS1.MEASUREMENT

```xml
<vscpworks template="&lt;b&gt;Unit: &lt;/b&gt; = {{unitstr}} [{{unit}}]&lt;br&gt; &lt;b&gt;Sensorindex: &lt;/b&gt; = {{sensorindex}}&lt;br&gt; &lt;b&gt;Value: &lt;/b&gt; = {{val}}{{symbol-utf8}}&lt;br&gt;"
/>
```


### Measurements
The measurement class (10) has a **\<unit\>** token that is used to describe units. Attributes are

* **name** Name for the unit.
* **description** Description of the unit.
* **symbol-ascii** Symbol in ASCII format
* **symbol-utf8** Symbol in UTF8 format
* **conversion** Conversion code to convert a value of the specific unit to a value of unit 0. Javascript [mustache](https://github.com/janl/mustache.js/) format is used as pseudo code for the conversion and value is specified as **{{val}}** in this code. [mathjs]() is used to parse the expression after mustache parser is run.
Set to **{{val}}** if a conversion is not possible.

This is how this looks for the temperature measurement type

```xml
<type id="6" name="Temperature" token="VSCP_TYPE_MEASUREMENT_TEMPERATURE" >
        <units>
            <unit id="0" 
                    name="kelvin"
                    description="Degrees Kelvin"
                    symbol-ascii="K"
                    symbol-utf8="K"
                    conversion="{{val}}"/>
            <unit id="1" 
                    name="celsius"
                    description="Degrees Celsius"
                    symbol-ascii="C"
                    symbol-utf8="°C"        
                    conversion="{{val}} + 273.15 "/>
            <unit id="2" 
                    name="fahrenheit"
                    description="Degrees Fahrenheit"
                    symbol-ascii="F"
                    symbol-utf8="°F" 
                    conversion="({{val}} + 459.67) * 5/9"/>
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