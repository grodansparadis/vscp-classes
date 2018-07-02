# Class=1021 (0x03FD) - Class2 Level I Log

    CLASS2.LEVEL1.LOG

## Description

This class mirrors the [CLASS1.LOG](./class1.log.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## <a name="type0"></a>Type=0 (0x00) - General event
    VSCP_TYPE_LOG_GENERALGeneral Event.
----

## <a name="type1"></a>Type=1 (0x01) - Log event
    VSCP_TYPE_LOG_MESSAGEMessage for Log. Several frames have to be sent for a event that take up more the five bytes which is the maximum for each frame. In this case the zero based index (byte 2) should be increased for each frame. 

 | Byte | Description            | 
 | :----: | -----------            | 
 | 0    | ID for event.          | 
 | 1    | Log level for message. | 
 | 2    | Idx for this message.  | 
 | 3-7  | Message.               |
----

## <a name="type2"></a>Type=2 (0x02) - Log Start
    VSCP_TYPE_LOG_STARTStart logging. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | ID for log. | 
----

## <a name="type3"></a>Type=3 (0x03) - Log Stop
    VSCP_TYPE_LOG_STOPStop logging. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | ID for log. | 
----

## <a name="type4"></a>Type=4 (0x04) - Log Level
    VSCP_TYPE_LOG_LEVELSet level for logging. 

 | Byte | Description                  | 
 | :----: | -----------                  | 
 | 0    | ID for log byte 0 Log level. | 

----

{% include "./bottom_copyright.md" %}