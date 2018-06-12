# Class=90 (0x5A) Weather

Fuzzy values for weather indications. Intended for warning and information signs.

    CLASS1.WEATHER

## Description

Weather reporting. Used to report current weather conditions. 

## Type = 0 (0x00) Undefined

General control. 

## Type = 1 (0x01) Season Winter

The winter season as started.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 1 (0x01) Season winter

The winter season has started.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 2 (0x02) Season spring

The spring season has started.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 3 (0x03) Season summer

The summer season has started.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 4 (0x04) Autumn summer

The autumn season has started.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 5 (0x05) No wind

No wind

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 6 (0x06) Low wind

Low wind speed conditions.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 7 (0x07)Medium wind

Medium wind speed conditions.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 8 (0x08)High wind

High wind speed conditions.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 9 (0x09)Very high wind

Very high wind speed conditions.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 10 (0x0A)Air foggy

Fogg.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 11 (0x0B)Air freezing

Freezing.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 12 (0x0C)Air Very cold

Cold

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 13 (0x0D)Air cold

Very cold

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 14 (0x0E)Air normal

Air normal

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 15 (0x0F)Air hot

Air hot

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 16 (0x10)Air very hot

Air very hot

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 17 (0x11)Pollution low

Pollution low

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 18 (0x12)Pollution medium

Pollution medium

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

##  Type = 19 (0x13)Pollution high

Pollution high

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 20 (0x14)Air humid

Air humid

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 21 (0x15)Air dry

Air dry

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 22 (0x16)Soil humid

soil humid

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 23 (0x17)Soil dry

soil dry

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 24 (0x18) Rain none

Rain none

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 25 (0x19) Rain light

Rain light

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 26 (0x1A) Rain heavy

Rain heavy

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 27 (0x1B) Rain very heavy

Rain very heavy

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 28 (0x1C) Sun none

Sun none

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 29 (0x1D) Sun light

Sun light

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 30 (0x1E) Sun heavy

Sun heavy

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 31 (0x1F) Snow none

Snow none.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 32 (0x20) Snow light

Snow light.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 33 (0x21) Snow heavy

Snow heavy.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 34 (0x22) Dew point

Dew point.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 35 (0x23) Storm

Storm.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 36 (0x24) Flood

Flood.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 37 (0x25) Earthquake

Earthquake

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 38 (0x26) Nuclear disaster

Nuclera disaster

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 39 (0x27) Fire

Fire.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 40 (0x28) Lightning

Lightning.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 41 (0x29) UV Radiation low

Radiation low.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 42 (0x2A) UV Radiation medium

Radiation medium.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 43 (0x2B) UV Radiation normal

Radiation normal.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 44 (0x2C) UV Radiation high

Radiation high.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 45 (0x2D) UV Radiation very high

Radiation very high.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 46 (0x2E) Warning level 1

Warning level 1. This is the lowest varning level.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 47 (0x2F) Warning level 2

Warninglevel 2.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 
## Type = 48 (0x30) Warning level 3

Warninglevel 3.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 49 (0x31) Warning level 4

Warning level 4.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 50 (0x32) Warning level 5

Warning level 5. This is the highest warning level.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 51 (0x33) Armageddon

The final warning level not seen by humans.

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

{% include "./bottom_copyright.md" %}
