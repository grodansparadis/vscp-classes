# Class=718 (0x02CE) - Class2 Level I GNSS

    CLASS2.LEVEL1.GNSS

## Description

This class mirrors the [CLASS1.GNSS](./class1.gnss.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## Type=0 (0x00) - General event :id=type0
    VSCP_TYPE_GNSS_GENERALGeneral Event.


----


## Type=1 (0x01) - Position :id=type1
    VSCP_TYPE_GNSS_POSITIONPosition information as decimal Latitude + Longitude. 

 | Byte | Description                        | 
 | :----: | -----------                        | 
 | 0-3  | Latitude as floating point value.  | 
 | 4-7  | Longitude as floating point value. | 



----


## Type=2 (0x02) - Satellites :id=type2
    VSCP_TYPE_GNSS_SATELLITESNumber of satellites used. 

 | Byte | Description                | 
 | :----: | -----------                | 
 | 0    | Number of satellites used. | 



----


[filename](./bottom_copyright.md ':include')