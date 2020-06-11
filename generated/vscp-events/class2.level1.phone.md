# Class=612 (0x0264) - Class2 Level I Phone

    CLASS2.LEVEL1.PHONE

## Description

This class mirrors the [CLASS1.PHONE](./class1.phone.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## Type=0 (0x00) - General event :id=type0
    VSCP_TYPE_PHONE_GENERALGeneral Event.


----


## Type=1 (0x01) - Incoming call :id=type1
    VSCP_TYPE_PHONE_INCOMING_CALLThere is an incoming phone call. Usually a caller ID node just sends out numerical information. A database event can follow (later) that contains the real text information.

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

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Id for the call. This is an incremental identity number for each call. | 
 | 1    | Index of phone event (base = 0). Each call can be broken up into fragments. This is the fragment number. | 
 | 2    | Total number of events (fragments) for this call information. | 
 | 3-7  | Caller information. Number or real text information. | 



----


## Type=2 (0x02) - Outgoing call :id=type2
    VSCP_TYPE_PHONE_OUTGOING_CALLThere is an outgoing phone call. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Id for the call. This is an incremental ID number for each call. |
 | 1    | Index of phone event (base = 0). Each call can be broken up into fragments. This is the fragment number. | 
 | 2    | Total number of events (fragments) for this call information. | 
 | 3-7  | Caller information. Number or real text information. | 



----


## Type=3 (0x03) - Ring :id=type3
    VSCP_TYPE_PHONE_RINGThis is a event indicating that there is a “ring” for this call. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | An ID for the call. This can for instance be a number that increases by one for each call. | 



----


## Type=4 (0x04) - Answer :id=type4
    VSCP_TYPE_PHONE_ANSWERThe call has been answered. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | An ID for the call. This can for instance be a number that increases by one for each call. | 
 | 1    | Zone for answer location. | 
 | 2    | Sub-zone for answer location. | 



----


## Type=5 (0x05) - Hangup :id=type5
    VSCP_TYPE_PHONE_HANGUPThe call has been terminated by the receiving end. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0 | An ID for the call. This can for instance be a number that increases by one for each call. | 
 



----


## Type=6 (0x06) - Giveup :id=type6
    VSCP_TYPE_PHONE_GIVEUPThe call has been terminated by the originating end. byte 

| Byte | Description | 
 | :----: | ----------- | 
 | 0 | An ID for the call. This can for instance be a number that increases by one for each call. | 




----


## Type=7 (0x07) - Transfer :id=type7
    VSCP_TYPE_PHONE_TRANSFERThe call has been transferred. byte 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0 | An ID for the call. This can for instance be a number that increases by one for each call. | 




----


## Type=8 (0x08) - Database Info :id=type8
    VSCP_TYPE_PHONE_DATABASE_INFO Call database info.
 
 | Byte | Description | 
 | :----: | ----------- | 
 | 0   | Id for the call. This is a number that is increased by one for each call. In this case the number is the same as for the incoming or outgoing events. | 
 | 1   | Index of phone event (base=0). Each call can be broken up into fragments. This is the fragment number. | 
 | 2   | Total number of events (fragments) for this call information. | 
 | 3-7 | Caller information. Real text information.  | 



----


[filename](./bottom_copyright.md ':include')