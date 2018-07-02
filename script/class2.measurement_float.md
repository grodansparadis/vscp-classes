# Class=1060 (0x0424) - Measurement float

    CLASS2.MEASUREMENT_FLOAT

## Description

This is a mirror of [CLASS1_MEASUREMENT](./class1.measurement.md) where the data is in string form. The zero terminated string has the following form “sensor-index, value-unit, zone, subzone, value” where the value is a double precision floating point value and the senor-index and value-unit is the same as for [CLASS1_MEASUREMENT](./class1.measurement.md) but where sensor index's can be in the range 0-255 and value-unit in the range 0-255.

 | Byte | Description                                                    | 
 | :----: | -----------                                                    | 
 | 0    | Index for sensor, 0-255.                                       | 
 | 1    | Zone, 0-255.                                                   | 
 | 2    | Sub zone, 0-255.                                               | 
 | 3    | Unit from measurements, 0-255.                                 | 
 | 4-11 | 64-bit double precision floating point value stored MSB first. | 


## <a name="type0"></a>Type=0 (0x00) - General event
    VSCP_TYPE_MEASUREMENT_GENERALGeneral Event.
----

## <a name="type1"></a>Type=1 (0x01) - Count
    VSCP_TYPE_MEASUREMENT_COUNTThis is a discrete value typical for a count. There is no unit for this measurement just a discrete value. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | Data coding. | 
 | 1-7       | Data with format defined by byte 0. |
----

## <a name="type2"></a>Type=2 (0x02) - Length/Distance
    VSCP_TYPE_MEASUREMENT_LENGTH**Default unit:** Meter. 

This is a measurement of a length or a distance.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 
----

## <a name="type3"></a>Type=3 (0x03) - Mass
    VSCP_TYPE_MEASUREMENT_MASS**Default unit:** Kilogram.

This is a measurement of a mass. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type4"></a>Type=4 (0x04) - Time
    VSCP_TYPE_MEASUREMENT_TIMEA time measurement.

**Default unit:** Seconds.  
**Opt. unit:** (1) Milliseconds. Absolute: (2) y-y-m-d-h-m-s (binary). String: (3) "HHMMSS". 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type5"></a>Type=5 (0x05) - Electric Current
    VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT**Default unit:** Ampere.

This is a measurement of an electric current. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type6"></a>Type=6 (0x06) - Temperature
    VSCP_TYPE_MEASUREMENT_TEMPERATURE**Default unit:** Kelvin.  
**Opt. unit:** Degree Celsius (1), Fahrenheit (2)

This is a measurement of a temperature. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type7"></a>Type=7 (0x07) - Amount of substance
    VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE**Default unit:** Mole.

This is a measurement of an amount of a substance. 

 | Data byte | Description                         | 
 | --------- | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type8"></a>Type=8 (0x08) - Luminous Intensity (Intensity of light)
    VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT**Default unit:** Candela.

This is a measurement of luminous intensity. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type9"></a>Type=9 (0x09) - Frequency
    VSCP_TYPE_MEASUREMENT_FREQUENCY
**Default unit:** Hertz.

This is a measurement of regular events during a second. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type10"></a>Type=10 (0x0A) - Radioactivity and other random events
    VSCP_TYPE_MEASUREMENT_RADIOACTIVITY**Default unit:** becquerel.
**Optional unit:** curie (1)

This is a measurement of rates of things, which happen randomly, or are unpredictable. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type11"></a>Type=11 (0x0B) - Force
    VSCP_TYPE_MEASUREMENT_FORCE**Default unit:** newton.

This is a measurement of force. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type12"></a>Type=12 (0x0C) - Pressure
    VSCP_TYPE_MEASUREMENT_PRESSURE**Default unit:** pascal.  
**Opt. unit:** bar (1), psi (2)

This is a measurement of pressure. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type13"></a>Type=13 (0x0D) - Energy
    VSCP_TYPE_MEASUREMENT_ENERGY**Default unit:** Joule.  
**Optional unit:** KWh (1)

This is a measurement of energy. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type14"></a>Type=14 (0x0E) - Power
    VSCP_TYPE_MEASUREMENT_POWER**Default unit:** watt.  
**Optional unit:** Horse power (1).

This is a measurement of power. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type15"></a>Type=15 (0x0F) - Electrical Charge
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE**Default unit:** coulomb.

This is a measurement electrical charge. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type16"></a>Type=16 (0x10) - Electrical Potential (Voltage)
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL**Default unit:** volt.

This is a measurement of electrical potential. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type17"></a>Type=17 (0x11) - Electrical Capacitance
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE**Default unit:** farad (F).

This is a measurement of electric capacitance.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type18"></a>Type=18 (0x12) - Electrical Resistance
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE**Default unit:** ohm (Ω).

