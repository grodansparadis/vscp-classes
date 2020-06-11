# Class=1028 (0x0404) - High Level Object

    CLASS2.HLO

## Description

HLO (High Level Object) class. This class is used to talk to drivers and nodes using XML or JSON or other higher level formats. 
## Type=0 (0x00) - General event :id=type0
```
VSCP2_TYPE_HLO_GENERAL
```
General HLO Event.

----

## Type=1 (0x01) - HLO Command :id=type1
```
VSCP2_TYPE_HLO_COMMAND
```
High Level Object (HLO) event is a command/response or other packed object sent to a device or sent as a response from a device. Content can be XML, JSON, character separated, BASE64, etc.

Command and response packages are separated into different VSCP types to be easier to filter even if this is not strictly needed. 

VSCP uses some of the contents in HLO events to pack driver configuration and other things. Therefore there is a restriction on tags used by user in that all tags prefixed with "vscp-" belongs to VSCP and should not be used by other applications. Apart from that naming is completely free. With XML content this restriction only applies to the highest level tag. For example

```xml
<vscp-cmd />
```

is restricted. But

```xml
<vscp-cmd no-restrictions-on-attributes-here="">
<no-restriction-on-tags-here />
</vscp-cmd>
```

For JSON the restriction does not apply for sub object.

This event is not mandatory to implement by a device.

##### Payload content 

 | Byte   | Description |
 | :----: | ----------- |
 | 0-15  | GUID for node that is addressed |
 | 16 | Type + Encryption |
 | 17-511 | Variable length high level payload. For type=0 first byte 

##### Type (bits 7,6,5,4)

 | Type  | Description |
 | :----:  | ----------- |
 | 0 | UTF8 data where items is separated with a char specified by the first byte in the payload. Typical examples are comma separated-, semicolon separated-, etc, data |
| 1 | XML encoded data |
| 2 | JSON encoded data |
| 3 | BASE64 encoded data |
| 4-14 | Undefined |
| 15 | User specified content |

##### Encryption (bits 3,2,1,0)

 | Type  | Description |
 | :----:  | ----------- |
 | 0 | No encryption |
 | 1 | AES128 |
 | 2 | AES192 |
 | 3 | AES256 |


Encrypted content is encrypted with AES128/AES192/AES256 CBC. The encrypted content is sent with a 16-byte IV appended to it meaning that the actual payload can be max 479 bytes (512-16 (GUID)-1 (type)-16 (IV)).

Multi frame commands is first collected (all events that make up the command is read) then the IV is extracted from the last 16-bytes and after that the decryption of the rest of the data is carried out.


----

## Type=2 (0x02) - HLO Response :id=type2
```
VSCP2_TYPE_HLO_RESPONSE
```
High Level Object (HLO) event is a command/response or other packed object sent to a device or sent as a response from a device. Content can be XML, JSON, character separated, BASE64, etc.

Command and response packages are separated into different VSCP types to be easier to filter even if this is not strictly needed.  

VSCP uses some of the contents in HLO events to pack driver configuration and other things. Therefore there is a restriction on tags used by user in that all tags prefixed with "vscp-" belongs to VSCP and should not be used by other applications. Apart from that naming is completely free. With XML content this restriction only applies to the highest level tag. For example

```xml
<vscp-resp />
```

is restricted. But

```xml
<vscp-resp no-restrictions-on-attributes-here="">
<no-restriction-on-tags-here />
</vscp-resp>
```

For JSON the restriction does not apply for sub object.

This event is not mandatory to implement by a device.

##### Payload content

 | Byte  | Description |
 | :----:  | ----------- |
 | 0-15  | GUID for node that is addressed |
 | 16 | Type + Encryption |
 | 17-511 | Variable length high level payload. For type=0 first byte is separation character. |

##### Type (bits 7,6,5,4)

 | Type  | Description |
 | :----:  | ----------- |
 | 0 | UTF8 data where items is separated with a char specified by the first byte in the payload. Typical examples are comma separated-, semicolon separated-, etc, data |
| 1 | XML encoded data |
| 2 | JSON encoded data |
| 3 | BASE64 encoded data |
| 4-14 | Undefined |
| 15 | User specified content |

##### Encryption (bits 3,2,1,0)

 | Type  | Description |
 | :----:  | ----------- |
 | 0 | No encryption |
 | 1 | AES128 |
 | 2 | AES192 |
 | 3 | AES256 |

Encrypted content is encrypted with AES128/AES192/AES256 CBC. The encrypted content is sent with a 16-byte IV appended to it meaning that the actual payload can be max 479 bytes (512-16 (GUID)-1 (type)-16 (IV)).

Multi frame commands is first collected (all events that make up the command is read) then the IV is extracted from the last 16-bytes and after that the decryption of the rest of the data is carried out.


----

[filename](./bottom_copyright.md ':include')