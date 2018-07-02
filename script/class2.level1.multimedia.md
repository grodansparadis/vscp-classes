# Class=552 (0x0228) - Class2 Level I Multimedia

    CLASS2.LEVEL1.MULTIMEDIA

## Description

This class mirrors the [CLASS1.MULTIMEDIA](./class1.multimedia.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## <a name="type0"></a>Type=0 (0x00) - General event
    VSCP_TYPE_MULTIMEDIA_GENERALGeneral Event.
----

## <a name="type1"></a>Type=1 (0x01) - Playback
    VSCP_TYPE_MULTIMEDIA_PLAYBACKThis is for controlling playback functionality 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Function (See below)                                               | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

##### Function Codes

 | Code | Description         | 
 | :----: | -----------         | 
 | 0    | Stop                | 
 | 1    | Pause               | 
 | 2    | Play                | 
 | 3    | Forward             | 
 | 4    | Rewind              | 
 | 5    | Fast Forward        | 
 | 6    | Fast Rewind         | 
 | 7    | Next Track          | 
 | 30   | Previous Track      | 
 | 31   | Toggle repeat mode  | 
 | 32   | Repeat mode ON      | 
 | 33   | Repeat mode OFF     | 
 | 34   | Toggle Shuffle mode | 
 | 35   | Shuffle ON          | 
 | 36   | Shuffle mode OFF    | 
 | 37   | Fade in, Play       | 
 | 38   | Fade out, Stop      | 

Appropriate **CLASS1.INFORMATION** events should be sent from the controlled device as response to this event. 

----

## <a name="type2"></a>Type=2 (0x02) - NavigatorKey English
    VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENGThis is typically for navigation functions or DVD controls 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Function                                                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

##### Function Codes

 | Code    | Description                                                                            | 
 | :----:    | -----------                                                                            | 
 | 0..9    | 0..9 keys                                                                              | 
 | 10      | 10+ key                                                                                | 
 | 20      | OK                                                                                     | 
 | 21      | Left                                                                                   | 
 | 22      | Right                                                                                  | 
 | 23      | Up                                                                                     | 
 | 24      | Down                                                                                   | 
 | 25      | Menu                                                                                   | 
 | 26      | Selecting                                                                              | 
 | 65—90 | A..Z Keys                                                                              | 
 | 97..122 | a-z keys (can't use ASCII hex as numbers are too large so this is the next best thing) | 

----

## <a name="type3"></a>Type=3 (0x03) - Adjust Contrast
    VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRASTThis is typically for adjusting the contrast level of a display device 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                                | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                                | 
 | 0         | A value between 0 and 127 indicates the specific contrast level to set. A value between 128 and 159 is change down by the specified number of contrast levels. A value between 160 and 191 is change up by the specified number of contrast levels. A value of 255 means that this is and extended event and that the specific contrast level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                                 | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                         | 

----

## <a name="type4"></a>Type=4 (0x04) - Adjust Focus
    VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUSThis is typically for adjusting the focus settings of a display device 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                    | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                    | 
 | 0         | A value between 0 and 127 indicates the specific focus level to set. A value between 128 and 159 is change down by the specified number of focus levels. A value between 160 and 191 is change up by the specified number of focus levels. A value of 255 means that this is and extended event and that the specific focus level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                     | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                             | 

----

## <a name="type5"></a>Type=5 (0x05) - Adjust Tint
    VSCP_TYPE_MULTIMEDIA_ADJUST_TINTThis is typically for adjusting the tint settings of a display device 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                | 
 | 0         | A value between 0 and 127 indicates the specific tint level to set. A value between 128 and 159 is change down by the specified number of tint levels. A value between 160 and 191 is change up by the specified number of tint levels. A value of 255 means that this is and extended event and that the specific tint level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                 | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                         | 

----

## <a name="type6"></a>Type=6 (0x06) - Adjust Color Balance
    VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCEThis is typically for adjusting the color balance settings of a display device. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type7"></a>Type=7 (0x07) - Adjust Brightness
    VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESSThis is typically for adjusting the tint settings of a display device 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                                        | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                                        | 
 | 0         | A value between 0 and 127 indicates the specific brightness level to set. A value between 128 and 159 is change down by the specified number of brightness levels. A value between 160 and 191 is change up by the specified number of brightness levels. A value of 255 means that this is and extended event and that the specific brightness level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                                         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                                 | 

----

## <a name="type8"></a>Type=8 (0x08) - Adjust Hue
    VSCP_TYPE_MULTIMEDIA_ADJUST_HUEThis is typically for adjusting the hue settings of a display device 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type9"></a>Type=9 (0x09) - Adjust Bass
    VSCP_TYPE_MULTIMEDIA_ADJUST_BASSThis is typically for adjusting the bass level settings of a sound device. Depending on the implementation, this could automatically adjust the treble level. To adjust left and right bass levels, a node would have to use separate zones or sub-zones for left and right. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                | 
 | 0         | A value between 0 and 127 indicates the specific bass level to set. A value between 128 and 159 is change down by the specified number of bass levels. A value between 160 and 191 is change up by the specified number of bass levels. A value of 255 means that this is and extended event and that the specific bass level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                 | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                         | 

----

## <a name="type10"></a>Type=10 (0x0A) - Adjust Treble
    VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLEThis is typically for adjusting the treble level settings of a sound device. Depending on the implementation, this could automatically adjust the bass level. To adjust left and right treble levels, a node would have to use separate zones or sub-zones for left and right. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                          | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                          | 
 | 0         | 0 A value between 0 and 127 indicates the specific treble level to set. A value between 128 and 159 is change down by the specified number of treble levels. A value between 160 and 191 is change up by the specified number of treble levels. A value of 255 means that this is and extended event and that the specific treble level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                           | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                   | 

----

## <a name="type11"></a>Type=11 (0x0B) - Adjust Master Volume
    VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUMEThis is typically for adjusting the master volume level. This could be used for adjusting the level for all speakers. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                        | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                        | 
 | 0         | A value between 0 and 127 indicates the specific volume level to set. A value between 128 and 159 is change down by the specified number of volume levels. A value between 160 and 191 is change up by the specified number of volume levels. A value of 255 means that this is and extended event and that the specific volume level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                 | 

----

## <a name="type12"></a>Type=12 (0x0C) - Adjust Front Volume
    VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUMEThis is typically for adjusting the front speaker volume level. This usually means the two front speakers as opposed to the single center speaker. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                        | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                        | 
 | 0         | A value between 0 and 127 indicates the specific volume level to set. A value between 128 and 159 is change down by the specified number of volume levels. A value between 160 and 191 is change up by the specified number of volume levels. A value of 255 means that this is and extended event and that the specific volume level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                 | 

----

## <a name="type13"></a>Type=13 (0x0D) - Adjust Center Volume
    VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUMEThis is typically for adjusting the front speaker volume level. This usually means the single center speaker as opposed to the two front speakers. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                        | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                        | 
 | 0         | A value between 0 and 127 indicates the specific volume level to set. A value between 128 and 159 is change down by the specified number of volume levels. A value between 160 and 191 is change up by the specified number of volume levels. A value of 255 means that this is and extended event and that the specific volume level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                 | 

----

## <a name="type14"></a>Type=14 (0x0E) - Adjust Rear Volume
    VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUMEThis is typically for adjusting the rear speaker volume level. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                        | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                        | 
 | 0         | A value between 0 and 127 indicates the specific volume level to set. A value between 128 and 159 is change down by the specified number of volume levels. A value between 160 and 191 is change up by the specified number of volume levels. A value of 255 means that this is and extended event and that the specific volume level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                 | 

----

## <a name="type15"></a>Type=15 (0x0F) - Adjust Side Volume
    VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUMEThis is typically for adjusting the side speaker volume level. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                        | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                        | 
 | 0         | A value between 0 and 127 indicates the specific volume level to set. A value between 128 and 159 is change down by the specified number of volume levels. A value between 160 and 191 is change up by the specified number of volume levels. A value of 255 means that this is and extended event and that the specific volume level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                 | 

----

## <a name="type16"></a>Type=16 (0x10) - Reserved
    VSCP_TYPE_MULTIMEDIA_RESERVED16These are reserved for other future speaker combinations
----

## <a name="type17"></a>Type=17 (0x11) - Reserved
    VSCP_TYPE_MULTIMEDIA_RESERVED17These are reserved for other future speaker combinations
----

## <a name="type18"></a>Type=18 (0x12) - Reserved
    VSCP_TYPE_MULTIMEDIA_RESERVED18These are reserved for other future speaker combinations
----

## <a name="type19"></a>Type=19 (0x13) - Reserved
    VSCP_TYPE_MULTIMEDIA_RESERVED19These are reserved for other future speaker combinations
----

## <a name="type20"></a>Type=20 (0x14) - Select Disk
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISKThis is typically for selecting a disk for playback 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                                 | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                                 | 
 | 0         | A value between 0 and 127 indicates the specific disk number. A value between 128 and 159 is change down by the specified number of disks. A value between 160 and 191 is change up by the specified number of disks. A value of 200 means select a random disk. A value of 255 means that this is and extended event and that the disk number is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                                  | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                          | 

----

## <a name="type21"></a>Type=21 (0x15) - Select Track
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACKThis is typically for selecting a track for playback 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                             | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                             | 
 | 0         | A value between 0 and 127 indicates the track number. A value between 128 and 159 is change down by the specified number of tracks. A value between 160 and 191 is change up by the specified number of tracks. A value of 200 means select a random track. A value of 255 means that this is and extended event and that the track number is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                              | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                      | 

----

## <a name="type22"></a>Type=22 (0x16) - Select Album/Play list
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUMThis is typically for selecting an album or play-list for playback 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                                                  | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                                                  | 
 | 0         | A value between 0 and 127 indicates the album/play-list number. A value between 128 and 159 is change down by the specified number of albums/play-lists. A value between 160 and 191 is change up by the specified number of albums. A value of 200 means select a random album. A value of 255 means that this is and extended event and that the album number is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                                                   | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                                           | 

----

## <a name="type23"></a>Type=23 (0x17) - Select Channel
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNELThis is typically for selecting a TV Channel 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                                       | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                                       | 
 | 0         | A value between 0 and 127 indicates the channel number. A value between 128 and 159 is change down by the specified number of channels. A value between 160 and 191 is change up by the specified number of channels. A value of 200 means select a random channel. A value of 255 means that this is and extended event and that the channel number is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                                | 

----

## <a name="type24"></a>Type=24 (0x18) - Select Page
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGEThis is typically for selecting a page of a film 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                        | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                        | 
 | 0         | A value between 0 and 127 indicates the page number. A value between 128 and 159 is change down by the specified number of pages. A value between 160 and 191 is change up by the specified number of pages. A value of 200 means select a random page. A value of 255 means that this is and extended event and that the page number is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                 | 

----

## <a name="type25"></a>Type=25 (0x19) - Select Chapter
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTERThis is typically for selecting a chapter of a film 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                                       | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                                       | 
 | 0         | A value between 0 and 127 indicates the chapter number. A value between 128 and 159 is change down by the specified number of chapters. A value between 160 and 191 is change up by the specified number of chapters. A value of 200 means select a random chapter. A value of 255 means that this is and extended event and that the chapter number is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                                | 

----

## <a name="type26"></a>Type=26 (0x1A) - Select Screen Format
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMATThis is for controlling screen format of a display device 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | 0 = Auto, 1 = Just, 2 = Norma,l 3 = Zoom.                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type27"></a>Type=27 (0x1B) - Select Input Source
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCEThis is for controlling the input source of a playback device 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Device code                                                        | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

##### Device Code

 | Code | Description                        | 
 | :----: | -----------                        | 
 | 0    | Auto                               | 
 | 1    | CD                                 | 
 | 2    | AUX                                | 
 | 3    | DVD                                | 
 | 4    | SAT                                | 
 | 5    | VCR                                | 
 | 6    | Tape                               | 
 | 7    | Phone                              | 
 | 8    | Tuner                              | 
 | 9    | FM                                 | 
 | 10   | AM                                 | 
 | 11   | Radio (9 – 10 are more specific) | 
 | 16   | Component                          | 
 | 17   | VGA                                | 
 | 18   | SVideo                             | 
 | 19   | Video1                             | 
 | 20   | Video2                             | 
 | 21   | Video3                             | 
 | 22   | Sat1                               | 
 | 23   | Sat2                               | 
 | 24   | Sat3                               | 
 | 25   | mp3 source                         | 
 | 26   | mpeg source                        | 

----

## <a name="type28"></a>Type=28 (0x1C) - Select Output
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUTThis is for controlling the output of a playback device 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Output Code                                                        | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

##### Output Code

 | Code | Description | 
 | :----: | ----------- | 
 | 0    | Auto        | 
 | 16   | Component   | 
 | 17   | VGA         | 
 | 18   | SVideo      | 
 | 19   | Video1      | 
 | 20   | Video2      | 
 | 21   | Video3      | 
 | 30   | HDMI1       | 
 | 32   | HDMI2       | 
 | 32   | HDMI3       | 

----

## <a name="type29"></a>Type=29 (0x1D) - Record
    VSCP_TYPE_MULTIMEDIA_RECORDControl a recording device. 

 | Data byte | Description                                                            | 
 | :---------: | -----------                                                            | 
 | 0         | 0 - Start to record, 1 - Stop record, 2 - Disable, AGC 3 - Enable AGC. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.             | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.     | 

----

## <a name="type30"></a>Type=30 (0x1E) - Set Recording Volume
    VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUMEControl a recording device. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                                                | 
 | :---------: | -----------                                                                                                                                                                                                                                                                                                                                                                | 
 | 0         | A value between 0 and 127 indicates the specific contrast level to set. A value between 128 and 159 is change down by the specified number of contrast levels. A value between 160 and 191 is change up by the specified number of contrast levels. A value of 255 means that this is and extended event and that the specific contrast level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                                 | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                                         | 

----

## <a name="type40"></a>Type=40 (0x28) - Tivo Function
    VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTIONThis is typically for accessing TIVO functions 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | TIVO Code                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

##### TIVO Code

 | Code | Description   | 
 | :----: | -----------   | 
 | 1    | Box Office    | 
 | 2    | Services      | 
 | 3    | Program Guide | 
 | 4    | Text          | 
 | 5    | Info          | 
 | 6    | Help          | 
 | 7    | Backup        | 
 | 20   | Red key       | 
 | 21   | Yellow key    | 
 | 22   | Green key     | 
 | 23   | Blue key      | 
 | 24   | White key     | 
 | 25   | Black key     | 

----

## <a name="type50"></a>Type=50 (0x32) - Get Current Title
    VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLEGet the title for the current active media. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type51"></a>Type=51 (0x33) - Set media position in milliseconds
    VSCP_TYPE_MULTIMEDIA_SET_POSITIONThis is for controlling the position in the stream/file of a playback device 

 | Data byte | Description                                                                                                                                                                                         | 
 | :---------: | -----------                                                                                                                                                                                         | 
 | 0         | Reserved                                                                                                                                                                                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                  | 
 | 3-7       | Position in milliseconds, This is an integer with a size specified by the event size. This 0xFF, 0xFFFF, 0xFFFFFF, 0xFFFFFFFF and 0xFFFFFFFFFF is the maximum that can be sent for different sizes. | 

----

## <a name="type52"></a>Type=52 (0x34) - Get media information
    VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFOGet various media information from a device. 

 | Data byte | Description                                                                                                                                                                          | 
 | :---------: | -----------                                                                                                                                                                          | 
 | 0         | Type of media information requested. 1 - Current Title, 1 - Get Folders, 2 - Get Disks, 3 - Get Tracks, 4 - Get Albums/Play list,s 5 - Get Channels, 6 - Get Pages, 7 - Get Chapters | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                           | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                   | 

If a device does not support the requested type of media information its sends a CLASS1.INFORMATION error event or does not response. 

----

## <a name="type53"></a>Type=53 (0x35) - Remove Item from Album
    VSCP_TYPE_MULTIMEDIA_REMOVE_ITEMRemove an item from an album. 

 | Data byte | Description                                                                                                                                                       | 
 | :---------: | -----------                                                                                                                                                       | 
 | 0         | 0-128 - Pos to remove from album/play-list A value of 255 means that this is and extended event and that the specific contrast level is sent in byte 3 and after. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                | 

----

## <a name="type54"></a>Type=54 (0x36) - Remove all Items from Album
    VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMSRemove all items from an album. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

----

## <a name="type55"></a>Type=55 (0x37) - Save Album/Play list
    VSCP_TYPE_MULTIMEDIA_SAVE_ALBUMSave album/play-list to permanent storage. 

 | Data byte | Description                                                          | 
 | :---------: | -----------                                                          | 
 | 0         | 0 - Do not overwrite if it already exists 1 - Overwrite if it exist. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.           | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.   | 

----

## <a name="type60"></a>Type=60 (0x3C) - Multimedia Control
    VSCP_TYPE_MULTIMEDIA_CONTROLSend multimedia information. This can be the title for the current active media. It can be sent as a response to a “Get Title” or similar event or by its own when a new title is playing or other multimedia information has changed.

Response should be Type=61 

 | Data byte | Description                                                          | 
 | :---------: | -----------                                                          | 
 | 0         | Control codes                                                        | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.           | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.   | 
 | 3         | Index. Base 0. Increase by one for every fragment of the title sent. | 
 | 4-7       | Data.                                                                | 

##### Control Codes

 | Code | Description                                | 
 | :----: | -----------                                | 
 | 0    | Active Title (URL).                        | 
 | 1    | Set Title(URL).                            | 
 | 2    | Active Folder(URL).                        | 
 | 3    | Set Active Folder(URL).                    | 
 | 4    | Artist(string).                            | 
 | 5    | Year(string).                              | 
 | 6    | Genre(string).                             | 
 | 7    | Album(string).                             | 
 | 8    | Comment(string).                           | 
 | 9    | Track(integer).                            | 
 | 10   | Picture(url).                              | 
 | 11   | Sample rate(integer).                      | 
 | 12   | Bit-rate(integer).                         | 
 | 13   | Channels(integer).                         | 
 | 14   | Media size bytes(integer).                 | 
 | 15   | Time(string).                              | 
 | 16   | Mpeg version(string).                      | 
 | 17   | Mpeg layer(string).                        | 
 | 18   | Frequency(integer).                        | 
 | 19   | Channel Mode.                              | 
 | 20   | CRC(integer).                              | 
 | 21   | Copyright(string).                         | 
 | 22   | Original(string).                          | 
 | 23   | Emphasis.                                  | 
 | 24   | Media position in milliseconds(integer).   | 
 | 25   | Media-length in milliseconds(integer).     | 
 | 26   | Version(string).                           | 
 | 27   | Album/Play list(string).                   | 
 | 28   | Play file(URL).                            | 
 | 29   | Add file to album/play-list(URL).          | 
 | 30   | Current Folder (URL).                      | 
 | 31   | Folder content(URL).                       | 
 | 32   | Set Folder(URL).                           | 
 | 33   | Get Folder content(URL).                   | 
 | 34   | Get Folder content albums/play-lists(URL). | 
 | 35   | Get Folder content filter(string)          | 
 | 36   | Disks list(String)                         | 
 | 37   | Folders list(String)                       | 
 | 38   | Tracks list(String)                        | 
 | 39   | Albums/Play list list(String)              | 
 | 40   | Channels list(String)                      | 
 | 41   | Pages list(String)                         | 
 | 42   | Chapters list(String)                      | 
 | 43   | New Album/Play list(URL)                   | 

The last fragment is sent with no data.

Lists in string form have list items separated with a zero (0x00).

Album can be looked upon as a play-list which is a term used for many other multimedia products. 

----

## <a name="type61"></a>Type=61 (0x3D) - Multimedia Control response
    VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSEResponse for multimedia control.
----

{% include "./bottom_copyright.md" %}