# Class=607 (0x025F) - Class2 Level I Weather Forecast

    CLASS2.LEVEL1.WEATHERFORECAST

## Description

This class mirrors the [CLASS1.WEATHER](./class1.weather.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.

## <a name="type0"></a>Type=0 (0x00) - General event
    VSCP_TYPE_WEATHER_GENERALGeneral Event.
----

## <a name="type1"></a>Type=1 (0x01) - Season winter
    VSCP_TYPE_WEATHER_SEASONS_WINTERThe winter season has started.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 


----

## <a name="type2"></a>Type=2 (0x02) - Season spring
    VSCP_TYPE_WEATHER_SEASONS_SPRINGThe spring season has started.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type3"></a>Type=3 (0x03) - Season summer
    VSCP_TYPE_WEATHER_SEASONS_SUMMERThe summer season has started.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type4"></a>Type=4 (0x04) - Autumn summer
    VSCP_TYPE_WEATHER_SEASONS_AUTUMNThe autumn season has started.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type5"></a>Type=5 (0x05) - No wind
    VSCP_TYPE_WEATHER_WIND_NONENo wind

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type6"></a>Type=6 (0x06) - Low wind
    VSCP_TYPE_WEATHER_WIND_LOWLow wind speed conditions.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type7"></a>Type=7 (0x07) - Medium wind
    VSCP_TYPE_WEATHER_WIND_MEDIUMMedium wind speed conditions.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type8"></a>Type=8 (0x08) - High wind
    VSCP_TYPE_WEATHER_WIND_HIGHHigh wind speed conditions.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type9"></a>Type=9 (0x09) - Very high wind
    VSCP_TYPE_WEATHER_WIND_VERY_HIGHVery high wind speed conditions.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type10"></a>Type=10 (0x0A) - Air foggy
    VSCP_TYPE_WEATHER_AIR_FOGGYFogg.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type11"></a>Type=11 (0x0B) - Air freezing
    VSCP_TYPE_WEATHER_AIR_FREEZINGFreezing.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type12"></a>Type=12 (0x0C) - Air Very cold
    VSCP_TYPE_WEATHER_AIR_VERY_COLDCold

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type13"></a>Type=13 (0x0D) - Air cold
    VSCP_TYPE_WEATHER_AIR_COLDVery cold

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type14"></a>Type=14 (0x0E) - Air normal
    VSCP_TYPE_WEATHER_AIR_NORMALAir normal

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type15"></a>Type=15 (0x0F) - Air hot
    VSCP_TYPE_WEATHER_AIR_HOTAir hot

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type16"></a>Type=16 (0x10) - Air very hot
    VSCP_TYPE_WEATHER_AIR_VERY_HOTAir very hot

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type17"></a>Type=17 (0x11) - Pollution low
    VSCP_TYPE_WEATHER_AIR_POLLUTION_LOWPollution low

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type18"></a>Type=18 (0x12) - Pollution medium
    VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUMPollution medium

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type19"></a>Type=19 (0x13) - Pollution high
    VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGHPollution high

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type20"></a>Type=20 (0x14) - Air humid
    VSCP_TYPE_WEATHER_AIR_HUMIDAir humid

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type21"></a>Type=21 (0x15) - Air dry
    VSCP_TYPE_WEATHER_AIR_DRYAir dry

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type22"></a>Type=22 (0x16) - Soil humid
    VSCP_TYPE_WEATHER_SOIL_HUMIDsoil humid

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type23"></a>Type=23 (0x17) - Soil dry
    VSCP_TYPE_WEATHER_SOIL_DRYsoil dry

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type24"></a>Type=24 (0x18) - Rain none
    VSCP_TYPE_WEATHER_RAIN_NONERain none

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type25"></a>Type=25 (0x19) - Rain light
    VSCP_TYPE_WEATHER_RAIN_LIGHTRain light

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type26"></a>Type=26 (0x1A) - Rain heavy
    VSCP_TYPE_WEATHER_RAIN_HEAVYRain heavy

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type27"></a>Type=27 (0x1B) - Rain very heavy
    VSCP_TYPE_WEATHER_RAIN_VERY_HEAVYRain very heavy

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type28"></a>Type=28 (0x1C) - Sun none
    VSCP_TYPE_WEATHER_SUN_NONESun none

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type29"></a>Type=29 (0x1D) - Sun light
    VSCP_TYPE_WEATHER_SUN_LIGHTSun light

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type30"></a>Type=30 (0x1E) - Sun heavy
    VSCP_TYPE_WEATHER_SUN_HEAVYSun heavy

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type31"></a>Type=31 (0x1F) - Snow none
    VSCP_TYPE_WEATHER_SNOW_NONESnow none.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type32"></a>Type=32 (0x20) - Snow light
    VSCP_TYPE_WEATHER_SNOW_LIGHTSnow light.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type33"></a>Type=33 (0x21) - Snow heavy
    VSCP_TYPE_WEATHER_SNOW_HEAVYSnow heavy.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type34"></a>Type=34 (0x22) - Dew point
    VSCP_TYPE_WEATHER_DEW_POINTDew point.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type35"></a>Type=35 (0x23) - Storm
    VSCP_TYPE_WEATHER_STORMStorm.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type36"></a>Type=36 (0x24) - Flood
    VSCP_TYPE_WEATHER_FLOODFlood.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type37"></a>Type=37 (0x25) - Earthquake
    VSCP_TYPE_WEATHER_EARTHQUAKEEarthquake

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type38"></a>Type=38 (0x26) - Nuclear disaster
    VSCP_TYPE_WEATHER_NUCLEAR_DISASTERNuclera disaster

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type39"></a>Type=39 (0x27) - Fire
    VSCP_TYPE_WEATHER_FIREFire.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type40"></a>Type=40 (0x28) - Lightning
    VSCP_TYPE_WEATHER_LIGHTNINGLightning.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type41"></a>Type=41 (0x29) - UV Radiation low
    VSCP_TYPE_WEATHER_UV_RADIATION_LOWRadiation low.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type42"></a>Type=42 (0x2A) - UV Radiation medium
    VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUMRadiation medium.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type43"></a>Type=43 (0x2B) - UV Radiation normal
    VSCP_TYPE_WEATHER_UV_RADIATION_NORMALRadiation normal.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type44"></a>Type=44 (0x2C) - UV Radiation high
    VSCP_TYPE_WEATHER_UV_RADIATION_HIGHRadiation high.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type45"></a>Type=45 (0x2D) - UV Radiation very high
    VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGHRadiation very high.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type46"></a>Type=46 (0x2E) - Warning level 1
    VSCP_TYPE_WEATHER_WARNING_LEVEL1Warning level 1. This is the lowest varning level.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type47"></a>Type=47 (0x2F) - Warning level 2
    VSCP_TYPE_WEATHER_WARNING_LEVEL2Warninglevel 2.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 
----

## <a name="type48"></a>Type=48 (0x30) - Warning level 3
    VSCP_TYPE_WEATHER_WARNING_LEVEL3Warninglevel 3.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type49"></a>Type=49 (0x31) - Warning level 4
    VSCP_TYPE_WEATHER_WARNING_LEVEL4Warning level 4.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type50"></a>Type=50 (0x32) - Warning level 5
    VSCP_TYPE_WEATHER_WARNING_LEVEL5Warning level 5. This is the highest warning level.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type51"></a>Type=51 (0x33) - Armageddon
    VSCP_TYPE_WEATHER_ARMAGEDONThe final warning level not seen by humans.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

{% include "./bottom_copyright.md" %}