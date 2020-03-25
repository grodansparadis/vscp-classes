# Class=1027 (0x0403) - Text to speech

    CLASS2.TEXT2SPEECH

## Description

This is an interface that translates text to speech 

## Type=0 (0x00) - General event :id=type0
```VSCP2_TYPE_TEXT2SPEECH_GENERAL```
General Event.

----

## Type=1 (0x01) - Talk :id=type1
```VSCP2_TYPE_TEXT2SPEECH_TALK```
Talk some text out on a device.

 | Byte | Description               | 
 | :----: | -----------               | 
 | 0-1  | Zone to talk in.          | 
 | 2-3  | Sub-zone to talk in.      | 
 | 4    | Relative volume (0-100%). | 
 | 5-7  | Reserved.                 | 
 | 9..  | Text to speak.            | 

----

[filename](./bottom_copyright.md ':include')