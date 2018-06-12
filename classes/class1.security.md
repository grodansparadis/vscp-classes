# Class=2 (0x02) Security

    CLASS1.SECURITY
    
## Description

Security related events for alarms and similar devices. 

## Type = 0 (0x00) undefined

Undefined security issue. 

## Type = 1 (0x01) Motion Detect

A motion has been detected. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

## Type = 2 (0x02) Glass break

A glass break event has been detected. 

 | Data byte | Description                                                       | 
 | --------- | -----------                                                       | 
 | 0         | User defined data.                                                | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all subzones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

## Type = 3 (0x03) Beam break

A beam break event has been detected. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

## Type = 4 (0x04) Sensor tamper

A sensor tamper has been detected. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

## Type = 5 (0x05) Shock sensor

A shock sensor event has been detected. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

## Type = 6 (0x06) Smoke sensor

A smoke sensor event has been detected. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

## Type = 7 (0x07) Heat sensor

A heat sensor event has been detected. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

## Type = 8 (0x08) Panic switch

A panic switch event has been detected. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255. 

## Type = 9 (0x09) Door Contact

Indicates a door sensor reports that a door is open. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 10 (0x0A) Window Contact

Indicates a window sensor reports that a window is open.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 11 (0x0B) CO Sensor

CO sensor has detected CO at non secure level

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 12 (0x0C) Frost detected

A frost sensor condition is detected

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 13 (0x0D) Flame detected

Flame is detected.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 14 (0x0E) Oxygen Low

Low oxygen level detected.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 15 (0x0F) Weight detected.

Weight-detector triggered.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 16 (0x10) Water detected.

Water has been detected.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 17 (0x11) Condensation detected.

Condensation (humidity) detected.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 18 (0x12) Noise (sound) detected.

Noise (sound) has been detected.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 19 (0x13) Harmful sound levels detected.

Harmful sound levels detected.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

If both or one of zone/sub-zone are omitted they should be interpreted as if they where 255.

## Type = 20 (0x14) Tamper detected.

Tamper detected.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | User defined data.                                                 | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

{% include "./bottom_copyright.md" %}
