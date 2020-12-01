# Class=577 (0x0241) - Class2 Level I Measurementzone

    CLASS2.LEVEL1.MEASUREZONE

## Description

This class mirrors the [CLASS1.MEASUREZONE](./class1.measurezone.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.

## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_MEASUREMENT_GENERAL
```
This is a general (custom) measurement event that can be used if no other event is suitable. 




----


## Type=1 (0x01) - Count :id=type1

```
VSCP_TYPE_MEASUREMENT_COUNT
```
This is a discrete value typical for a count. There is no unit for this measurement just a discrete value. 




----


## Type=2 (0x02) - Length/Distance :id=type2

```
VSCP_TYPE_MEASUREMENT_LENGTH
```
**Default unit:** Meter. 

This is a measurement of a length or a distance.




----


## Type=3 (0x03) - Mass :id=type3

```
VSCP_TYPE_MEASUREMENT_MASS
```
**Default unit:** Kilogram.

This is a measurement of a mass. 

 



----


## Type=4 (0x04) - Time :id=type4

```
VSCP_TYPE_MEASUREMENT_TIME
```
A time measurement.

**Default unit:** Seconds.  
**Opt. unit:** (1) Milliseconds. Absolute: (2) y-y-m-d-h-m-s (binary). String: (3) "HHMMSS". 

 



----


## Type=5 (0x05) - Electric Current :id=type5

```
VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT
```
**Default unit:** Ampere.

This is a measurement of an electric current. 

 



----


## Type=6 (0x06) - Temperature :id=type6

```
VSCP_TYPE_MEASUREMENT_TEMPERATURE
```
**Default unit:** Kelvin.  
**Opt. unit:** Degree Celsius (1), Fahrenheit (2)

This is a measurement of a temperature. 





----


## Type=7 (0x07) - Amount of substance :id=type7

```
VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE
```
**Default unit:** Mole.

This is a measurement of an amount of a substance. 

 



----


## Type=8 (0x08) - Luminous Intensity (Intensity of light) :id=type8

```
VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT
```
**Default unit:** Candela.

This is a measurement of luminous intensity. 





----


## Type=9 (0x09) - Frequency :id=type9

```
VSCP_TYPE_MEASUREMENT_FREQUENCY
```

**Default unit:** Hertz.

This is a measurement of regular events during a second. 

 



----


## Type=10 (0x0A) - Radioactivity and other random events :id=type10

```
VSCP_TYPE_MEASUREMENT_RADIOACTIVITY
```
**Default unit:** becquerel.
**Optional unit:** curie (1)

This is a measurement of rates of things, which happen randomly, or are unpredictable. 





----


## Type=11 (0x0B) - Force :id=type11

```
VSCP_TYPE_MEASUREMENT_FORCE
```
**Default unit:** newton.

This is a measurement of force. 

 



----


## Type=12 (0x0C) - Pressure :id=type12

```
VSCP_TYPE_MEASUREMENT_PRESSURE
```
**Default unit:** pascal.  
**Opt. unit:** bar (1), psi (2)

This is a measurement of pressure. 

  



----


## Type=13 (0x0D) - Energy :id=type13

```
VSCP_TYPE_MEASUREMENT_ENERGY
```
**Default unit:** Joule.  
**Optional unit:** KWh (1)

This is a measurement of energy. 

 



----


## Type=14 (0x0E) - Power :id=type14

```
VSCP_TYPE_MEASUREMENT_POWER
```
**Default unit:** watt.  
**Optional unit:** Horse power (1).

This is a measurement of power. 




----


## Type=15 (0x0F) - Electrical Charge :id=type15

```
VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE
```
**Default unit:** coulomb.

This is a measurement electrical charge. 





----


## Type=16 (0x10) - Electrical Potential (Voltage) :id=type16

```
VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL
```
**Default unit:** volt.

This is a measurement of electrical potential. 

  



----


## Type=17 (0x11) - Electrical Capacitance :id=type17

```
VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE
```
**Default unit:** farad (F).

This is a measurement of electric capacitance.

 



----


## Type=18 (0x12) - Electrical Resistance :id=type18

```
VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE
```
**Default unit:** ohm (Ω).

This is a measurement of resistance. 

 


----


## Type=19 (0x13) - Electrical Conductance :id=type19

```
VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE
```
**Default unit:** siemens.

This is a measurement of electrical conductance. 

  



----


## Type=20 (0x14) - Magnetic Field Strength :id=type20

```
VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH
```
**Default unit:** amperes per meter (H).  
**Optional units:** teslas (B) (1)

This is a measurement of magnetic field strength. 





----


## Type=21 (0x15) - Magnetic Flux :id=type21

```
VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX
```
**Default unit:** weber (Wb).

This is a measurement of magnetic flux. 

 



----


## Type=22 (0x16) - Magnetic Flux Density :id=type22

```
VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY
```
**Default unit:** tesla (B).

**Optional unit:** Gauss (1)

This is a measurement of flux density or field strength for magnetic fields (also called the magnetic induction). 

 



----


## Type=23 (0x17) - Inductance :id=type23

```
VSCP_TYPE_MEASUREMENT_INDUCTANCE
```
**Default unit:** henry (H).

This is a measurement of inductance. 

 



----


## Type=24 (0x18) - Luminous Flux :id=type24

```
VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT
```
**Default unit:** Lumen (lm= cd * sr)

This is a measurement of luminous Flux. 





----


## Type=25 (0x19) - Illuminance :id=type25

```
VSCP_TYPE_MEASUREMENT_ILLUMINANCE
```
**Default unit:** lux (lx) ( lx = lm / m² )

This is used to express both Illuminance (incidence of light) and Luminous Emittance (emission of light). 





----


## Type=26 (0x1A) - Radiation dose (absorbed) :id=type26

```
VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_ABSORBED
```
**Default unit:** gray (Gy).   


This is a measurement of a radiation dose (Absorbed dose of ionizing radiation). 

 



----


## Type=27 (0x1B) - Catalytic activity :id=type27

```
VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY
```
**Default unit:** katal (kat).

This is a measurement of catalytic activity used in biochemistry. 





----


## Type=28 (0x1C) - Volume :id=type28

```
VSCP_TYPE_MEASUREMENT_VOLUME
```
**Default unit:** cubic meter (m³)   
**Opt. unit:** Liter (dm³) (1), decilitre (100 cm³) (2), centilitre (10 cm³) (3), millilitre (cm³) (4) where unit 4 is only available for Level II measurement events where units can hold this value.

This is a measurement of volume. 





----


## Type=29 (0x1D) - Sound intensity :id=type29

```
VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY
```
**Default unit:** W/m2, watt per square meter. 

This is a measurement of sound intensity (acoustic intensity). 

 



----


## Type=30 (0x1E) - Angle :id=type30

```
VSCP_TYPE_MEASUREMENT_ANGLE
```
* **Default unit:** radian (rad) (Plane angles).   
* **Opt Unit:** degree (1).
* **Opt Unit:** arcminute (2).
* **Opt Unit:** arcseconds (3).

This is a measurement of an angle. 

  



----


## Type=31 (0x1F) - Position WGS 84 :id=type31

```
VSCP_TYPE_MEASUREMENT_POSITION
```
**Default unit:** Longitude.  
**Opt. unit:** Latitude.

This is a (decimal) measurement of a position as of WGS 84. Normally given as a floating point value. See [./class1.gps.md](CLASS1.GPS) for a better candidate to use for position data.

 



----


## Type=32 (0x20) - Speed :id=type32

```
VSCP_TYPE_MEASUREMENT_SPEED
```
**Default unit:** Meters per second.   
**Optional unit:** Kilometers per hour (1) Miles per hour (2)

This is a measurement of a speed. 

 



----


## Type=33 (0x21) - Acceleration :id=type33

```
VSCP_TYPE_MEASUREMENT_ACCELERATION
```
**Default unit:** Meters per second/second (m/s2).

This is a measurement of acceleration. 





----


## Type=34 (0x22) - Tension :id=type34

```
VSCP_TYPE_MEASUREMENT_TENSION
```
**Default unit:** N/m.

This is a measurement of tension. 





----


## Type=35 (0x23) - Damp/moist (Hygrometer reading) :id=type35

```
VSCP_TYPE_MEASUREMENT_HUMIDITY
```
**Default unit:** Relative percentage 0-100%.

This is a measurement of relative moistness (Humidity). 

 



----


## Type=36 (0x24) - Flow :id=type36

```
VSCP_TYPE_MEASUREMENT_FLOW
```
**Default unit:** Cubic meters/second.   
**Opt Unit:** Liters/Second.

This is a measurement of flow. 

 



----


## Type=37 (0x25) - Thermal resistance :id=type37

```
VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE
```
**Default unit:** Thermal ohm K/W.

This is a measurement of thermal resistance. 

 



----


## Type=38 (0x26) - Refractive (optical) power :id=type38

```
VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER
```
**Default unit:** dioptre (dpt) m-1.

This is a measurement of refractive (optical) power. 





----


## Type=39 (0x27) - Dynamic viscosity :id=type39

```
VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY
```
**Default unit:**  pascal second
**optional units** poiseuille (Pl) = 1, poise (P) = 2

This is a measurement of dynamic viscosity. 





----


## Type=40 (0x28) - Sound impedance :id=type40

```
VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE
```
**Default unit:** rayl (Pa·s/m)

This is a measurement of sound impedance. 

 



----


## Type=41 (0x29) - Sound resistance :id=type41

```
VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE
```
**Default unit:** Acoustic ohm Pa · s/ m³.

This is a measurement of sound resistance.





----


## Type=42 (0x2A) - Electric elastance :id=type42

```
VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE
```
**Default unit:** daraf (f-1).

This is a measurement of electric elasticity. 

  



----


## Type=43 (0x2B) - Luminous energy :id=type43

```
VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY
```
**Default unit:** talbot ( tb = lm * s) 

This is a measurement of luminous energy.

 



----


## Type=44 (0x2C) - Luminance :id=type44

```
VSCP_TYPE_MEASUREMENT_LUMINANCE
```
**Default unit:** cd / m²) (non SI unit = nit)

This is a measurement of luminance.





----


## Type=45 (0x2D) - Chemical (molar) concentration :id=type45

```
VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION_MOLAR
```
**Default unit:** mol/m3.

This is a measurement of chemical mol concentration. 

 



----


## Type=46 (0x2E) - Chemical (mass) concentration :id=type46

```
VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION_MASS
```
**Default unit:** kg/m3.

This is a measurement of chemical mass concentration. 


----


## Type=47 (0x2F) - Reserved :id=type47

```
VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT
```
Reserved



 



----


## Type=48 (0x30) - Reserved :id=type48

```
VSCP_TYPE_MEASUREMENT_RESERVED48
```
Reserved 





----


## Type=49 (0x31) - Dew Point :id=type49

```
VSCP_TYPE_MEASUREMENT_DEWPOINT
```
**Default unit:** Kelvin.  
**Opt. unit:** Degree Celsius (1), Fahrenheit (2)

This is a measurement of the Dew Point. 

 



----


## Type=50 (0x32) - Relative Level :id=type50

```
VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL
```
**Default unit:** Relative value.

This is a relative value for a level measurement without a unit. It is just relative to the min/max value for the selected data representation, typically percentage or per mille or similar. 

 



----


## Type=51 (0x33) - Altitude :id=type51

```
VSCP_TYPE_MEASUREMENT_ALTITUDE
```
**Default unit:** Meter.  
**Opt. unit:** Feet(1), inches (2)

Altitude in meters. 

 



----


## Type=52 (0x34) - Area :id=type52

```
VSCP_TYPE_MEASUREMENT_AREA
```
**Default unit:** square meter (m²)

Area in square meter. 

 



----


## Type=53 (0x35) - Radiant intensity :id=type53

```
VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY
```
**Default unit:** watt per steradian ( W / sr )

Radiated power per room angle. 

 


----


## Type=54 (0x36) - Radiance :id=type54

```
VSCP_TYPE_MEASUREMENT_RADIANCE
```
**Default unit:** watt per steradian per square metre ( W / (sr * m²) )

This is the radiant flux emitted, reflected, transmitted or received by a surface.

  



----


## Type=55 (0x37) - Irradiance, Exitance, Radiosity :id=type55

```
VSCP_TYPE_MEASUREMENT_IRRADIANCE
```
**Default unit:** watt per square metre ( W / m² )

Power emitted from or striking onto a surface or area. 

 



----


## Type=56 (0x38) - Spectral radiance :id=type56

```
VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE
```
**Default unit:** watt per steradian per square metre per nm (W·sr-1·m-2·nm-1)    
**Opt. unit:** watt per steradian per meter3 (W·sr-1·m-3) (1), watt per steradian per square metre per hertz (W·sr-1·m-3) (2)

Radiance of a surface per unit frequency or wavelength.

                        



----


## Type=57 (0x39) - Spectral irradiance :id=type57

```
VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE
```
**Default unit:** watt per square metre per nm (W·m-2·nm-1)   
**Opt. unit:** watt per metre3 (W·m-3) (1), watt per square metre per hertz (W·m-2·Hz-1) (2)

Irradiance of a surface per unit frequency or wavelength.

 



----


## Type=58 (0x3A) - Sound pressure (acoustic pressure) :id=type58

```
VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE
```
**Default unit:** pascal (Pa) 

This is a measurement of sound pressure (acoustic pressure). 

 



----


## Type=59 (0x3B) - Sound energy density :id=type59

```
VSCP_TYPE_MEASUREMENT_SOUND_DENSITY
```
**Default unit:** pascal (Pa) 

Sound energy density or sound density is the sound energy per unit volume.

                        


----


## Type=60 (0x3C) - Sound level :id=type60

```
VSCP_TYPE_MEASUREMENT_SOUND_LEVEL
```
**Default unit:** decibel (dB) 

Sound level expressed in decibel. This event is supplied for convenience.

 



----


## Type=61 (0x3D) - Radiation dose (equivalent) :id=type61

```
VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_EQ
```
**Default unit:** sievert (Sv).

**Optional unit** rem (1)

This is a measurement of a radiation dose (Equivalent dose of ionizing radiation). 

 



----


## Type=62 (0x3E) - Radiation dose (exposure) :id=type62

```
VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_EXPOSURE
```
**Default unit:** coulomb per kilogram (C/kg).   
**Optional unit:** Röntgen/R (1)

This is a measurement of a radiation dose (Exposed dose of ionizing radiation). 



----


[filename](./bottom_copyright.md ':include')