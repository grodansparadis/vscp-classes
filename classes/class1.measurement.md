# Class=10 (0x0A) Measurement

    CLASS1.MEASUREMENT

##  Description

Measurements are fetched from the [SI units and from SI derived units](https://en.wikipedia.org/wiki/International_System_of_Units). The SI unit (or the SI derived unit) is also used as the default unit. As in the SI unit standard, names for a unit is in lower case ("newton") and the unit ("N") is in upper case.

Byte 0 is the data coding byte for all measurement packages. The default unit has bits 0,1,2 set to 000 and the first optional unit 001 and so on. It also have a field for the item ( if more than one sensor is controlled by the node) that the value belongs to. See [data-coding](./vscp_data_coding.md) for a full description on data coding used.

All events in this class are mirrored in [CLASS1.MEASUREMENT32=70 (0x46)](./class1.measurement32.md_) as a single precision float. Default unit is used.

All events in this class are mirrored in [CLASS1.MEASUREMENT64=60 (0x3C)](./class1.measurement64.md) as floating point values using only the default unit .

All events in this class are mirrored in [CLASS1.MEASUREZONE=65 (0x41)](./class1.measurezone.md) as normalized integer values with index, zone, sub-zone. Default unit is used.

All events in this class are mirrored in [CLASS1.SETVALUEZONE=85 (0x55)](./class1.setvaluezone.md) as a normalized value using only the default unit but with index/zone/subzone.

All of the above is also available as [LEVEL I events over Level II](./class2.protocol1.md).

All events in this class are mirrored in 
[CLASS2.MEASUREMENT_STR=1040 (0x410)](./class2.measurement_str.md) which use decimal string values.

All events in this class are mirrored in 
[CLASS2.MEASUREMENT_FLOAT=1060 (0x424)](./class2.measurement_float.md) which use decimal float values.



##   Type=0 (0x00) Undefined

Undefined measurement value. 

##   Type=1 (0x01) Count  

This is a discrete value typical for a count. There is no unit for this measurement just a discrete value. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=2 (0x02) Length/Distance  

**Default unit:** Meter. 

This is a measurement of a length or a distance.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=3 (0x03) Mass  

**Default unit:** Kilogram.

This is a measurement of a mass. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=4 (0x04) Time  

A time measurement.

**Default unit:** Seconds. \\ 
**Opt. unit:** (1) Milliseconds. Absolute: (2) y-y-m-d-h-m-s (binary). String: (3) "HHMMSS". 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=5 (0x05) Electric Current  

**Default unit:** Ampere.

This is a measurement of an electric current. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=6 (0x06) Temperature  

**Default unit:** Kelvin. \\ 
**Opt. unit:** Degree Celsius (1), Fahrenheit (2)

This is a measurement of a temperature. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=7 (0x07) Amount of substance  

**Default unit:** Mole.

This is a measurement of an amount of a substance. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=8 (0x08) Luminous Intensity (Intensity of light)  

**Default unit:** Candela.

This is a measurement of luminous intensity. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=9 (0x09) Frequency  

**Default unit:** Hertz.

This is a measurement of regular events during a second. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=10 (0x0A) Radioactivity and other random events  

**Default unit:** becquerel.
**Optional unit:** curie (1)

This is a measurement of rates of things, which happen randomly, or are unpredictable. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=11 (0x0B) Force  

**Default unit:** newton.

This is a measurement of force. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=12 (0x0C) Pressure  

**Default unit:** pascal. \\ 
**Opt. unit:** bar (1), psi (2)

This is a measurement of pressure. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=13 (0x0D) Energy  

**Default unit:** Joule. \\ 
**Optional unit:** KWh (1)

This is a measurement of energy. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=14 (0x0E) Power  

**Default unit:** watt. \\
**Optional unit:** Horse power (1).

This is a measurement of power. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=15 (0x0F) Electrical Charge  

**Default unit:** coulomb.

This is a measurement electrical charge. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=16 (0x10) Electrical Potential (Voltage)  

**Default unit:** volt.

This is a measurement of electrical potential. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=17 (0x11) Electrical Capacitance  

**Default unit:** farad (F).

This is a measurement of electric capacitance.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=18 (0x012) Electrical Resistance  

**Default unit:** ohm (Ω).

This is a measurement of resistance. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=19 (0x13) Electrical Conductance  

**Default unit:** siemens.

This is a measurement of electrical conductance. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=20 (0x14) Magnetic Field Strength  

**Default unit:** amperes per meter (H).
**Optional units:** teslas (B) (1)

This is a measurement of magnetic field strength. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=21 (0x15) Magnetic Flux  

**Default unit:** weber (Wb).

This is a measurement of magnetic flux. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=22 (0x16) Magnetic Flux Density  

**Default unit:** tesla (B).

This is a measurement of flux density or field strength for magnetic fields (also called the magnetic induction). 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=23 (0x17) Inductance  

**Default unit:** henry (H).

This is a measurement of inductance. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=24 (0x18) Luminous Flux  

**Default unit:** Lumen (lm= cd * sr)

This is a measurement of luminous Flux. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=25 (0x19) Illuminance  

**Default unit:** lux (lx) ( lx = lm / m² )

This is used to express both Illuminance (incidence of light) and Luminous Emittance (emission of light). 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=26 (0x1A) Radiation dose  

**Default unit:** gray (Gy). \\ 
**Opt unit:** sievert (Sv) (1).

This is a measurement of a radiation dose (Absorbed dose of ionizing radiation). 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=27 (0x1B) Catalytic activity  

**Default unit:** katal (z).

This is a measurement of catalytic activity used in biochemistry. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=28 (0x1C) Volume  

**Default unit:** cubic meter (m³)\\ 
**Opt. unit:** Liter (dm³) (1), decilitre (100 cm³) (2), centilitre (10 cm³) (3), millilitre (cm³) (4) where unit 4 is only available for Level II measurement events where units can hold this value.

This is a measurement of volume. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=29 (0x1D) Sound intensity  

**Default unit:** W/m2, watt per square meter. 

This is a measurement of sound intensity (acoustic intensity). 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=30 (0x1E) Angle  

**Default unit:** radian (rad) (Plane angles). \\ 
**Opt Unit:** degree (1) \\ 
**Opt Unit:** arcminute (2) \\ 
**Opt Unit:** arcseconds (3) \\ 

This is a measurement of an angle. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=31 (0x1F) Position WGS 84  

**Default unit:** Longitude. \\ 
**Opt. unit:** Latitude.

This is a measurement of a position as of WGS 84. Normally given as a floating point value. See [./class1.gps.md](CLASS1.GPS) for a better candidate to use for position data.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=32 (0x20) Speed  

**Default unit:** Meters per second.   
**Optional unit:** Kilometers per hour (1) Miles per hour (2)

This is a measurement of a speed. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=33 (0x21) Acceleration  

**Default unit:** Meters per second/second (m/s2).

This is a measurement of acceleration. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=34 (0x22) Tension  

**Default unit:** N/m.

This is a measurement of tension. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=35 (0x23) Damp/moist (Hygrometer reading)  

**Default unit:** Relative percentage 0-100%.

This is a measurement of relative moistness (Humidity). 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=36 (0x24) Flow  

**Default unit:** Cubic meters/second.   
**Opt Unit:** Liters/Second.

This is a measurement of flow. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=37 (0x25) Thermal resistance  

**Default unit:** Thermal ohm K/W.

This is a measurement of thermal resistance. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=38 (0x26) Refractive (optical) power  

**Default unit:** dioptre (dpt) m-1.

This is a measurement of refractive (optical) power. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=39 (0x27) Dynamic viscosity  

**Default unit:** poiseuille (Pl) 

This is a measurement of dynamic viscosity. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=40 (0x28) Sound impedance  

**Default unit:** rayl (Pa·s/m)

This is a measurement of sound impedance. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=41 (0x29) Sound resistance  

**Default unit:** Acoustic ohm Pa · s/ m³.

This is a measurement of sound resistance.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=42 (0x2A) Electric elastance  

**Default unit:** daraf (f-1).

This is a measurement of electric elasticity. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=43 (0x2B) Luminous energy  

**Default unit:** talbot ( tb = lm * s) 

This is a measurement of luminous energy.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=44 (0x2C) Luminance  

**Default unit:** cd / m²) (non SI unit = nit)

