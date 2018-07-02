# Class=2 (0x02) - Security

    CLASS1.SECURITY

## Description

Security related events for alarms and similar devices. 

## <a name="type0"></a>Type=0 (0x00) - General event
    VSCP_TYPE_SECURITY_GENERAL
General Event.
----

## <a name="type1"></a>Type=1 (0x01) - Motion Detect
    VSCP_TYPE_SECURITY_MOTION
A motion has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type2"></a>Type=2 (0x02) - Glass break
    VSCP_TYPE_SECURITY_GLASS_BREAK
A glass break event has been detected. 

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2  | Sub-zone for which event applies to (0-255). 255 is all subzones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type3"></a>Type=3 (0x03) - Beam break
    VSCP_TYPE_SECURITY_BEAM_BREAK
A beam break event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type4"></a>Type=4 (0x04) - Sensor tamper
    VSCP_TYPE_SECURITY_SENSOR_TAMPER
A sensor tamper has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type5"></a>Type=5 (0x05) - Shock sensor
    VSCP_TYPE_SECURITY_SHOCK_SENSOR
A shock sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type6"></a>Type=6 (0x06) - Smoke sensor
    VSCP_TYPE_SECURITY_SMOKE_SENSOR
A smoke sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type7"></a>Type=7 (0x07) - Heat sensor
    VSCP_TYPE_SECURITY_HEAT_SENSOR
A heat sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type8"></a>Type=8 (0x08) - Panic switch
    VSCP_TYPE_SECURITY_PANIC_SWITCH
A panic switch event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type9"></a>Type=9 (0x09) - Door Contact
    VSCP_TYPE_SECURITY_DOOR_OPEN
Indicates a door sensor reports that a door is open. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type10"></a>Type=10 (0x0A) - Window Contact
    VSCP_TYPE_SECURITY_WINDOW_OPEN
Indicates a window sensor reports that a window is open.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type11"></a>Type=11 (0x0B) - CO Sensor
    VSCP_TYPE_SECURITY_CO_SENSOR
CO sensor has detected CO at non secure level

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type12"></a>Type=12 (0x0C) - Frost detected
    VSCP_TYPE_SECURITY_FROST_DETECTED
A frost sensor condition is detected

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type13"></a>Type=13 (0x0D) - Flame detected
    VSCP_TYPE_SECURITY_FLAME_DETECTED
Flame is detected.

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type14"></a>Type=14 (0x0E) - Oxygen Low
    VSCP_TYPE_SECURITY_OXYGEN_LOW
Low oxygen level detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type15"></a>Type=15 (0x0F) - Weight detected.
    VSCP_TYPE_SECURITY_WEIGHT_DETECTED
Weight-detector triggered.

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type16"></a>Type=16 (0x10) - Water detected.
    VSCP_TYPE_SECURITY_WATER_DETECTED
Water has been detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type17"></a>Type=17 (0x11) - Condensation detected.
    VSCP_TYPE_SECURITY_CONDENSATION_DETECTED
Condensation (humidity) detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type18"></a>Type=18 (0x12) - Noise (sound) detected.
    VSCP_TYPE_SECURITY_SOUND_DETECTED
Noise (sound) has been detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type19"></a>Type=19 (0x13) - Harmful sound levels detected.
    VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL
Harmful sound levels detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type20"></a>Type=20 (0x14) - Tamper detected.
    VSCP_TYPE_SECURITY_TAMPER
Tamper detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

{% include "./bottom_copyright.md" %}