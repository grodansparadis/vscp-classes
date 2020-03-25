# Class=508 (0x01FC) - Error

    CLASS1.ERROR

## Description

Error reporting functionality that follow the errors defined in the [vscp.h](https://github.com/grodansparadis/vscp_software/blob/master/src/vscp/common/vscp.h) header file.


## Type=0 (0x00) - Success :id=type0
```VSCP_TYPE_ERROR_SUCCESS```
This error message is used to report success, that is no error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=1 (0x01) - Error :id=type1
```VSCP_TYPE_ERROR_ERROR```
This error message is used to indicate an error condition.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=7 (0x07) - Channel error :id=type7
```VSCP_TYPE_ERROR_CHANNEL```
This error message is used to indicate a (communication) channel problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=8 (0x08) - Fifo empty error :id=type8
```VSCP_TYPE_ERROR_FIFO_EMPTY```
This error message is used to indicate a fifo empty problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=9 (0x09) - Fifo full error :id=type9
```VSCP_TYPE_ERROR_FIFO_FULL```
This error message is used to indicate a fifo full problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=10 (0x0A) - Fifo size error :id=type10
```VSCP_TYPE_ERROR_FIFO_SIZE```
This error message is used to indicate a fifo size problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=11 (0x0B) - Fifo wait error :id=type11
```VSCP_TYPE_ERROR_FIFO_WAIT```
This error message is used to indicate a fifo wait problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=12 (0x0C) - Generic error :id=type12
```VSCP_TYPE_ERROR_GENERIC```
This error message is used to indicate a generic error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=13 (0x0D) - Hardware error :id=type13
```VSCP_TYPE_ERROR_HARDWARE```
This error message is used to indicate a hardware error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=14 (0x0E) - initialization error :id=type14
```VSCP_TYPE_ERROR_INIT_FAIL```
This error message is used to indicate a initialization error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=15 (0x0F) - Missing initialization error :id=type15
```VSCP_TYPE_ERROR_INIT_MISSING```
This error message is used to indicate a missing initialization error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=16 (0x10) - Initialization ready :id=type16
```VSCP_TYPE_ERROR_INIT_READY```
This error message is used to indicate a initialization ready error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=17 (0x11) - Not supported :id=type17
```VSCP_TYPE_ERROR_NOT_SUPPORTED```
This error message is used to indicate a not supported error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=18 (0x12) - Overrun error :id=type18
```VSCP_TYPE_ERROR_OVERRUN```
This error message is used to indicate an overrun error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=19 (0x13) - Receiver empty error :id=type19
```VSCP_TYPE_ERROR_RCV_EMPTY```
This error message is used to indicate a receiver empty error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=20 (0x14) - Register error :id=type20
```VSCP_TYPE_ERROR_REGISTER```
This error message is used to indicate a register error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=21 (0x15) - Transmitter full error :id=type21
```VSCP_TYPE_ERROR_TRM_FULL```
This error message is used to indicate a transmitter full error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=28 (0x1C) - Library error :id=type28
```VSCP_TYPE_ERROR_LIBRARY```
This error message is used to indicate a library error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=29 (0x1D) - Procedural address error :id=type29
```VSCP_TYPE_ERROR_PROCADDRESS```
This error message is used to indicate a procedural address error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=30 (0x1E) - Only one instance error :id=type30
```VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE```
This error message is used to indicate an only one instance error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=31 (0x1F) - Sub driver error :id=type31
```VSCP_TYPE_ERROR_SUB_DRIVER```
This error message is used to indicate a sub driver error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=32 (0x20) - Timeout error :id=type32
```VSCP_TYPE_ERROR_TIMEOUT```
This error message is used to indicate a timeout error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=33 (0x21) - Not open error :id=type33
```VSCP_TYPE_ERROR_NOT_OPEN```
This error message is used to indicate a not open error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=34 (0x22) - Parameter error :id=type34
```VSCP_TYPE_ERROR_PARAMETER```
This error message is used to indicate a parameter error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=35 (0x23) - Memory error :id=type35
```VSCP_TYPE_ERROR_MEMORY```
This error message is used to indicate a memory error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=36 (0x24) - Internal error :id=type36
```VSCP_TYPE_ERROR_INTERNAL```
This error message is used to indicate a internal error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=37 (0x25) - Communication error :id=type37
```VSCP_TYPE_ERROR_COMMUNICATION```
This error message is used to indicate a communication error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=38 (0x26) - User error :id=type38
```VSCP_TYPE_ERROR_USER```
This error message is used to indicate a user error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=39 (0x27) - Password error :id=type39
```VSCP_TYPE_ERROR_PASSWORD```
This error message is used to indicate a password error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=40 (0x28) - Connection error :id=type40
```VSCP_TYPE_ERROR_CONNECTION```
This error message is used to indicate a connection error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=41 (0x29) - Invalid handle error :id=type41
```VSCP_TYPE_ERROR_INVALID_HANDLE```
This error message is used to indicate a invalid handle error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=42 (0x2A) - Operation failed error :id=type42
```VSCP_TYPE_ERROR_OPERATION_FAILED```
This error message is used to indicate an operation failed error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=43 (0x2B) - Supplied buffer is to small to fit content :id=type43
```VSCP_TYPE_ERROR_BUFFER_SMALL```
This error message is used to indicate that the supplied buffer is to small to fit content.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=44 (0x2C) - Requested item is unknown :id=type44
```VSCP_TYPE_ERROR_ITEM_UNKNOWN```
This error message is used to indicate that the requested item (remote variable) is unknown.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=45 (0x2D) - Name is already in use :id=type45
```VSCP_TYPE_ERROR_NAME_USED```
This error message is used to indicate that the name is already in use.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=46 (0x2E) - Error when writing data :id=type46
```VSCP_TYPE_ERROR_DATA_WRITE```
This error message is used to indicate an error when writing data.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## Type=47 (0x2F) - Operation stopped or aborted :id=type47
```VSCP_TYPE_ERROR_ABORTED```
This error message is used to indicate a stopped or an aborted operation.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. |
----

## Type=48 (0x30) - Pointer with invalid value :id=type48
```VSCP_TYPE_ERROR_INVALID_POINTER```
This error message is used to indicate a pointer with an invalid value.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 
----

[filename](./bottom_copyright.md ':include')