This is a measurement of luminance.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=45 (0x2D) Chemical concentration  

**Default unit:** molal (mol/kg).

This is a measurement of chemical concentration. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=46 (0x2E) Reserved  

Reserved (previously was doublet of Type= 26, don't use any longer!) 

##   Type=47 (0x2F) Dose equivalent  

**Default unit:** sievert (J/Kg).

This is a measurement of dose equivalent. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=48 (0x30) Reserved  

Reserved (was doublet of Type= 24, do not use any longer!)

##   Type=49 (0x31) Dew Point  

**Default unit:** Kelvin.  
**Opt. unit:** Degree Celsius (1), Fahrenheit (2)

This is a measurement of the Dew Point. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=50 (0x32) Relative Level  

**Default unit:** Relative value.

This is a relative value for a level measurement without a unit. It is just relative to the min/max value for the selected data representation, typically percentage or per mille or similar. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=51 (0x33) Altitude.  

**Default unit:** Meter.  
**Opt. unit:** Feet(1), inches (2)

Altitude in meters. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=52 (0x34) Area  

**Default unit:** square meter (m²)

Area in square meter. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=53 (0x35) Radiant intensity  

**Default unit:** watt per steradian ( W / sr )

Radiated power per room angle. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=54 (0x36) Radiance  

**Default unit:** watt per steradian per square metre ( W / (sr * m²) )

This is the radiant flux emitted, reflected, transmitted or received by a surface.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=55 (0x37) Irradiance, Exitance, Radiosity  

**Default unit:** watt per square metre ( W / m² )

Power emitted from or striking onto a surface or area. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=56 (0x38) Spectral radiance  

**Default unit:** watt per steradian per square metre per nm (W·sr-1·m-2·nm-1) \\  
**Opt. unit:** watt per steradian per meter3 (W·sr-1·m-3) (1), watt per steradian per square metre per hertz (W·sr-1·m-3) (2)

Radiance of a surface per unit frequency or wavelength.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=57 (0x39) Spectral irradiance  

**Default unit:** watt per square metre per nm (W·m-2·nm-1) \\ 
**Opt. unit:** watt per metre3 (W·m-3) (1), watt per square metre per hertz (W·m-2·Hz-1) (2)

Irradiance of a surface per unit frequency or wavelength.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=58 (0x3A) Sound pressure (acoustic pressure)  

**Default unit:** pascal (Pa) 

This is a measurement of sound pressure (acoustic pressure). 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=59 (0x3B) Sound energy density  

**Default unit:** pascal (Pa) 

Sound energy density or sound density is the sound energy per unit volume.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

##   Type=60 (0x3C) Sound level  

**Default unit:** decibel (dB) 

Sound level expressed in decibel. This event is supplied for convenience.

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



{% include "./bottom_copyright.md" %}

