# Class=73 (0x49) - Single precision floating point measurement

    CLASS1.MEASUREMENT32X3

## Description

Floating point single precision measurements. This class mirrors the standard measurement events is [CLASS1.MEASUREMENT=13](./class1.measurementx3.md). The measurement unit is always the standard unit.

The value is a "float"	- IEEE-754, 32 Bits, single precision.

    s eeeeeeeeeee mmmmmmmmmmmmmmmmmmmmmmm
    s = sign bit ( 1-bit )
    e = exponent ( 8-bits )
    m = mantissa ( 23-bits )

That is a total of 32-bits. The most significant byte is stored in byte 0.

 | Byte | Description                    |
 | ---- | -----------                    |
 | 0    | s e7 e6 e5 e4 e3 e2 e1         |
 | 1    | e0 m22 m21 m20 m19 m18 m17 m16 |
 | 2    | m15 m14 m13 m12 m11 m19 m9 m8  |
 | 3    | m7 m6 m5 m4 m3 m2 m1 m0        |

## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_MEASUREMENTX3_GENERAL
```
General Event.






----


[filename](./bottom_copyright.md ':include')