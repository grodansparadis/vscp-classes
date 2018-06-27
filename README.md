
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

**\<events\>** used when this class have the same events as anoter class n.

**\<alternative-token\>** used to set an alternative token.

0.md hoilds class description in Markdown format
0.n.md holds desription for types of this class.

Links to other classes should be have format

    [CLASS1.INFORMATION, Type=9 (HEARTBEAT)](./class1.information.md#type9)

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

### make_c_type_header.py
Make vscp_type.h header file.

#### Usage
    make_c_type_header.py >path/vscp_ctype.h

### make_vscphelper_hashclass.py
Make m_hashclass definitions for vscphelper.cpp.

#### Usage
     make_vscphelper_hashclass.py >path/vscp_ctype.h

### make_vscphelper_hashtype.py
Make m_hashtype definitions for vscphelper.cpp.

#### Usage
    make_vscphelper_hashtype.py path/vscp_hash_type.h
    
### make_sqlite_db.py
Generate sql for creation of sqlite db.

#### Usage
    make_sqlite_db.py path/dbfile.sql

### make_mysql_db.py
Generate sql for creation of mysql db.

#### Usage
    make_mysql_db.py path/dbfile.sql

### make_json.py
Make JSON/JSONP data. Use arg "jsonp" for JSONP.

#### Usage
    make_json.py >path/events.json
    or 
    make_json.py jsonp >path/events.jsonp
   

### make_xml.py
Make XML data.

#### Usage
     make_xml.py >path/events.xml

### make_docs_sidebar.py
Make sidebar content for specification document.

#### Usage
     make_docs_sidebar.py >path/sidebar.md

### make_docs.py
Generate documentation for specification document.

#### Usage
    make_docs.py -v -o <output-folder> -h 
    ---------------------------------------------
    -h/--help    - This text.
    -v/--verbose - Print output also to screen.
    -o/--outdir  - Folder to write output files to.
                   defaults to current folder.