# Class=1 (0x01) - Alarm functionality

    CLASS1.ALARM

## Description

Alarm events that indicate that something not ordinary has occurred. Note that the priority bits can be used as a mean to level alarm for severity. 

## Type=0 (0x00) - General event :id=type0
```
VSCP_TYPE_ALARM_GENERAL
```
General Event. 

----

## Type=1 (0x01) - Warning :id=type1
```
VSCP_TYPE_ALARM_WARNING
```
Indicates a warning condition. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=2 (0x02) - Alarm occurred :id=type2
```
VSCP_TYPE_ALARM_ALARM
```
Indicates an alarm condition.

 | Data byte | Description                                                        |
 | :-------: | ------------------------------------------------------------------ |
 |     0     | Alarm byte from standard register 128/0x80.                             |
 |     1     | Zone for which event applies to (0-255). 255 is all zones.         |
 |     2     | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |

If byte 0 is zero this event can be interpreted as alarm-reset.

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## Type=3 (0x03) - Alarm sound on/off :id=type3
```
VSCP_TYPE_ALARM_SOUND
```
Alarm sound should be turned on or off. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=4 (0x04) - Alarm light on/off :id=type4
```
VSCP_TYPE_ALARM_LIGHT
```
Alarm light should be turned on or off. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=5 (0x05) - Power on/off :id=type5
```
VSCP_TYPE_ALARM_POWER
```
Power has been lost or is available again. 

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones.| 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=6 (0x06) - Emergency Stop :id=type6
```
VSCP_TYPE_ALARM_EMERGENCY_STOP
```
Emergency stop has been hit/activated. All systems on the zone/sub-zone should go to their inactive/safe state.
 
 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=7 (0x07) - Emergency Pause :id=type7
```
VSCP_TYPE_ALARM_EMERGENCY_PAUSE
```
Emergency pause has been hit/activated. All systems on the zone/sub-zone should go to their inactive/safe state but preserve there settings. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all subzones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=8 (0x08) - Emergency Reset :id=type8
```
VSCP_TYPE_ALARM_EMERGENCY_RESET
```
Issued after an emergency stop or pause in order for nodes to reset and start operating .

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=9 (0x09) - Emergency Resume :id=type9
```
VSCP_TYPE_ALARM_EMERGENCY_RESUME
```
Issued after an emergency pause in order for nodes to start operating from where they left of without resetting their registers . 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=10 (0x0A) - Arm :id=type10
```
VSCP_TYPE_ALARM_ARM
```
Issued after an alarm system has been armed. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## Type=11 (0x0B) - Disarm :id=type11
```
VSCP_TYPE_ALARM_DISARM
```
Issued after an alarm system has been disarmed. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## Type=12 (0x0C) - Watchdog :id=type12
```
VSCP_TYPE_ALARM_WATCHDOG
```
Issued when a watchdog has been triggered. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | index. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----

## Type=13 (0x0D) - Alarm reset :id=type13
```
VSCP_TYPE_ALARM_RESET
```
Indicates an alarm reset condition.

 | Data byte | Description                                                        |
 | :-------: | ------------------------------------------------------------------ |
 |     0     | Alarm byte from standard register 128/0x80.                             |
 |     1     | Zone for which event applies to (0-255). 255 is all zones.         |
 |     2     | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

[filename](./bottom_copyright.md ':include')