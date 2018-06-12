# Class=1027 (0x404) Level II Mirror Level II Text to speech

    CLASS2.TEXT2SPEECH
    
## Description

This is an interface that translates text to speech 

## Type=0 (0x0000) Undefined.

General event.

## Type=1 (0x0001) Talk 

 | Byte | Description               | 
 | ---- | -----------               | 
 | 0-1  | Zone to talk in.          | 
 | 2-3  | Sub-zone to talk in.      | 
 | 4    | Relative volume (0-100%). | 
 | 5-7  | Reserved.                 | 
 | 9..  | Text to speak.            | 

{% include "./bottom_copyright.md" %}

