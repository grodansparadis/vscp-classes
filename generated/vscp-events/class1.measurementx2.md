# Class=12 (0x0C) - Measurement

    CLASS1.MEASUREMENTX2

## Description

Measurements are fetched from the [SI units and from SI derived units](https://en.wikipedia.org/wiki/International_System_of_Units). The SI unit (or the SI derived unit) is also used as the default unit. As in the SI unit standard, names for a unit is in lower case ("newton") and the unit ("N") is in upper case.

**Byte 0** is the data coding byte for all measurement packages. The default unit has bits 0,1,2 set to 000 and the first optional unit 001 and so on. It also have a field for the item ( if more than one sensor is controlled by the node) that the value belongs to. See [data-coding](./vscp_data_coding.md) for a full description on data coding used.

All events in this class are mirrored in [CLASS1.MEASUREMENT32=70 (0x46)](./class1.measurement32.md_) as a single precision float. Default unit is used.

All events in this class are mirrored in [CLASS1.MEASUREMENT64=60 (0x3C)](./class1.measurement64.md) as floating point values using only the default unit .

All events in this class are mirrored in [CLASS1.MEASUREZONE=65 (0x41)](./class1.measurezone.md) as normalized integer values with index, zone, sub-zone. Default unit is used.

All events in this class are mirrored in [CLASS1.SETVALUEZONE=85 (0x55)](./class1.setvaluezone.md) as a normalized value using only the default unit but with index/zone/subzone.

All of the above is also available as [LEVEL I events over Level II](./class2.protocol1.md).

All events in this class are mirrored in
[CLASS2.MEASUREMENT_STR=1040 (0x410)](./class2.measurement_str.md) as the events, in the range 512-767, which use decimal string values.

All events in this class are mirrored in
[CLASS2.MEASUREMENT_FLOAT=1060 (0x424)](./class2.measurement_float.md) as the events, in the range 512-767, which use decimal float values.

The relationship between Level II measurement events and Level I measurement events is like this

  - [CLASS1.MEASUREMENT=10 (0x0A)](./class1.measurement.md) which is mirrored as Level II measurements 0-255.
  - [CLASS1.MEASUREMENT=11 (0x0B)](./class1.measurementx1.md) which is mirrored as Level II measurements 256-511.
  - [CLASS1.MEASUREMENT=12 (0x0C)](./class1.measurementx2.md) which is mirrored as Level II measurements 512-767.
  - [CLASS1.MEASUREMENT=13 (0x0D)](./class1.measurementx3.md) which is mirrored as Level II measurements 768-1023.
  - [CLASS1.MEASUREMENT=14 (0x0E)](./class1.measurementx3.md) which is mirrored as Level II measurements 1024-1279.

Level II measurement events with type >= 1280 have no relation to any Level I measurement events.

## Type=0 (0x00) - General event :id=type0
```
VSCP_TYPE_MEASUREMENTX2_GENERAL
```
General Event.



----

[filename](./bottom_copyright.md ':include')