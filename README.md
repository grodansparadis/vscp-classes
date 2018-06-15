
This is the original class and type specification for VSCP. Documents and source files are generated from this info.

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

**classes** - VSCP class and type definitions.
**cheaders** - templates for c-headers

