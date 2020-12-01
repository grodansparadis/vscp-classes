# Class=512 (0x0200) - Class2 Level I Protocol

    CLASS2.LEVEL1.PROTOCOL

## Description

This class mirrors the [CLASS1.PROTOCOL](./class1.protocol.md) class but use a different data format.

Class 512-1023 is reserved for events that should stay in the Level 2 network but that in all other aspects (the lower nine bits + type) are defined in the same manner as for Level I. For [CLASS2.PROTOCOL1](./class1.protocol.md) the first 16 bytes of the data field is the GUID of the node the event is intended for. 

This is used for translation in the VSCP daemon for instance where a level II client can send events that are automatically sent to the correct interface and is addressed to the correct device in question. To use this feature send events with the GUID of the i/f where the device is located when addressing is needed. The correct nickname is needed and it should be set in GUID byte 16.

An event with a class >= 512 but < 1024 will be sent to all Level II clients and to the correct i/f (the one that have the addressed GUID). A response form the device will go out as as a Level II event using the GUID of the interface but class will always have a value < 512 for a response event just as all events originating from a device. If you send 512-events with an external node as destination GUID (which is not the GUID of an interface) the event will be put through all interfaces.

Note that the LSB of an interface GUID is always the nickname-ID for a device interface. 

###  Some Examples 

#### Type = 6 (0x06) Set nickname-ID for node.

To set a new nickname for a node send the following event

    Class=512, Level I Protocol, Type=6 (0x06)  
    Set nickname-ID for node. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0-15 | GUID for Interface where node is located. | 
 | 16   | Old nickname for node. | 
 | 17   | The nickname for the node. | 

Response is

    Class=0, Level I Protocol, Type=7 (0x07) 
    Nickname-ID accepted. 
    
No data bytes

Note the the LSB of the GUID contains the nickname is in both cases but that this is of no use when the event is sent but should be used to verify that the correct node answered when the response is received.

#### Type = 9 (0x09) Read register.

To read a register of a node send the following event

    Class=512, Level I Protocol, Type=9 (0x09) 
    Read register. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0-15 | GUID for Interface where node is located. LSB is nickname for node. | 
 | 16   | Nickname for node. | 
 | 17   | Register to read. | 

Response is

    Class=0, Level I Protocol, Type=10 (0x0A) 
    Read/Write response.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Register read/written. | 
 | 1    | Content of register.   | 



## Type=0 (0x00) - General event. :id=type0

```
VSCP_TYPE_PROTOCOL_GENERAL
```
General Event.


----


## Type=1 (0x01) - Segment Controller Heartbeat. :id=type1

```
VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT
```
**Not mandatory.** Implement in device if needed by application. 

A segment controller sends this event once a second on the segment that it controls. The data field contains the 8-bit CRC of the segment controller GUID and the time since the epoch (00:00:00 UTC, January 1, 1970) as a 32-bit value. A node that receive (and recognize) this event could respond with a CLASS1.INFORMATION, Type=9 event (HEARTBEAT) and should do so if it does not send out a regular heartbeat event.