This is a measurement of resistance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 
----

## <a name="type19"></a>Type=19 (0x13) - Electrical Conductance
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE**Default unit:** siemens.

This is a measurement of electrical conductance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type20"></a>Type=20 (0x14) - Magnetic Field Strength
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH**Default unit:** amperes per meter (H).  
**Optional units:** teslas (B) (1)

This is a measurement of magnetic field strength. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type21"></a>Type=21 (0x15) - Magnetic Flux
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX**Default unit:** weber (Wb).

This is a measurement of magnetic flux. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type22"></a>Type=22 (0x16) - Magnetic Flux Density
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY**Default unit:** tesla (B).

This is a measurement of flux density or field strength for magnetic fields (also called the magnetic induction). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type23"></a>Type=23 (0x17) - Inductance
    VSCP_TYPE_MEASUREMENT_INDUCTANCE**Default unit:** henry (H).

This is a measurement of inductance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type24"></a>Type=24 (0x18) - Luminous Flux
    VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT**Default unit:** Lumen (lm= cd * sr)

This is a measurement of luminous Flux. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type25"></a>Type=25 (0x19) - Illuminance
    VSCP_TYPE_MEASUREMENT_ILLUMINANCE**Default unit:** lux (lx) ( lx = lm / m² )

This is used to express both Illuminance (incidence of light) and Luminous Emittance (emission of light). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type26"></a>Type=26 (0x1A) - Radiation dose
    VSCP_TYPE_MEASUREMENT_RADIATION_DOSE**Default unit:** gray (Gy).   
**Opt unit:** sievert (Sv) (1).

This is a measurement of a radiation dose (Absorbed dose of ionizing radiation). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type27"></a>Type=27 (0x1B) - Catalytic activity
    VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY**Default unit:** katal (z).

This is a measurement of catalytic activity used in biochemistry. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type28"></a>Type=28 (0x1C) - Volume
    VSCP_TYPE_MEASUREMENT_VOLUME**Default unit:** cubic meter (m³)   
**Opt. unit:** Liter (dm³) (1), decilitre (100 cm³) (2), centilitre (10 cm³) (3), millilitre (cm³) (4) where unit 4 is only available for Level II measurement events where units can hold this value.

This is a measurement of volume. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type29"></a>Type=29 (0x1D) - Sound intensity
    VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY**Default unit:** W/m2, watt per square meter. 

This is a measurement of sound intensity (acoustic intensity). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type30"></a>Type=30 (0x1E) - Angle
    VSCP_TYPE_MEASUREMENT_ANGLE* **Default unit:** radian (rad) (Plane angles).   
* **Opt Unit:** degree (1).
* **Opt Unit:** arcminute (2).
* **Opt Unit:** arcseconds (3).

This is a measurement of an angle. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type31"></a>Type=31 (0x1F) - Position WGS 84
    VSCP_TYPE_MEASUREMENT_POSITION**Default unit:** Longitude.  
**Opt. unit:** Latitude.

This is a measurement of a position as of WGS 84. Normally given as a floating point value. See [./class1.gps.md](CLASS1.GPS) for a better candidate to use for position data.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type32"></a>Type=32 (0x20) - Speed
    VSCP_TYPE_MEASUREMENT_SPEED**Default unit:** Meters per second.   
**Optional unit:** Kilometers per hour (1) Miles per hour (2)

This is a measurement of a speed. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type33"></a>Type=33 (0x21) - Acceleration
    VSCP_TYPE_MEASUREMENT_ACCELERATION**Default unit:** Meters per second/second (m/s2).

This is a measurement of acceleration. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type34"></a>Type=34 (0x22) - Tension
    VSCP_TYPE_MEASUREMENT_TENSION**Default unit:** N/m.

This is a measurement of tension. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type35"></a>Type=35 (0x23) - Damp/moist (Hygrometer reading)
    VSCP_TYPE_MEASUREMENT_HUMIDITY**Default unit:** Relative percentage 0-100%.

This is a measurement of relative moistness (Humidity). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type36"></a>Type=36 (0x24) - Flow
    VSCP_TYPE_MEASUREMENT_FLOW**Default unit:** Cubic meters/second.   
**Opt Unit:** Liters/Second.

This is a measurement of flow. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type37"></a>Type=37 (0x25) - Thermal resistance
    VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE**Default unit:** Thermal ohm K/W.

This is a measurement of thermal resistance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type38"></a>Type=38 (0x26) - Refractive (optical) power
    VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER**Default unit:** dioptre (dpt) m-1.

This is a measurement of refractive (optical) power. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type39"></a>Type=39 (0x27) - Dynamic viscosity
    VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY**Default unit:** poiseuille (Pl) 

