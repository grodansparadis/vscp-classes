# Class=614 (0x0266) - Class2 Level I Display

    CLASS2.LEVEL1.DISPLAY

## Description

This class mirrors the [CLASS1.DISPLAY](./class1.display.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_DISPLAY_GENERAL
```
General Event.


----


## Type=1 (0x01) - Clear Display :id=type1

```
VSCP_TYPE_DISPLAY_CLEAR_DISPLAY
```
Clear the display on displays in a certain zone,sub-zone. 

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Code - not yet defined.                                            | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=2 (0x02) - Position cursor :id=type2

```
VSCP_TYPE_DISPLAY_POSITION_CURSOR
```
Move the cursor to a specific position on displays in a certain zone,sub-zone. 

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3    | Row to move to (first row is 0).                                   | 
 | 4    | Column to move to (first column is 0).                             | 
 



----


## Type=3 (0x03) - Write Display :id=type3

```
VSCP_TYPE_DISPLAY_WRITE_DISPLAY
```
Write to display(s) in a certain zone,sub-zone. The update of the display is immediate. 

 | Byte | Description                                                               | 
 | :----: | -----------                                                               | 
 | 0    | index - Increase by one for each event sent for specific text to display. | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 
 | 3-7  | Display data.                                                             | 

Index is increased by one for each event that builds up a specific event. If needed an empty (no data) can be sent as the last event else sending data to fill the display buffer will give the end automatically. 



----


## Type=4 (0x04) - Write Display buffer :id=type4

```
VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER
```
Write to the buffers of displays in a certain zone,sub-zone. The update of the display is is not done right away but is instead done when the Show Buffer event is received by the display unit. 

 | Byte | Description                                                               | 
 | :----: | -----------                                                               | 
 | 0    | index - Increase by one for each event sent for specific text to display. | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 
 | 3-7  | Display data.                                                             | 

Index is increased by one for each event that builds up a specific event. If needed an empty (no data) can be sent as the last event else sending data to fill the display buffer will give the end automatically.

Many LCD displays allow definition of special characters. Use this event to define custom matrices buy defining a sub-zone for the user defined matrix(es). 



----


## Type=5 (0x05) - Show Display Buffer :id=type5

```
VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER
```
Tells displays in a certain zone,sub-zone to display the content in their display buffers. The update of the display is immediate. 

 | Byte | Description                                                               | 
 | :----: | -----------                                                               | 
 | 0    | index - Increase by one for each event sent for specific text to display. | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 



----


## Type=6 (0x06) - Set Display Buffer Parameter :id=type6

```
VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM
```
With this call a display buffer parameter can be sent to a display. This parameter is inserted at the escape position %pn in the string in the buffer *when the buffer is transferred to the display*.

Note that there are no zone and sub-zone defined for this event and the escapes must instead be chosen to be distinct in a system. This means that &p1 will be unique within a system and updating this parameter will update on all displays that has it defined. 

 | Byte | Description                                | 
 | :----: | -----------                                | 
 | 0    | Display parameter index.                   | 
 | 1    | Data coding byte as of VSCP Specification. | 
 | 2-7  | Data as of coding.                         | 

Note that the event have one byte less then standard measurement events so all coding types can not be used. 



----


## Type=32 (0x20) - Show Text :id=type32

```
VSCP_TYPE_DISPLAY_SHOW_TEXT
```
This event contains information that should be displayed on displays pointed out by zone/sub-zone.

This event can have the same functionality as Write Display or be set on an higher abstraction level. 

 | Byte | Description                                                               | 
 | :----: | -----------                                                               | 
 | 0    | Index - Increase by one for each event sent for specific text to display. | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 
 | 3-7  | event.                                                                    | 

Index is increase by one for each event that builds up a specific event. If needed an empty (no data) can be sent as the last event else sending data to fill the display buffer will give the end automatically.

The text sent to a node can contain escape characters that themselves display data or other display events. Se the new_york node for examples of this.

For a multi line display one can use different sub-zones o address different lines. One can also us macro characters to map display events to a line. 



----


## Type=48 (0x30) - Set LED :id=type48

```
VSCP_TYPE_DISPLAY_SHOW_LED
```
This event contains information that should be displayed on LED(s) pointed out by zone/sub-zone. 

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index                                                              | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3    | 0 =off, 1=on, 2=blink                                              | 
 | 4    | Blink period: MSB milliseconds for ON.                             | 
 | 5    | Blink period: LSB milliseconds for ON.                             | 
 | 6    | Blink period: MSB milliseconds for OFF.                            | 
 | 7    | Blink period: LSB milliseconds for OFF.                            | 

Blink period can be omitted if not used or if blink period is defined hard. 



----


## Type=49 (0x31) - Set RGB Color :id=type49

```
VSCP_TYPE_DISPLAY_SHOW_LED_COLOR
```
This event set the color for LED(s) pointed out by zone/sub-zone. 

 | Byte | Description                                                        | 
 | :----: | -----------                                                        | 
 | 0    | Index                                                              | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3    | Color R to display 0-255.                                          | 
 | 4    | Color G to display 0-255.                                          | 
 | 5    | Color B to display 0-255.                                          | 

If multi-byte resolution for the colors is needed use index to address the byte where 0 means the MSB byte, 1 MSB+1 byte etc (Big endian).



----


[filename](./bottom_copyright.md ':include')