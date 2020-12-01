# Class=86 (0x56) - Set value with zone

    CLASS1.SETVALUEZONEX1

## Description

This class mirrors the standard measurement events is [CLASS1.MEASUREMENT=11](./class1.measurementx1.md) but also have zone information and is intended for setting a value instead of providing a measurement.

 | Byte | Description                                                        |
 | ---- | -----------                                                        |
 | 0    | Index for sensor.                                                  |
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |
 | 3    | Data coding.                                                       |
 | 4-7  | Data with format defined by byte 0.                                |

## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_MEASUREMENTX1_GENERAL
```

This is a general (custom) event that can be used if no other event is suitable. 
 
 


----


[filename](./bottom_copyright.md ':include')