Other nodes can originate this event on the segment. For these nodes the data part, as specified below, should be omitted. A better choice for periodic heartbeat events from a node may be [CLASS1.INFORMATION, Type=9 (HEARTBEAT)](./class1.information.md#type9)

All nodes that recognize this event should save the 8-bit CRC in non-volatile storage and use it on power up. When a node starts up on a segment it should begin to listen for the Segment controller heartbeat. When/if it is received the node compares it with the stored value and if equal and the node is assigned a nickname-ID it continues to its working mode. If different, the node has detected that it has been moved to a new segment and therefore must drop its nickname-ID and enters the configuration mode to obtain a new nickname-ID from the segment controller.

If the node is in working mode and its nickname-ID changes, the node should do a complete restart after first setting all controls to their default state.

As a segment can be without a segment controller this event is not available on all segments and is not mandatory. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | 8-bit CRC of the segment controller GUID. | 
 | 1 | MSB of time since epoch (optional). |
 | 2  | Time since epoch (optional). | 
 | 3         | Time since epoch (optional).|
 | 4         | LSB of time since epoch | 

Uninitiated nodes have the CRC of the segment controller set to 0xFF.

A node that is initialized on a segment and does not receive a Heartbeat can take the role of segment controller if it wishes to do so. Only one node one a segment are allowed to do this fully by setting its nickname=0 and therefore a standard node should not have this feature built in. Any node can however behave like a segment controller but use a nickname other then zero. 

Time is UTC.



----


## Type=2 (0x02) - New node on line / Probe. :id=type2

```
VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE
```
**Mandatory.** Must be implemented by all devices.

This is intended for nodes that have been initiated, is part of the segment and is powered up. All nodes that have a nickname-ID that is not set to 0xFF should send this event before they go on line to do their “day to day” work.

Normally all nodes should save their assigned nickname-ID in non-volatile memory and use this assigned ID when powered up. A segment controller can however keep track of nodes that it controls and reassign the ID to a node that it did not get a new node on-line event from. This is the method a segment controller uses to detect nodes that have been removed from the segment.

For the nickname discovery procedure this event is used as the probe. The difference between a probe and a new node on line is that the later has the same originating nickname as value in byte 0.

If a node send this event with the unassigned ID 0xFF and byte 0 set to 0xFF it has given up the search for a free ID.

It is recommended that also level II nodes send this event when they come alive. In this case the target address is the 16-byte data GUID of the node with MSB in the first byte. 

 | Data | Description | 
 | :----: | ----------- | 
 | 0    | **Target address**. This is the probe nickname that the new node is using to test if this is a valid target node. If there is a node with this nickname address it should answer with probe ACK. A probe always has 0xff as it's own temporary nickname while a new node on line use a non 0xff nickname. | 

On a Level II system.

 | Data | Description | 
 | :----: | ----------- | 
 | 0-15 | **GUID**. This is the GUID of the node. MSB in byte 0. | 

 


----


## Type=3 (0x03) - Probe ACK. :id=type3

```
VSCP_TYPE_PROTOCOL_PROBE_ACK
```
**Mandatory.** Must be implemented by all devices.

This event is sent from a node as a response to a probe. There are no arguments.




----


## Type=4 (0x04) - Reserved for future use. :id=type4

```
VSCP_TYPE_PROTOCOL_RESERVED4
```
Reserved for future use.




----


## Type=5 (0x05) - Reserved for future use. :id=type5

```
VSCP_TYPE_PROTOCOL_RESERVED5
```
Reserved for future use.



----


## Type=6 (0x06) - Set nickname-ID for node. :id=type6

```
VSCP_TYPE_PROTOCOL_SET_NICKNAME
```
**Mandatory.** Must be implemented by all devices.

This event can be used to change the nickname for a node. The node just uses the new nickname and don't start nickname discovery or similar.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0  | Old nickname for node. | 
 | 1  | The new nickname for the node. | 



----


## Type=7 (0x07) - Nickname-ID accepted. :id=type7

```
VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED
```
**Mandatory.** Must be implemented by all devices.

A node sends this event to confirm that it accepts its assigned nickname-ID. When sending this event the node uses its newly assigned nickname address.



----


## Type=8 (0x08) - Drop nickname-ID / Reset Device. :id=type8

```
VSCP_TYPE_PROTOCOL_DROP_NICKNAME
```
**Mandatory.** Must be implemented by all devices.

Request a node to drop its nickname. The node should drop its nickname and then behave in the same manner as when it was first powered up on the segment. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0  | The current nickname for the node. |
 | 1  | **Optional:** Flags. | 
 | 2  | **Optional:** Time the node should wait before it starts a nickname discovery or starts the device. The time is in seconds. | 

**Optional byte 1 flags**

 | Bit | Description | 
 | :---: | ----------- | 
 | 0   | Reserved. | 
 | 1   | Reserved. | 
 | 2   | Reserved. | 
 | 3   | Reserved. | 
 | 4   | Reserved. | 
 | 5   | Reset device. Keep nickname. | 
 | 6   | Set persistent storage to default.| 
 | 7   | Go idle. Do not start up again. | 

So if byte 1 and 2 is not in event restart device, set default parameters and do a nickname discovery. If byte 1 and 2 are present and bit 5 is set load defaults into device, restart but keep nickname. In all cases byte 2 delays before the node is restarted.

 1.  With just one byte as an argument. The node should do a standard node discovery in the same way as if the status button of the node is pressed. Preserve initiated data,
 2.  If byte 1 is present bit 5: Just restart. Don't change any data. not even nickname. bit 6: Restart write default to persistent storage. bit 7: die die my darling. If both bit 5 and 6 is set, do 5 and then 6 == 6 or do 6 and then 5 == 6
 3.  Byte 1 + byte 2 Wait this amount of seconds after the above operation has been carried out.

There is a variant of this where the GUID is used instead of the nickname to identify the device, [CLASS1.PROTOCOL, Type=23 (GUID drop nickname-ID / reset device.)](./class1.protocol.md#type23).




----


## Type=9 (0x09) - Read register. :id=type9

```
VSCP_TYPE_PROTOCOL_READ_REGISTER
```
**Mandatory.** Must be implemented by all devices.

Read a register from a node. 

*If a node have several pages with user defined registers Extended Register Read is a better choice to choose for reading as the page also is set when reading register using that type. The standard registers can always be read without setting a page though as they are always mapped into the upper 128 bytes.*

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node address. | 
 | 1 | Register to read. | 

A read/write response event is returned on success.

The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0-15 | GUID (MSB -> LSB). | 
 | 16 | Reserved. | 
 | 17 | Register to read. | 



----


## Type=10 (0x0A) - Read/Write response. :id=type10

```
VSCP_TYPE_PROTOCOL_RW_RESPONSE
```
**Mandatory.** Must be implemented by all devices.

Response for a read/write event. . Note that the data is returned for both a read and a write and can and probably should be checked for validity. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Register read/written. | 
 | 1 | Content of register.   | 





----


## Type=11 (0x0B) - Write register. :id=type11

```
VSCP_TYPE_PROTOCOL_WRITE_REGISTER
```
**Mandatory.** Must be implemented by all devices.

Write register content to a node. 

*If a node have several pages with user defined registers Extended Register Write is a better choice to choose for writing as the page is also set when writing a register using that type. The standard registers can always be read without setting a page though as they are always mapped into the upper 128 bytes.*

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node address.         | 
 | 1 | Register to write.    | 
 | 2 | Content for register. | 

A read/write response event is returned on success.

The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0-15 | GUID (MSB -> LSB). | 
 | 16 | Reserved. | 
 | 17 | Register to write.   | 
 | 18 | Content of register. | 



----


## Type=12 (0x0C) - Enter boot loader mode. :id=type12

```
VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER
```

**Mandatory.** Must be implemented by all devices.

Send NACK (Class=0,Type=14 if no boot-loader implemented)

This is the first event in the boot loader sequence. The node should stop all other activities when in boot loader mode. This also means that the node should not react on other events (commands) then the boot loader related.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | The nickname for the node. | 
 | 1 | Code that select boot loader algorithm to use. | 
 | 2 | GUID byte 0 (MSB) | 
 | 3 | GUID byte 3 (MSB + 3) | 
 | 4 | GUID byte 5 (MSB + 5) | 
 | 5 | GUID byte 7 (MSB + 7) | 
 | 6 | Content of register 0x92, Page select MSB. | 
 | 7 | Content of register 0x93, Page select LSB. | 

The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I. 

 | Data byte | Description |
 | :---------: | ----------- | 
 | 0-15 | GUID. | 
 | 16   | Boot-loader algorithm code. |


**Boot-loader Codes**


 | Code | Algorithm               | 
 | :----: | ---------             | 
 | 0x00 | VSCP algorithm.         | 
 | 0x01 | Microchip PIC algorithm | 
 | 0x10 | Atmel AVR algorithm 0   | 
 | 0x20 | NXP ARM algorithm 0     | 
 | 0x30 | ST ARM algorithm 0      | 

All other codes reserved.



----


## Type=13 (0x0D) - ACK boot loader mode. :id=type13

```
VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

This event has no meaning for any node that is not in boot mode and should be disregarded.

The node confirms that it has entered boot loader mode. This is only sent for the VSCP boot loader algorithm. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | MSB of flash block size.            | 
 | 1 | Flash block size.                   | 
 | 2 | Flash block size.                   | 
 | 3 | LSB of flash block size.            | 
 | 4 | MSB of number of block s available. | 
 | 5 | Number of block s available.        | 
 | 6 | Number of block s available.        | 
 | 7 | LSB of number of blocks available.  |

 


----


## Type=14 (0x0E) - NACK boot loader mode. :id=type14

```
VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER
```
**Mandatory.** Should be implemented by all devices.

The node was unable to enter boot loader mode. The reason is given by a user specified error code byte. This event has no meaning for any node that is not in boot mode and should be disregarded.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Optional user defined error code. | 



----


## Type=15 (0x0F) - Start block data transfer. :id=type15

```
VSCP_TYPE_PROTOCOL_START_BLOCK
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

Begin transfer of data for a block of memory. This event has no meaning for any node that is not in boot mode and should be disregarded.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | MSB of block number. | 
 | 1         | Block number. | 
 | 2         | Block number. | 
 | 3         | LSB of block number. | 
 | 4         | (optional) Type of Memory we want to write. See table below | 
 | 5         | (optional) Bank/Image to be written Used together with byte 4 to specify either separate Flash or EEPROM/MRAM spaces. If absent or set to zero normally, means first memory from the view of the node creator, e.g. internal Flash, internal EEPROM etc. Useful for projects that have internal as well as external EEPROMs so the external one could be addressed with byte5=1. Also with byte4=0 and byte5=1 an SD-Card as well as a second firmware image inside the flash could be addressed. |

**Type of memory to write (byte 4)**


 | Memory type | Description | 
 | :-----------: | ----------- | 
 | 0 or byte absent | PROGRAM Flash (status quo for old nodes) | 
 | 1 | DATA (EEPROM, MRAM, FRAM) | 
 | 2 | CONFIG (Fuses, CPU configuration) | 
 | 3 | RAM | 
 | 4-255  | Currently undefined - send a NACK as response | 

Response can be 

   [CLASS1.PROTOCOL, Type=50 (Start block data transfer ACK)](./class1.protocol.md#type50) 
   
   or 
   
   [CLASS1.PROTOCOL, Type=51 (Start block data transfer NACK)](./class1.protocol.md#type51).

   


----


## Type=16 (0x10) - Block data. :id=type16

```
VSCP_TYPE_PROTOCOL_BLOCK_DATA
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

Data for a block of memory. This event has no meaning for any node that is not in boot mode and should be disregarded.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | Data.       | 
 | 1         | Data.       | 
 | 2         | Data.       | 
 | 3         | Data.       | 
 | 4         | Data.       | 
 | 5         | Data.       | 
 | 6         | Data.       | 
 | 7         | Data.       | 

A [CLASS1.PROTOCOL, Type=50 (Block Data ACK)](./class1.protocol.md#type50)
is sent as a response for each event received.

A [CLASS1.PROTOCOL, Type=51 (Block Data NACK)](./class1.protocol.md#type51)
is sent on failure.

**Note** If the block to fill is not a multiple of eight the receiving node should handle and discard any excess data. This is true also if more block data frames are received than the block can hold.

**Level II** The size of the block is 1-max data.



----


## Type=17 (0x11) - ACK data block. :id=type17

```
VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

Confirm the reception of a complete data block. This event has no meaning for any node that is not in boot mode and should be disregarded.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | MSB of 16-bit CRC for block. | 
 | 1 | LSB for 16-bit CRC for block. | 
 | 2 | MSB of write pointer.         | 
 | 3 | write pointer.                | 
 | 4 | write pointer.                | 
 | 5 | LSB of write pointer.         | 

The write pointer is the actual pointer after the last data has been written i,e the next position on which data will be written. 



----


## Type=18 (0x12) - NACK data block. :id=type18

```
VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK
```

**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

NACK the reception of data block. This event has no meaning for any node that is not in boot mode and should be disregarded.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined error code. | 
 | 1 | MSB of write pointer.    | 
 | 2 | write pointer.           | 
 | 3 | write pointer.           | 
 | 4 | LSB of write pointer.    | 

The write pointer is the actual pointer after the last data has been written i,e the next position on which data will be written. 



----


## Type=19 (0x13) - Program data block. :id=type19

```
VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

Request from a node to program a data block that has been uploaded and confirmed. This event has no meaning for any node that is not in boot mode and should be disregarded.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | MSB of block number. | 
 | 1 | Block number.        | 
 | 2 | Block number.        | 
 | 3 | LSB of block number. | 



----


## Type=20 (0x14) - ACK program data block. :id=type20

```
VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

A node confirms the successful programming of a block. This event has no meaning for any node that is not in boot mode and should be disregarded.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | MSB of block number. | 
 | 1 | Block number.        | 
 | 2 | Block number.        | 
 | 3 | LSB of block number. | 



----


## Type=21 (0x15) - NACK program data block. :id=type21

```
VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

A node failed to program a data block. This event has no meaning for any node that is not in boot mode and should be disregarded.

 | Data byte | Description              | 
 | :---------: | -----------              | 
 | 0         | User defined error code. | 
 | 1         | MSB of block number.     | 
 | 2         | Block number.            | 
 | 3         | Block number.            | 
 | 4         | LSB of block number.     | 



----


## Type=22 (0x16) - Activate new image. :id=type22

```
VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

This command is sent as the last command during the boot-loader sequence. It resets the device and starts it up using the newly loaded code. The 16-bit CRC for the entire program block is sent as an argument. This must be correct for the reset/activation to be performed. NACK boot loader mode will be sent if the CRC is not correct and the node will not leave boot loader mode. 

 | Data byte | Description | 
 | :-------: | ----------- | 
 | 0 | 16 bit CRC of full flash data block, MSB | 
 | 1 | 16 bit CRC of full flash data block LSB  | 

To leave boot mode just send this event and a dummy CRC. Other methods could have been used to load the code but it can still be activated with this event as long as the CRC is correct. This event has no meaning for any node that is not in boot mode and should be disregarded. 

Response can be 

[CLASS1.PROTOCOL, Type=48 (Activate new image ACK)](./class1.protocol.md#type48)

or

[CLASS1.PROTOCOL, Type=49 (Activate new image NACK)](./class1.protocol.md#type49). 



----


## Type=23 (0x17) - GUID drop nickname-ID / reset device. :id=type23

```
VSCP_TYPE_PROTOCOL_RESET_DEVICE
```
**Mandatory.** Should be implemented by all devices.

> Added in version 1.4.0

This is a variant of Class=0, Type=8 but here the full GUID is used instead of the nickname to identify the node that should drop its current nickname and enter the node-name discovery procedure.

As the GUID is 16 bytes this is a multi-frame event. To ease the storage requirements on the nodes only four GUID bytes are send in each frame. The frames must be sent out within one second interval. 


 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | index.      | 
 | 1         | GUID byte.  | 
 | 2         | GUID byte.  | 
 | 3         | GUID byte.  | 
 | 4         | GUID byte.  | 

where index goes from 0-3 and GUID bytes are sent MSB first, like

 | Index = Byte 0 | Byte 1 | Byte 2 | Byte 3 | Byte 4 | 
 | -------------- | ------       | ------       | ------       | ------       | 
 | Index = 0      | GUID byte 15 | GUID byte 14 | GUID byte 13 | GUID byte 12 | 
 | Index = 1      | GUID byte 11 | GUID byte 10 | GUID byte 9  | GUID byte 8  | 
 | Index = 2      | GUID byte 7  | GUID byte 6  | GUID byte 5  | GUID byte 4  | 
 | Index = 3      | GUID byte 3  | GUID byte 2  | GUID byte 1  | GUID byte 0  | 

A device can use just one byte to detect this. This byte is initialized to zero and holds four bits that match correct frames. That is, when this register is equal to 0x0f the nickname should be dropped and the nickname discovery sequence started. The node must also have a timer that reset this byte one second after any of the above frames have been received or when the nickname discovery sequence is started.

Hi-level software must take this one second interval into account when more then one node should be initialized. This event can be used to assign nickname-IDs to silent nodes. This is nodes that does not start the nickname discovery process on startup and instead just sits and wait until they are assigned an ID with this event. 



----


## Type=24 (0x18) - Page read. :id=type24

```
VSCP_TYPE_PROTOCOL_PAGE_READ
```
**Mandatory.** Should be implemented by all devices.

The page read is implemented to make it possible to read/write larger blocks of data. Two register positions are reserved to select a base into this storage. This is a 16-bit number pointing to a 256-byte page. This means that a total of 65535 * 256 bytes are accessible with this method (page 0 is the standard registers).

To read a block of data from the storage, first write the base registers then issue this event and n events will be sent out from the node containing the data from the specified area. If the count pass the border it of the page ( > 0xFF) the transfer will end there.

Note that the page select registers only selects a virtual page that can be accessed with page read/write and not with the ordinary read/write.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node-ID which registers should be read. | 
 | 1 | Index into page. | 
 | 2 | Number of bytes to read (1-255). | 

Response is 

[CLASS1.PROTOCOL, Type=26 (Read page response)](./class1.protocol.md#type26)


The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0-15 | GUID. |
 | 16 | Index into page. | 
 | 17 | Number of bytes to read (1-255). | 




----


## Type=25 (0x19) - Page write. :id=type25

```
VSCP_TYPE_PROTOCOL_PAGE_WRITE
```
**Mandatory.** Should be implemented by all devices.

The write page is implemented to make it possible to write larger blocks of data. One data-space positions is reserved to select a base into this storage. See Page read for a full description.

It is only possible to write one 6-byte chunk at a time in contrast to reading several. This is because VSCP at Level I is aimed at low end devices with limited resources meaning little room for buffers. 

 | Data byte | Description  | 
 | :---------: | ----------- |
 | 0 | Node-ID         |
 | 1 | Register start. |
 | 2-7 | Data. |

Response is 

[CLASS1.PROTOCOL, Type=26 (Read Page Response)](./class1.protocol.md#type26)

The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0-15      | GUID.       | 
 | 16        | Base index. | 
 | 17-…    | Data.       | 

Data count can be as many as the buffer of the Level II node accepts. 




----


## Type=26 (0x1A) - Read/Write page response. :id=type26

```
VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE
```
**Mandatory.** Should be implemented by all devices.

This is a response frame for the read/write page command. The Sequence number goes from 0 up to the last sent frame for a read page request. 

 | Data byte | Description      | 
 | :---------: | -----------      | 
 | 0         | Sequence number. | 
 | 1-7       | Data.            | 

The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I. 

 | Data byte | Description      | 
 | :---------: | -----------      | 
 | 0-15      | GUID.            | 
 | 16        | Sequence number. | 
 | 17-…    | Data.            | 

Data count can be as many as the buffer of the Level II node accepts. 



----


## Type=27 (0x1B) - High end server/service probe. :id=type27

```
VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE
```
Should be implemented by all devices that work over 802.15.4/Ethernet/Internet or other high end protocols.This event can be broadcasted on a segment by a node to get information about available servers. 

The [VSCP daemon documentation](https://grodansparadis.gitbooks.io/the-vscp-daemon) have a description on how server/service discovery works. 



----


## Type=28 (0x1C) - High end server/service response. :id=type28

```
VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE
```
Should be implemented by all devices that work on 802.15.4/Ethernet/Internet and have a Level I link. This is because a Level II device can be present on a Level I bus. A typical example is a Bluetooth gateway. A user find the bud/segment by the Bluetooth device and can then discover other parts of the system through it.

A Level II node respond with [CLASS2.PROTOCOL, Type=32 Level II who is response](./class2.protocol.md#type32) to this event. It is also possible to listen for  [CLASS2.PROTOCOL, Type=20 (0x14) High end server capabilities](./class2.protocol.md#type20) to discover Level II nodes.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | VSCP server low 16-bit capability code MSB | 
 | 1 | VSCP server low 16-bit capability code LSB | 
 | 2 | Server IP address MSB - or other relevant data as of server capabilities (Network byte order) | 
 | 3 | Server IP address - or other relevant data as of server capabilities (Network byte order)     | 
 | 4 | Server IP address - or other relevant data as of server capabilities (Network byte order)     | 
 | 5 | Server IP address LSB - or other relevant data as of server capabilities (Network byte order) | 
 | 6 | Server Port MSB - or other relevant data as of server capabilities | 
 | 7 | Server Port LSB - or other relevant data as of server capabilities | 

Bit codes for capabilities is the same as for the lower 16 bits of [CLASS2.PROTOCOL, Type=20 (0x14) High end server capabilities](class2.protocol.md#type20).

**For programmers:** Bits are defined in [vscp.h](https://github.com/grodansparadis/vscp/blob/master/src/vscp/common/vscp.h).

A node that need a TCP connection to a host. Broadcast HIGH END SERVER PROBE on the segment and waits for HIGH END SERVER RESPONSE from one or more servers to connect to. If a suitable server has responded it can decide to connect to that server. Note that one server can reply with **none, one or many** HIGH END SERVER RESPONSE events.

A server like the VSCP server can span multiple segments and a reply can therefore be received from a remote segment as well. This can be an advantage in some cases and unwanted in some cases. The server configuration should have control on how it is handled. 

The [VSCP daemon documentation](https://grodansparadis.gitbooks.io/the-vscp-daemon) have a description on how server/service discovery works. 



----


## Type=29 (0x1D) - Increment register. :id=type29

```
VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER
```
**Mandatory.** Should be implemented by all devices.

Increment a register content by one with no risk of it changing in between 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node-ID | 
 | 1 | Register to increment. | 

Node should answer with [CLASS1.PROTOCOL, Type=10 (Read/Write register response)](./class1.protocol.md#type10).



----


## Type=30 (0x1E) - Decrement register. :id=type30

```
VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER
```
**Mandatory.** Should be implemented by all devices.

Decrement a register content by one with no risk of it changing in between 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node-ID                | 
 | 1 | Register to decrement. | 

Node should answer with [CLASS1.PROTOCOL, Type=10 (Read/Write register response)](./class1.protocol.md#type10).



----


## Type=31 (0x1F) - Who is there? :id=type31

```
VSCP_TYPE_PROTOCOL_WHO_IS_THERE
```
**Mandatory.** Must be implemented by all devices.

This event can be used as a fast way to find out which nodes there is on a segment. All nodes receiving it should respond. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node-ID or 0xFF for all nodes. | 

Response for a Level I node is [CLASS1.PROTOCOL, Type=32 (Who is there response)](./class1.prototocol.md#type32).
    
A Level II node respond with [CLASS2.PROTOCOL, Type=32 (Level II who is response)](./class2.protocol.md#type32) to this event.



----


## Type=32 (0x20) - Who is there response. :id=type32

```
VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE
```
**Mandatory.** Must be implemented by all devices.

Response from node(s) looks like this 

 | byte 0 | byte 1 | byte 2 | byte 3 | byte 4 | byte 5 | byte 6 | byte 7 | 
 | :------: | ------ | ------ | ------ | ------ | ------ | ------ | ------ | 
 | 0      | GUID15 | GUID14 | GUID13 | GUID12 | GUID11 | GUID10 | GUID9  | 
 | 1      | GUID8  | GUID7  | GUID6  | GUID5  | GUID4  | GUID3  | GUID2  | 
 | 2      | GUID1  | GUID0  | MDF0   | MDF1   | MDF2   | MDF3   | MDF4   | 
 | 3      | MDF5   | MDF6   | MDF7   | MD8    | MDF9   | MDF10  | MDF11  | 
 | 4      | MDF12  | MDF13  | MDF14  | MDF15  | MDF16  | MDF17  | MDF18  | 
 | 5      | MDF19  | MDF20  | MDF21  | MDF22  | MDF23  | MDF24  | MDF25  | 
 | 6      | MDF26  | MDF27  | MDF28  | MDF29  | MDF30  | MDF31  | 0      | 


All seven frames should be sent also if the MDF URL is shorter than 32 characters,



----


## Type=33 (0x21) - Get decision matrix info. :id=type33

```
VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO
```
**Mandatory**

Request a node to report size and offset for its decision matrix. 

 | Data byte | Description   | 
 | :---------: | -----------   | 
 | 0 | Node address. | 

The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0-15 | GUID.       | 

A node that does not have a decision matrix should return zero rows.



----


## Type=34 (0x22) - Decision matrix info response. :id=type34

```
VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE
```
**Mandatory** for nodes with a decision matrix

Report the size for the decision matrix and the offset to its storage. The reported size is the number of decision matrix lines. The offset is the offset in the register address counter from 0x00 (See the register model in this document). If the size returned is zero the node does not have a decision matrix. A node without a decision matrix can also skip to implement this event but it's better if it returns a decision matrix size of zero. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0  | Matrix size (number of rows). Zero for a device with no decision matrix. | 
 | 1 | Offset in register space. | 
 | 2 | Optional page start MSB ( Interpret as zero if not sent ) | 
 | 3 | Optional page start LSB ( Interpret as zero if not sent ) | 
 | 4 | Optional page end MSB ( Interpret as zero if not sent ) Deprecated. Set to zero. | 
 | 5 | Optional page end LSB ( Interpret as zero if not sent ) Deprecated. Set to zero. | 
 | 6 | For a Level II node this is the size of a decision matrix row. | 

The decision matrix can as noted be stored in paged registers and if so it must be accessed with the paged read/write. The decision matrix can also be stored indexed. In that case the first byte is the index and the second is the data. If the index is in location 0x7f then an indexed matrix is assumed. 

 | Register position | Description | 
 | :-----------------: | -----------  | 
 | 0x77 | Index for row in decision matrix. | 
 | 0x78-0x7F | Level I decision matrix row. | 



----


## Type=35 (0x23) - Get embedded MDF. :id=type35

```
VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF
```
**Not mandatory.**

A node that get this event and has an embedded MDF description in flash or similar respond with the description . 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node-ID.    | 



----


## Type=36 (0x24) - Embedded MDF response. :id=type36

```
VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE
```
**Not mandatory.** 

This is the response from a Get embedded MDF. The response consist of several frames where an index in byte0/1 is incremented for each frame and MDF data is in byte 2-7.

If an embedded MDF is not available a response on the form

     byte 0 = 0 
     byte 1 = 0 
     byte 2 = 0

should be sent. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | High byte of MDF description index. |
 | 1 | Low byte of MDF description index.  |
 | 2-7 | MDF data. | 

Note that if sending the events back to back some devices will not be able to cope with the data stream. It is therefor advisable to have a short delay between each mdf data frame sent out.



----


## Type=37 (0x25) - Extended page read register. :id=type37

```
VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ
```
**Mandatory.** Must be implemented by all devices.

Read a register from a node with page information.

Implementation must take care so all page register change done by these routines must restore the content of the page registers to there original content when they are done. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node address. | 
 | 1 | MSB of page where the register is located. | 
 | 2 | LSB of page where the register is located. | 
 | 3 | Register to read (offset into page). | 
 | 4 | Optional: Number of registers to read.     | 

If the number of registers to read is set to zero 256 registers will be read. __Some nodes my have small buffers so this bursts of messages may be a problem.__

An extended read/write response event is returned on success.

This means that a register (or a maximum of 256 consecutive registers) located on any page can be read in a single operation.

The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0-15 | GUID. | 
 | 16 | MSB of page where the register is located. | 
 | 17 | LSB of page where the register is located. | 
 | 18  | Register to read. | 
 | 19   | Optional: bytes to read (1-255). |
 


----


## Type=38 (0x26) - Extended page write register. :id=type38

```
VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE
```
**Mandatory.** Must be implemented by all devices.

Write register content to a node.

Implementation must take care so all page register change done by these routines must restore the content of the page registers to there original content when they are done. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Node address. | 
 | 1 | MSB of page where the register is located. | 
 | 2 | LSB of page where the register is located. | 
 | 3 | Register to write. | 
 | 4 | Content for register. | 
 | 5,6,7 | Optional extra data bytes to write. | 

A read/write response event is returned on success.

Event allows a register (or a maximum of four consecutive registers) located on any page can be written in a single operation.

The following format can be used for nodes on a Level II segment as a midway between a full Level II handling as specified in Class=1024 and Level I.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0-15 | GUID. | 
 | 16 | MSB of page where the register is located. | 
 | 17 | LSB of page where the register is located. | 
 | 18 | Register to write. | 
 | 19  | Content of register. byte 20-buffer-size Optional extra data bytes to write. | 



----


## Type=39 (0x27) - Extended page read/write response. :id=type39

```
VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE
```
**Mandatory.** Must be implemented by all devices.

This is the replay sent for events CLASS1.PROTOCOL, Type=40,41. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Index (starts at zero). | 
 | 1 | MSB of page where the register is located. | 
 | 2 | LSB of page where the register is located. | 
 | 3 | Register read/written. | 
 | 4 | Content of register. | 
 | 5-7 | Content of register if multi register read/write. | 

A multi. register read/write can generate up to 256 events of this type. Index will then be increased by one for each event sent. __Some nodes my have small buffers so this bursts of messages may be a problem. Therefore send them with a low priority.__



----


## Type=40 (0x28) - Get event interest. :id=type40

```
VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST
```
**Not Mandatory.** Implemented if needed.

It is possible to ask a node which event(s) it is interested in with this event. If not implemented the node is supposed to be interested in all events.

All nodes are by default interested in **CLASS1.PROTOCOL**.

The event is intended for very low bandwidth nodes like low power wireless nodes where it saves a lot of bandwidth if only events that really concerns the node is sent to them. 



----


## Type=41 (0x29) - Get event interest response. :id=type41

```
VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE
```
**Not mandatory.** Implemented if needed.

Response for event [CLASS1.PROTOCOL, Type=40 (Get event interest)](./class1.protocol.md#type40). The node report all events it is interested in. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Index | 
 | 1 | class bit 9 (see table) | 
 | 2 | class 1 | 
 | 3 | type 1 | 
 | 4 | class 2 | 
 | 5 | type 2 | 
 | 6 | class 3 | 
 | 7 | type 3 | 

 | Bit | Description | 
 | :---: | ----------- | 
 | 0 | Bit 9 for class 1 | 
 | 1 | Bit 9 for class 2 | 
 | 2 | Bit 9 for class 3 | 
 | 3 | All Type 1 is recognized (set type to zero). | 
 | 4 | All Type 2 is recognized (set type to zero). | 
 | 5 | All Type 3 is recognized (set type to zero). | 
 | 6 | 0  | 
 | 7 | 0  | 

A node that is interested in everything just send a [CLASS1.PROTOCOL, Type=41 (Get event interest response)](./class1.protocol.md#type41) with no data.

Nodes that want to specify events of interest fill them in. If all types of a class should be recognized set the corresponding bit in byte 1 and the related type to zero.

A maximum of 255 frames (index = 0-254) may be sent. 

Fill unused pairs with zero.



----


## Type=48 (0x30) - Activate new image ACK. :id=type48

```
VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

Part of the VSCP boot-loader functionality. This is the positive response after a node received a [CLASS1.PROTOCOL, Type=22 (Activate new image)](./class1.protocol.md#type22). It is sent by the node before the new firmware is booted into.



----


## Type=49 (0x31) - Activate new image NACK. :id=type49

```
VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

Part of the VSCP boot-loader functionality. This is the negative response after a node received a [CLASS1.PROTOCOL, Type=22 (Activate new image)](./class1.protocol.md#type22). It is sent by the node to inform it that it will (or can not) switch to the new firmware image. 



----


## Type=50 (0x32) - Block data transfer ACK. :id=type50

```
VSCP_TYPE_PROTOCOL_START_BLOCK_ACK
```
**Not mandatory** Only needed if a VSCP boot loader algorithm is used.

Part of the VSCP boot-loader functionality. This is the positive response after a node received a [CLASS1.PROTOCOL, Type=16 (Block data)](./class1.protocol.md#type16) event. It is sent by the node as a validation that it can handle the block data transfer. 



----


## Type=51 (0x33) - Block data transfer NACK. :id=type51

```
VSCP_TYPE_PROTOCOL_START_BLOCK_NACK
```
**Not mandatory.** Only needed if a VSCP boot-loader algorithm is used.

Part of the VSCP boot-loader functionality. This is the negative response after a node received a [CLASS1.PROTOCOL, Type=16 (Block data)](./class1.protocol.md#type16) event. It is sent by the node as an indication that it can NOT handle the block data transfer. 



----


[filename](./bottom_copyright.md ':include')