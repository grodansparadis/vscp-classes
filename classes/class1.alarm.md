# Class=1 (0x01) Alarm functionality

    CLASS1.ALARM
    
## Description

Alarm events that indicate that something not ordinary has occurred. Note that the priority bits can be used as a mean to level alarm for severity. 

## Type = 0 (0x00) Undefined

Undefined alarm. 

##   Type=1 (0x01) Warning 

Indicates a warning condition. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=2 (0x02) Alarm occurred

Indicates an alarm condition. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=3 (0x03) Alarm sound on/off

Alarm sound should be turned on or off. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=4 (0x04) Alarm light on/off

Alarm light should be turned on or off. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=5 (0x05) Power on/off

Power has been lost or is available again. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=6 (0x06) Emergency Stop 

Emergency stop has been hit/activated. All systems on the zone/sub-zone should go to their inactive/safe state.
 
 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=7 (0x07) Emergency Pause

Emergency pause has been hit/activated. All systems on the zone/sub-zone should go to their inactive/safe state but preserve there settings. 

 | Data byte | Description                                                       | 
 | --------- | -----------                                                       | 
 | 0         | 0=off. 1=on.                                                      | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all subzones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=8 (0x08) Emergency Reset

Issued after an emergency stop or pause in order for nodes to reset and start operating .

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=9 (0x09) Emergency Resume 

Issued after an emergency pause in order for nodes to start operating from where they left of without resetting their registers . 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=10 (0x0A) Arm

Issued after an alarm system has been armed. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

##   Type=11 (0x0B) Disarm

Issued after an alarm system has been disarmed. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | 0=off. 1=on.                                                       | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

{% include "./bottom_copyright.md" %}
