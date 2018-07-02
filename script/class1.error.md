# Class=508 (0x01FC) - Error

    CLASS1.ERROR

## Description

Error reporting functionality that follow the errors defined in the [vscp.h](https://github.com/grodansparadis/vscp_software/blob/master/src/vscp/common/vscp.h) header file.


## <a name="type0"></a>Type=0 (0x00) - Success
    VSCP_TYPE_ERROR_SUCCESS
This error message is used to report success, that is no error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type1"></a>Type=1 (0x01) - Error
    VSCP_TYPE_ERROR_ERROR
This error message is used to indicate an error condition.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type7"></a>Type=7 (0x07) - Channel error
    VSCP_TYPE_ERROR_CHANNEL
This error message is used to indicate a (communication) channel problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type8"></a>Type=8 (0x08) - Fifo empty error
    VSCP_TYPE_ERROR_FIFO_EMPTY
This error message is used to indicate a fifo empty problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type9"></a>Type=9 (0x09) - Fifo full error
    VSCP_TYPE_ERROR_FIFO_FULL
This error message is used to indicate a fifo full problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type10"></a>Type=10 (0x0A) - Fifo size error
    VSCP_TYPE_ERROR_FIFO_SIZE
This error message is used to indicate a fifo size problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type11"></a>Type=11 (0x0B) - Fifo wait error
    VSCP_TYPE_ERROR_FIFO_WAIT
This error message is used to indicate a fifo wait problem.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type12"></a>Type=12 (0x0C) - Generic error
    VSCP_TYPE_ERROR_GENERIC
This error message is used to indicate a generic error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type13"></a>Type=13 (0x0D) - Hardware error
    VSCP_TYPE_ERROR_HARDWARE
This error message is used to indicate a hardware error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type14"></a>Type=14 (0x0E) - initialization error
    VSCP_TYPE_ERROR_INIT_FAIL
This error message is used to indicate a initialization error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type15"></a>Type=15 (0x0F) - Missing initialization error
    VSCP_TYPE_ERROR_INIT_MISSING
This error message is used to indicate a missing initialization error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type16"></a>Type=16 (0x10) - Initialization ready
    VSCP_TYPE_ERROR_INIT_READY
This error message is used to indicate a initialization ready error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type17"></a>Type=17 (0x11) - Not supported
    VSCP_TYPE_ERROR_NOT_SUPPORTED
This error message is used to indicate a not supported error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type18"></a>Type=18 (0x12) - Overrun error
    VSCP_TYPE_ERROR_OVERRUN
This error message is used to indicate an overrun error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type19"></a>Type=19 (0x13) - Receiver empty error
    VSCP_TYPE_ERROR_RCV_EMPTY
This error message is used to indicate a receiver empty error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type20"></a>Type=20 (0x14) - Register error
    VSCP_TYPE_ERROR_REGISTER
This error message is used to indicate a register error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type21"></a>Type=21 (0x15) - Transmitter full error
    VSCP_TYPE_ERROR_TRM_FULL
This error message is used to indicate a transmitter full error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type28"></a>Type=28 (0x1C) - Library error
    VSCP_TYPE_ERROR_LIBRARY
This error message is used to indicate a library error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type29"></a>Type=29 (0x1D) - Procedural address error
    VSCP_TYPE_ERROR_PROCADDRESS
This error message is used to indicate a procedural address error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type30"></a>Type=30 (0x1E) - Only one instance error
    VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE
This error message is used to indicate an only one instance error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type31"></a>Type=31 (0x1F) - Sub driver error
    VSCP_TYPE_ERROR_SUB_DRIVER
This error message is used to indicate a sub driver error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type32"></a>Type=32 (0x20) - Timeout error
    VSCP_TYPE_ERROR_TIMEOUT
This error message is used to indicate a timeout error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type33"></a>Type=33 (0x21) - Not open error
    VSCP_TYPE_ERROR_NOT_OPEN
This error message is used to indicate a not open error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type34"></a>Type=34 (0x22) - Parameter error
    VSCP_TYPE_ERROR_PARAMETER
This error message is used to indicate a parameter error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type35"></a>Type=35 (0x23) - Memory error
    VSCP_TYPE_ERROR_MEMORY
This error message is used to indicate a memory error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type36"></a>Type=36 (0x24) - Internal error
    VSCP_TYPE_ERROR_INTERNAL
This error message is used to indicate a internal error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type37"></a>Type=37 (0x25) - Communication error
    VSCP_TYPE_ERROR_COMMUNICATION
This error message is used to indicate a communication error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type38"></a>Type=38 (0x26) - User error
    VSCP_TYPE_ERROR_USER
This error message is used to indicate a user error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type39"></a>Type=39 (0x27) - Password error
    VSCP_TYPE_ERROR_PASSWORD
This error message is used to indicate a password error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type40"></a>Type=40 (0x28) - Connection error
    VSCP_TYPE_ERROR_CONNECTION
This error message is used to indicate a connection error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type41"></a>Type=41 (0x29) - Invalid handle error
    VSCP_TYPE_ERROR_INVALID_HANDLE
This error message is used to indicate a invalid handle error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type42"></a>Type=42 (0x2A) - Operation failed error
    VSCP_TYPE_ERROR_OPERATION_FAILED
This error message is used to indicate an operation failed error.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type43"></a>Type=43 (0x2B) - Supplied buffer is to small to fit content
    VSCP_TYPE_ERROR_BUFFER_SMALL
This error message is used to indicate that the supplied buffer is to small to fit content.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type44"></a>Type=44 (0x2C) - Requested item is unknown
    VSCP_TYPE_ERROR_ITEM_UNKNOWN
This error message is used to indicate that the requested item (remote variable) is unknown.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type45"></a>Type=45 (0x2D) - Name is already in use
    VSCP_TYPE_ERROR_NAME_USED
This error message is used to indicate that the name is already in use.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/sub devices within a module.                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

{% include "./bottom_copyright.md" %}