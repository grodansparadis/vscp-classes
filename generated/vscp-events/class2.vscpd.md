# Class=65535 (0xFFFF) - VSCP Daemon internal events

    CLASS2.VSCPD

## Description

This class is reserved for internal events used by the damon to communicate with level III drivers. Events of this type should never be visible on a physical bus. 

## Type=0 (0x00) - General event :id=type0
```
VSCP2_TYPE_VSCPD_GENERAL
```
## General Event.

| Data byte | Description |
| :----: | ----------- |
| 0-15 | GUID for driver (MSB->LSB). |


----

## Type=1 (0x01) - Loop :id=type1
```
VSCP2_TYPE_VSCPD_LOOP
```
Reserved

| Data byte | Description |
| :----: | ----------- |
| 0-15 | GUID for driver (MSB->LSB). |

----

## Type=3 (0x03) - Pause :id=type3
```
VSCP2_TYPE_VSCPD_PAUSE
```
The machine/daemon is going to a pause state.

| Data byte | Description |
| :----: | ----------- |
| 0-15 | GUID for driver (MSB->LSB). |

----

## Type=4 (0x04) - Activate :id=type4
```
VSCP2_TYPE_VSCPD_ACTIVATE
```
The machine/daemon is going from a pause state. 

| Data byte | Description |
| :----: | ----------- |
| 0-15 | GUID for driver (MSB->LSB). |

----

## Type=5 (0x05) - Starting up :id=type5
```
VSCP2_TYPE_VSCPD_STARTING_UP
```
The machine/daemon is starting up. This is the first event sent after a machine start up. 

| Data byte | Description |
| :----: | ----------- |
| 0-15 | GUID for driver (MSB->LSB). |

----

## Type=6 (0x06) - Shutting down :id=type6
```
VSCP2_TYPE_VSCPD_SHUTTING_DOWN
```
The machine/daemon is shutting down. This is the last event sent before a machine is shutting off.  

| Data byte | Description |
| :----: | ----------- |
| 0-15 | GUID for driver (MSB->LSB). |

----

## Type=7 (0x07) - Start :id=type7
```
VSCP2_TYPE_VSCPD_DRV3_START
```
This event is used by the VSCP daemon to stop a Level III driver.

| Data byte | Description |
 | :----: | ----------- |
 | 0-15 | GUID for driver (MSB->LSB). |



----

## Type=8 (0x08) - Stop :id=type8
```
VSCP2_TYPE_VSCPD_DRV3_STOP
```
This event is used by the VSCP daemon to pause execution of a Level III driver.

| Data byte | Description |
 | :----: | ----------- |
 | 0-15 | GUID for driver (MSB->LSB). |

----

## Type=9 (0x09) - Pause :id=type9
```
VSCP2_TYPE_VSCPD_DRV3_PAUSE
```
Reserved

| Data byte | Description |
| :----: | ----------- |
| 0-15 | GUID for driver (MSB->LSB). |

----

## Type=10 (0x0A) - Resume :id=type10
```
VSCP2_TYPE_VSCPD_DRV3_RESUME
```
This event is used by the VSCP daemon to resume execution of a Level III driver.

| Data byte | Description |
 | :----: | ----------- |
 | 0-15 | GUID for driver (MSB->LSB). |
----

## Type=11 (0x0B) - Restart :id=type11
```
VSCP2_TYPE_VSCPD_DRV3_RESTART
```
This event is used by the VSCP daemon to restart a Level III driver.

| Data byte | Description |
 | :----: | ----------- |
 | 0-15 | GUID for driver (MSB->LSB). |


----

## Type=12 (0x0C) - Config :id=type12
```
VSCP2_TYPE_VSCPD_DRV3_CONFIG
```
This event is used by the VSCP daemon to (re)configure a Level III driver.

Event data is GUID for driver followed by a null terminated UTF8 string that is the path to a XML configuration string.

| Data byte | Description |
 | :----: | ----------- |
 | 0-15 | GUID for driver (MSB->LSB). |
 | 16 -| NULL terminated path to config file |
 

----

[filename](./bottom_copyright.md ':include')