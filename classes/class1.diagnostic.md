# Class=506 (0x1FA) Diagnostic

    CLASS1.DIAGNOSTIC
    
## Description

Diagnostic functionality. 

The diagnostic events can be used to report malfunctions and errors. 

##   Type=0 (0x00) General.

General diagnostic event. 

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 
                    1
##   Type=1 (0x01) Overvoltage.

Over voltage has been diagnosed. 

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=2 (0x02) Undervoltage. 

Under voltage has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=3 (0x03) USB VBUS low. 

Low voltage on USB VBUS has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=4 (0x04) Battery voltage low. 

Low battery voltage has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=5 (0x05) Battery full voltage.

Battery full voltage has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=6 (0x06) Battery error.

Battery error has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=7 (0x07) Battery OK.

Functional battery has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=8 (0x08) Over current.

Over current has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=9 (0x09) Circuit error.

Circuit error has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=10 (0x0A) Short circuit.

Short circuit has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=11 (0x0B) Open Circuit.

Open Circuit has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=12 (0x0C) Moist.

Moist has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=13 (0x0D) Wire failure.

Wire failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=14 (0x0E) Wireless faliure.

Wireless faliure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=15 (0x0F) IR failure.

IR failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=16 (0x10) 1-wire failure.

1-wire failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=17 (0x11) RS-222 failure.

RS-222 failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=18 (0x12) RS-232 failure.

RS-232 failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=19 (0x13) RS-423 failure.

RS-423 failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=20 (0x14) RS-485 failure.

RS-485 failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=21 (0x15) CAN failure.

CAN failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=22 (0x16) LAN failure.

LAN failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=23 (0x17) USB failure.

USB failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=24 (0x18) Wifi failure.

Wifi failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=25 (0x19) NFC/RFID failure.

NFC/RFID failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=26 (0x1A) Low signal.

Low signal has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=27 (0x1B) High signal.

High signal has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=28 (0x1C) ADC failure.

ADC failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=29 (0x1D) ALU failure.

ALU failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=30 (0x1E) Assert.

An assert has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=31 (0x1F) DAC failure.

DAC failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=32 (0x20) DMA failure.

DMA failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=33 (0x21) Ethernet failure. 

Ethernet failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=34 (0x22) Exception. 

Exception has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=35 (0x23) FPU failure. 

Floating point unit (FPU) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=36 (0x24) GPIO failure. 

General purpose I/O (GPIO) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=37 (0x25) I2C failure. 

I2C failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=38 (0x26) I2S failure. 

I2C failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=39 (0x27) Invalid configuration. 

Invalid configuration has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=40 (0x28) MMU failure. 

Memory Management Unit (MMU) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=41 (0x29) NMI failure. 

Non mask-able interrupt (NMI) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=42 (0x2A) Overheat. 

Overheat has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=43 (0x2B) PLL fail. 

Phased Locked Loop (PLL) fail has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=44 (0x2C) POR failure. 

Power ON Reset (POR) fail has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=45 (0x2D) PWM failure. 

Pulse Width Modulation (PWM) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=46 (0x2E) RAM failure. 

Random Access Memory (RAM) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=47 (0x2F) ROM failure. 

Read only memory (ROM) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=48 (0x30) SPI failure. 

Serial peripheral interface (SPI) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=49 (0x31) Stack failure. 

Stack failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=50 (0x32) LIN bus failure. 

LIN bus failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=51 (0x33) UART failure. 

UART failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=52 (0x34) Unhandled interrupt. 

Unhandled interrupt has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=53 (0x35) Memory failure. 

Memory failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=54 (0x36) Variable range failure. 

Variable range failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=55 (0x37) WDT failure. 

Watch Dog Timer (WDT) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=56 (0x38) EEPROM failure. 

EEPROM failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=57 (0x39) Encryption failure. 

Encryption failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=58 (0x3A) Bad user input failure. 

Bad user input failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=59 (0x3B) Decryption failure. 

Decryption failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=60 (0x3C) Noise. 

Noise has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=61 (0x3D) Boot loader failure. 

Boot loader failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=62 (0x3E) Program flow failure. 

Program flow failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=63 (0x3F) RTC faiure. 

Real Time Clock (RTC) failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=64 (0x40) System test failure. 

System test failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=65 (0x41) Sensor failure. 

Sensor failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=66 (0x42) Safe state entered. 

Safe state entered has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=67 (0x43)Signal implausible. 

Signal implausible has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=68 (0x44) Storage fail. 

Storage fail has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=69 (0x45) Self test OK. 

Self test OK has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=70 (0x46) ESD/EMC/EMI failure. 

ESD/EMC/EMI failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=71 (0x47) Timeout. 

Timeout has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=72 (0x48) LCD failure.  

LCD failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=73 (0x49) Touch panel failure.  

Touch panel failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=74 (0x4A) no load. 

No load has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=75 (0x4B) Cooling failure. 

Cooling failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 


##   Type=76 (0x4C) Heating failure.  

Heating failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=77 (0x4D) Transmission failure. 

Transmission failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=78 (0x4E) Receiption failure. 

Receiption failure has been diagnosed.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

##   Type=79 (0x4F) External IC failure. 

A failure in an external IC circuit has been detected.

 | Data byte | Description                                                                                       | 
 | --------- | -----------                                                                                       | 
 | 0         | index. Often used as an index for channels/subdevices within a module.                            | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                | 
 | 3-7       | Can be present or not be present. If present the bytes give additional user specific information. | 

{% include "./bottom_copyright.md" %}

