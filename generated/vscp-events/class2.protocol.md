# Class=1024 (0x0400) - Level II Protocol Functionality

    CLASS2.PROTOCOL

## Description

For Level I events class=0 defines protocol control functionality. All events of this class are repeated at class=512 for use on Level II networks. The only difference is that the GUID is used instead of the Level I nickname.

This class defines protocol functionality for Level II. To simplify the handling of level II events, the data portion of the VSCP event can be considered as being made up of two parts. An 8-byte code portion (size of long integer) followed by a data portion if required. This is simply done to make processing level II events a little easier. The following events have been added to the level II control events to support configuration management. 

## Type=0 (0x00) - General event :id=type0
```
VSCP2_TYPE_PROTOCOL_GENERAL
```
General Event.
----

## Type=1 (0x01) - Read Register :id=type1
```
VSCP2_TYPE_PROTOCOL_READ_REGISTER
```
Read a Level II register 

 | Byte       | Description                                      | 
 | ----       | -----------                                      | 
 | Byte 0-15  | Contains the GUID of the target node (MSB->LSB). | 
 | Byte 16-19 | Register to read (or start index), (MSB->LSB).   | 
 | Byte 20-21 | Number of registers to read (max 487).           | 

Number of registers to read can also be restricted by the buffer size on the board (register 0x98). If this register is set to something else then 0 (default) this is the max size for data.

This means that buffer_size - 8 is maximum data bytes read. 

----

## Type=2 (0x02) - Write Register :id=type2
```
VSCP2_TYPE_PROTOCOL_WRITE_REGISTER
```
 | Byte       | Description                                      | 
 | ----       | -----------                                      | 
 | Byte 0-15  | Contains the GUID of the target node (MSB->LSB). | 
 | Byte 16-19 | Register to write (or start index), (MSB->LSB).  | 
 | Byte 20… | Data to write to register(s).                    | 

Number of registers to write can also be restricted by the buffer size on the board (register 0x98). If this register is set to something else then 0 (default) this is the max size for data. This means that buffer_size - 24 is maximum data bytes written. 

----

## Type=3 (0x03) - Read Write Response :id=type3
```
VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE
```
This is the response from a read and a write. Note that the data is returned in both cases and can be checked for validity. 

 | Byte      | Description                               | 
 | ----      | -----------                               | 
 | Byte 0-3  | Start register for register read/written. | 
 | Byte 4… | Data read/written.                        | 

----

## Type=20 (0x14) - High end server/service capabilities :id=type20
```
VSCP2_TYPE_PROTOCOL_HIGH_END_SERVER_CAPS
```
Should be implemented by all Level II devices and be sent out at least once every 60 second.

 | Data byte | Description                                                                                                                      |
 | :----: | -----------                                                                                                                      |
 | 0         | VSCP server 64-bit capability code MSB                                                                                           |
 | 1         | VSCP server 64-bit capability code                                                                                               |
 | 2         | VSCP server 64-bit capability code                                                                                               |
 | 3         | VSCP server 64-bit capability code                                                                                               |
 | 4         | VSCP server 64-bit capability code                                                                                               |
 | 5         | VSCP server 64-bit capability code                                                                                               |
 | 6         | VSCP server 64-bit capability code                                                                                               |
 | 7         | VSCP server 64-bit capability code LSB                                                                                           |
 | 8-23      | GUID for server                                                                                                                  |
 | 24-39     | For IPv4 or IPv6 IP address or other transport id identifier (MSB first). Note that this info is often already part of the GUID. |
 | 40-103    | 64 byte max zero terminated utf8 encoded name for this server. Blank if no name set.                                             |
 | 104..     | Non standard port info for services. Not needed if the standard port is used.                                                    |

### Capability code

Description of bit-usage for VSCP server 64-bit **capability code**. A bit should be set only if the service is active.

 | Bit       | Usage                   |
 | :----:       | -----                |
 | 63 | Node supports VSCP remote variables. |
 | 62 | Node have a standard decision matrix. |
 | 61 | Node is a multi interface node (tcp/ip 'interface' command list interfaces). |
 | Bit 16-60 | Reserved.               |
 | Bit 15    | Have VSCP TCP server with VCSP link interface.  |
 | Bit 14    | Have VSCP UDP server.   |
 | Bit 13    | Have VSCP Multicast announce interface. |
 | Bit 12    | Have VSCP raw Ethernet. |
 | Bit 11    | Have Web server.        |
 | Bit 10    | Have VSCP Websocket interface . |
 | Bit 9     | Have VSCP REST interface. |
 | Bit 8     | Have VSCP Multicast channel support. |
 | Bit 7     | Reserved.                 |
 | Bit 6     | IP6 support.              |
 | Bit 5     | IP4 support.              |
 | Bit 4     | SSL support.              |
 | Bit 3     | Accepts two or more simultaneous connections on TCP/IP interface. A limited device may only accept one connection.   |
 | Bit 2     | Support AES256 encryption. |
 | Bit 1     | Support AES192 encryption. |
 | Bit 0     | Support AES128 encryption. |

**For programmers:** Bits are defined in vscp.h.

### Non standard ports

Non standard port definitions. Each consist of three bytes.
 | Byte | Description                                                                                                     |
 | :----: | -----------                                                                                                     |
 | 0    | 0-63 Identify the service from the bit number (see bit usage). Offset zero. Bit 7 is set if encryption is used. |
 | 1    | Port MSB byte                                                                                                   |
 | 2    | Port LSB byte                                                                                                   |

### Example

**Example:** The standard TCP/IP server is on port **9598** if it has been moved to port **32000** the three bytes will be

 | Byte | Description                                       |
 | :----: | -----------                                       |
 | 0    | 15 for bit 15 which is the TCP/IP server          |
 | 1    | 0xD4 which is the most significant byte of 32000  |
 | 3    | 0x00 which is the least significant byte of 32000 |

----

## Type=32 (0x20) - Level II who is there response :id=type32
```
VSCP2_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE
```
This defines the response from a Level II node for a [CLASS1.PROTOCOL, Type=32, Who is there?](./class1.protocol.md#type31) event.

 | Byte  | Description                                       |
 | :----:  | -----------                                     |
 | 0-15  | GUID for node                                     |
 | 16-47 | MDF of node                                       |
 | 3     | 0x00 which is the least significant byte of 32000 |

----

[filename](./bottom_copyright.md ':include')