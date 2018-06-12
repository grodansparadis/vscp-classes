# Class=15 (0x0f) Data

    CLASS1.DATA
    
## Description

Representation for different general data types. Byte 0 is the data coding byte described [here](./data_coding.md). Unit may not have meaning for some of the types and should be set to zero in that case.

## Type = 0 (0x00) Undefined

General event. 

## Type = 1 (0x01) I/O – value

General I/O value. First data byte defines format. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

## Type = 2 (0x02) A/D value

General A/D value. First data byte defines format. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

## Type = 3 (0x03) D/A value

General D/A value. First data byte defines format. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

## Type = 4 (0x04) Relative strength

Relative strength.  

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

**Coding of units (Level I) **
 | Code | Description                                                                                        | 
 | ---- | -----------                                                                                        | 
 | 0    | **Byte count = 2**: Min = 0, Max = 255 \\ **Byte count = 3**: Min = 0, Max = 65535 \\ and so on... | 
 | 1    | db (decibel)                                                                                       | 
 | 2    | dbV (decibel volts)                                                                                | 
 | 3    | Undefined                                                                                          | 

Units for Level II are the same as for Level I for the first four units.

## Type = 5 (0x05) Signal Level

Signal Level is a relative strength value that (as default) has its maximum at 100 and minimum at 0 interpreted as a percentage. For a digital transmission Signal Level it can be used to give an indication of the analogue signal and CLASS1.DATA, Type = 6, Signal Quality can be used to give an indication of the quality of the digital part as BER (Bit Error Ratio) for example.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

** Coding of units (Level I) **
 | Code | Description                                                                                        | 
 | ---- | -----------                                                                                        | 
 | 0    | (0-100) percentage                                                                                 | 
 | 1    | **Byte count = 2**: Min = 0, Max = 255  **Byte count = 3**: Min = 0, Max = 65535  and so on... | 


Units for Level II are the same as for Level I for the first four units.

## Type = 6 (0x06) Signal Quality

Signal Quality be used to give an indication of the quality of the digital part as BER (Bit Error Ratio) for example. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

** Coding of units (Level I) **

 | Code | Description                                                                                        | 
 | ---- | -----------                                                                                        | 
 | 0    | 0-100, Percent                                                                                     | 
 | 1    | **Byte count = 2**: Min = 0, Max = 255  **Byte count = 3**: Min = 0, Max = 65535  and so on... | 
 | 2    | tbd                                                                                                | 

Units for Level II are the same as for Level I for the first four units.

## Type = 7 (0x07) Count value

General counter value. First data byte defines format. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



{% include "./bottom_copyright.md" %}
