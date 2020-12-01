# Class=509 (0x01FD) - Logging

    CLASS1.LOG

## Description

Logging functionality. 

The log can be used by a device to send logging information to a central or distributed place. To use this functionality


*  Open a log channel with a specific id.

*  Send logging events.

*  Close when no more logging events will be sent on that channel.

The logging message can be a maximum of five byte for each event. If you need more space for logging data, send multiple log events and increase the index (starting at zero) for each event that is part of the logging message. Repeating this process next time you need to send logging data by again starting at index 0 and increasing for every part sent. 

The id is something you set that have meaning for you. Typically it can be used as an index for a channel you send log messages on in a system where several subsystems needs to be logged and which log info need to be separated. 

Remember that the receiving side also have the originating id (GUID) as an identification from where a logging event originates.

## Type=0 (0x00) - General event :id=type0
```
VSCP_TYPE_LOG_GENERAL
```
General Event.
----

## Type=1 (0x01) - Log event :id=type1
```
VSCP_TYPE_LOG_MESSAGE
```
Message for Log. Several frames have to be sent for a event that take up more the five bytes which is the maximum for each frame. In this case the zero based index (byte 2) should be increased for each frame. 

 | Byte | Description            | 
 | :----: | -----------            | 
 | 0    | ID for event.          | 
 | 1    | Log level for message. | 
 | 2    | Idx for this message.  | 
 | 3-7  | Message.               |
----

## Type=2 (0x02) - Log Start :id=type2
```
VSCP_TYPE_LOG_START
```
Start logging. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | ID for log. | 
----

## Type=3 (0x03) - Log Stop :id=type3
```
VSCP_TYPE_LOG_STOP
```
Stop logging. 

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | ID for log. | 
----

## Type=4 (0x04) - Log Level :id=type4
```
VSCP_TYPE_LOG_LEVEL
```
Set level for logging. 

 | Byte | Description                  | 
 | :----: | -----------                  | 
 | 0    | ID for log byte 0 Log level. | 

----

[filename](./bottom_copyright.md ':include')