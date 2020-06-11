# Class=206 (0xCE) - Position (GNSS)

    CLASS1.GNSS

## Description

Control and interface for the global navigation satellite system (GNSS) (for example GPS) protocols (NMEA, SIRF etc)to VSCP


*  For Angle use CLASS1.MEASUREMENT, Type = 30 (0x1E) Angle 

*  For Altitude use CLASS1.MEASUREMENT, Type = 51 (0x33) Altitude. 

*  For Speed use CLASS1.MEASUREMENT, Type = 32 (0x20) Speed 

*  For Signal Quality use CLASS1.DATA, Type = 5 (0x05) Signal Quality 

*  For Time-stamp use CLASS1.MEASUREMENT, Type = 4 (0x04) Time

Typically one NMEA, SIRF etc frame with information needs to be translated to many VSCP events. It is possible to group the events together with


*  CLASS1.INFORMATION, Type=46 (0x2E) Start of record 

*  CLASS1.INFORMATION, Type=47 (0x2F) End of record

if preferred to hold the events together. 
## Type=0 (0x00) - General event :id=type0
```
VSCP_TYPE_GNSS_GENERAL
```
General Event.
----

## Type=1 (0x01) - Position :id=type1
```
VSCP_TYPE_GNSS_POSITION
```
Position information as decimal Latitude + Longitude. 

 | Byte | Description                        | 
 | :----: | -----------                        | 
 | 0-3  | Latitude as floating point value.  | 
 | 4-7  | Longitude as floating point value. | 

----

## Type=2 (0x02) - Satellites :id=type2
```
VSCP_TYPE_GNSS_SATELLITES
```
Number of satellites used. 

 | Byte | Description                | 
 | :----: | -----------                | 
 | 0    | Number of satellites used. | 

----

[filename](./bottom_copyright.md ':include')