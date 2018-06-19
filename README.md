
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

    [CLASS1.INFORMATION, Type=9 (HEARTBEAT)](https://grodansparadis.gitbooks.io/the-vscp-specification/class1.information.html#type9)

----

## Folders

* **classes** - VSCP class and type definitions.
    * make_c_class_header.py - Make vscp_class.h header file.
    * make_c_type_header.py - Make vscp_tyoe.h header file.
    * make_vscphelper_hashclass.py - Make m_hashclass definitions for vscphelper.cpp.
    * make_vscphelper_hashtype.py - Make m_hashtype definitions for vscphelper.cpp.
    * make_sqlite_db.py - Generate sql for creation of sqlite db.
    * make_mysql_db.py - Generate sql for creation of mysql db.
* **cheaders** - templates for c-headers.
* **python** - Templates for Python.
* **javascript** - Templates for JavaScript.
* **db** - Templates for VSCP database.
* **json** -- Templates for JSON file.

