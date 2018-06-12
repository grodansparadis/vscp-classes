======= Class=512 (0x200) ... 1023 (0x3FF) - Level II Mirror Level I events ======

    CLASS2.PROTOCOL1 - CLASS1.LOCAL
    
## Description

Class 512-1023 is reserved for events that should stay in the Level 2 network but that in all other aspects (the lower nine bits + type) are defined in the same manner as for Level I. For [CLASS2.PROTOCOL1](./class1.protocol.md) the first 16 bytes of the data field is the GUID of the node the event is intended for. 

This is used for translation in the VSCP daemon for instance where a level II client can send events that are automatically sent to the correct interface and is addressed to the correct device in question. To use this feature send events with the GUID of the i/f where the device is located when addressing is needed. The correct nickname is needed and it should be set in GUID byte 16.

An event with a class >= 512 but < 1024 will be sent to all Level II clients and to the correct i/f (the one that have the addressed GUID). A response form the device will go out as as a Level II event using the GUID of the interface but class will always have a value < 512 for a response event just as all events originating from a device. If you send 512-events with an external node as destination GUID (which is not the GUID of an interface) the event will be put through all interfaces.

Note that the LSB of an interface GUID is always the nickname-ID for a device interface. 

##  Some Examples 

##### Type = 6 (0x06) Set nickname-ID for node.

To set a new nickname for a node send the following event

    Class=512, Level I Protocol, Type=6 (0x06)  
    Set nickname-ID for node. 

 | Byte | Description                               | 
 | ---- | -----------                               | 
 | 0-15 | GUID for Interface where node is located. | 
 | 16   | Old nickname for node.                    | 
 | 17   | The nickname for the node.                | 

Response is

    Class=0, Level I Protocol, Type=7 (0x07) 
    Nickname-ID accepted. 
    
No data bytes

Note the the LSB of the GUID contains the nickname is in both cases but that this is of no use when the event is sent but should be used to verify that the correct node answered when the response is received.

##### Type = 9 (0x09) Read register.

To read a register of a node send the following event

    Class=512, Level I Protocol, Type=9 (0x09) 
    Read register. 

 | Byte | Description                                                         | 
 | ---- | -----------                                                         | 
 | 0-15 | GUID for Interface where node is located. LSB is nickname for node. | 
 | 16   | Nickname for node.                                                  | 
 | 17   | Register to read.                                                   | 

Response is

    Class=0, Level I Protocol, Type=10 (0x0A) 
    Read/Write response.

 | Byte | Description            | 
 | ---- | -----------            | 
 | 0    | Register read/written. | 
 | 1    | Content of register.   | 


{% include "./bottom_copyright.md" %}
