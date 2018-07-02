# Class=506 (0x01FA) - Diagnostic

    CLASS1.DIAGNOSTIC

## Description

Diagnostic functionality. 

The diagnostic events can be used to report malfunctions and errors. 

## <a name="type0"></a>Type=0 (0x00) - General event
    VSCP_TYPE_DIAGNOSTIC_GENERAL
General Event. 


 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | index. Often used as an index for channels/subdevices within a module. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 
        
----

## <a name="type1"></a>Type=1 (0x01) - Overvoltage
    VSCP_TYPE_DIAGNOSTIC_OVERVOLTAGE
Over voltage has been diagnosed. 

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type2"></a>Type=2 (0x02) - Undervoltage
    VSCP_TYPE_DIAGNOSTIC_UNDERVOLTAGE
Under voltage has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type3"></a>Type=3 (0x03) - USB VBUS low
    VSCP_TYPE_DIAGNOSTIC_VBUS_LOW
Low voltage on USB VBUS has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type4"></a>Type=4 (0x04) - Battery voltage low
    VSCP_TYPE_DIAGNOSTIC_BATTERY_LOW
Low battery voltage has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type5"></a>Type=5 (0x05) - Battery full voltage
    VSCP_TYPE_DIAGNOSTIC_BATTERY_FULL
Battery full voltage has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type6"></a>Type=6 (0x06) - Battery error
    VSCP_TYPE_DIAGNOSTIC_BATTERY_ERROR
Battery error has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type7"></a>Type=7 (0x07) - Battery OK
    VSCP_TYPE_DIAGNOSTIC_BATTERY_OK
Functional battery has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type8"></a>Type=8 (0x08) - Over current
    VSCP_TYPE_DIAGNOSTIC_OVERCURRENT
Over current has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type9"></a>Type=9 (0x09) - Circuit error
    VSCP_TYPE_DIAGNOSTIC_CIRCUIT_ERROR
Circuit error has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type10"></a>Type=10 (0x0A) - Short circuit
    VSCP_TYPE_DIAGNOSTIC_SHORT_CIRCUIT
Short circuit has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type11"></a>Type=11 (0x0B) - Open Circuit
    VSCP_TYPE_DIAGNOSTIC_OPEN_CIRCUIT
Open Circuit has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type12"></a>Type=12 (0x0C) - Moist
    VSCP_TYPE_DIAGNOSTIC_MOIST
Moist has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type13"></a>Type=13 (0x0D) - Wire failure
    VSCP_TYPE_DIAGNOSTIC_WIRE_FAIL
Wire failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type14"></a>Type=14 (0x0E) - Wireless faliure
    VSCP_TYPE_DIAGNOSTIC_WIRELESS_FAIL
Wireless faliure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type15"></a>Type=15 (0x0F) - IR failure
    VSCP_TYPE_DIAGNOSTIC_IR_FAIL
IR failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type16"></a>Type=16 (0x10) - 1-wire failure
    VSCP_TYPE_DIAGNOSTIC_1WIRE_FAIL
1-wire failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type17"></a>Type=17 (0x11) - RS-222 failure
    VSCP_TYPE_DIAGNOSTIC_RS222_FAIL
RS-222 failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type18"></a>Type=18 (0x12) - RS-232 failure
    VSCP_TYPE_DIAGNOSTIC_RS232_FAIL
RS-232 failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type19"></a>Type=19 (0x13) - RS-423 failure
    VSCP_TYPE_DIAGNOSTIC_RS423_FAIL
RS-423 failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type20"></a>Type=20 (0x14) - RS-485 failure
    VSCP_TYPE_DIAGNOSTIC_RS485_FAIL
RS-485 failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type21"></a>Type=21 (0x15) - CAN failure
    VSCP_TYPE_DIAGNOSTIC_CAN_FAIL
CAN failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type22"></a>Type=22 (0x16) - LAN failure
    VSCP_TYPE_DIAGNOSTIC_LAN_FAIL
LAN failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type23"></a>Type=23 (0x17) - USB failure
    VSCP_TYPE_DIAGNOSTIC_USB_FAIL
USB failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type24"></a>Type=24 (0x18) - Wifi failure
    VSCP_TYPE_DIAGNOSTIC_WIFI_FAIL
Wifi failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type25"></a>Type=25 (0x19) - NFC/RFID failure
    VSCP_TYPE_DIAGNOSTIC_NFC_RFID_FAIL
