# Class=514 (0x0202) - Class2 Level I Security

    CLASS2.LEVEL1.SECURITY

## Description

This class mirrors the [CLASS1.SECURITY](./class1.security.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_SECURITY_GENERAL
```
General Event.


----


## Type=1 (0x01) - Motion Detect :id=type1

```
VSCP_TYPE_SECURITY_MOTION
```
A motion has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 



----


## Type=2 (0x02) - Glass break :id=type2

```
VSCP_TYPE_SECURITY_GLASS_BREAK
```
A glass break event has been detected. 

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2  | Sub-zone for which event applies to (0-255). 255 is all subzones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 



----


## Type=3 (0x03) - Beam break :id=type3

```
VSCP_TYPE_SECURITY_BEAM_BREAK
```
A beam break event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 



----


## Type=4 (0x04) - Sensor tamper :id=type4

```
VSCP_TYPE_SECURITY_SENSOR_TAMPER
```
A sensor tamper has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 



----


## Type=5 (0x05) - Shock sensor :id=type5

```
VSCP_TYPE_SECURITY_SHOCK_SENSOR
```
A shock sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 



----


## Type=6 (0x06) - Smoke sensor :id=type6

```
VSCP_TYPE_SECURITY_SMOKE_SENSOR
```
A smoke sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 



----


## Type=7 (0x07) - Heat sensor :id=type7

```
VSCP_TYPE_SECURITY_HEAT_SENSOR
```
A heat sensor event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 



----


## Type=8 (0x08) - Panic switch :id=type8

```
VSCP_TYPE_SECURITY_PANIC_SWITCH
```
A panic switch event has been detected. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 



----


## Type=9 (0x09) - Door Contact :id=type9

```
VSCP_TYPE_SECURITY_DOOR_OPEN
```
Indicates a door sensor reports that a door is open. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=10 (0x0A) - Window Contact :id=type10

```
VSCP_TYPE_SECURITY_WINDOW_OPEN
```
Indicates a window sensor reports that a window is open.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=11 (0x0B) - CO Sensor :id=type11

```
VSCP_TYPE_SECURITY_CO_SENSOR
```
CO sensor has detected CO at non secure level

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=12 (0x0C) - Frost detected :id=type12

```
VSCP_TYPE_SECURITY_FROST_DETECTED
```
A frost sensor condition is detected

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=13 (0x0D) - Flame detected :id=type13

```
VSCP_TYPE_SECURITY_FLAME_DETECTED
```
Flame is detected.

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=14 (0x0E) - Oxygen Low :id=type14

```
VSCP_TYPE_SECURITY_OXYGEN_LOW
```
Low oxygen level detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=15 (0x0F) - Weight detected. :id=type15

```
VSCP_TYPE_SECURITY_WEIGHT_DETECTED
```
Weight-detector triggered.

 | Data byte | Description | 
 | :---------: | -----------  | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=16 (0x10) - Water detected. :id=type16

```
VSCP_TYPE_SECURITY_WATER_DETECTED
```
Water has been detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=17 (0x11) - Condensation detected. :id=type17

```
VSCP_TYPE_SECURITY_CONDENSATION_DETECTED
```
Condensation (humidity) detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=18 (0x12) - Noise (sound) detected. :id=type18

```
VSCP_TYPE_SECURITY_SOUND_DETECTED
```
Noise (sound) has been detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=19 (0x13) - Harmful sound levels detected. :id=type19

```
VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL
```
Harmful sound levels detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.



----


## Type=20 (0x14) - Tamper detected. :id=type20

```
VSCP_TYPE_SECURITY_TAMPER
```
Tamper detected.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | User defined data. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=21 (0x15) - Authenticated :id=type21

```
VSCP_TYPE_SECURITY_AUTHENTICATED
```
Authenticated. A user or a device has been authenticated.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=22 (0x16) - Unauthenticated :id=type22

```
VSCP_TYPE_SECURITY_UNAUTHENTICATED
```
Unauthenticated. A user or a device has failed authentication.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=23 (0x17) - Authorized :id=type23

```
VSCP_TYPE_SECURITY_AUTHORIZED
```
Authorized. A user or a device has been authorized.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=24 (0x18) - Unauthorized :id=type24

```
VSCP_TYPE_SECURITY_UNAUTHORIZED
```
Unauthorized. A user or a device has failed authorization.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=25 (0x19) - ID check :id=type25

```
VSCP_TYPE_SECURITY_ID_CHECK
```
ID Check. A user or a device has gone through an identification test and is either allowed or not allowed access according to bits in byte 0.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | ID check bits. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |

 **ID Check bits**
 
 | Bit | Description |
 | :---------: | ----------- |
 | 0 | Authenticated if set to one. |
 | 1 | Authorized if set to one. |



----


## Type=26 (0x1A) - Valid pin :id=type26

```
VSCP_TYPE_SECURITY_PIN_OK
```
Valid pin. A valid pin has been entered by a device or user.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=27 (0x1B) - Invalid pin :id=type27

```
VSCP_TYPE_SECURITY_PIN_FAIL
```
Invalid pin. An invalid pin has been entered by a device or user.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=28 (0x1C) - Pin warning :id=type28

```
VSCP_TYPE_SECURITY_PIN_WARNING
```
Pin warning. An invalid pin has been entered by a device or user and a warning has been given. This warning is typically a warning that the pin will be unusable if further failures are detected.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=29 (0x1D) - Pin error :id=type29

```
VSCP_TYPE_SECURITY_PIN_ERROR
```
Pin error. An invalid pin has been entered by a device or user and it has failed so many times that the pin is now locked and unusable.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=30 (0x1E) - Valid password :id=type30

```
VSCP_TYPE_SECURITY_PASSWORD_OK
```
Valid password. A valid password has been entered by a device or user.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=31 (0x1F) - Invalid password :id=type31

```
VSCP_TYPE_SECURITY_PASSWORD_FAIL
```
Invalid password. An invalid password has been entered by a device or user.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=32 (0x20) - Password warning :id=type32

```
VSCP_TYPE_SECURITY_PASSWORD_WARNING
```
Password warning. An invalid password has been entered by a device or user and a warning has been given. This warning is typically a warning that the password will be unusable if further failures are detected.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |


----


## Type=33 (0x21) - Password error :id=type33

```
VSCP_TYPE_SECURITY_PASSWORD_ERROR
```
Password error. An invalid password has been entered by a device or user and it has failed so many times that the password is now locked and unusable.

 | Data byte | Description |
 | :---------: | ----------- |
 | 0 | User defined data. |
 | 1 | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |



----


[filename](./bottom_copyright.md ':include')