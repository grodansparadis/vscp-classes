# Class=1 (0x01) - Alarm functionality

    CLASS1.ALARM

## Description

Alarm events that indicate that something not ordinary has occurred. Note that the priority bits can be used as a mean to level alarm for severity. 

## <a name="type0"></a>Type=0 (0x00) - General event
    VSCP_TYPE_ALARM_GENERAL
General Event. 
----

## <a name="type1"></a>Type=1 (0x01) - Warning
    VSCP_TYPE_ALARM_WARNING
Indicates a warning condition. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type2"></a>Type=2 (0x02) - Alarm occurred
    VSCP_TYPE_ALARM_ALARM 
Indicates an alarm condition. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type3"></a>Type=3 (0x03) - Alarm sound on/off
    VSCP_TYPE_ALARM_SOUND
Alarm sound should be turned on or off. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type4"></a>Type=4 (0x04) - Alarm light on/off
    VSCP_TYPE_ALARM_LIGHT
Alarm light should be turned on or off. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type5"></a>Type=5 (0x05) - Power on/off
    VSCP_TYPE_ALARM_POWER 
Power has been lost or is available again. 

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones.| 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type6"></a>Type=6 (0x06) - Emergency Stop
    VSCP_TYPE_ALARM_EMERGENCY_STOP
Emergency stop has been hit/activated. All systems on the zone/sub-zone should go to their inactive/safe state.
 
 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type7"></a>Type=7 (0x07) - Emergency Pause
    VSCP_TYPE_ALARM_EMERGENCY_PAUSE
Emergency pause has been hit/activated. All systems on the zone/sub-zone should go to their inactive/safe state but preserve there settings. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all subzones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type8"></a>Type=8 (0x08) - Emergency Reset
    VSCP_TYPE_ALARM_EMERGENCY_RESET
Issued after an emergency stop or pause in order for nodes to reset and start operating .

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type9"></a>Type=9 (0x09) - Emergency Resume
    VSCP_TYPE_ALARM_EMERGENCY_RESUME
Issued after an emergency pause in order for nodes to start operating from where they left of without resetting their registers . 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type10"></a>Type=10 (0x0A) - Arm
    VSCP_TYPE_ALARM_ARM 
Issued after an alarm system has been armed. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type11"></a>Type=11 (0x0B) - Disarm
    VSCP_TYPE_ALARM_DISARM
Issued after an alarm system has been disarmed. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | **0**=off. **1**=on. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

{% include "./bottom_copyright.md" %}