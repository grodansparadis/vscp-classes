# Class=582 (0x0246) - Class2 Level I Measuremet32

    CLASS2.LEVEL1.MEASUREMENT32

## Description

This class mirrors the [CLASS1.MEASUREMENT32](./class1.measurement32.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.

## Type=0 (0x00) - General event :id=type0
    VSCP_TYPE_MEASUREMENT_GENERALGeneral Event.


----


## Type=1 (0x01) - Count :id=type1
    VSCP_TYPE_MEASUREMENT_COUNTThis is a discrete value typical for a count. There is no unit for this measurement just a discrete value. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | Data coding. | 
 | 1-7       | Data with format defined by byte 0. |


----


## Type=2 (0x02) - Length/Distance :id=type2
    VSCP_TYPE_MEASUREMENT_LENGTH**Default unit:** Meter. 

This is a measurement of a length or a distance.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 


----


## Type=3 (0x03) - Mass :id=type3
    VSCP_TYPE_MEASUREMENT_MASS**Default unit:** Kilogram.

This is a measurement of a mass. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=4 (0x04) - Time :id=type4
    VSCP_TYPE_MEASUREMENT_TIMEA time measurement.

**Default unit:** Seconds.  
**Opt. unit:** (1) Milliseconds. Absolute: (2) y-y-m-d-h-m-s (binary). String: (3) "HHMMSS". 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=5 (0x05) - Electric Current :id=type5
    VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT**Default unit:** Ampere.

This is a measurement of an electric current. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=6 (0x06) - Temperature :id=type6
    VSCP_TYPE_MEASUREMENT_TEMPERATURE**Default unit:** Kelvin.  
**Opt. unit:** Degree Celsius (1), Fahrenheit (2)

This is a measurement of a temperature. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=7 (0x07) - Amount of substance :id=type7
    VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE**Default unit:** Mole.

This is a measurement of an amount of a substance. 

 | Data byte | Description | 
 | :---------: | -----------  | 
 |  0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=8 (0x08) - Luminous Intensity (Intensity of light) :id=type8
    VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT**Default unit:** Candela.

This is a measurement of luminous intensity. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=9 (0x09) - Frequency :id=type9
    VSCP_TYPE_MEASUREMENT_FREQUENCY
**Default unit:** Hertz.

This is a measurement of regular events during a second. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=10 (0x0A) - Radioactivity and other random events :id=type10
    VSCP_TYPE_MEASUREMENT_RADIOACTIVITY**Default unit:** becquerel.
**Optional unit:** curie (1)

This is a measurement of rates of things, which happen randomly, or are unpredictable. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=11 (0x0B) - Force :id=type11
    VSCP_TYPE_MEASUREMENT_FORCE**Default unit:** newton.

This is a measurement of force. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=12 (0x0C) - Pressure :id=type12
    VSCP_TYPE_MEASUREMENT_PRESSURE**Default unit:** pascal.  
**Opt. unit:** bar (1), psi (2)

This is a measurement of pressure. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=13 (0x0D) - Energy :id=type13
    VSCP_TYPE_MEASUREMENT_ENERGY**Default unit:** Joule.  
**Optional unit:** KWh (1)

This is a measurement of energy. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=14 (0x0E) - Power :id=type14
    VSCP_TYPE_MEASUREMENT_POWER**Default unit:** watt.  
**Optional unit:** Horse power (1).

This is a measurement of power. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=15 (0x0F) - Electrical Charge :id=type15
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE**Default unit:** coulomb.

This is a measurement electrical charge. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=16 (0x10) - Electrical Potential (Voltage) :id=type16
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL**Default unit:** volt.

This is a measurement of electrical potential. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=17 (0x11) - Electrical Capacitance :id=type17
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE**Default unit:** farad (F).

This is a measurement of electric capacitance.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=18 (0x12) - Electrical Resistance :id=type18
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE**Default unit:** ohm (Ω).

This is a measurement of resistance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 


----


## Type=19 (0x13) - Electrical Conductance :id=type19
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE**Default unit:** siemens.

This is a measurement of electrical conductance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=20 (0x14) - Magnetic Field Strength :id=type20
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH**Default unit:** amperes per meter (H).  
**Optional units:** teslas (B) (1)

This is a measurement of magnetic field strength. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=21 (0x15) - Magnetic Flux :id=type21
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX**Default unit:** weber (Wb).

This is a measurement of magnetic flux. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=22 (0x16) - Magnetic Flux Density :id=type22
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY**Default unit:** tesla (B).

This is a measurement of flux density or field strength for magnetic fields (also called the magnetic induction). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=23 (0x17) - Inductance :id=type23
    VSCP_TYPE_MEASUREMENT_INDUCTANCE**Default unit:** henry (H).

This is a measurement of inductance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=24 (0x18) - Luminous Flux :id=type24
    VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT**Default unit:** Lumen (lm= cd * sr)

This is a measurement of luminous Flux. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=25 (0x19) - Illuminance :id=type25
    VSCP_TYPE_MEASUREMENT_ILLUMINANCE**Default unit:** lux (lx) ( lx = lm / m² )

This is used to express both Illuminance (incidence of light) and Luminous Emittance (emission of light). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=26 (0x1A) - Radiation dose :id=type26
    VSCP_TYPE_MEASUREMENT_RADIATION_DOSE**Default unit:** gray (Gy).   
**Opt unit:** sievert (Sv) (1).

This is a measurement of a radiation dose (Absorbed dose of ionizing radiation). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=27 (0x1B) - Catalytic activity :id=type27
    VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY**Default unit:** katal (z).

This is a measurement of catalytic activity used in biochemistry. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=28 (0x1C) - Volume :id=type28
    VSCP_TYPE_MEASUREMENT_VOLUME**Default unit:** cubic meter (m³)   
**Opt. unit:** Liter (dm³) (1), decilitre (100 cm³) (2), centilitre (10 cm³) (3), millilitre (cm³) (4) where unit 4 is only available for Level II measurement events where units can hold this value.

This is a measurement of volume. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=29 (0x1D) - Sound intensity :id=type29
    VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY**Default unit:** W/m2, watt per square meter. 

This is a measurement of sound intensity (acoustic intensity). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=30 (0x1E) - Angle :id=type30
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


## Type=31 (0x1F) - Position WGS 84 :id=type31
    VSCP_TYPE_MEASUREMENT_POSITION**Default unit:** Longitude.  
**Opt. unit:** Latitude.

This is a measurement of a position as of WGS 84. Normally given as a floating point value. See [./class1.gps.md](CLASS1.GPS) for a better candidate to use for position data.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=32 (0x20) - Speed :id=type32
    VSCP_TYPE_MEASUREMENT_SPEED**Default unit:** Meters per second.   
**Optional unit:** Kilometers per hour (1) Miles per hour (2)

This is a measurement of a speed. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=33 (0x21) - Acceleration :id=type33
    VSCP_TYPE_MEASUREMENT_ACCELERATION**Default unit:** Meters per second/second (m/s2).

This is a measurement of acceleration. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=34 (0x22) - Tension :id=type34
    VSCP_TYPE_MEASUREMENT_TENSION**Default unit:** N/m.

This is a measurement of tension. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=35 (0x23) - Damp/moist (Hygrometer reading) :id=type35
    VSCP_TYPE_MEASUREMENT_HUMIDITY**Default unit:** Relative percentage 0-100%.

This is a measurement of relative moistness (Humidity). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=36 (0x24) - Flow :id=type36
    VSCP_TYPE_MEASUREMENT_FLOW**Default unit:** Cubic meters/second.   
**Opt Unit:** Liters/Second.

This is a measurement of flow. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=37 (0x25) - Thermal resistance :id=type37
    VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE**Default unit:** Thermal ohm K/W.

This is a measurement of thermal resistance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=38 (0x26) - Refractive (optical) power :id=type38
    VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER**Default unit:** dioptre (dpt) m-1.

This is a measurement of refractive (optical) power. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=39 (0x27) - Dynamic viscosity :id=type39
    VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY**Default unit:** poiseuille (Pl) 

This is a measurement of dynamic viscosity. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=40 (0x28) - Sound impedance :id=type40
    VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE**Default unit:** rayl (Pa·s/m)

This is a measurement of sound impedance. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=41 (0x29) - Sound resistance :id=type41
    VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE**Default unit:** Acoustic ohm Pa · s/ m³.

This is a measurement of sound resistance.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=42 (0x2A) - Electric elastance :id=type42
    VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE**Default unit:** daraf (f-1).

This is a measurement of electric elasticity. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=43 (0x2B) - Luminous energy :id=type43
    VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY**Default unit:** talbot ( tb = lm * s) 

This is a measurement of luminous energy.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=44 (0x2C) - Luminance :id=type44
    VSCP_TYPE_MEASUREMENT_LUMINANCE**Default unit:** cd / m²) (non SI unit = nit)

