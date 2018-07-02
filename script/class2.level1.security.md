# Class=514 (0x0202) - Class2 Level I Security

    CLASS2.LEVEL1.SECURITY

## Description

This class mirrors the [CLASS1.SECURITY](./class1.security.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## <a name="type0"></a>Type=0 (0x00) - General event
    VSCP_TYPE_SECURITY_GENERALGeneral Event.
----

## <a name="type1"></a>Type=1 (0x01) - Motion Detect
    VSCP_TYPE_SECURITY_MOTIONA motion has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type2"></a>Type=2 (0x02) - Glass break
    VSCP_TYPE_SECURITY_GLASS_BREAKA glass break event has been detected. 

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2  | Sub-zone for which event applies to (0-255). 255 is all subzones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type3"></a>Type=3 (0x03) - Beam break
    VSCP_TYPE_SECURITY_BEAM_BREAKA beam break event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type4"></a>Type=4 (0x04) - Sensor tamper
    VSCP_TYPE_SECURITY_SENSOR_TAMPERA sensor tamper has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type5"></a>Type=5 (0x05) - Shock sensor
    VSCP_TYPE_SECURITY_SHOCK_SENSORA shock sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type6"></a>Type=6 (0x06) - Smoke sensor
    VSCP_TYPE_SECURITY_SMOKE_SENSORA smoke sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type7"></a>Type=7 (0x07) - Heat sensor
    VSCP_TYPE_SECURITY_HEAT_SENSORA heat sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type8"></a>Type=8 (0x08) - Panic switch
    VSCP_TYPE_SECURITY_PANIC_SWITCHA panic switch event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

----

## <a name="type9"></a>Type=9 (0x09) - Door Contact
    VSCP_TYPE_SECURITY_DOOR_OPENIndicates a door sensor reports that a door is open. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type10"></a>Type=10 (0x0A) - Window Contact
    VSCP_TYPE_SECURITY_WINDOW_OPENIndicates a window sensor reports that a window is open.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type11"></a>Type=11 (0x0B) - CO Sensor
    VSCP_TYPE_SECURITY_CO_SENSORCO sensor has detected CO at non secure level

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type12"></a>Type=12 (0x0C) - Frost detected
    VSCP_TYPE_SECURITY_FROST_DETECTEDA frost sensor condition is detected

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type13"></a>Type=13 (0x0D) - Flame detected
    VSCP_TYPE_SECURITY_FLAME_DETECTEDFlame is detected.

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type14"></a>Type=14 (0x0E) - Oxygen Low
    VSCP_TYPE_SECURITY_OXYGEN_LOWLow oxygen level detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type15"></a>Type=15 (0x0F) - Weight detected.
    VSCP_TYPE_SECURITY_WEIGHT_DETECTEDWeight-detector triggered.

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type16"></a>Type=16 (0x10) - Water detected.
    VSCP_TYPE_SECURITY_WATER_DETECTEDWater has been detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type17"></a>Type=17 (0x11) - Condensation detected.
    VSCP_TYPE_SECURITY_CONDENSATION_DETECTEDCondensation (humidity) detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type18"></a>Type=18 (0x12) - Noise (sound) detected.
    VSCP_TYPE_SECURITY_SOUND_DETECTEDNoise (sound) has been detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type19"></a>Type=19 (0x13) - Harmful sound levels detected.
    VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVELHarmful sound levels detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

----

## <a name="type20"></a>Type=20 (0x14) - Tamper detected.
    VSCP_TYPE_SECURITY_TAMPERTamper detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

{% include "./bottom_copyright.md" %}