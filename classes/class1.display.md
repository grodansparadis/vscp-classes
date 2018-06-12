# Class=102 (0x66) Display

    CLASS1.DISPLAY

## Description

This is generic display related functionality. Show info on a screen, LED-display diode, etc.

The [CAN4VSCP New York module](https://www.grodansparadis.com) is an example on the how this can be implemented in a module. 

##### Escape sequences

An escape sequence is preceded with a %. As a result to display ”%” %% should be used.

The first character after the % is the escape-type. This character is case sensitive. That is “e” is not the same as “E”. 

##### Escape character Description

 | Escape type | Decription                                                                                                                                                                                                           | 
 | ----------- | ----------                                                                                                                                                                                                           | 
 | **$**       | Zero terminated string                                                                                                                                                                                               | 
 | **!**       | Boolean value                                                                                                                                                                                                        | 
 | **b**       | signed char                                                                                                                                                                                                          | 
 | **B**       | unsigned char                                                                                                                                                                                                        | 
 | **s**       | signed short                                                                                                                                                                                                         | 
 | **S**       | unsigned short                                                                                                                                                                                                       | 
 | **i**       | signed int                                                                                                                                                                                                           | 
 | **I**       | unsigned int                                                                                                                                                                                                         | 
 | **l**       | signed long                                                                                                                                                                                                          | 
 | **L**       | unsigned long                                                                                                                                                                                                        | 
 | **f**       | floating point decimal value                                                                                                                                                                                         | 
 | **d**       | date format                                                                                                                                                                                                          | 
 | **t**       | time                                                                                                                                                                                                                 | 
 | **n**       | normalized integer                                                                                                                                                                                                   | 
 | **p**       | **Parameter data:** Display parameter escapes. The format is %p001 where “001” is the ID that identifies the parameter. This escape is used for hard parameters displayed by the display maker. Se Type=6 below. | 
 | **e**       | **Event data:** Event data escapes. The format is %eclass,type,r where class and type tells which event is of interest and r have the same format as the r escape                                                    | 

The above is just a recommendation. Anyone can of course use any format they like. 

## Type = 0 (0x00) Undefined.

General event. 

## Type = 1 (0x01) - Clear Display

Clear the display on displays in a certain zone,sub-zone. 

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Code - not yet defined.                                            | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 2 (0x02) - Position cursor

Move the cursor to a specific position on displays in a certain zone,sub-zone. 

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index.                                                             | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3    | Row to move to (first row is 0).                                   | 
 | 4    | Column to move to (first column is 0).                             | 

## Type = 3 (0x03) - Write Display

Write to display(s) in a certain zone,sub-zone. The update of the display is immediate. 

 | Byte | Description                                                               | 
 | ---- | -----------                                                               | 
 | 0    | index - Increase by one for each event sent for specific text to display. | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 
 | 3-7  | Display data.                                                             | 

Index is increased by one for each event that builds up a specific event. If needed an empty (no data) can be sent as the last event else sending data to fill the display buffer will give the end automatically. 

## Type = 4 (0x04) - Write Display buffer

Write to the buffers of displays in a certain zone,sub-zone. The update of the display is is not done right away but is instead done when the Show Buffer event is received by the display unit. 

 | Byte | Description                                                               | 
 | ---- | -----------                                                               | 
 | 0    | index - Increase by one for each event sent for specific text to display. | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 
 | 3-7  | Display data.                                                             | 

Index is increased by one for each event that builds up a specific event. If needed an empty (no data) can be sent as the last event else sending data to fill the display buffer will give the end automatically.

Many LCD displays allow definition of special characters. Use this event to define custom matrices buy defining a sub-zone for the user defined matrix(es). 

## Type = 5 (0x05) - Show Display Buffer

Tells displays in a certain zone,sub-zone to display the content in their display buffers. The update of the display is immediate. 

 | Byte | Description                                                               | 
 | ---- | -----------                                                               | 
 | 0    | index - Increase by one for each event sent for specific text to display. | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 

## Type = 6 (0x06) - Set Display Buffer Parameter

With this call a display buffer parameter can be sent to a display. This parameter is inserted at the escape position %pn in the string in the buffer *when the buffer is transferred to the display*.

Note that there are no zone and sub-zone defined for this event and the escapes must instead be chosen to be distinct in a system. This means that &p1 will be unique within a system and updating this parameter will update on all displays that has it defined. 

 | Byte | Description                                | 
 | ---- | -----------                                | 
 | 0    | Display parameter index.                   | 
 | 1    | Data coding byte as of VSCP Specification. | 
 | 2-7  | Data as of coding.                         | 

Note that the event have one byte less then standard measurement events so all coding types can not be used. 

## Type = 32 (0x20) - Show Text

This event contains information that should be displayed on displays pointed out by zone/sub-zone.

This event can have the same functionality as Write Display or be set on an higher abstraction level. 

 | Byte | Description                                                               | 
 | ---- | -----------                                                               | 
 | 0    | Index - Increase by one for each event sent for specific text to display. | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 
 | 3-7  | event.                                                                    | 

Index is increase by one for each event that builds up a specific event. If needed an empty (no data) can be sent as the last event else sending data to fill the display buffer will give the end automatically.

The text sent to a node can contain escape characters that themselves display data or other display events. Se the new_york node for examples of this.

For a multi line display one can use different sub-zones o address different lines. One can also us macro characters to map display events to a line. 


## Type = 48 (0x30) - Set LED

This event contains information that should be displayed on LED(s) pointed out by zone/sub-zone. 

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index                                                              | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3    | 0 =off, 1=on, 2=blink                                              | 
 | 4    | Blink period: MSB milliseconds for ON.                             | 
 | 5    | Blink period: LSB milliseconds for ON.                             | 
 | 6    | Blink period: MSB milliseconds for OFF.                            | 
 | 7    | Blink period: LSB milliseconds for OFF.                            | 

Blink period can be omitted if not used or if blink period is defined hard. 

## Type = 49 (0x31) - Set RGB Color

This event set the color for LED(s) pointed out by zone/sub-zone. 

 | Byte | Description                                                        | 
 | ---- | -----------                                                        | 
 | 0    | Index                                                              | 
 | 1    | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2    | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3    | Color R to display 0-255.                                          | 
 | 4    | Color G to display 0-255.                                          | 
 | 5    | Color B to display 0-255.                                          | 

If multi-byte resolution for the colors is needed use index to address the byte where 0 means the MSB byte, 1 MSB+1 byte etc (Big endian).

{% include "./bottom_copyright.md" %}
