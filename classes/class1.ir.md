# Class=110 (0x6E) IR Remote I/f

    CLASS1.IR

## Description

This is the IR code sent/received from common remote controls. 

## Type = 0 (0x00)

Undefined 

## Type = 1 (0x01) RC5 Send/Receive.

A RC5 remote code. [http://www.xs4all.nl/~sbp/knowledge/ir/sirc.htm ]Use the VSCP abstract remote format if possible.

 | Byte | Description          | 
 | ---- | -----------          | 
 | 0    | RC5 code.            | 
 | 1    | RC5 Address.         | 
 | 2    | Repeat count if any. | 

## Type = 3 (0x02) SONY 12-bit Send/Receive.

A SONY remote code. [http://www.xs4all.nl/~sbp/knowledge/ir/sirc.htm] Use the VSCP abstract remote format if possible.

 | Byte | Description          | 
 | ---- | -----------          | 
 | 0    | SONY code.           | 
 | 1    | SONY address.        | 
 | 2    | Repeat count if any. | 

## Type = 32 (0x20) LIRC (Linux Infrared Remote Control).

Packed LIRC codes code. LRC Codes are normally sent as 64-bit codes or even larger codes. Only codes with a length less then 56 bits (7-bytes) are supported by VSCP and the most significant byte of the LIRC code is not transferred. [http://www.lirc.org/](http://www.lirc.org/) 

 | Byte | Description          | 
 | ---- | -----------          | 
 | 0    | LIRC Code, MSB.      | 
 | 1    | LIRC Code.           | 
 | 2    | LIRC Code.           | 
 | 3    | LIRC Code.           | 
 | 4    | LIRC Code.           | 
 | 5    | LIRC Code.           | 
 | 6    | LIRC Code. LSB.      | 
 | 7    | Repeat count if any. | 

## Type = 48 (0x30) VSCP Abstract Remote Format.

Instead of sending codes that relates to a certain remote this format is general. And therefore more flexible 

 | Byte | Description                                                            | 
 | ---- | -----------                                                            | 
 | 0    | Code, MSB.                                                             | 
 | 1    | Code LSB.                                                              | 
 | 2    | Zone for which event applies to (0-255). 255 is all zones.             | 
 | 3    | Sub-zone for which the event applies to (0-255). 255 is all sub-zones. | 
 | 4    | Repeat count if any.                                                   | 

## Type = 49 (0x31) MAPito Remote Format.

Instead of sending codes that relates to a certain remote this format is general. And therefore more flexible. 

 | Byte | Description                                                            | 
 | ---- | -----------                                                            | 
 | 0    | Repeat Count.                                                          | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.             | 
 | 2    | Sub-zone for which the event applies to (0-255). 255 is all sub-zones. | 
 | 3    | Control address MSB.                                                   | 
 | 4    | Control address.                                                       | 
 | 5    | Control address.                                                       | 
 | 6    | Control address LSB.                                                   | 
 | 7    | Key Code.                                                              | 


{% include "./bottom_copyright.md" %}
