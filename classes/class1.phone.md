# Class=100 (0x64) Phone

    CLASS1.PHONE

## Description

This class is for phone related functionality. 

##   Type=0 (0x00) Undefined. 

General event. 

##   Type=1 (0x00) Incoming call. 

There is an incoming phone call. Usually a caller ID node just sends out numerical information. A database event can follow (later) that contains the real text information.

Phone calls are reported in the following form

    from,to

where from is the originating number and to is the receiving phone. Numbers is preferable presented in an international form. So a call from England to a Swedish phone should take the following form

    44-123-1122334,46-657-413430

which is sent in tree frames. Some device can't separate country and area-code and therefore the form

    441231122334,46657413430

will also be valid.

a database connected application can later resolve this and present

    A customer,Eurosource

This is the type=8 event, database info, (see below). Note that the comma cant be used in the descriptive names.

Calls from unlisted numbers are presented as

    ,to 

 | Byte | Description                                                                                              | 
 | ---- | -----------                                                                                              | 
 | 0    | Id for the call. This is an incremental identity number for each call.                                   | 
 | 1    | Index of phone event (base = 0). Each call can be broken up into fragments. This is the fragment number. | 
 | 2    | Total number of events (fragments) for this call information.                                            | 
 | 3-7  | Caller information. Number or real text information.                                                     | 

##   Type=2 (0x02) Outgoing call. 

There is an outgoing phone call. 

 | Byte | Description                                                                                              | 
 | ---- | -----------                                                                                              | 
 | 0    | Id for the call. This is an incremental ID number for each call.                                        
 | 1    | Index of phone event (base = 0). Each call can be broken up into fragments. This is the fragment number. | 
 | 2    | Total number of events (fragments) for this call information.                                            | 
 | 3-7  | Caller information. Number or real text information.                                                     | 

##   Type=3 (0x03) Ring.

This is a event indicating that there is a “ring” for this call. 

 | Byte | Description                                                                                | 
 | ---- | -----------                                                                                | 
 | 0    | An ID for the call. This can for instance be a number that increases by one for each call. | 

##   Type=4 (0x04) Answer.

The call has been answered. 

 | Byte | Description                                                                                | 
 | ---- | -----------                                                                                | 
 | 0    | An ID for the call. This can for instance be a number that increases by one for each call. | 
 | 1    | Zone for answer location.                                                                  | 
 | 2    | Sub-zone for answer location.                                                              | 

##  Type=5 (0x05) Hangup.

The call has been terminated by the receiving end. 

 | 0 | An ID for the call. This can for instance be a number that increases by one for each call. | 
 | - | ------------------------------------------------------------------------------------------ | 

##   Type=6 (0x06) Giveup.

The call has been terminated by the originating end. byte 

 | 0 | An ID for the call. This can for instance be a number that increases by one for each call. | 
 | - | ------------------------------------------------------------------------------------------ | 

##   Type=7 (0x07) Transfer.

The call has been transferred. byte 

 | 0 | An ID for the call. This can for instance be a number that increases by one for each call. | 
 | - | ------------------------------------------------------------------------------------------ | 

##   Type=8 (0x08) Database Info.

 | 0   | Id for the call. This is a number that is increased by one for each call. In this case the number is the same as for the incoming or outgoing events. | 
 | -   | ----------------------------------------------------------------------------------------------------------------------------------------------------- | 
 | 1   | Index of phone event (base=0). Each call can be broken up into fragments. This is the fragment number.                                                | 
 | 2   | Total number of events (fragments) for this call information.                                                                                         | 
 | 3-7 | Caller information. Real text information.                                                                                                            | 
{% include "./bottom_copyright.md" %}
