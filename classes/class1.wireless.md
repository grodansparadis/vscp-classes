# Class=212 (0xD4) Wireless

    CLASS1.WIRELESS

## Description

This class of events is used for wireless equipment such as cellular phones etc.


*  For IMEI code use CLASS1.INFORMATION, Type = 37 (0x25) Token Activity. 

*  For IMSI code use CLASS1.INFORMATION, Type = 37 (0x25) Token Activity . 

*  For Signal Quality use CLASS1.DATA, Type = 5 (0x05) Signal Quality 

*  For Time-stamp use CLASS1.MEASUREMENT, Type = 4 (0x04) Time

## Type = 0 (0x00) Undefined.

General event. 

## Type = 1 (0x01) GSM Cell.

Event with ID for the GSM cell. Normally this is a 16-bit value but a 32-bit value is used in VSCP. 

 | Byte | Description  | 
 | ---- | -----------  | 
 | 0-3  | GSM Cell ID. | 

{% include "./bottom_copyright.md" %}
