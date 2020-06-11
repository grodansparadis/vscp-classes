# Class=607 (0x025F) - Class2 Level I Weather Forecast

    CLASS2.LEVEL1.WEATHERFORECAST

## Description

This class mirrors the [CLASS1.WEATHER](./class1.weather.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.

## Type=0 (0x00) - General event :id=type0
    VSCP_TYPE_WEATHER_GENERALGeneral Event.


----


## Type=1 (0x01) - Season winter :id=type1
    VSCP_TYPE_WEATHER_SEASONS_WINTERThe winter season has started.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 




----


## Type=2 (0x02) - Season spring :id=type2
    VSCP_TYPE_WEATHER_SEASONS_SPRINGThe spring season has started.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=3 (0x03) - Season summer :id=type3
    VSCP_TYPE_WEATHER_SEASONS_SUMMERThe summer season has started.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=4 (0x04) - Autumn summer :id=type4
    VSCP_TYPE_WEATHER_SEASONS_AUTUMNThe autumn season has started.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=5 (0x05) - No wind :id=type5
    VSCP_TYPE_WEATHER_WIND_NONENo wind

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=6 (0x06) - Low wind :id=type6
    VSCP_TYPE_WEATHER_WIND_LOWLow wind speed conditions.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=7 (0x07) - Medium wind :id=type7
    VSCP_TYPE_WEATHER_WIND_MEDIUMMedium wind speed conditions.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=8 (0x08) - High wind :id=type8
    VSCP_TYPE_WEATHER_WIND_HIGHHigh wind speed conditions.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=9 (0x09) - Very high wind :id=type9
    VSCP_TYPE_WEATHER_WIND_VERY_HIGHVery high wind speed conditions.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=10 (0x0A) - Air foggy :id=type10
    VSCP_TYPE_WEATHER_AIR_FOGGYFogg.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=11 (0x0B) - Air freezing :id=type11
    VSCP_TYPE_WEATHER_AIR_FREEZINGFreezing.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=12 (0x0C) - Air Very cold :id=type12
    VSCP_TYPE_WEATHER_AIR_VERY_COLDCold

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=13 (0x0D) - Air cold :id=type13
    VSCP_TYPE_WEATHER_AIR_COLDVery cold

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=14 (0x0E) - Air normal :id=type14
    VSCP_TYPE_WEATHER_AIR_NORMALAir normal

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=15 (0x0F) - Air hot :id=type15
    VSCP_TYPE_WEATHER_AIR_HOTAir hot

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=16 (0x10) - Air very hot :id=type16
    VSCP_TYPE_WEATHER_AIR_VERY_HOTAir very hot

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=17 (0x11) - Pollution low :id=type17
    VSCP_TYPE_WEATHER_AIR_POLLUTION_LOWPollution low

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=18 (0x12) - Pollution medium :id=type18
    VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUMPollution medium

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=19 (0x13) - Pollution high :id=type19
    VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGHPollution high

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=20 (0x14) - Air humid :id=type20
    VSCP_TYPE_WEATHER_AIR_HUMIDAir humid

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=21 (0x15) - Air dry :id=type21
    VSCP_TYPE_WEATHER_AIR_DRYAir dry

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=22 (0x16) - Soil humid :id=type22
    VSCP_TYPE_WEATHER_SOIL_HUMIDsoil humid

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=23 (0x17) - Soil dry :id=type23
    VSCP_TYPE_WEATHER_SOIL_DRYsoil dry

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=24 (0x18) - Rain none :id=type24
    VSCP_TYPE_WEATHER_RAIN_NONERain none

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=25 (0x19) - Rain light :id=type25
    VSCP_TYPE_WEATHER_RAIN_LIGHTRain light

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=26 (0x1A) - Rain heavy :id=type26
    VSCP_TYPE_WEATHER_RAIN_HEAVYRain heavy

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=27 (0x1B) - Rain very heavy :id=type27
    VSCP_TYPE_WEATHER_RAIN_VERY_HEAVYRain very heavy

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=28 (0x1C) - Sun none :id=type28
    VSCP_TYPE_WEATHER_SUN_NONESun none

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=29 (0x1D) - Sun light :id=type29
    VSCP_TYPE_WEATHER_SUN_LIGHTSun light

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=30 (0x1E) - Sun heavy :id=type30
    VSCP_TYPE_WEATHER_SUN_HEAVYSun heavy

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=31 (0x1F) - Snow none :id=type31
    VSCP_TYPE_WEATHER_SNOW_NONESnow none.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=32 (0x20) - Snow light :id=type32
    VSCP_TYPE_WEATHER_SNOW_LIGHTSnow light.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=33 (0x21) - Snow heavy :id=type33
    VSCP_TYPE_WEATHER_SNOW_HEAVYSnow heavy.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=34 (0x22) - Dew point :id=type34
    VSCP_TYPE_WEATHER_DEW_POINTDew point.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=35 (0x23) - Storm :id=type35
    VSCP_TYPE_WEATHER_STORMStorm.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=36 (0x24) - Flood :id=type36
    VSCP_TYPE_WEATHER_FLOODFlood.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=37 (0x25) - Earthquake :id=type37
    VSCP_TYPE_WEATHER_EARTHQUAKEEarthquake

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=38 (0x26) - Nuclear disaster :id=type38
    VSCP_TYPE_WEATHER_NUCLEAR_DISASTERNuclera disaster

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=39 (0x27) - Fire :id=type39
    VSCP_TYPE_WEATHER_FIREFire.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=40 (0x28) - Lightning :id=type40
    VSCP_TYPE_WEATHER_LIGHTNINGLightning.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=41 (0x29) - UV Radiation low :id=type41
    VSCP_TYPE_WEATHER_UV_RADIATION_LOWRadiation low.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=42 (0x2A) - UV Radiation medium :id=type42
    VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUMRadiation medium.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=43 (0x2B) - UV Radiation normal :id=type43
    VSCP_TYPE_WEATHER_UV_RADIATION_NORMALRadiation normal.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=44 (0x2C) - UV Radiation high :id=type44
    VSCP_TYPE_WEATHER_UV_RADIATION_HIGHRadiation high.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=45 (0x2D) - UV Radiation very high :id=type45
    VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGHRadiation very high.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=46 (0x2E) - Warning level 1 :id=type46
    VSCP_TYPE_WEATHER_WARNING_LEVEL1Warning level 1. This is the lowest varning level.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=47 (0x2F) - Warning level 2 :id=type47
    VSCP_TYPE_WEATHER_WARNING_LEVEL2Warninglevel 2.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=48 (0x30) - Warning level 3 :id=type48
    VSCP_TYPE_WEATHER_WARNING_LEVEL3Warninglevel 3.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=49 (0x31) - Warning level 4 :id=type49
    VSCP_TYPE_WEATHER_WARNING_LEVEL4Warning level 4.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=50 (0x32) - Warning level 5 :id=type50
    VSCP_TYPE_WEATHER_WARNING_LEVEL5Warning level 5. This is the highest warning level.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=51 (0x33) - Armageddon :id=type51
    VSCP_TYPE_WEATHER_ARMAGEDONThe final warning level not seen by humans.

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=52 (0x34) - UV Index :id=type52
    VSCP_TYPE_WEATHER_UV_INDEX
UV Index is an international scale for UV intensity which can have the range of 1-15 where 1 is very low radiation and a value over 10 is extremely high radiation.

 | Data byte | Description                         |
 | :-------: | ----------------------------------- |
 | 0    | Index.                                                             |
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         |
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. |
 | 3    | UV index (0-15)                        |



----


[filename](./bottom_copyright.md ':include')