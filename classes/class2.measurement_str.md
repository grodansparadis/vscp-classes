# Class=1040 (0x410) Measurement string

    CLASS2.MEASUREMENT_STR

##  Description 

This is a mirror of [CLASS1_MEASUREMENT](./class1.measurement.md) where the data is in string form. The zero terminated string has the following form “sensor-index, value-unit, zone, subzone, value” where the value is a floating point value in string form and the senor-index and value-unit is the same as for [CLASS1_MEASUREMENT](./class1.measurement.md) but where sensor index's can be in the range 0-255 and value-unit in the range 0-255 (3 is standard).

Floating point numbers should be written as "2345.456" **NOT** as "2345,456" independent of locale and the maximum number can have 483 digits including a possible decimal point.

 | Byte | Description                                                                                                                                      | 
 | ---- | -----------                                                                                                                                      | 
 | 0    | Index for sensor, 0-255.                                                                                                                         | 
 | 1    | Zone, 0-255.                                                                                                                                     | 
 | 2    | Subzone, 0-255.                                                                                                                                  | 
 | 3    | Unit from measurements, 0-255.                                                                                                                   | 
 | 4..  | String up to the maximum data size 483 digits including a possible decimal point. The decimal pint should always be a "." independent of locale. | 

{% include "./bottom_copyright.md" %}