NFC/RFID failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type26"></a>Type=26 (0x1A) - Low signal
    VSCP_TYPE_DIAGNOSTIC_LOW_SIGNAL
Low signal has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type27"></a>Type=27 (0x1B) - High signal
    VSCP_TYPE_DIAGNOSTIC_HIGH_SIGNAL
High signal has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type28"></a>Type=28 (0x1C) - ADC failure
    VSCP_TYPE_DIAGNOSTIC_ADC_FAIL
ADC failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type29"></a>Type=29 (0x1D) - ALU failure
    VSCP_TYPE_DIAGNOSTIC_ALU_FAIL
ALU failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type30"></a>Type=30 (0x1E) - Assert
    VSCP_TYPE_DIAGNOSTIC_ASSERT
An assert has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type31"></a>Type=31 (0x1F) - DAC failure
    VSCP_TYPE_DIAGNOSTIC_DAC_FAIL
DAC failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type32"></a>Type=32 (0x20) - DMA failure
    VSCP_TYPE_DIAGNOSTIC_DMA_FAIL
DMA failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type33"></a>Type=33 (0x21) - Ethernet failure
    VSCP_TYPE_DIAGNOSTIC_ETH_FAIL
Ethernet failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type34"></a>Type=34 (0x22) - Exception
    VSCP_TYPE_DIAGNOSTIC_EXCEPTION
Exception has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type35"></a>Type=35 (0x23) - FPU failure
    VSCP_TYPE_DIAGNOSTIC_FPU_FAIL
Floating point unit (FPU) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type36"></a>Type=36 (0x24) - GPIO failure
    VSCP_TYPE_DIAGNOSTIC_GPIO_FAIL
General purpose I/O (GPIO) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type37"></a>Type=37 (0x25) - I2C failure
    VSCP_TYPE_DIAGNOSTIC_I2C_FAIL
I2C failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type38"></a>Type=38 (0x26) - I2S failure
    VSCP_TYPE_DIAGNOSTIC_I2S_FAIL
I2C failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type39"></a>Type=39 (0x27) - Invalid configuration
    VSCP_TYPE_DIAGNOSTIC_INVALID_CONFIG
Invalid configuration has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type40"></a>Type=40 (0x28) - MMU failure
    VSCP_TYPE_DIAGNOSTIC_MMU_FAIL
Memory Management Unit (MMU) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type41"></a>Type=41 (0x29) - NMI failure
    VSCP_TYPE_DIAGNOSTIC_NMI
Non mask-able interrupt (NMI) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type42"></a>Type=42 (0x2A) - Overheat
    VSCP_TYPE_DIAGNOSTIC_OVERHEAT
Overheat has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type43"></a>Type=43 (0x2B) - PLL fail
    VSCP_TYPE_DIAGNOSTIC_PLL_FAIL
Phased Locked Loop (PLL) fail has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type44"></a>Type=44 (0x2C) - POR failure
    VSCP_TYPE_DIAGNOSTIC_POR_FAIL
Power ON Reset (POR) fail has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type45"></a>Type=45 (0x2D) - PWM failure
    VSCP_TYPE_DIAGNOSTIC_PWM_FAIL
Pulse Width Modulation (PWM) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type46"></a>Type=46 (0x2E) - RAM failure
    VSCP_TYPE_DIAGNOSTIC_RAM_FAIL
Random Access Memory (RAM) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type47"></a>Type=47 (0x2F) - ROM failure
    VSCP_TYPE_DIAGNOSTIC_ROM_FAIL
Read only memory (ROM) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type48"></a>Type=48 (0x30) - SPI failure
    VSCP_TYPE_DIAGNOSTIC_SPI_FAIL
Serial peripheral interface (SPI) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type49"></a>Type=49 (0x31) - Stack failure
    VSCP_TYPE_DIAGNOSTIC_STACK_FAIL
Stack failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type50"></a>Type=50 (0x32) - LIN bus failure
    VSCP_TYPE_DIAGNOSTIC_LIN_FAIL
LIN bus failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type51"></a>Type=51 (0x33) - UART failure
    VSCP_TYPE_DIAGNOSTIC_UART_FAIL
UART failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type52"></a>Type=52 (0x34) - Unhandled interrupt
    VSCP_TYPE_DIAGNOSTIC_UNHANDLED_INT
Unhandled interrupt has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type53"></a>Type=53 (0x35) - Memory failure
    VSCP_TYPE_DIAGNOSTIC_MEMORY_FAIL
