# Class=50 (0x32) - Alert On LAN

    CLASS1.AOL

## Description

AOL Event. The main idea of AOL is to send warnings to remote administrators about different PC conditions using a LAN. Info here [https://en.wikipedia.org/wiki/Alert_on_LAN](https://en.wikipedia.org/wiki/Alert_on_LAN)

## Type=0 (0x00) - General event :id=type0
```
VSCP_TYPE_AOL_GENERAL
```
General Event.
----

## Type=1 (0x01) - System unplugged from power source :id=type1
```
VSCP_TYPE_AOL_UNPLUGGED_POWER
```
This node was unplugged from its power source.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=2 (0x02) - System unplugged from network :id=type2
```
VSCP_TYPE_AOL_UNPLUGGED_LAN
```
This node was unplugged from the network.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=3 (0x03) - Chassis intrusion :id=type3
```
VSCP_TYPE_AOL_CHASSIS_INTRUSION
```
This node detected chassis intrusion.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=4 (0x04) - Processor removal :id=type4
```
VSCP_TYPE_AOL_PROCESSOR_REMOVAL
```
This node detected processor removal.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=5 (0x05) - System environmental errors :id=type5
```
VSCP_TYPE_AOL_ENVIRONMENT_ERROR
```
This node detected system environmental errors.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=6 (0x06) - High temperature :id=type6
```
VSCP_TYPE_AOL_HIGH_TEMPERATURE
```
This node detected high temperature.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=7 (0x07) - Fan speed problem :id=type7
```
VSCP_TYPE_AOL_FAN_SPEED
```
This node detected Fan speed problem.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=8 (0x08) - Voltage fluctuations :id=type8
```
VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS
```
This node detected Voltage fluctuations.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=9 (0x09) - Operating system errors :id=type9
```
VSCP_TYPE_AOL_OS_ERROR
```
This node detected Operating system errors.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=10 (0x0A) - System power-on error :id=type10
```
VSCP_TYPE_AOL_POWER_ON_ERROR
```
This node detected System power-on errors.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=11 (0x0B) - System is hung :id=type11
```
VSCP_TYPE_AOL_SYSTEM_HUNG
```
This node detected System is hung.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=12 (0x0C) - Component failure :id=type12
```
VSCP_TYPE_AOL_COMPONENT_FAILURE
```
This node detected Component failure.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=13 (0x0D) - Remote system reboot upon report of a critical failure :id=type13
```
VSCP_TYPE_AOL_REBOOT_UPON_FAILURE
```
This node detected Remote system reboot upon report of a critical failure.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=14 (0x0E) - Repair Operating System :id=type14
```
VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM
```
This node detected Repair Operating System.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=15 (0x0F) - Update BIOS image :id=type15
```
VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE
```
This node detected Update BIOS image.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## Type=16 (0x10) - Update Perform other diagnostic procedures :id=type16
```
VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE
```
This node detected Update Perform other diagnostic procedures.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

[filename](./bottom_copyright.md ':include')