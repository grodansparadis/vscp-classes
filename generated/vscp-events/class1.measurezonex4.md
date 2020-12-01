# Class=69 (0x45) - Measurement with zone

    CLASS1.MEASUREZONEX4

## Description

Measurements with zone information. This class mirrors the standard measurement events is [CLASS1.MEASUREMENT=14](./class1.measurementx4.md) with the difference that index, zone, and sub-zone is added. This in turn limits the data-coding options to normalized integer (see [Data-coding](./data_coding.md) for a description). The default unit for the measurement should always be used.

 | Byte | Description                                                        |
 | :----: | -----------                                                        |
 | 0    | Index for sensor.                                                  |
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |
 | 3    | Data coding.                                                       |
 | 4-7  | Data with format defined by byte 0.                                |

## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_MEASUREMENTX4_GENERAL
```
General Event.





----


[filename](./bottom_copyright.md ':include')