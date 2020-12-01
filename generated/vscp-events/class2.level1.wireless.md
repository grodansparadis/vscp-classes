# Class=724 (0x02D4) - Class2 Level I Wireless

    CLASS2.LEVEL1.WIRELESS

## Description

This class mirrors the [CLASS1.WIRELESS](./class1.wireless.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_WIRELESS_GENERAL
```
General Event.


----


## Type=1 (0x01) - GSM Cell :id=type1

```
VSCP_TYPE_WIRELESS_GSM_CELL
```
Event with ID for the GSM cell. Normally this is a 16-bit value but a 32-bit value is used in VSCP. 

 | Byte | Description  | 
 | :----: | -----------  | 
 | 0-3  | GSM Cell ID. | 


----


[filename](./bottom_copyright.md ':include')