Memory failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type54"></a>Type=54 (0x36) - Variable range failure
    VSCP_TYPE_DIAGNOSTIC_VARIABLE_RANGE
Variable range failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type55"></a>Type=55 (0x37) - WDT failure
    VSCP_TYPE_DIAGNOSTIC_WDT
Watch Dog Timer (WDT) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type56"></a>Type=56 (0x38) - EEPROM failure
    VSCP_TYPE_DIAGNOSTIC_EEPROM_FAIL
EEPROM failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type57"></a>Type=57 (0x39) - Encryption failure
    VSCP_TYPE_DIAGNOSTIC_ENCRYPTION_FAIL
Encryption failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type58"></a>Type=58 (0x3A) - Bad user input failure
    VSCP_TYPE_DIAGNOSTIC_BAD_USER_INPUT
Bad user input failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type59"></a>Type=59 (0x3B) - Decryption failure
    VSCP_TYPE_DIAGNOSTIC_DECRYPTION_FAIL
Decryption failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type60"></a>Type=60 (0x3C) - Noise
    VSCP_TYPE_DIAGNOSTIC_NOISE
Noise has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type61"></a>Type=61 (0x3D) - Boot loader failure
    VSCP_TYPE_DIAGNOSTIC_BOOTLOADER_FAIL
Boot loader failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


----

## <a name="type62"></a>Type=62 (0x3E) - Program flow failure
    VSCP_TYPE_DIAGNOSTIC_PROGRAMFLOW_FAIL
Program flow failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type63"></a>Type=63 (0x3F) - RTC faiure
    VSCP_TYPE_DIAGNOSTIC_RTC_FAIL
Real Time Clock (RTC) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type64"></a>Type=64 (0x40) - System test failure
    VSCP_TYPE_DIAGNOSTIC_SYSTEM_TEST_FAIL
System test failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type65"></a>Type=65 (0x41) - Sensor failure
    VSCP_TYPE_DIAGNOSTIC_SENSOR_FAIL
Sensor failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type66"></a>Type=66 (0x42) - Safe state entered
    VSCP_TYPE_DIAGNOSTIC_SAFESTATE
Safe state entered has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type67"></a>Type=67 (0x43) - Signal implausible
    VSCP_TYPE_DIAGNOSTIC_SIGNAL_IMPLAUSIBLE
Signal implausible has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type68"></a>Type=68 (0x44) - Storage fail
    VSCP_TYPE_DIAGNOSTIC_STORAGE_FAIL
Storage fail has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type69"></a>Type=69 (0x45) - Self test OK
    VSCP_TYPE_DIAGNOSTIC_SELFTEST_FAIL
Self test OK has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type70"></a>Type=70 (0x46) - ESD/EMC/EMI failure
    VSCP_TYPE_DIAGNOSTIC_ESD_EMC_EMI
ESD/EMC/EMI failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type71"></a>Type=71 (0x47) - Timeout
    VSCP_TYPE_DIAGNOSTIC_TIMEOUT
Timeout has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type72"></a>Type=72 (0x48) - LCD failure
    VSCP_TYPE_DIAGNOSTIC_LCD_FAIL
LCD failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type73"></a>Type=73 (0x49) - Touch panel failure
    VSCP_TYPE_DIAGNOSTIC_TOUCHPANEL_FAIL
Touch panel failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type74"></a>Type=74 (0x4A) - No load
    VSCP_TYPE_DIAGNOSTIC_NOLOAD
No load has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type75"></a>Type=75 (0x4B) - Cooling failure
    VSCP_TYPE_DIAGNOSTIC_COOLING_FAIL
Cooling failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type76"></a>Type=76 (0x4C) - Heating failure
    VSCP_TYPE_DIAGNOSTIC_HEATING_FAIL
Heating failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type77"></a>Type=77 (0x4D) - Transmission failure
    VSCP_TYPE_DIAGNOSTIC_TX_FAIL
Transmission failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type78"></a>Type=78 (0x4E) - Receiption failure
    VSCP_TYPE_DIAGNOSTIC_RX_FAIL
Receiption failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

## <a name="type79"></a>Type=79 (0x4F) - External IC failure
    VSCP_TYPE_DIAGNOSTIC_EXT_IC_FAIL
A failure in an external IC circuit has been detected.

 | Data byte | Description                                                                                       | 
 | :---------: | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

----

{% include "./bottom_copyright.md" %}