This is a measurement of luminance.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=45 (0x2D) - Chemical concentration :id=type45
    VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION**Default unit:** molal (mol/kg).

This is a measurement of chemical concentration. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=46 (0x2E) - Reserved :id=type46
    VSCP_TYPE_MEASUREMENT_RESERVED46Reserved (previously was doublet of Type= 26, don't use any longer!) 



----


## Type=47 (0x2F) - Dose equivalent :id=type47
    VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT**Default unit:** sievert (J/Kg).

This is a measurement of dose equivalent. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=48 (0x30) - Reserved :id=type48
    VSCP_TYPE_MEASUREMENT_RESERVED48Reserved (was doublet of Type= 24, do not use any longer!)



----


## Type=49 (0x31) - Dew Point :id=type49
    VSCP_TYPE_MEASUREMENT_DEWPOINT**Default unit:** Kelvin.  
**Opt. unit:** Degree Celsius (1), Fahrenheit (2)

This is a measurement of the Dew Point. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=50 (0x32) - Relative Level :id=type50
    VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL**Default unit:** Relative value.

This is a relative value for a level measurement without a unit. It is just relative to the min/max value for the selected data representation, typically percentage or per mille or similar. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=51 (0x33) - Altitude :id=type51
    VSCP_TYPE_MEASUREMENT_ALTITUDE**Default unit:** Meter.  
**Opt. unit:** Feet(1), inches (2)

Altitude in meters. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=52 (0x34) - Area :id=type52
    VSCP_TYPE_MEASUREMENT_AREA**Default unit:** square meter (m²)

Area in square meter. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=53 (0x35) - Radiant intensity :id=type53
    VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY**Default unit:** watt per steradian ( W / sr )

Radiated power per room angle. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=54 (0x36) - Radiance :id=type54
    VSCP_TYPE_MEASUREMENT_RADIANCE**Default unit:** watt per steradian per square metre ( W / (sr * m²) )

This is the radiant flux emitted, reflected, transmitted or received by a surface.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=55 (0x37) - Irradiance, Exitance, Radiosity :id=type55
    VSCP_TYPE_MEASUREMENT_IRRADIANCE**Default unit:** watt per square metre ( W / m² )

Power emitted from or striking onto a surface or area. 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=56 (0x38) - Spectral radiance :id=type56
    VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE**Default unit:** watt per steradian per square metre per nm (W·sr-1·m-2·nm-1)    
**Opt. unit:** watt per steradian per meter3 (W·sr-1·m-3) (1), watt per steradian per square metre per hertz (W·sr-1·m-3) (2)

Radiance of a surface per unit frequency or wavelength.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=57 (0x39) - Spectral irradiance :id=type57
    VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE**Default unit:** watt per square metre per nm (W·m-2·nm-1)   
**Opt. unit:** watt per metre3 (W·m-3) (1), watt per square metre per hertz (W·m-2·Hz-1) (2)

Irradiance of a surface per unit frequency or wavelength.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=58 (0x3A) - Sound pressure (acoustic pressure) :id=type58
    VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE**Default unit:** pascal (Pa) 

This is a measurement of sound pressure (acoustic pressure). 

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=59 (0x3B) - Sound energy density :id=type59
    VSCP_TYPE_MEASUREMENT_SOUND_DENSITY**Default unit:** pascal (Pa) 

Sound energy density or sound density is the sound energy per unit volume.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


## Type=60 (0x3C) - Sound level :id=type60
    VSCP_TYPE_MEASUREMENT_SOUND_LEVEL**Default unit:** decibel (dB) 

Sound level expressed in decibel. This event is supplied for convenience.

 | Data byte | Description                         | 
 | :---------: | -----------                         | 
 | 0         | Data coding.                        | 
 | 1-7       | Data with format defined by byte 0. | 



----


[filename](./bottom_copyright.md ':include')