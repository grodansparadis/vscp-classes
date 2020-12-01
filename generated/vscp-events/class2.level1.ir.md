# Class=622 (0x026E) - Class2 Level I IR

    CLASS2.LEVEL1.IR

## Description

This class mirrors the [CLASS1.IR](./class1.ir.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_REMOTE_GENERAL
```
General Event.


----


## Type=1 (0x01) - RC5 Send/Receive :id=type1

```
VSCP_TYPE_REMOTE_RC5
```
A RC5 remote code. [http://www.xs4all.nl/~sbp/knowledge/ir/sirc.htm ]Use the VSCP abstract remote format if possible.

 | Byte | Description          | 
 | :----: | -----------          | 
 | 0    | RC5 code.            | 
 | 1    | RC5 Address.         | 
 | 2    | Repeat count if any. | 


----


## Type=3 (0x03) - SONY 12-bit Send/Receive :id=type3

```
VSCP_TYPE_REMOTE_SONY12
```
A SONY remote code. [http://www.xs4all.nl/~sbp/knowledge/ir/sirc.htm] Use the VSCP abstract remote format if possible.

 | Byte | Description          | 
 | :----: | -----------          | 
 | 0    | SONY code.           | 
 | 1    | SONY address.        | 
 | 2    | Repeat count if any. | 



----


## Type=32 (0x20) - LIRC (Linux Infrared Remote Control) :id=type32

```
VSCP_TYPE_REMOTE_LIRC
```
Packed LIRC codes code. LRC Codes are normally sent as 64-bit codes or even larger codes. Only codes with a length less then 56 bits (7-bytes) are supported by VSCP and the most significant byte of the LIRC code is not transferred. [http://www.lirc.org/](http://www.lirc.org/) 

 | Byte | Description          | 
 | :----: | -----------          | 
 | 0    | LIRC Code, MSB.      | 
 | 1    | LIRC Code.           | 
 | 2    | LIRC Code.           | 
 | 3    | LIRC Code.           | 
 | 4    | LIRC Code.           | 
 | 5    | LIRC Code.           | 
 | 6    | LIRC Code. LSB.      | 
 | 7    | Repeat count if any. | 



----


## Type=48 (0x30) - VSCP Abstract Remote Format :id=type48

```
VSCP_TYPE_REMOTE_VSCP
```
Instead of sending codes that relates to a certain remote this format is general. And therefore more flexible 

 | Byte | Description                                                            | 
 | :----: | -----------                                                            | 
 | 0    | Code, MSB.                                                             | 
 | 1    | Code LSB.                                                              | 
 | 2    | Zone for which event applies to (0-255). 255 is all zones.             | 
 | 3    | Sub-zone for which the event applies to (0-255). 255 is all sub-zones. | 
 | 4    | Repeat count if any.                                                   | 



----


## Type=49 (0x31) - MAPito Remote Format :id=type49

```
VSCP_TYPE_REMOTE_MAPITO
```
Instead of sending codes that relates to a certain remote this format is general. And therefore more flexible. 

 | Byte | Description                                                            | 
 | :----: | -----------                                                            | 
 | 0    | Repeat Count.                                                          | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.             | 
 | 2    | Sub-zone for which the event applies to (0-255). 255 is all sub-zones. | 
 | 3    | Control address MSB.                                                   | 
 | 4    | Control address.                                                       | 
 | 5    | Control address.                                                       | 
 | 6    | Control address LSB.                                                   | 
 | 7    | Key Code.                                                              | 



----


[filename](./bottom_copyright.md ':include')