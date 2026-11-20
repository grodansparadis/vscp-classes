# Changes in vscp-classes

Every change that goes into a release is listed here, newest release first.
Add each change under **Unreleased** when it is made. When a release is
tagged, rename **Unreleased** to the version and date, and start a new
**Unreleased** section above it.

## Unreleased

- Measurement units: units that can not be converted are marked `convertible="false"` (date/time formats, latitude, ppm/percent of molar concentration, the spectral radiance/irradiance per metre and per hertz units). The JSON, XML and SQLite output give `convertible` (new last column in the SQLite `vscp_unit` table)
- New `make_vscphelper_units.py`: makes the measurement unit table `vscp-units.h` (scale and offset for each unit, checked to be linear and exact) and, with `json`, `vscp-units.json` with the conversion expressions. Run by `dowork.sh` (copied to vscp/src/vscp/common) and the editor
- The generated JSON/JSONP (make_json.py) and XML (make_xml.py) give both conversions of each measurement unit: `conversion0` (unit to unit 0) and `conversion` (unit 0 to unit); before, only `conversion` was given. A missing conversion is given as `{{{val}}}` (was `val`)
- Measurement units (class 10): every unit now has both conversions, as plain JavaScript/math.js expressions (no `^`, `pi` or `×`). `conversion` converts a unit 0 value to the unit and `conversion0` a value in the unit to unit 0 (README updated; it described `conversion` the other way round). Fixed: wrong direction for Fahrenheit (temperature), milliseconds, curie, litre/millilitre/decilitre/centilitre, mol per litre and röntgen; syntax errors for rutherford and gauss; Oersted factor (79.58, was 79.77); added the missing litres per second conversion and all the missing inverse conversions
- Measurement units: reactive power (type 64) MVAr is unit 2 (it had the same id as kVAr, unit 1); kVAr (1) and MVAr (2) are documented
- Measurement units: dynamic viscosity (type 39) poiseuille is unit 1 and poise unit 2, as in the specification (they were swapped); the poiseuille symbol is Pl (was PI)
- Measurement units: molar concentration (type 45) has the units mol/l (1), ppm (2) and percent (3); ppm and percent were only in the description, as units 1 and 2
- Measurement descriptions list all units: rutherford (radioactivity, unit 2), atm, torr, at and cmH2O (pressure, units 3-6, 4-6 Level II only), MVArh (reactive energy, unit 1)
- Measurement units: fixed names and symbols: bar and psi had the symbol Pa, farad C (now F), tesla A (now T), luminous flux unit 0 was named Ampere with symbol Φv (now lumen, lm), pressure unit 6 was named at (now cmH2O), MVArh had the symbol kVArh
- Class 1080 (Timed weather forecast): fixed invalid XML and the name, renamed the file to class_1080_timed_weather_forecast.xml, has the same events as CLASS1.WEATHER_FORECAST (events="class_90_weather.xml", as class 95 itself uses them) and is published (added to list_class.xml)
- Class 15 (data), signal quality units: conversions are `{{{val}}}` (were `val`)
- New web editor (`python3 editor/app.py`, Python standard library only) for the class definitions: edit classes and their descriptions, create and delete classes (with own events or the events of another class), edit, add, copy and delete events with their XML content and descriptions, check the files for problems, run the generators to `generated/` and `dowork.sh`, and see the git changes. Edits keep the rest of each file unchanged. See editor/README.md
- Fixed link (b07b694)

## v20250119171800 - 2025-01-19

- Added bootloader abort functionality (a496dd2)