This is a measurement of dynamic viscosity. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type40"></a>Type=40 (0x28) - Sound impedance
    VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE**Default unit:** rayl (Pa·s/m)

This is a measurement of sound impedance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type41"></a>Type=41 (0x29) - Sound resistance
    VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE**Default unit:** Acoustic ohm Pa · s/ m³.

This is a measurement of sound resistance.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type42"></a>Type=42 (0x2A) - Electric elastance
    VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE**Default unit:** daraf (f-1).

This is a measurement of electric elasticity. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type43"></a>Type=43 (0x2B) - Luminous energy
    VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY**Default unit:** talbot ( tb = lm * s) 

This is a measurement of luminous energy.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type44"></a>Type=44 (0x2C) - Luminance
    VSCP_TYPE_MEASUREMENT_LUMINANCE**Default unit:** cd / m²) (non SI unit = nit)

This is a measurement of luminance.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type45"></a>Type=45 (0x2D) - Chemical concentration
    VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION**Default unit:** molal (mol/kg).

This is a measurement of chemical concentration. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type46"></a>Type=46 (0x2E) - Reserved
    VSCP_TYPE_MEASUREMENT_RESERVED46Reserved (previously was doublet of Type= 26, don't use any longer!) 

----

## <a name="type47"></a>Type=47 (0x2F) - Dose equivalent
    VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT**Default unit:** sievert (J/Kg).

This is a measurement of dose equivalent. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type48"></a>Type=48 (0x30) - Reserved
    VSCP_TYPE_MEASUREMENT_RESERVED48Reserved (was doublet of Type= 24, do not use any longer!)

----

## <a name="type49"></a>Type=49 (0x31) - Dew Point
    VSCP_TYPE_MEASUREMENT_DEWPOINT**Default unit:** Kelvin.  
**Opt. unit:** Degree Celsius (1), Fahrenheit (2)

This is a measurement of the Dew Point. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type50"></a>Type=50 (0x32) - Relative Level
    VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL**Default unit:** Relative value.

This is a relative value for a level measurement without a unit. It is just relative to the min/max value for the selected data representation, typically percentage or per mille or similar. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type51"></a>Type=51 (0x33) - Altitude
    VSCP_TYPE_MEASUREMENT_ALTITUDE**Default unit:** Meter.  
**Opt. unit:** Feet(1), inches (2)

Altitude in meters. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type52"></a>Type=52 (0x34) - Area
    VSCP_TYPE_MEASUREMENT_AREA**Default unit:** square meter (m²)

Area in square meter. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type53"></a>Type=53 (0x35) - Radiant intensity
    VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY**Default unit:** watt per steradian ( W / sr )

Radiated power per room angle. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type54"></a>Type=54 (0x36) - Radiance
    VSCP_TYPE_MEASUREMENT_RADIANCE**Default unit:** watt per steradian per square metre ( W / (sr * m²) )

This is the radiant flux emitted, reflected, transmitted or received by a surface.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type55"></a>Type=55 (0x37) - Irradiance, Exitance, Radiosity
    VSCP_TYPE_MEASUREMENT_IRRADIANCE**Default unit:** watt per square metre ( W / m² )

Power emitted from or striking onto a surface or area. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type56"></a>Type=56 (0x38) - Spectral radiance
    VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE**Default unit:** watt per steradian per square metre per nm (W·sr-1·m-2·nm-1)    
**Opt. unit:** watt per steradian per meter3 (W·sr-1·m-3) (1), watt per steradian per square metre per hertz (W·sr-1·m-3) (2)

Radiance of a surface per unit frequency or wavelength.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type57"></a>Type=57 (0x39) - Spectral irradiance
    VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE**Default unit:** watt per square metre per nm (W·m-2·nm-1)   
**Opt. unit:** watt per metre3 (W·m-3) (1), watt per square metre per hertz (W·m-2·Hz-1) (2)

Irradiance of a surface per unit frequency or wavelength.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type58"></a>Type=58 (0x3A) - Sound pressure (acoustic pressure)
    VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE**Default unit:** pascal (Pa) 

This is a measurement of sound pressure (acoustic pressure). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type59"></a>Type=59 (0x3B) - Sound energy density
    VSCP_TYPE_MEASUREMENT_SOUND_DENSITY**Default unit:** pascal (Pa) 

Sound energy density or sound density is the sound energy per unit volume.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

## <a name="type60"></a>Type=60 (0x3C) - Sound level
    VSCP_TYPE_MEASUREMENT_SOUND_LEVEL**Default unit:** decibel (dB) 

Sound level expressed in decibel. This event is supplied for convenience.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 

----

{% include "./bottom_copyright.md" %}