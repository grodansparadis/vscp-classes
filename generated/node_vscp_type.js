// VSCP type definition file
//
// Copyright © 2012-2020 Ake Hedman, Grodans Paradis AB
// <akhe@grodansparadis.com>
// Copyright © 2015-2020 Andreas Merkle
// <vscp@blue-andi.de>
//
// Licence:
// The MIT License (MIT)
// [OSI Approved License]
//
// The MIT License (MIT)
//
// Copyright © 2012-2020 Grodans Paradis AB (Paradise of the Frog)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// Alternative licenses for VSCP & Friends may be arranged by contacting
// Grodans Paradis AB at info@grodansparadis.com, http://www.grodansparadis.com
//

/*
            !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!
                           This file is auto-generated
                see https://github.com/grodansparadis/vscp-classes
                        Generated: 2020-12-01 13:13:00.466246
*/

'use strict';

/** 
 * VSCP type map
 */
var vscp_type_map = new Map();


module.exports = function (vscpclass,vscptype) {
    return vscp_type_map.get((vscpclass << 16) + vscptype);
};

//  CLASS1.PROTOCOL = 0  -  VSCP Protocol Functionality
module.exports.VSCP_TYPE_PROTOCOL_GENERAL = 0,
module.exports.VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT = 1,
module.exports.VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE = 2,
module.exports.VSCP_TYPE_PROTOCOL_PROBE_ACK = 3,
module.exports.VSCP_TYPE_PROTOCOL_RESERVED4 = 4,
module.exports.VSCP_TYPE_PROTOCOL_RESERVED5 = 5,
module.exports.VSCP_TYPE_PROTOCOL_SET_NICKNAME = 6,
module.exports.VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED = 7,
module.exports.VSCP_TYPE_PROTOCOL_DROP_NICKNAME = 8,
module.exports.VSCP_TYPE_PROTOCOL_READ_REGISTER = 9,
module.exports.VSCP_TYPE_PROTOCOL_RW_RESPONSE = 10,
module.exports.VSCP_TYPE_PROTOCOL_WRITE_REGISTER = 11,
module.exports.VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER = 12,
module.exports.VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER = 13,
module.exports.VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER = 14,
module.exports.VSCP_TYPE_PROTOCOL_START_BLOCK = 15,
module.exports.VSCP_TYPE_PROTOCOL_BLOCK_DATA = 16,
module.exports.VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK = 17,
module.exports.VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK = 18,
module.exports.VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA = 19,
module.exports.VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK = 20,
module.exports.VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK = 21,
module.exports.VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE = 22,
module.exports.VSCP_TYPE_PROTOCOL_RESET_DEVICE = 23,
module.exports.VSCP_TYPE_PROTOCOL_PAGE_READ = 24,
module.exports.VSCP_TYPE_PROTOCOL_PAGE_WRITE = 25,
module.exports.VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE = 26,
module.exports.VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE = 27,
module.exports.VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE = 28,
module.exports.VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER = 29,
module.exports.VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER = 30,
module.exports.VSCP_TYPE_PROTOCOL_WHO_IS_THERE = 31,
module.exports.VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE = 32,
module.exports.VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO = 33,
module.exports.VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE = 34,
module.exports.VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF = 35,
module.exports.VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE = 36,
module.exports.VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ = 37,
module.exports.VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE = 38,
module.exports.VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE = 39,
module.exports.VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST = 40,
module.exports.VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE = 41,
module.exports.VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK = 48,
module.exports.VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK = 49,
module.exports.VSCP_TYPE_PROTOCOL_START_BLOCK_ACK = 50,
module.exports.VSCP_TYPE_PROTOCOL_START_BLOCK_NACK = 51;


vscp_type_map.set( (0 << 16) + 0,'VSCP_TYPE_PROTOCOL_GENERAL'); 
vscp_type_map.set( (0 << 16) + 1,'VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT'); 
vscp_type_map.set( (0 << 16) + 2,'VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE'); 
vscp_type_map.set( (0 << 16) + 3,'VSCP_TYPE_PROTOCOL_PROBE_ACK'); 
vscp_type_map.set( (0 << 16) + 4,'VSCP_TYPE_PROTOCOL_RESERVED4'); 
vscp_type_map.set( (0 << 16) + 5,'VSCP_TYPE_PROTOCOL_RESERVED5'); 
vscp_type_map.set( (0 << 16) + 6,'VSCP_TYPE_PROTOCOL_SET_NICKNAME'); 
vscp_type_map.set( (0 << 16) + 7,'VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED'); 
vscp_type_map.set( (0 << 16) + 8,'VSCP_TYPE_PROTOCOL_DROP_NICKNAME'); 
vscp_type_map.set( (0 << 16) + 9,'VSCP_TYPE_PROTOCOL_READ_REGISTER'); 
vscp_type_map.set( (0 << 16) + 10,'VSCP_TYPE_PROTOCOL_RW_RESPONSE'); 
vscp_type_map.set( (0 << 16) + 11,'VSCP_TYPE_PROTOCOL_WRITE_REGISTER'); 
vscp_type_map.set( (0 << 16) + 12,'VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER'); 
vscp_type_map.set( (0 << 16) + 13,'VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER'); 
vscp_type_map.set( (0 << 16) + 14,'VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER'); 
vscp_type_map.set( (0 << 16) + 15,'VSCP_TYPE_PROTOCOL_START_BLOCK'); 
vscp_type_map.set( (0 << 16) + 16,'VSCP_TYPE_PROTOCOL_BLOCK_DATA'); 
vscp_type_map.set( (0 << 16) + 17,'VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK'); 
vscp_type_map.set( (0 << 16) + 18,'VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK'); 
vscp_type_map.set( (0 << 16) + 19,'VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA'); 
vscp_type_map.set( (0 << 16) + 20,'VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK'); 
vscp_type_map.set( (0 << 16) + 21,'VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK'); 
vscp_type_map.set( (0 << 16) + 22,'VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE'); 
vscp_type_map.set( (0 << 16) + 23,'VSCP_TYPE_PROTOCOL_RESET_DEVICE'); 
vscp_type_map.set( (0 << 16) + 24,'VSCP_TYPE_PROTOCOL_PAGE_READ'); 
vscp_type_map.set( (0 << 16) + 25,'VSCP_TYPE_PROTOCOL_PAGE_WRITE'); 
vscp_type_map.set( (0 << 16) + 26,'VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE'); 
vscp_type_map.set( (0 << 16) + 27,'VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE'); 
vscp_type_map.set( (0 << 16) + 28,'VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE'); 
vscp_type_map.set( (0 << 16) + 29,'VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER'); 
vscp_type_map.set( (0 << 16) + 30,'VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER'); 
vscp_type_map.set( (0 << 16) + 31,'VSCP_TYPE_PROTOCOL_WHO_IS_THERE'); 
vscp_type_map.set( (0 << 16) + 32,'VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE'); 
vscp_type_map.set( (0 << 16) + 33,'VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO'); 
vscp_type_map.set( (0 << 16) + 34,'VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE'); 
vscp_type_map.set( (0 << 16) + 35,'VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF'); 
vscp_type_map.set( (0 << 16) + 36,'VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE'); 
vscp_type_map.set( (0 << 16) + 37,'VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ'); 
vscp_type_map.set( (0 << 16) + 38,'VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE'); 
vscp_type_map.set( (0 << 16) + 39,'VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE'); 
vscp_type_map.set( (0 << 16) + 40,'VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST'); 
vscp_type_map.set( (0 << 16) + 41,'VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE'); 
vscp_type_map.set( (0 << 16) + 48,'VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK'); 
vscp_type_map.set( (0 << 16) + 49,'VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK'); 
vscp_type_map.set( (0 << 16) + 50,'VSCP_TYPE_PROTOCOL_START_BLOCK_ACK'); 
vscp_type_map.set( (0 << 16) + 51,'VSCP_TYPE_PROTOCOL_START_BLOCK_NACK'); 
 
//  CLASS1.ALARM = 1  -  Alarm functionality
module.exports.VSCP_TYPE_ALARM_GENERAL = 0,
module.exports.VSCP_TYPE_ALARM_WARNING = 1,
module.exports.VSCP_TYPE_ALARM_ALARM = 2,
module.exports.VSCP_TYPE_ALARM_SOUND = 3,
module.exports.VSCP_TYPE_ALARM_LIGHT = 4,
module.exports.VSCP_TYPE_ALARM_POWER = 5,
module.exports.VSCP_TYPE_ALARM_EMERGENCY_STOP = 6,
module.exports.VSCP_TYPE_ALARM_EMERGENCY_PAUSE = 7,
module.exports.VSCP_TYPE_ALARM_EMERGENCY_RESET = 8,
module.exports.VSCP_TYPE_ALARM_EMERGENCY_RESUME = 9,
module.exports.VSCP_TYPE_ALARM_ARM = 10,
module.exports.VSCP_TYPE_ALARM_DISARM = 11,
module.exports.VSCP_TYPE_ALARM_WATCHDOG = 12;


vscp_type_map.set( (1 << 16) + 0,'VSCP_TYPE_ALARM_GENERAL'); 
vscp_type_map.set( (1 << 16) + 1,'VSCP_TYPE_ALARM_WARNING'); 
vscp_type_map.set( (1 << 16) + 2,'VSCP_TYPE_ALARM_ALARM'); 
vscp_type_map.set( (1 << 16) + 3,'VSCP_TYPE_ALARM_SOUND'); 
vscp_type_map.set( (1 << 16) + 4,'VSCP_TYPE_ALARM_LIGHT'); 
vscp_type_map.set( (1 << 16) + 5,'VSCP_TYPE_ALARM_POWER'); 
vscp_type_map.set( (1 << 16) + 6,'VSCP_TYPE_ALARM_EMERGENCY_STOP'); 
vscp_type_map.set( (1 << 16) + 7,'VSCP_TYPE_ALARM_EMERGENCY_PAUSE'); 
vscp_type_map.set( (1 << 16) + 8,'VSCP_TYPE_ALARM_EMERGENCY_RESET'); 
vscp_type_map.set( (1 << 16) + 9,'VSCP_TYPE_ALARM_EMERGENCY_RESUME'); 
vscp_type_map.set( (1 << 16) + 10,'VSCP_TYPE_ALARM_ARM'); 
vscp_type_map.set( (1 << 16) + 11,'VSCP_TYPE_ALARM_DISARM'); 
vscp_type_map.set( (1 << 16) + 12,'VSCP_TYPE_ALARM_WATCHDOG'); 
 
//  CLASS1.SECURITY = 2  -  Security
module.exports.VSCP_TYPE_SECURITY_GENERAL = 0,
module.exports.VSCP_TYPE_SECURITY_MOTION = 1,
module.exports.VSCP_TYPE_SECURITY_GLASS_BREAK = 2,
module.exports.VSCP_TYPE_SECURITY_BEAM_BREAK = 3,
module.exports.VSCP_TYPE_SECURITY_SENSOR_TAMPER = 4,
module.exports.VSCP_TYPE_SECURITY_SHOCK_SENSOR = 5,
module.exports.VSCP_TYPE_SECURITY_SMOKE_SENSOR = 6,
module.exports.VSCP_TYPE_SECURITY_HEAT_SENSOR = 7,
module.exports.VSCP_TYPE_SECURITY_PANIC_SWITCH = 8,
module.exports.VSCP_TYPE_SECURITY_DOOR_OPEN = 9,
module.exports.VSCP_TYPE_SECURITY_WINDOW_OPEN = 10,
module.exports.VSCP_TYPE_SECURITY_CO_SENSOR = 11,
module.exports.VSCP_TYPE_SECURITY_FROST_DETECTED = 12,
module.exports.VSCP_TYPE_SECURITY_FLAME_DETECTED = 13,
module.exports.VSCP_TYPE_SECURITY_OXYGEN_LOW = 14,
module.exports.VSCP_TYPE_SECURITY_WEIGHT_DETECTED = 15,
module.exports.VSCP_TYPE_SECURITY_WATER_DETECTED = 16,
module.exports.VSCP_TYPE_SECURITY_CONDENSATION_DETECTED = 17,
module.exports.VSCP_TYPE_SECURITY_SOUND_DETECTED = 18,
module.exports.VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL = 19,
module.exports.VSCP_TYPE_SECURITY_TAMPER = 20,
module.exports.VSCP_TYPE_SECURITY_AUTHENTICATED = 21,
module.exports.VSCP_TYPE_SECURITY_UNAUTHENTICATED = 22,
module.exports.VSCP_TYPE_SECURITY_AUTHORIZED = 23,
module.exports.VSCP_TYPE_SECURITY_UNAUTHORIZED = 24,
module.exports.VSCP_TYPE_SECURITY_ID_CHECK = 25,
module.exports.VSCP_TYPE_SECURITY_PIN_OK = 26,
module.exports.VSCP_TYPE_SECURITY_PIN_FAIL = 27,
module.exports.VSCP_TYPE_SECURITY_PIN_WARNING = 28,
module.exports.VSCP_TYPE_SECURITY_PIN_ERROR = 29,
module.exports.VSCP_TYPE_SECURITY_PASSWORD_OK = 30,
module.exports.VSCP_TYPE_SECURITY_PASSWORD_FAIL = 31,
module.exports.VSCP_TYPE_SECURITY_PASSWORD_WARNING = 32,
module.exports.VSCP_TYPE_SECURITY_PASSWORD_ERROR = 33;


vscp_type_map.set( (2 << 16) + 0,'VSCP_TYPE_SECURITY_GENERAL'); 
vscp_type_map.set( (2 << 16) + 1,'VSCP_TYPE_SECURITY_MOTION'); 
vscp_type_map.set( (2 << 16) + 2,'VSCP_TYPE_SECURITY_GLASS_BREAK'); 
vscp_type_map.set( (2 << 16) + 3,'VSCP_TYPE_SECURITY_BEAM_BREAK'); 
vscp_type_map.set( (2 << 16) + 4,'VSCP_TYPE_SECURITY_SENSOR_TAMPER'); 
vscp_type_map.set( (2 << 16) + 5,'VSCP_TYPE_SECURITY_SHOCK_SENSOR'); 
vscp_type_map.set( (2 << 16) + 6,'VSCP_TYPE_SECURITY_SMOKE_SENSOR'); 
vscp_type_map.set( (2 << 16) + 7,'VSCP_TYPE_SECURITY_HEAT_SENSOR'); 
vscp_type_map.set( (2 << 16) + 8,'VSCP_TYPE_SECURITY_PANIC_SWITCH'); 
vscp_type_map.set( (2 << 16) + 9,'VSCP_TYPE_SECURITY_DOOR_OPEN'); 
vscp_type_map.set( (2 << 16) + 10,'VSCP_TYPE_SECURITY_WINDOW_OPEN'); 
vscp_type_map.set( (2 << 16) + 11,'VSCP_TYPE_SECURITY_CO_SENSOR'); 
vscp_type_map.set( (2 << 16) + 12,'VSCP_TYPE_SECURITY_FROST_DETECTED'); 
vscp_type_map.set( (2 << 16) + 13,'VSCP_TYPE_SECURITY_FLAME_DETECTED'); 
vscp_type_map.set( (2 << 16) + 14,'VSCP_TYPE_SECURITY_OXYGEN_LOW'); 
vscp_type_map.set( (2 << 16) + 15,'VSCP_TYPE_SECURITY_WEIGHT_DETECTED'); 
vscp_type_map.set( (2 << 16) + 16,'VSCP_TYPE_SECURITY_WATER_DETECTED'); 
vscp_type_map.set( (2 << 16) + 17,'VSCP_TYPE_SECURITY_CONDENSATION_DETECTED'); 
vscp_type_map.set( (2 << 16) + 18,'VSCP_TYPE_SECURITY_SOUND_DETECTED'); 
vscp_type_map.set( (2 << 16) + 19,'VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL'); 
vscp_type_map.set( (2 << 16) + 20,'VSCP_TYPE_SECURITY_TAMPER'); 
vscp_type_map.set( (2 << 16) + 21,'VSCP_TYPE_SECURITY_AUTHENTICATED'); 
vscp_type_map.set( (2 << 16) + 22,'VSCP_TYPE_SECURITY_UNAUTHENTICATED'); 
vscp_type_map.set( (2 << 16) + 23,'VSCP_TYPE_SECURITY_AUTHORIZED'); 
vscp_type_map.set( (2 << 16) + 24,'VSCP_TYPE_SECURITY_UNAUTHORIZED'); 
vscp_type_map.set( (2 << 16) + 25,'VSCP_TYPE_SECURITY_ID_CHECK'); 
vscp_type_map.set( (2 << 16) + 26,'VSCP_TYPE_SECURITY_PIN_OK'); 
vscp_type_map.set( (2 << 16) + 27,'VSCP_TYPE_SECURITY_PIN_FAIL'); 
vscp_type_map.set( (2 << 16) + 28,'VSCP_TYPE_SECURITY_PIN_WARNING'); 
vscp_type_map.set( (2 << 16) + 29,'VSCP_TYPE_SECURITY_PIN_ERROR'); 
vscp_type_map.set( (2 << 16) + 30,'VSCP_TYPE_SECURITY_PASSWORD_OK'); 
vscp_type_map.set( (2 << 16) + 31,'VSCP_TYPE_SECURITY_PASSWORD_FAIL'); 
vscp_type_map.set( (2 << 16) + 32,'VSCP_TYPE_SECURITY_PASSWORD_WARNING'); 
vscp_type_map.set( (2 << 16) + 33,'VSCP_TYPE_SECURITY_PASSWORD_ERROR'); 
 
//  CLASS1.MEASUREMENT = 10  -  Measurement
module.exports.VSCP_TYPE_MEASUREMENT_GENERAL = 0,
module.exports.VSCP_TYPE_MEASUREMENT_COUNT = 1,
module.exports.VSCP_TYPE_MEASUREMENT_LENGTH = 2,
module.exports.VSCP_TYPE_MEASUREMENT_MASS = 3,
module.exports.VSCP_TYPE_MEASUREMENT_TIME = 4,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT = 5,
module.exports.VSCP_TYPE_MEASUREMENT_TEMPERATURE = 6,
module.exports.VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE = 7,
module.exports.VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT = 8,
module.exports.VSCP_TYPE_MEASUREMENT_FREQUENCY = 9,
module.exports.VSCP_TYPE_MEASUREMENT_RADIOACTIVITY = 10,
module.exports.VSCP_TYPE_MEASUREMENT_FORCE = 11,
module.exports.VSCP_TYPE_MEASUREMENT_PRESSURE = 12,
module.exports.VSCP_TYPE_MEASUREMENT_ENERGY = 13,
module.exports.VSCP_TYPE_MEASUREMENT_POWER = 14,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE = 15,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL = 16,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE = 17,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE = 18,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE = 19,
module.exports.VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH = 20,
module.exports.VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX = 21,
module.exports.VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY = 22,
module.exports.VSCP_TYPE_MEASUREMENT_INDUCTANCE = 23,
module.exports.VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT = 24,
module.exports.VSCP_TYPE_MEASUREMENT_ILLUMINANCE = 25,
module.exports.VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_ABSORBED = 26,
module.exports.VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY = 27,
module.exports.VSCP_TYPE_MEASUREMENT_VOLUME = 28,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY = 29,
module.exports.VSCP_TYPE_MEASUREMENT_ANGLE = 30,
module.exports.VSCP_TYPE_MEASUREMENT_POSITION = 31,
module.exports.VSCP_TYPE_MEASUREMENT_SPEED = 32,
module.exports.VSCP_TYPE_MEASUREMENT_ACCELERATION = 33,
module.exports.VSCP_TYPE_MEASUREMENT_TENSION = 34,
module.exports.VSCP_TYPE_MEASUREMENT_HUMIDITY = 35,
module.exports.VSCP_TYPE_MEASUREMENT_FLOW = 36,
module.exports.VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE = 37,
module.exports.VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER = 38,
module.exports.VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY = 39,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE = 40,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE = 41,
module.exports.VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE = 42,
module.exports.VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY = 43,
module.exports.VSCP_TYPE_MEASUREMENT_LUMINANCE = 44,
module.exports.VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION_MOLAR = 45,
module.exports.VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION_MASS = 46,
module.exports.VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT = 47,
module.exports.VSCP_TYPE_MEASUREMENT_RESERVED48 = 48,
module.exports.VSCP_TYPE_MEASUREMENT_DEWPOINT = 49,
module.exports.VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL = 50,
module.exports.VSCP_TYPE_MEASUREMENT_ALTITUDE = 51,
module.exports.VSCP_TYPE_MEASUREMENT_AREA = 52,
module.exports.VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY = 53,
module.exports.VSCP_TYPE_MEASUREMENT_RADIANCE = 54,
module.exports.VSCP_TYPE_MEASUREMENT_IRRADIANCE = 55,
module.exports.VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE = 56,
module.exports.VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE = 57,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE = 58,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_DENSITY = 59,
module.exports.VSCP_TYPE_MEASUREMENT_SOUND_LEVEL = 60,
module.exports.VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_EQ = 61,
module.exports.VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_EXPOSURE = 62;


vscp_type_map.set( (10 << 16) + 0,'VSCP_TYPE_MEASUREMENT_GENERAL'); 
vscp_type_map.set( (10 << 16) + 1,'VSCP_TYPE_MEASUREMENT_COUNT'); 
vscp_type_map.set( (10 << 16) + 2,'VSCP_TYPE_MEASUREMENT_LENGTH'); 
vscp_type_map.set( (10 << 16) + 3,'VSCP_TYPE_MEASUREMENT_MASS'); 
vscp_type_map.set( (10 << 16) + 4,'VSCP_TYPE_MEASUREMENT_TIME'); 
vscp_type_map.set( (10 << 16) + 5,'VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT'); 
vscp_type_map.set( (10 << 16) + 6,'VSCP_TYPE_MEASUREMENT_TEMPERATURE'); 
vscp_type_map.set( (10 << 16) + 7,'VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE'); 
vscp_type_map.set( (10 << 16) + 8,'VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT'); 
vscp_type_map.set( (10 << 16) + 9,'VSCP_TYPE_MEASUREMENT_FREQUENCY'); 
vscp_type_map.set( (10 << 16) + 10,'VSCP_TYPE_MEASUREMENT_RADIOACTIVITY'); 
vscp_type_map.set( (10 << 16) + 11,'VSCP_TYPE_MEASUREMENT_FORCE'); 
vscp_type_map.set( (10 << 16) + 12,'VSCP_TYPE_MEASUREMENT_PRESSURE'); 
vscp_type_map.set( (10 << 16) + 13,'VSCP_TYPE_MEASUREMENT_ENERGY'); 
vscp_type_map.set( (10 << 16) + 14,'VSCP_TYPE_MEASUREMENT_POWER'); 
vscp_type_map.set( (10 << 16) + 15,'VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE'); 
vscp_type_map.set( (10 << 16) + 16,'VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL'); 
vscp_type_map.set( (10 << 16) + 17,'VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE'); 
vscp_type_map.set( (10 << 16) + 18,'VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE'); 
vscp_type_map.set( (10 << 16) + 19,'VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE'); 
vscp_type_map.set( (10 << 16) + 20,'VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH'); 
vscp_type_map.set( (10 << 16) + 21,'VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX'); 
vscp_type_map.set( (10 << 16) + 22,'VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY'); 
vscp_type_map.set( (10 << 16) + 23,'VSCP_TYPE_MEASUREMENT_INDUCTANCE'); 
vscp_type_map.set( (10 << 16) + 24,'VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT'); 
vscp_type_map.set( (10 << 16) + 25,'VSCP_TYPE_MEASUREMENT_ILLUMINANCE'); 
vscp_type_map.set( (10 << 16) + 26,'VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_ABSORBED'); 
vscp_type_map.set( (10 << 16) + 27,'VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY'); 
vscp_type_map.set( (10 << 16) + 28,'VSCP_TYPE_MEASUREMENT_VOLUME'); 
vscp_type_map.set( (10 << 16) + 29,'VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY'); 
vscp_type_map.set( (10 << 16) + 30,'VSCP_TYPE_MEASUREMENT_ANGLE'); 
vscp_type_map.set( (10 << 16) + 31,'VSCP_TYPE_MEASUREMENT_POSITION'); 
vscp_type_map.set( (10 << 16) + 32,'VSCP_TYPE_MEASUREMENT_SPEED'); 
vscp_type_map.set( (10 << 16) + 33,'VSCP_TYPE_MEASUREMENT_ACCELERATION'); 
vscp_type_map.set( (10 << 16) + 34,'VSCP_TYPE_MEASUREMENT_TENSION'); 
vscp_type_map.set( (10 << 16) + 35,'VSCP_TYPE_MEASUREMENT_HUMIDITY'); 
vscp_type_map.set( (10 << 16) + 36,'VSCP_TYPE_MEASUREMENT_FLOW'); 
vscp_type_map.set( (10 << 16) + 37,'VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE'); 
vscp_type_map.set( (10 << 16) + 38,'VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER'); 
vscp_type_map.set( (10 << 16) + 39,'VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY'); 
vscp_type_map.set( (10 << 16) + 40,'VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE'); 
vscp_type_map.set( (10 << 16) + 41,'VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE'); 
vscp_type_map.set( (10 << 16) + 42,'VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE'); 
vscp_type_map.set( (10 << 16) + 43,'VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY'); 
vscp_type_map.set( (10 << 16) + 44,'VSCP_TYPE_MEASUREMENT_LUMINANCE'); 
vscp_type_map.set( (10 << 16) + 45,'VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION_MOLAR'); 
vscp_type_map.set( (10 << 16) + 46,'VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION_MASS'); 
vscp_type_map.set( (10 << 16) + 47,'VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT'); 
vscp_type_map.set( (10 << 16) + 48,'VSCP_TYPE_MEASUREMENT_RESERVED48'); 
vscp_type_map.set( (10 << 16) + 49,'VSCP_TYPE_MEASUREMENT_DEWPOINT'); 
vscp_type_map.set( (10 << 16) + 50,'VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL'); 
vscp_type_map.set( (10 << 16) + 51,'VSCP_TYPE_MEASUREMENT_ALTITUDE'); 
vscp_type_map.set( (10 << 16) + 52,'VSCP_TYPE_MEASUREMENT_AREA'); 
vscp_type_map.set( (10 << 16) + 53,'VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY'); 
vscp_type_map.set( (10 << 16) + 54,'VSCP_TYPE_MEASUREMENT_RADIANCE'); 
vscp_type_map.set( (10 << 16) + 55,'VSCP_TYPE_MEASUREMENT_IRRADIANCE'); 
vscp_type_map.set( (10 << 16) + 56,'VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE'); 
vscp_type_map.set( (10 << 16) + 57,'VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE'); 
vscp_type_map.set( (10 << 16) + 58,'VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE'); 
vscp_type_map.set( (10 << 16) + 59,'VSCP_TYPE_MEASUREMENT_SOUND_DENSITY'); 
vscp_type_map.set( (10 << 16) + 60,'VSCP_TYPE_MEASUREMENT_SOUND_LEVEL'); 
vscp_type_map.set( (10 << 16) + 61,'VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_EQ'); 
vscp_type_map.set( (10 << 16) + 62,'VSCP_TYPE_MEASUREMENT_RADIATION_DOSE_EXPOSURE'); 
 
//  CLASS1.MEASUREMENTX1 = 11  -  Measurement
module.exports.VSCP_TYPE_MEASUREMENTX1_GENERAL = 0;


vscp_type_map.set( (11 << 16) + 0,'VSCP_TYPE_MEASUREMENTX1_GENERAL'); 
 
//  CLASS1.MEASUREMENTX2 = 12  -  Measurement
module.exports.VSCP_TYPE_MEASUREMENTX2_GENERAL = 0;


vscp_type_map.set( (12 << 16) + 0,'VSCP_TYPE_MEASUREMENTX2_GENERAL'); 
 
//  CLASS1.MEASUREMENTX3 = 13  -  Measurement
module.exports.VSCP_TYPE_MEASUREMENTX3_GENERAL = 0;


vscp_type_map.set( (13 << 16) + 0,'VSCP_TYPE_MEASUREMENTX3_GENERAL'); 
 
//  CLASS1.MEASUREMENTX4 = 14  -  Measurement
module.exports.VSCP_TYPE_MEASUREMENTX4_GENERAL = 0;


vscp_type_map.set( (14 << 16) + 0,'VSCP_TYPE_MEASUREMENTX4_GENERAL'); 
 
//  CLASS1.DATA = 15  -  Data
module.exports.VSCP_TYPE_DATA_GENERAL = 0,
module.exports.VSCP_TYPE_DATA_IO = 1,
module.exports.VSCP_TYPE_DATA_AD = 2,
module.exports.VSCP_TYPE_DATA_DA = 3,
module.exports.VSCP_TYPE_DATA_RELATIVE_STRENGTH = 4,
module.exports.VSCP_TYPE_DATA_SIGNAL_LEVEL = 5,
module.exports.VSCP_TYPE_DATA_SIGNAL_QUALITY = 6;


vscp_type_map.set( (15 << 16) + 0,'VSCP_TYPE_DATA_GENERAL'); 
vscp_type_map.set( (15 << 16) + 1,'VSCP_TYPE_DATA_IO'); 
vscp_type_map.set( (15 << 16) + 2,'VSCP_TYPE_DATA_AD'); 
vscp_type_map.set( (15 << 16) + 3,'VSCP_TYPE_DATA_DA'); 
vscp_type_map.set( (15 << 16) + 4,'VSCP_TYPE_DATA_RELATIVE_STRENGTH'); 
vscp_type_map.set( (15 << 16) + 5,'VSCP_TYPE_DATA_SIGNAL_LEVEL'); 
vscp_type_map.set( (15 << 16) + 6,'VSCP_TYPE_DATA_SIGNAL_QUALITY'); 
 
//  CLASS1.INFORMATION = 20  -  Information
module.exports.VSCP_TYPE_INFORMATION_GENERAL = 0,
module.exports.VSCP_TYPE_INFORMATION_BUTTON = 1,
module.exports.VSCP_TYPE_INFORMATION_MOUSE = 2,
module.exports.VSCP_TYPE_INFORMATION_ON = 3,
module.exports.VSCP_TYPE_INFORMATION_OFF = 4,
module.exports.VSCP_TYPE_INFORMATION_ALIVE = 5,
module.exports.VSCP_TYPE_INFORMATION_TERMINATING = 6,
module.exports.VSCP_TYPE_INFORMATION_OPENED = 7,
module.exports.VSCP_TYPE_INFORMATION_CLOSED = 8,
module.exports.VSCP_TYPE_INFORMATION_NODE_HEARTBEAT = 9,
module.exports.VSCP_TYPE_INFORMATION_BELOW_LIMIT = 10,
module.exports.VSCP_TYPE_INFORMATION_ABOVE_LIMIT = 11,
module.exports.VSCP_TYPE_INFORMATION_PULSE = 12,
module.exports.VSCP_TYPE_INFORMATION_ERROR = 13,
module.exports.VSCP_TYPE_INFORMATION_RESUMED = 14,
module.exports.VSCP_TYPE_INFORMATION_PAUSED = 15,
module.exports.VSCP_TYPE_INFORMATION_SLEEP = 16,
module.exports.VSCP_TYPE_INFORMATION_GOOD_MORNING = 17,
module.exports.VSCP_TYPE_INFORMATION_GOOD_DAY = 18,
module.exports.VSCP_TYPE_INFORMATION_GOOD_AFTERNOON = 19,
module.exports.VSCP_TYPE_INFORMATION_GOOD_EVENING = 20,
module.exports.VSCP_TYPE_INFORMATION_GOOD_NIGHT = 21,
module.exports.VSCP_TYPE_INFORMATION_SEE_YOU_SOON = 22,
module.exports.VSCP_TYPE_INFORMATION_GOODBYE = 23,
module.exports.VSCP_TYPE_INFORMATION_STOP = 24,
module.exports.VSCP_TYPE_INFORMATION_START = 25,
module.exports.VSCP_TYPE_INFORMATION_RESET_COMPLETED = 26,
module.exports.VSCP_TYPE_INFORMATION_INTERRUPTED = 27,
module.exports.VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP = 28,
module.exports.VSCP_TYPE_INFORMATION_WOKEN_UP = 29,
module.exports.VSCP_TYPE_INFORMATION_DUSK = 30,
module.exports.VSCP_TYPE_INFORMATION_DAWN = 31,
module.exports.VSCP_TYPE_INFORMATION_ACTIVE = 32,
module.exports.VSCP_TYPE_INFORMATION_INACTIVE = 33,
module.exports.VSCP_TYPE_INFORMATION_BUSY = 34,
module.exports.VSCP_TYPE_INFORMATION_IDLE = 35,
module.exports.VSCP_TYPE_INFORMATION_STREAM_DATA = 36,
module.exports.VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY = 37,
module.exports.VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE = 38,
module.exports.VSCP_TYPE_INFORMATION_CONFIRM = 39,
module.exports.VSCP_TYPE_INFORMATION_LEVEL_CHANGED = 40,
module.exports.VSCP_TYPE_INFORMATION_WARNING = 41,
module.exports.VSCP_TYPE_INFORMATION_STATE = 42,
module.exports.VSCP_TYPE_INFORMATION_ACTION_TRIGGER = 43,
module.exports.VSCP_TYPE_INFORMATION_SUNRISE = 44,
module.exports.VSCP_TYPE_INFORMATION_SUNSET = 45,
module.exports.VSCP_TYPE_INFORMATION_START_OF_RECORD = 46,
module.exports.VSCP_TYPE_INFORMATION_END_OF_RECORD = 47,
module.exports.VSCP_TYPE_INFORMATION_PRESET_ACTIVE = 48,
module.exports.VSCP_TYPE_INFORMATION_DETECT = 49,
module.exports.VSCP_TYPE_INFORMATION_OVERFLOW = 50,
module.exports.VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED = 51,
module.exports.VSCP_TYPE_INFORMATION_SUNRISE_TWILIGHT_START = 52,
module.exports.VSCP_TYPE_INFORMATION_SUNSET_TWILIGHT_START = 53,
module.exports.VSCP_TYPE_INFORMATION_NAUTICAL_SUNRISE_TWILIGHT_START = 54,
module.exports.VSCP_TYPE_INFORMATION_NAUTICAL_SUNSET_TWILIGHT_START = 55,
module.exports.VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNRISE_TWILIGHT_START = 56,
module.exports.VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNSET_TWILIGHT_START = 57,
module.exports.VSCP_TYPE_INFORMATION_CALCULATED_NOON = 58,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_UP = 59,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_DOWN = 60,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_LEFT = 61,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_RIGHT = 62,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_END_TOP = 63,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_END_BOTTOM = 64,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_END_MIDDLE = 65,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_END_PRESET = 66,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_END_LEFT = 67,
module.exports.VSCP_TYPE_INFORMATION_SHUTTER_END_RIGHT = 68,
module.exports.VSCP_TYPE_INFORMATION_LONG_CLICK = 69,
module.exports.VSCP_TYPE_INFORMATION_SINGLE_CLICK = 70,
module.exports.VSCP_TYPE_INFORMATION_DOUBLE_CLICK = 71,
module.exports.VSCP_TYPE_INFORMATION_DATE = 72,
module.exports.VSCP_TYPE_INFORMATION_TIME = 73,
module.exports.VSCP_TYPE_INFORMATION_WEEKDAY = 74,
module.exports.VSCP_TYPE_INFORMATION_LOCK = 75,
module.exports.VSCP_TYPE_INFORMATION_UNLOCK = 76,
module.exports.VSCP_TYPE_INFORMATION_DATETIME = 77,
module.exports.VSCP_TYPE_INFORMATION_RISING = 78,
module.exports.VSCP_TYPE_INFORMATION_FALLING = 79,
module.exports.VSCP_TYPE_INFORMATION_UPDATED = 80,
module.exports.VSCP_TYPE_INFORMATION_CONNECT = 81,
module.exports.VSCP_TYPE_INFORMATION_DISCONNECT = 82,
module.exports.VSCP_TYPE_INFORMATION_RECONNECT = 83,
module.exports.VSCP_TYPE_INFORMATION_ENTER = 84,
module.exports.VSCP_TYPE_INFORMATION_EXIT = 85;


vscp_type_map.set( (20 << 16) + 0,'VSCP_TYPE_INFORMATION_GENERAL'); 
vscp_type_map.set( (20 << 16) + 1,'VSCP_TYPE_INFORMATION_BUTTON'); 
vscp_type_map.set( (20 << 16) + 2,'VSCP_TYPE_INFORMATION_MOUSE'); 
vscp_type_map.set( (20 << 16) + 3,'VSCP_TYPE_INFORMATION_ON'); 
vscp_type_map.set( (20 << 16) + 4,'VSCP_TYPE_INFORMATION_OFF'); 
vscp_type_map.set( (20 << 16) + 5,'VSCP_TYPE_INFORMATION_ALIVE'); 
vscp_type_map.set( (20 << 16) + 6,'VSCP_TYPE_INFORMATION_TERMINATING'); 
vscp_type_map.set( (20 << 16) + 7,'VSCP_TYPE_INFORMATION_OPENED'); 
vscp_type_map.set( (20 << 16) + 8,'VSCP_TYPE_INFORMATION_CLOSED'); 
vscp_type_map.set( (20 << 16) + 9,'VSCP_TYPE_INFORMATION_NODE_HEARTBEAT'); 
vscp_type_map.set( (20 << 16) + 10,'VSCP_TYPE_INFORMATION_BELOW_LIMIT'); 
vscp_type_map.set( (20 << 16) + 11,'VSCP_TYPE_INFORMATION_ABOVE_LIMIT'); 
vscp_type_map.set( (20 << 16) + 12,'VSCP_TYPE_INFORMATION_PULSE'); 
vscp_type_map.set( (20 << 16) + 13,'VSCP_TYPE_INFORMATION_ERROR'); 
vscp_type_map.set( (20 << 16) + 14,'VSCP_TYPE_INFORMATION_RESUMED'); 
vscp_type_map.set( (20 << 16) + 15,'VSCP_TYPE_INFORMATION_PAUSED'); 
vscp_type_map.set( (20 << 16) + 16,'VSCP_TYPE_INFORMATION_SLEEP'); 
vscp_type_map.set( (20 << 16) + 17,'VSCP_TYPE_INFORMATION_GOOD_MORNING'); 
vscp_type_map.set( (20 << 16) + 18,'VSCP_TYPE_INFORMATION_GOOD_DAY'); 
vscp_type_map.set( (20 << 16) + 19,'VSCP_TYPE_INFORMATION_GOOD_AFTERNOON'); 
vscp_type_map.set( (20 << 16) + 20,'VSCP_TYPE_INFORMATION_GOOD_EVENING'); 
vscp_type_map.set( (20 << 16) + 21,'VSCP_TYPE_INFORMATION_GOOD_NIGHT'); 
vscp_type_map.set( (20 << 16) + 22,'VSCP_TYPE_INFORMATION_SEE_YOU_SOON'); 
vscp_type_map.set( (20 << 16) + 23,'VSCP_TYPE_INFORMATION_GOODBYE'); 
vscp_type_map.set( (20 << 16) + 24,'VSCP_TYPE_INFORMATION_STOP'); 
vscp_type_map.set( (20 << 16) + 25,'VSCP_TYPE_INFORMATION_START'); 
vscp_type_map.set( (20 << 16) + 26,'VSCP_TYPE_INFORMATION_RESET_COMPLETED'); 
vscp_type_map.set( (20 << 16) + 27,'VSCP_TYPE_INFORMATION_INTERRUPTED'); 
vscp_type_map.set( (20 << 16) + 28,'VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP'); 
vscp_type_map.set( (20 << 16) + 29,'VSCP_TYPE_INFORMATION_WOKEN_UP'); 
vscp_type_map.set( (20 << 16) + 30,'VSCP_TYPE_INFORMATION_DUSK'); 
vscp_type_map.set( (20 << 16) + 31,'VSCP_TYPE_INFORMATION_DAWN'); 
vscp_type_map.set( (20 << 16) + 32,'VSCP_TYPE_INFORMATION_ACTIVE'); 
vscp_type_map.set( (20 << 16) + 33,'VSCP_TYPE_INFORMATION_INACTIVE'); 
vscp_type_map.set( (20 << 16) + 34,'VSCP_TYPE_INFORMATION_BUSY'); 
vscp_type_map.set( (20 << 16) + 35,'VSCP_TYPE_INFORMATION_IDLE'); 
vscp_type_map.set( (20 << 16) + 36,'VSCP_TYPE_INFORMATION_STREAM_DATA'); 
vscp_type_map.set( (20 << 16) + 37,'VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY'); 
vscp_type_map.set( (20 << 16) + 38,'VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE'); 
vscp_type_map.set( (20 << 16) + 39,'VSCP_TYPE_INFORMATION_CONFIRM'); 
vscp_type_map.set( (20 << 16) + 40,'VSCP_TYPE_INFORMATION_LEVEL_CHANGED'); 
vscp_type_map.set( (20 << 16) + 41,'VSCP_TYPE_INFORMATION_WARNING'); 
vscp_type_map.set( (20 << 16) + 42,'VSCP_TYPE_INFORMATION_STATE'); 
vscp_type_map.set( (20 << 16) + 43,'VSCP_TYPE_INFORMATION_ACTION_TRIGGER'); 
vscp_type_map.set( (20 << 16) + 44,'VSCP_TYPE_INFORMATION_SUNRISE'); 
vscp_type_map.set( (20 << 16) + 45,'VSCP_TYPE_INFORMATION_SUNSET'); 
vscp_type_map.set( (20 << 16) + 46,'VSCP_TYPE_INFORMATION_START_OF_RECORD'); 
vscp_type_map.set( (20 << 16) + 47,'VSCP_TYPE_INFORMATION_END_OF_RECORD'); 
vscp_type_map.set( (20 << 16) + 48,'VSCP_TYPE_INFORMATION_PRESET_ACTIVE'); 
vscp_type_map.set( (20 << 16) + 49,'VSCP_TYPE_INFORMATION_DETECT'); 
vscp_type_map.set( (20 << 16) + 50,'VSCP_TYPE_INFORMATION_OVERFLOW'); 
vscp_type_map.set( (20 << 16) + 51,'VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED'); 
vscp_type_map.set( (20 << 16) + 52,'VSCP_TYPE_INFORMATION_SUNRISE_TWILIGHT_START'); 
vscp_type_map.set( (20 << 16) + 53,'VSCP_TYPE_INFORMATION_SUNSET_TWILIGHT_START'); 
vscp_type_map.set( (20 << 16) + 54,'VSCP_TYPE_INFORMATION_NAUTICAL_SUNRISE_TWILIGHT_START'); 
vscp_type_map.set( (20 << 16) + 55,'VSCP_TYPE_INFORMATION_NAUTICAL_SUNSET_TWILIGHT_START'); 
vscp_type_map.set( (20 << 16) + 56,'VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNRISE_TWILIGHT_START'); 
vscp_type_map.set( (20 << 16) + 57,'VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNSET_TWILIGHT_START'); 
vscp_type_map.set( (20 << 16) + 58,'VSCP_TYPE_INFORMATION_CALCULATED_NOON'); 
vscp_type_map.set( (20 << 16) + 59,'VSCP_TYPE_INFORMATION_SHUTTER_UP'); 
vscp_type_map.set( (20 << 16) + 60,'VSCP_TYPE_INFORMATION_SHUTTER_DOWN'); 
vscp_type_map.set( (20 << 16) + 61,'VSCP_TYPE_INFORMATION_SHUTTER_LEFT'); 
vscp_type_map.set( (20 << 16) + 62,'VSCP_TYPE_INFORMATION_SHUTTER_RIGHT'); 
vscp_type_map.set( (20 << 16) + 63,'VSCP_TYPE_INFORMATION_SHUTTER_END_TOP'); 
vscp_type_map.set( (20 << 16) + 64,'VSCP_TYPE_INFORMATION_SHUTTER_END_BOTTOM'); 
vscp_type_map.set( (20 << 16) + 65,'VSCP_TYPE_INFORMATION_SHUTTER_END_MIDDLE'); 
vscp_type_map.set( (20 << 16) + 66,'VSCP_TYPE_INFORMATION_SHUTTER_END_PRESET'); 
vscp_type_map.set( (20 << 16) + 67,'VSCP_TYPE_INFORMATION_SHUTTER_END_LEFT'); 
vscp_type_map.set( (20 << 16) + 68,'VSCP_TYPE_INFORMATION_SHUTTER_END_RIGHT'); 
vscp_type_map.set( (20 << 16) + 69,'VSCP_TYPE_INFORMATION_LONG_CLICK'); 
vscp_type_map.set( (20 << 16) + 70,'VSCP_TYPE_INFORMATION_SINGLE_CLICK'); 
vscp_type_map.set( (20 << 16) + 71,'VSCP_TYPE_INFORMATION_DOUBLE_CLICK'); 
vscp_type_map.set( (20 << 16) + 72,'VSCP_TYPE_INFORMATION_DATE'); 
vscp_type_map.set( (20 << 16) + 73,'VSCP_TYPE_INFORMATION_TIME'); 
vscp_type_map.set( (20 << 16) + 74,'VSCP_TYPE_INFORMATION_WEEKDAY'); 
vscp_type_map.set( (20 << 16) + 75,'VSCP_TYPE_INFORMATION_LOCK'); 
vscp_type_map.set( (20 << 16) + 76,'VSCP_TYPE_INFORMATION_UNLOCK'); 
vscp_type_map.set( (20 << 16) + 77,'VSCP_TYPE_INFORMATION_DATETIME'); 
vscp_type_map.set( (20 << 16) + 78,'VSCP_TYPE_INFORMATION_RISING'); 
vscp_type_map.set( (20 << 16) + 79,'VSCP_TYPE_INFORMATION_FALLING'); 
vscp_type_map.set( (20 << 16) + 80,'VSCP_TYPE_INFORMATION_UPDATED'); 
vscp_type_map.set( (20 << 16) + 81,'VSCP_TYPE_INFORMATION_CONNECT'); 
vscp_type_map.set( (20 << 16) + 82,'VSCP_TYPE_INFORMATION_DISCONNECT'); 
vscp_type_map.set( (20 << 16) + 83,'VSCP_TYPE_INFORMATION_RECONNECT'); 
vscp_type_map.set( (20 << 16) + 84,'VSCP_TYPE_INFORMATION_ENTER'); 
vscp_type_map.set( (20 << 16) + 85,'VSCP_TYPE_INFORMATION_EXIT'); 
 
//  CLASS1.CONTROL = 30  -  Control
module.exports.VSCP_TYPE_CONTROL_GENERAL = 0,
module.exports.VSCP_TYPE_CONTROL_MUTE = 1,
module.exports.VSCP_TYPE_CONTROL_ALL_LAMPS = 2,
module.exports.VSCP_TYPE_CONTROL_OPEN = 3,
module.exports.VSCP_TYPE_CONTROL_CLOSE = 4,
module.exports.VSCP_TYPE_CONTROL_TURNON = 5,
module.exports.VSCP_TYPE_CONTROL_TURNOFF = 6,
module.exports.VSCP_TYPE_CONTROL_START = 7,
module.exports.VSCP_TYPE_CONTROL_STOP = 8,
module.exports.VSCP_TYPE_CONTROL_RESET = 9,
module.exports.VSCP_TYPE_CONTROL_INTERRUPT = 10,
module.exports.VSCP_TYPE_CONTROL_SLEEP = 11,
module.exports.VSCP_TYPE_CONTROL_WAKEUP = 12,
module.exports.VSCP_TYPE_CONTROL_RESUME = 13,
module.exports.VSCP_TYPE_CONTROL_PAUSE = 14,
module.exports.VSCP_TYPE_CONTROL_ACTIVATE = 15,
module.exports.VSCP_TYPE_CONTROL_DEACTIVATE = 16,
module.exports.VSCP_TYPE_CONTROL_RESERVED17 = 17,
module.exports.VSCP_TYPE_CONTROL_RESERVED18 = 18,
module.exports.VSCP_TYPE_CONTROL_RESERVED19 = 19,
module.exports.VSCP_TYPE_CONTROL_DIM_LAMPS = 20,
module.exports.VSCP_TYPE_CONTROL_CHANGE_CHANNEL = 21,
module.exports.VSCP_TYPE_CONTROL_CHANGE_LEVEL = 22,
module.exports.VSCP_TYPE_CONTROL_RELATIVE_CHANGE_LEVEL = 23,
module.exports.VSCP_TYPE_CONTROL_MEASUREMENT_REQUEST = 24,
module.exports.VSCP_TYPE_CONTROL_STREAM_DATA = 25,
module.exports.VSCP_TYPE_CONTROL_SYNC = 26,
module.exports.VSCP_TYPE_CONTROL_ZONED_STREAM_DATA = 27,
module.exports.VSCP_TYPE_CONTROL_SET_PRESET = 28,
module.exports.VSCP_TYPE_CONTROL_TOGGLE_STATE = 29,
module.exports.VSCP_TYPE_CONTROL_TIMED_PULSE_ON = 30,
module.exports.VSCP_TYPE_CONTROL_TIMED_PULSE_OFF = 31,
module.exports.VSCP_TYPE_CONTROL_SET_COUNTRY_LANGUAGE = 32,
module.exports.VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL = 33,
module.exports.VSCP_TYPE_CONTROL_SHUTTER_UP = 34,
module.exports.VSCP_TYPE_CONTROL_SHUTTER_DOWN = 35,
module.exports.VSCP_TYPE_CONTROL_SHUTTER_LEFT = 36,
module.exports.VSCP_TYPE_CONTROL_SHUTTER_RIGHT = 37,
module.exports.VSCP_TYPE_CONTROL_SHUTTER_MIDDLE = 38,
module.exports.VSCP_TYPE_CONTROL_SHUTTER_PRESET = 39,
module.exports.VSCP_TYPE_CONTROL_ALL_LAMPS_ON = 40,
module.exports.VSCP_TYPE_CONTROL_ALL_LAMPS_OFF = 41,
module.exports.VSCP_TYPE_CONTROL_LOCK = 42,
module.exports.VSCP_TYPE_CONTROL_UNLOCK = 43,
module.exports.VSCP_TYPE_CONTROL_PWM = 44,
module.exports.VSCP_TYPE_CONTROL_TOKEN_LOCK = 45,
module.exports.VSCP_TYPE_CONTROL_TOKEN_UNLOCK = 46,
module.exports.VSCP_TYPE_CONTROL_SET_SECURITY_LEVEL = 47,
module.exports.VSCP_TYPE_CONTROL_SET_SECURITY_PIN = 48,
module.exports.VSCP_TYPE_CONTROL_SET_SECURITY_PASSWORD = 49,
module.exports.VSCP_TYPE_CONTROL_SET_SECURITY_TOKEN = 50,
module.exports.VSCP_TYPE_CONTROL_REQUEST_SECURITY_TOKEN = 51;


vscp_type_map.set( (30 << 16) + 0,'VSCP_TYPE_CONTROL_GENERAL'); 
vscp_type_map.set( (30 << 16) + 1,'VSCP_TYPE_CONTROL_MUTE'); 
vscp_type_map.set( (30 << 16) + 2,'VSCP_TYPE_CONTROL_ALL_LAMPS'); 
vscp_type_map.set( (30 << 16) + 3,'VSCP_TYPE_CONTROL_OPEN'); 
vscp_type_map.set( (30 << 16) + 4,'VSCP_TYPE_CONTROL_CLOSE'); 
vscp_type_map.set( (30 << 16) + 5,'VSCP_TYPE_CONTROL_TURNON'); 
vscp_type_map.set( (30 << 16) + 6,'VSCP_TYPE_CONTROL_TURNOFF'); 
vscp_type_map.set( (30 << 16) + 7,'VSCP_TYPE_CONTROL_START'); 
vscp_type_map.set( (30 << 16) + 8,'VSCP_TYPE_CONTROL_STOP'); 
vscp_type_map.set( (30 << 16) + 9,'VSCP_TYPE_CONTROL_RESET'); 
vscp_type_map.set( (30 << 16) + 10,'VSCP_TYPE_CONTROL_INTERRUPT'); 
vscp_type_map.set( (30 << 16) + 11,'VSCP_TYPE_CONTROL_SLEEP'); 
vscp_type_map.set( (30 << 16) + 12,'VSCP_TYPE_CONTROL_WAKEUP'); 
vscp_type_map.set( (30 << 16) + 13,'VSCP_TYPE_CONTROL_RESUME'); 
vscp_type_map.set( (30 << 16) + 14,'VSCP_TYPE_CONTROL_PAUSE'); 
vscp_type_map.set( (30 << 16) + 15,'VSCP_TYPE_CONTROL_ACTIVATE'); 
vscp_type_map.set( (30 << 16) + 16,'VSCP_TYPE_CONTROL_DEACTIVATE'); 
vscp_type_map.set( (30 << 16) + 17,'VSCP_TYPE_CONTROL_RESERVED17'); 
vscp_type_map.set( (30 << 16) + 18,'VSCP_TYPE_CONTROL_RESERVED18'); 
vscp_type_map.set( (30 << 16) + 19,'VSCP_TYPE_CONTROL_RESERVED19'); 
vscp_type_map.set( (30 << 16) + 20,'VSCP_TYPE_CONTROL_DIM_LAMPS'); 
vscp_type_map.set( (30 << 16) + 21,'VSCP_TYPE_CONTROL_CHANGE_CHANNEL'); 
vscp_type_map.set( (30 << 16) + 22,'VSCP_TYPE_CONTROL_CHANGE_LEVEL'); 
vscp_type_map.set( (30 << 16) + 23,'VSCP_TYPE_CONTROL_RELATIVE_CHANGE_LEVEL'); 
vscp_type_map.set( (30 << 16) + 24,'VSCP_TYPE_CONTROL_MEASUREMENT_REQUEST'); 
vscp_type_map.set( (30 << 16) + 25,'VSCP_TYPE_CONTROL_STREAM_DATA'); 
vscp_type_map.set( (30 << 16) + 26,'VSCP_TYPE_CONTROL_SYNC'); 
vscp_type_map.set( (30 << 16) + 27,'VSCP_TYPE_CONTROL_ZONED_STREAM_DATA'); 
vscp_type_map.set( (30 << 16) + 28,'VSCP_TYPE_CONTROL_SET_PRESET'); 
vscp_type_map.set( (30 << 16) + 29,'VSCP_TYPE_CONTROL_TOGGLE_STATE'); 
vscp_type_map.set( (30 << 16) + 30,'VSCP_TYPE_CONTROL_TIMED_PULSE_ON'); 
vscp_type_map.set( (30 << 16) + 31,'VSCP_TYPE_CONTROL_TIMED_PULSE_OFF'); 
vscp_type_map.set( (30 << 16) + 32,'VSCP_TYPE_CONTROL_SET_COUNTRY_LANGUAGE'); 
vscp_type_map.set( (30 << 16) + 33,'VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL'); 
vscp_type_map.set( (30 << 16) + 34,'VSCP_TYPE_CONTROL_SHUTTER_UP'); 
vscp_type_map.set( (30 << 16) + 35,'VSCP_TYPE_CONTROL_SHUTTER_DOWN'); 
vscp_type_map.set( (30 << 16) + 36,'VSCP_TYPE_CONTROL_SHUTTER_LEFT'); 
vscp_type_map.set( (30 << 16) + 37,'VSCP_TYPE_CONTROL_SHUTTER_RIGHT'); 
vscp_type_map.set( (30 << 16) + 38,'VSCP_TYPE_CONTROL_SHUTTER_MIDDLE'); 
vscp_type_map.set( (30 << 16) + 39,'VSCP_TYPE_CONTROL_SHUTTER_PRESET'); 
vscp_type_map.set( (30 << 16) + 40,'VSCP_TYPE_CONTROL_ALL_LAMPS_ON'); 
vscp_type_map.set( (30 << 16) + 41,'VSCP_TYPE_CONTROL_ALL_LAMPS_OFF'); 
vscp_type_map.set( (30 << 16) + 42,'VSCP_TYPE_CONTROL_LOCK'); 
vscp_type_map.set( (30 << 16) + 43,'VSCP_TYPE_CONTROL_UNLOCK'); 
vscp_type_map.set( (30 << 16) + 44,'VSCP_TYPE_CONTROL_PWM'); 
vscp_type_map.set( (30 << 16) + 45,'VSCP_TYPE_CONTROL_TOKEN_LOCK'); 
vscp_type_map.set( (30 << 16) + 46,'VSCP_TYPE_CONTROL_TOKEN_UNLOCK'); 
vscp_type_map.set( (30 << 16) + 47,'VSCP_TYPE_CONTROL_SET_SECURITY_LEVEL'); 
vscp_type_map.set( (30 << 16) + 48,'VSCP_TYPE_CONTROL_SET_SECURITY_PIN'); 
vscp_type_map.set( (30 << 16) + 49,'VSCP_TYPE_CONTROL_SET_SECURITY_PASSWORD'); 
vscp_type_map.set( (30 << 16) + 50,'VSCP_TYPE_CONTROL_SET_SECURITY_TOKEN'); 
vscp_type_map.set( (30 << 16) + 51,'VSCP_TYPE_CONTROL_REQUEST_SECURITY_TOKEN'); 
 
//  CLASS1.MULTIMEDIA = 40  -  Multimedia
module.exports.VSCP_TYPE_MULTIMEDIA_GENERAL = 0,
module.exports.VSCP_TYPE_MULTIMEDIA_PLAYBACK = 1,
module.exports.VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENG = 2,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRAST = 3,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUS = 4,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_TINT = 5,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCE = 6,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESS = 7,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_HUE = 8,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_BASS = 9,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLE = 10,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUME = 11,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUME = 12,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUME = 13,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUME = 14,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUME = 15,
module.exports.VSCP_TYPE_MULTIMEDIA_RESERVED16 = 16,
module.exports.VSCP_TYPE_MULTIMEDIA_RESERVED17 = 17,
module.exports.VSCP_TYPE_MULTIMEDIA_RESERVED18 = 18,
module.exports.VSCP_TYPE_MULTIMEDIA_RESERVED19 = 19,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISK = 20,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACK = 21,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUM = 22,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNEL = 23,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGE = 24,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTER = 25,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMAT = 26,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCE = 27,
module.exports.VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUT = 28,
module.exports.VSCP_TYPE_MULTIMEDIA_RECORD = 29,
module.exports.VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUME = 30,
module.exports.VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTION = 40,
module.exports.VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLE = 50,
module.exports.VSCP_TYPE_MULTIMEDIA_SET_POSITION = 51,
module.exports.VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFO = 52,
module.exports.VSCP_TYPE_MULTIMEDIA_REMOVE_ITEM = 53,
module.exports.VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMS = 54,
module.exports.VSCP_TYPE_MULTIMEDIA_SAVE_ALBUM = 55,
module.exports.VSCP_TYPE_MULTIMEDIA_CONTROL = 60,
module.exports.VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSE = 61;


vscp_type_map.set( (40 << 16) + 0,'VSCP_TYPE_MULTIMEDIA_GENERAL'); 
vscp_type_map.set( (40 << 16) + 1,'VSCP_TYPE_MULTIMEDIA_PLAYBACK'); 
vscp_type_map.set( (40 << 16) + 2,'VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENG'); 
vscp_type_map.set( (40 << 16) + 3,'VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRAST'); 
vscp_type_map.set( (40 << 16) + 4,'VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUS'); 
vscp_type_map.set( (40 << 16) + 5,'VSCP_TYPE_MULTIMEDIA_ADJUST_TINT'); 
vscp_type_map.set( (40 << 16) + 6,'VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCE'); 
vscp_type_map.set( (40 << 16) + 7,'VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESS'); 
vscp_type_map.set( (40 << 16) + 8,'VSCP_TYPE_MULTIMEDIA_ADJUST_HUE'); 
vscp_type_map.set( (40 << 16) + 9,'VSCP_TYPE_MULTIMEDIA_ADJUST_BASS'); 
vscp_type_map.set( (40 << 16) + 10,'VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLE'); 
vscp_type_map.set( (40 << 16) + 11,'VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUME'); 
vscp_type_map.set( (40 << 16) + 12,'VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUME'); 
vscp_type_map.set( (40 << 16) + 13,'VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUME'); 
vscp_type_map.set( (40 << 16) + 14,'VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUME'); 
vscp_type_map.set( (40 << 16) + 15,'VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUME'); 
vscp_type_map.set( (40 << 16) + 16,'VSCP_TYPE_MULTIMEDIA_RESERVED16'); 
vscp_type_map.set( (40 << 16) + 17,'VSCP_TYPE_MULTIMEDIA_RESERVED17'); 
vscp_type_map.set( (40 << 16) + 18,'VSCP_TYPE_MULTIMEDIA_RESERVED18'); 
vscp_type_map.set( (40 << 16) + 19,'VSCP_TYPE_MULTIMEDIA_RESERVED19'); 
vscp_type_map.set( (40 << 16) + 20,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISK'); 
vscp_type_map.set( (40 << 16) + 21,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACK'); 
vscp_type_map.set( (40 << 16) + 22,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUM'); 
vscp_type_map.set( (40 << 16) + 23,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNEL'); 
vscp_type_map.set( (40 << 16) + 24,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGE'); 
vscp_type_map.set( (40 << 16) + 25,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTER'); 
vscp_type_map.set( (40 << 16) + 26,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMAT'); 
vscp_type_map.set( (40 << 16) + 27,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCE'); 
vscp_type_map.set( (40 << 16) + 28,'VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUT'); 
vscp_type_map.set( (40 << 16) + 29,'VSCP_TYPE_MULTIMEDIA_RECORD'); 
vscp_type_map.set( (40 << 16) + 30,'VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUME'); 
vscp_type_map.set( (40 << 16) + 40,'VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTION'); 
vscp_type_map.set( (40 << 16) + 50,'VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLE'); 
vscp_type_map.set( (40 << 16) + 51,'VSCP_TYPE_MULTIMEDIA_SET_POSITION'); 
vscp_type_map.set( (40 << 16) + 52,'VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFO'); 
vscp_type_map.set( (40 << 16) + 53,'VSCP_TYPE_MULTIMEDIA_REMOVE_ITEM'); 
vscp_type_map.set( (40 << 16) + 54,'VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMS'); 
vscp_type_map.set( (40 << 16) + 55,'VSCP_TYPE_MULTIMEDIA_SAVE_ALBUM'); 
vscp_type_map.set( (40 << 16) + 60,'VSCP_TYPE_MULTIMEDIA_CONTROL'); 
vscp_type_map.set( (40 << 16) + 61,'VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSE'); 
 
//  CLASS1.AOL = 50  -  Alert On LAN
module.exports.VSCP_TYPE_AOL_GENERAL = 0,
module.exports.VSCP_TYPE_AOL_UNPLUGGED_POWER = 1,
module.exports.VSCP_TYPE_AOL_UNPLUGGED_LAN = 2,
module.exports.VSCP_TYPE_AOL_CHASSIS_INTRUSION = 3,
module.exports.VSCP_TYPE_AOL_PROCESSOR_REMOVAL = 4,
module.exports.VSCP_TYPE_AOL_ENVIRONMENT_ERROR = 5,
module.exports.VSCP_TYPE_AOL_HIGH_TEMPERATURE = 6,
module.exports.VSCP_TYPE_AOL_FAN_SPEED = 7,
module.exports.VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS = 8,
module.exports.VSCP_TYPE_AOL_OS_ERROR = 9,
module.exports.VSCP_TYPE_AOL_POWER_ON_ERROR = 10,
module.exports.VSCP_TYPE_AOL_SYSTEM_HUNG = 11,
module.exports.VSCP_TYPE_AOL_COMPONENT_FAILURE = 12,
module.exports.VSCP_TYPE_AOL_REBOOT_UPON_FAILURE = 13,
module.exports.VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM = 14,
module.exports.VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE = 15,
module.exports.VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE = 16;


vscp_type_map.set( (50 << 16) + 0,'VSCP_TYPE_AOL_GENERAL'); 
vscp_type_map.set( (50 << 16) + 1,'VSCP_TYPE_AOL_UNPLUGGED_POWER'); 
vscp_type_map.set( (50 << 16) + 2,'VSCP_TYPE_AOL_UNPLUGGED_LAN'); 
vscp_type_map.set( (50 << 16) + 3,'VSCP_TYPE_AOL_CHASSIS_INTRUSION'); 
vscp_type_map.set( (50 << 16) + 4,'VSCP_TYPE_AOL_PROCESSOR_REMOVAL'); 
vscp_type_map.set( (50 << 16) + 5,'VSCP_TYPE_AOL_ENVIRONMENT_ERROR'); 
vscp_type_map.set( (50 << 16) + 6,'VSCP_TYPE_AOL_HIGH_TEMPERATURE'); 
vscp_type_map.set( (50 << 16) + 7,'VSCP_TYPE_AOL_FAN_SPEED'); 
vscp_type_map.set( (50 << 16) + 8,'VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS'); 
vscp_type_map.set( (50 << 16) + 9,'VSCP_TYPE_AOL_OS_ERROR'); 
vscp_type_map.set( (50 << 16) + 10,'VSCP_TYPE_AOL_POWER_ON_ERROR'); 
vscp_type_map.set( (50 << 16) + 11,'VSCP_TYPE_AOL_SYSTEM_HUNG'); 
vscp_type_map.set( (50 << 16) + 12,'VSCP_TYPE_AOL_COMPONENT_FAILURE'); 
vscp_type_map.set( (50 << 16) + 13,'VSCP_TYPE_AOL_REBOOT_UPON_FAILURE'); 
vscp_type_map.set( (50 << 16) + 14,'VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM'); 
vscp_type_map.set( (50 << 16) + 15,'VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE'); 
vscp_type_map.set( (50 << 16) + 16,'VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE'); 
 
//  CLASS1.MEASUREMENT64 = 60  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS1.MEASUREMENT64X1 = 61  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS1.MEASUREMENT64X2 = 62  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS1.MEASUREMENT64X3 = 63  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS1.MEASUREMENT64X4 = 64  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS1.MEASUREZONE = 65  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS1.MEASUREZONEX1 = 66  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS1.MEASUREZONEX2 = 67  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS1.MEASUREZONEX3 = 68  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS1.MEASUREZONEX4 = 69  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS1.MEASUREMENT32 = 70  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS1.MEASUREMENT32X1 = 71  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS1.MEASUREMENT32X2 = 72  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS1.MEASUREMENT32X3 = 73  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS1.MEASUREMENT32X4 = 74  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS1.SETVALUEZONE = 85  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS1.SETVALUEZONEX1 = 86  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS1.SETVALUEZONEX2 = 87  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS1.SETVALUEZONEX3 = 88  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS1.SETVALUEZONEX4 = 89  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS1.WEATHER = 90  -  Weather
module.exports.VSCP_TYPE_WEATHER_GENERAL = 0,
module.exports.VSCP_TYPE_WEATHER_SEASONS_WINTER = 1,
module.exports.VSCP_TYPE_WEATHER_SEASONS_SPRING = 2,
module.exports.VSCP_TYPE_WEATHER_SEASONS_SUMMER = 3,
module.exports.VSCP_TYPE_WEATHER_SEASONS_AUTUMN = 4,
module.exports.VSCP_TYPE_WEATHER_WIND_NONE = 5,
module.exports.VSCP_TYPE_WEATHER_WIND_LOW = 6,
module.exports.VSCP_TYPE_WEATHER_WIND_MEDIUM = 7,
module.exports.VSCP_TYPE_WEATHER_WIND_HIGH = 8,
module.exports.VSCP_TYPE_WEATHER_WIND_VERY_HIGH = 9,
module.exports.VSCP_TYPE_WEATHER_AIR_FOGGY = 10,
module.exports.VSCP_TYPE_WEATHER_AIR_FREEZING = 11,
module.exports.VSCP_TYPE_WEATHER_AIR_VERY_COLD = 12,
module.exports.VSCP_TYPE_WEATHER_AIR_COLD = 13,
module.exports.VSCP_TYPE_WEATHER_AIR_NORMAL = 14,
module.exports.VSCP_TYPE_WEATHER_AIR_HOT = 15,
module.exports.VSCP_TYPE_WEATHER_AIR_VERY_HOT = 16,
module.exports.VSCP_TYPE_WEATHER_AIR_POLLUTION_LOW = 17,
module.exports.VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUM = 18,
module.exports.VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGH = 19,
module.exports.VSCP_TYPE_WEATHER_AIR_HUMID = 20,
module.exports.VSCP_TYPE_WEATHER_AIR_DRY = 21,
module.exports.VSCP_TYPE_WEATHER_SOIL_HUMID = 22,
module.exports.VSCP_TYPE_WEATHER_SOIL_DRY = 23,
module.exports.VSCP_TYPE_WEATHER_RAIN_NONE = 24,
module.exports.VSCP_TYPE_WEATHER_RAIN_LIGHT = 25,
module.exports.VSCP_TYPE_WEATHER_RAIN_HEAVY = 26,
module.exports.VSCP_TYPE_WEATHER_RAIN_VERY_HEAVY = 27,
module.exports.VSCP_TYPE_WEATHER_SUN_NONE = 28,
module.exports.VSCP_TYPE_WEATHER_SUN_LIGHT = 29,
module.exports.VSCP_TYPE_WEATHER_SUN_HEAVY = 30,
module.exports.VSCP_TYPE_WEATHER_SNOW_NONE = 31,
module.exports.VSCP_TYPE_WEATHER_SNOW_LIGHT = 32,
module.exports.VSCP_TYPE_WEATHER_SNOW_HEAVY = 33,
module.exports.VSCP_TYPE_WEATHER_DEW_POINT = 34,
module.exports.VSCP_TYPE_WEATHER_STORM = 35,
module.exports.VSCP_TYPE_WEATHER_FLOOD = 36,
module.exports.VSCP_TYPE_WEATHER_EARTHQUAKE = 37,
module.exports.VSCP_TYPE_WEATHER_NUCLEAR_DISASTER = 38,
module.exports.VSCP_TYPE_WEATHER_FIRE = 39,
module.exports.VSCP_TYPE_WEATHER_LIGHTNING = 40,
module.exports.VSCP_TYPE_WEATHER_UV_RADIATION_LOW = 41,
module.exports.VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUM = 42,
module.exports.VSCP_TYPE_WEATHER_UV_RADIATION_NORMAL = 43,
module.exports.VSCP_TYPE_WEATHER_UV_RADIATION_HIGH = 44,
module.exports.VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGH = 45,
module.exports.VSCP_TYPE_WEATHER_WARNING_LEVEL1 = 46,
module.exports.VSCP_TYPE_WEATHER_WARNING_LEVEL2 = 47,
module.exports.VSCP_TYPE_WEATHER_WARNING_LEVEL3 = 48,
module.exports.VSCP_TYPE_WEATHER_WARNING_LEVEL4 = 49,
module.exports.VSCP_TYPE_WEATHER_WARNING_LEVEL5 = 50,
module.exports.VSCP_TYPE_WEATHER_ARMAGEDON = 51,
module.exports.VSCP_TYPE_WEATHER_UV_INDEX = 52;


vscp_type_map.set( (90 << 16) + 0,'VSCP_TYPE_WEATHER_GENERAL'); 
vscp_type_map.set( (90 << 16) + 1,'VSCP_TYPE_WEATHER_SEASONS_WINTER'); 
vscp_type_map.set( (90 << 16) + 2,'VSCP_TYPE_WEATHER_SEASONS_SPRING'); 
vscp_type_map.set( (90 << 16) + 3,'VSCP_TYPE_WEATHER_SEASONS_SUMMER'); 
vscp_type_map.set( (90 << 16) + 4,'VSCP_TYPE_WEATHER_SEASONS_AUTUMN'); 
vscp_type_map.set( (90 << 16) + 5,'VSCP_TYPE_WEATHER_WIND_NONE'); 
vscp_type_map.set( (90 << 16) + 6,'VSCP_TYPE_WEATHER_WIND_LOW'); 
vscp_type_map.set( (90 << 16) + 7,'VSCP_TYPE_WEATHER_WIND_MEDIUM'); 
vscp_type_map.set( (90 << 16) + 8,'VSCP_TYPE_WEATHER_WIND_HIGH'); 
vscp_type_map.set( (90 << 16) + 9,'VSCP_TYPE_WEATHER_WIND_VERY_HIGH'); 
vscp_type_map.set( (90 << 16) + 10,'VSCP_TYPE_WEATHER_AIR_FOGGY'); 
vscp_type_map.set( (90 << 16) + 11,'VSCP_TYPE_WEATHER_AIR_FREEZING'); 
vscp_type_map.set( (90 << 16) + 12,'VSCP_TYPE_WEATHER_AIR_VERY_COLD'); 
vscp_type_map.set( (90 << 16) + 13,'VSCP_TYPE_WEATHER_AIR_COLD'); 
vscp_type_map.set( (90 << 16) + 14,'VSCP_TYPE_WEATHER_AIR_NORMAL'); 
vscp_type_map.set( (90 << 16) + 15,'VSCP_TYPE_WEATHER_AIR_HOT'); 
vscp_type_map.set( (90 << 16) + 16,'VSCP_TYPE_WEATHER_AIR_VERY_HOT'); 
vscp_type_map.set( (90 << 16) + 17,'VSCP_TYPE_WEATHER_AIR_POLLUTION_LOW'); 
vscp_type_map.set( (90 << 16) + 18,'VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUM'); 
vscp_type_map.set( (90 << 16) + 19,'VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGH'); 
vscp_type_map.set( (90 << 16) + 20,'VSCP_TYPE_WEATHER_AIR_HUMID'); 
vscp_type_map.set( (90 << 16) + 21,'VSCP_TYPE_WEATHER_AIR_DRY'); 
vscp_type_map.set( (90 << 16) + 22,'VSCP_TYPE_WEATHER_SOIL_HUMID'); 
vscp_type_map.set( (90 << 16) + 23,'VSCP_TYPE_WEATHER_SOIL_DRY'); 
vscp_type_map.set( (90 << 16) + 24,'VSCP_TYPE_WEATHER_RAIN_NONE'); 
vscp_type_map.set( (90 << 16) + 25,'VSCP_TYPE_WEATHER_RAIN_LIGHT'); 
vscp_type_map.set( (90 << 16) + 26,'VSCP_TYPE_WEATHER_RAIN_HEAVY'); 
vscp_type_map.set( (90 << 16) + 27,'VSCP_TYPE_WEATHER_RAIN_VERY_HEAVY'); 
vscp_type_map.set( (90 << 16) + 28,'VSCP_TYPE_WEATHER_SUN_NONE'); 
vscp_type_map.set( (90 << 16) + 29,'VSCP_TYPE_WEATHER_SUN_LIGHT'); 
vscp_type_map.set( (90 << 16) + 30,'VSCP_TYPE_WEATHER_SUN_HEAVY'); 
vscp_type_map.set( (90 << 16) + 31,'VSCP_TYPE_WEATHER_SNOW_NONE'); 
vscp_type_map.set( (90 << 16) + 32,'VSCP_TYPE_WEATHER_SNOW_LIGHT'); 
vscp_type_map.set( (90 << 16) + 33,'VSCP_TYPE_WEATHER_SNOW_HEAVY'); 
vscp_type_map.set( (90 << 16) + 34,'VSCP_TYPE_WEATHER_DEW_POINT'); 
vscp_type_map.set( (90 << 16) + 35,'VSCP_TYPE_WEATHER_STORM'); 
vscp_type_map.set( (90 << 16) + 36,'VSCP_TYPE_WEATHER_FLOOD'); 
vscp_type_map.set( (90 << 16) + 37,'VSCP_TYPE_WEATHER_EARTHQUAKE'); 
vscp_type_map.set( (90 << 16) + 38,'VSCP_TYPE_WEATHER_NUCLEAR_DISASTER'); 
vscp_type_map.set( (90 << 16) + 39,'VSCP_TYPE_WEATHER_FIRE'); 
vscp_type_map.set( (90 << 16) + 40,'VSCP_TYPE_WEATHER_LIGHTNING'); 
vscp_type_map.set( (90 << 16) + 41,'VSCP_TYPE_WEATHER_UV_RADIATION_LOW'); 
vscp_type_map.set( (90 << 16) + 42,'VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUM'); 
vscp_type_map.set( (90 << 16) + 43,'VSCP_TYPE_WEATHER_UV_RADIATION_NORMAL'); 
vscp_type_map.set( (90 << 16) + 44,'VSCP_TYPE_WEATHER_UV_RADIATION_HIGH'); 
vscp_type_map.set( (90 << 16) + 45,'VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGH'); 
vscp_type_map.set( (90 << 16) + 46,'VSCP_TYPE_WEATHER_WARNING_LEVEL1'); 
vscp_type_map.set( (90 << 16) + 47,'VSCP_TYPE_WEATHER_WARNING_LEVEL2'); 
vscp_type_map.set( (90 << 16) + 48,'VSCP_TYPE_WEATHER_WARNING_LEVEL3'); 
vscp_type_map.set( (90 << 16) + 49,'VSCP_TYPE_WEATHER_WARNING_LEVEL4'); 
vscp_type_map.set( (90 << 16) + 50,'VSCP_TYPE_WEATHER_WARNING_LEVEL5'); 
vscp_type_map.set( (90 << 16) + 51,'VSCP_TYPE_WEATHER_ARMAGEDON'); 
vscp_type_map.set( (90 << 16) + 52,'VSCP_TYPE_WEATHER_UV_INDEX'); 
 
//  CLASS1.WEATHER_FORECAST = 95  -  Weather forecast
// Event types is the same as  CLASS1.WEATHER = 90  -  Weather
 
//  CLASS1.PHONE = 100  -  Phone
module.exports.VSCP_TYPE_PHONE_GENERAL = 0,
module.exports.VSCP_TYPE_PHONE_INCOMING_CALL = 1,
module.exports.VSCP_TYPE_PHONE_OUTGOING_CALL = 2,
module.exports.VSCP_TYPE_PHONE_RING = 3,
module.exports.VSCP_TYPE_PHONE_ANSWER = 4,
module.exports.VSCP_TYPE_PHONE_HANGUP = 5,
module.exports.VSCP_TYPE_PHONE_GIVEUP = 6,
module.exports.VSCP_TYPE_PHONE_TRANSFER = 7,
module.exports.VSCP_TYPE_PHONE_DATABASE_INFO = 8;


vscp_type_map.set( (100 << 16) + 0,'VSCP_TYPE_PHONE_GENERAL'); 
vscp_type_map.set( (100 << 16) + 1,'VSCP_TYPE_PHONE_INCOMING_CALL'); 
vscp_type_map.set( (100 << 16) + 2,'VSCP_TYPE_PHONE_OUTGOING_CALL'); 
vscp_type_map.set( (100 << 16) + 3,'VSCP_TYPE_PHONE_RING'); 
vscp_type_map.set( (100 << 16) + 4,'VSCP_TYPE_PHONE_ANSWER'); 
vscp_type_map.set( (100 << 16) + 5,'VSCP_TYPE_PHONE_HANGUP'); 
vscp_type_map.set( (100 << 16) + 6,'VSCP_TYPE_PHONE_GIVEUP'); 
vscp_type_map.set( (100 << 16) + 7,'VSCP_TYPE_PHONE_TRANSFER'); 
vscp_type_map.set( (100 << 16) + 8,'VSCP_TYPE_PHONE_DATABASE_INFO'); 
 
//  CLASS1.DISPLAY = 102  -  Display
module.exports.VSCP_TYPE_DISPLAY_GENERAL = 0,
module.exports.VSCP_TYPE_DISPLAY_CLEAR_DISPLAY = 1,
module.exports.VSCP_TYPE_DISPLAY_POSITION_CURSOR = 2,
module.exports.VSCP_TYPE_DISPLAY_WRITE_DISPLAY = 3,
module.exports.VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER = 4,
module.exports.VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER = 5,
module.exports.VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM = 6,
module.exports.VSCP_TYPE_DISPLAY_SHOW_TEXT = 32,
module.exports.VSCP_TYPE_DISPLAY_SHOW_LED = 48,
module.exports.VSCP_TYPE_DISPLAY_SHOW_LED_COLOR = 49;


vscp_type_map.set( (102 << 16) + 0,'VSCP_TYPE_DISPLAY_GENERAL'); 
vscp_type_map.set( (102 << 16) + 1,'VSCP_TYPE_DISPLAY_CLEAR_DISPLAY'); 
vscp_type_map.set( (102 << 16) + 2,'VSCP_TYPE_DISPLAY_POSITION_CURSOR'); 
vscp_type_map.set( (102 << 16) + 3,'VSCP_TYPE_DISPLAY_WRITE_DISPLAY'); 
vscp_type_map.set( (102 << 16) + 4,'VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER'); 
vscp_type_map.set( (102 << 16) + 5,'VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER'); 
vscp_type_map.set( (102 << 16) + 6,'VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM'); 
vscp_type_map.set( (102 << 16) + 32,'VSCP_TYPE_DISPLAY_SHOW_TEXT'); 
vscp_type_map.set( (102 << 16) + 48,'VSCP_TYPE_DISPLAY_SHOW_LED'); 
vscp_type_map.set( (102 << 16) + 49,'VSCP_TYPE_DISPLAY_SHOW_LED_COLOR'); 
 
//  CLASS1.IR = 110  -  IR Remote I/f
module.exports.VSCP_TYPE_REMOTE_GENERAL = 0,
module.exports.VSCP_TYPE_REMOTE_RC5 = 1,
module.exports.VSCP_TYPE_REMOTE_SONY12 = 3,
module.exports.VSCP_TYPE_REMOTE_LIRC = 32,
module.exports.VSCP_TYPE_REMOTE_VSCP = 48,
module.exports.VSCP_TYPE_REMOTE_MAPITO = 49;


vscp_type_map.set( (110 << 16) + 0,'VSCP_TYPE_REMOTE_GENERAL'); 
vscp_type_map.set( (110 << 16) + 1,'VSCP_TYPE_REMOTE_RC5'); 
vscp_type_map.set( (110 << 16) + 3,'VSCP_TYPE_REMOTE_SONY12'); 
vscp_type_map.set( (110 << 16) + 32,'VSCP_TYPE_REMOTE_LIRC'); 
vscp_type_map.set( (110 << 16) + 48,'VSCP_TYPE_REMOTE_VSCP'); 
vscp_type_map.set( (110 << 16) + 49,'VSCP_TYPE_REMOTE_MAPITO'); 
 
//  CLASS1.CONFIGURE = 120  -  Configure
module.exports.VSCP_TYPE_CONFIGURE_GENERAL = 0,
module.exports.VSCP_TYPE_CONFIGURE_LOAD = 1,
module.exports.VSCP_TYPE_CONFIGURE_LOAD_ACK = 2,
module.exports.VSCP_TYPE_CONFIGURE_LOAD_NACK = 3,
module.exports.VSCP_TYPE_CONFIGURE_SAVE = 4,
module.exports.VSCP_TYPE_CONFIGURE_SAVE_ACK = 5,
module.exports.VSCP_TYPE_CONFIGURE_SAVE_NACK = 6,
module.exports.VSCP_TYPE_CONFIGURE_COMMIT = 7,
module.exports.VSCP_TYPE_CONFIGURE_COMMIT_ACK = 8,
module.exports.VSCP_TYPE_CONFIGURE_COMMIT_NACK = 9,
module.exports.VSCP_TYPE_CONFIGURE_RELOAD = 10,
module.exports.VSCP_TYPE_CONFIGURE_REALOD_ACK = 11,
module.exports.VSCP_TYPE_CONFIGURE_RELOAD_NACK = 12,
module.exports.VSCP_TYPE_CONFIGURE_RESTORE = 13,
module.exports.VSCP_TYPE_CONFIGURE_RESTORE_ACK = 14,
module.exports.VSCP_TYPE_CONFIGURE_RESTORE_NACK = 15,
module.exports.VSCP_TYPE_CONFIGURE_SET_PARAMETER = 30,
module.exports.VSCP_TYPE_CONFIGURE_SET_PARAMETER_DEFAULT = 31,
module.exports.VSCP_TYPE_CONFIGURE_SET_PARAMETER_ACK = 32,
module.exports.VSCP_TYPE_CONFIGURE_SET_PARAMETER_NACK = 33;


vscp_type_map.set( (120 << 16) + 0,'VSCP_TYPE_CONFIGURE_GENERAL'); 
vscp_type_map.set( (120 << 16) + 1,'VSCP_TYPE_CONFIGURE_LOAD'); 
vscp_type_map.set( (120 << 16) + 2,'VSCP_TYPE_CONFIGURE_LOAD_ACK'); 
vscp_type_map.set( (120 << 16) + 3,'VSCP_TYPE_CONFIGURE_LOAD_NACK'); 
vscp_type_map.set( (120 << 16) + 4,'VSCP_TYPE_CONFIGURE_SAVE'); 
vscp_type_map.set( (120 << 16) + 5,'VSCP_TYPE_CONFIGURE_SAVE_ACK'); 
vscp_type_map.set( (120 << 16) + 6,'VSCP_TYPE_CONFIGURE_SAVE_NACK'); 
vscp_type_map.set( (120 << 16) + 7,'VSCP_TYPE_CONFIGURE_COMMIT'); 
vscp_type_map.set( (120 << 16) + 8,'VSCP_TYPE_CONFIGURE_COMMIT_ACK'); 
vscp_type_map.set( (120 << 16) + 9,'VSCP_TYPE_CONFIGURE_COMMIT_NACK'); 
vscp_type_map.set( (120 << 16) + 10,'VSCP_TYPE_CONFIGURE_RELOAD'); 
vscp_type_map.set( (120 << 16) + 11,'VSCP_TYPE_CONFIGURE_REALOD_ACK'); 
vscp_type_map.set( (120 << 16) + 12,'VSCP_TYPE_CONFIGURE_RELOAD_NACK'); 
vscp_type_map.set( (120 << 16) + 13,'VSCP_TYPE_CONFIGURE_RESTORE'); 
vscp_type_map.set( (120 << 16) + 14,'VSCP_TYPE_CONFIGURE_RESTORE_ACK'); 
vscp_type_map.set( (120 << 16) + 15,'VSCP_TYPE_CONFIGURE_RESTORE_NACK'); 
vscp_type_map.set( (120 << 16) + 30,'VSCP_TYPE_CONFIGURE_SET_PARAMETER'); 
vscp_type_map.set( (120 << 16) + 31,'VSCP_TYPE_CONFIGURE_SET_PARAMETER_DEFAULT'); 
vscp_type_map.set( (120 << 16) + 32,'VSCP_TYPE_CONFIGURE_SET_PARAMETER_ACK'); 
vscp_type_map.set( (120 << 16) + 33,'VSCP_TYPE_CONFIGURE_SET_PARAMETER_NACK'); 
 
//  CLASS1.GNSS = 206  -  Position (GNSS)
module.exports.VSCP_TYPE_GNSS_GENERAL = 0,
module.exports.VSCP_TYPE_GNSS_POSITION = 1,
module.exports.VSCP_TYPE_GNSS_SATELLITES = 2;


vscp_type_map.set( (206 << 16) + 0,'VSCP_TYPE_GNSS_GENERAL'); 
vscp_type_map.set( (206 << 16) + 1,'VSCP_TYPE_GNSS_POSITION'); 
vscp_type_map.set( (206 << 16) + 2,'VSCP_TYPE_GNSS_SATELLITES'); 
 
//  CLASS1.WIRELESS = 212  -  Wireless
module.exports.VSCP_TYPE_WIRELESS_GENERAL = 0,
module.exports.VSCP_TYPE_WIRELESS_GSM_CELL = 1;


vscp_type_map.set( (212 << 16) + 0,'VSCP_TYPE_WIRELESS_GENERAL'); 
vscp_type_map.set( (212 << 16) + 1,'VSCP_TYPE_WIRELESS_GSM_CELL'); 
 
//  CLASS1.DIAGNOSTIC = 506  -  Diagnostic
module.exports.VSCP_TYPE_DIAGNOSTIC_GENERAL = 0,
module.exports.VSCP_TYPE_DIAGNOSTIC_OVERVOLTAGE = 1,
module.exports.VSCP_TYPE_DIAGNOSTIC_UNDERVOLTAGE = 2,
module.exports.VSCP_TYPE_DIAGNOSTIC_VBUS_LOW = 3,
module.exports.VSCP_TYPE_DIAGNOSTIC_BATTERY_LOW = 4,
module.exports.VSCP_TYPE_DIAGNOSTIC_BATTERY_FULL = 5,
module.exports.VSCP_TYPE_DIAGNOSTIC_BATTERY_ERROR = 6,
module.exports.VSCP_TYPE_DIAGNOSTIC_BATTERY_OK = 7,
module.exports.VSCP_TYPE_DIAGNOSTIC_OVERCURRENT = 8,
module.exports.VSCP_TYPE_DIAGNOSTIC_CIRCUIT_ERROR = 9,
module.exports.VSCP_TYPE_DIAGNOSTIC_SHORT_CIRCUIT = 10,
module.exports.VSCP_TYPE_DIAGNOSTIC_OPEN_CIRCUIT = 11,
module.exports.VSCP_TYPE_DIAGNOSTIC_MOIST = 12,
module.exports.VSCP_TYPE_DIAGNOSTIC_WIRE_FAIL = 13,
module.exports.VSCP_TYPE_DIAGNOSTIC_WIRELESS_FAIL = 14,
module.exports.VSCP_TYPE_DIAGNOSTIC_IR_FAIL = 15,
module.exports.VSCP_TYPE_DIAGNOSTIC_1WIRE_FAIL = 16,
module.exports.VSCP_TYPE_DIAGNOSTIC_RS222_FAIL = 17,
module.exports.VSCP_TYPE_DIAGNOSTIC_RS232_FAIL = 18,
module.exports.VSCP_TYPE_DIAGNOSTIC_RS423_FAIL = 19,
module.exports.VSCP_TYPE_DIAGNOSTIC_RS485_FAIL = 20,
module.exports.VSCP_TYPE_DIAGNOSTIC_CAN_FAIL = 21,
module.exports.VSCP_TYPE_DIAGNOSTIC_LAN_FAIL = 22,
module.exports.VSCP_TYPE_DIAGNOSTIC_USB_FAIL = 23,
module.exports.VSCP_TYPE_DIAGNOSTIC_WIFI_FAIL = 24,
module.exports.VSCP_TYPE_DIAGNOSTIC_NFC_RFID_FAIL = 25,
module.exports.VSCP_TYPE_DIAGNOSTIC_LOW_SIGNAL = 26,
module.exports.VSCP_TYPE_DIAGNOSTIC_HIGH_SIGNAL = 27,
module.exports.VSCP_TYPE_DIAGNOSTIC_ADC_FAIL = 28,
module.exports.VSCP_TYPE_DIAGNOSTIC_ALU_FAIL = 29,
module.exports.VSCP_TYPE_DIAGNOSTIC_ASSERT = 30,
module.exports.VSCP_TYPE_DIAGNOSTIC_DAC_FAIL = 31,
module.exports.VSCP_TYPE_DIAGNOSTIC_DMA_FAIL = 32,
module.exports.VSCP_TYPE_DIAGNOSTIC_ETH_FAIL = 33,
module.exports.VSCP_TYPE_DIAGNOSTIC_EXCEPTION = 34,
module.exports.VSCP_TYPE_DIAGNOSTIC_FPU_FAIL = 35,
module.exports.VSCP_TYPE_DIAGNOSTIC_GPIO_FAIL = 36,
module.exports.VSCP_TYPE_DIAGNOSTIC_I2C_FAIL = 37,
module.exports.VSCP_TYPE_DIAGNOSTIC_I2S_FAIL = 38,
module.exports.VSCP_TYPE_DIAGNOSTIC_INVALID_CONFIG = 39,
module.exports.VSCP_TYPE_DIAGNOSTIC_MMU_FAIL = 40,
module.exports.VSCP_TYPE_DIAGNOSTIC_NMI = 41,
module.exports.VSCP_TYPE_DIAGNOSTIC_OVERHEAT = 42,
module.exports.VSCP_TYPE_DIAGNOSTIC_PLL_FAIL = 43,
module.exports.VSCP_TYPE_DIAGNOSTIC_POR_FAIL = 44,
module.exports.VSCP_TYPE_DIAGNOSTIC_PWM_FAIL = 45,
module.exports.VSCP_TYPE_DIAGNOSTIC_RAM_FAIL = 46,
module.exports.VSCP_TYPE_DIAGNOSTIC_ROM_FAIL = 47,
module.exports.VSCP_TYPE_DIAGNOSTIC_SPI_FAIL = 48,
module.exports.VSCP_TYPE_DIAGNOSTIC_STACK_FAIL = 49,
module.exports.VSCP_TYPE_DIAGNOSTIC_LIN_FAIL = 50,
module.exports.VSCP_TYPE_DIAGNOSTIC_UART_FAIL = 51,
module.exports.VSCP_TYPE_DIAGNOSTIC_UNHANDLED_INT = 52,
module.exports.VSCP_TYPE_DIAGNOSTIC_MEMORY_FAIL = 53,
module.exports.VSCP_TYPE_DIAGNOSTIC_VARIABLE_RANGE = 54,
module.exports.VSCP_TYPE_DIAGNOSTIC_WDT = 55,
module.exports.VSCP_TYPE_DIAGNOSTIC_EEPROM_FAIL = 56,
module.exports.VSCP_TYPE_DIAGNOSTIC_ENCRYPTION_FAIL = 57,
module.exports.VSCP_TYPE_DIAGNOSTIC_BAD_USER_INPUT = 58,
module.exports.VSCP_TYPE_DIAGNOSTIC_DECRYPTION_FAIL = 59,
module.exports.VSCP_TYPE_DIAGNOSTIC_NOISE = 60,
module.exports.VSCP_TYPE_DIAGNOSTIC_BOOTLOADER_FAIL = 61,
module.exports.VSCP_TYPE_DIAGNOSTIC_PROGRAMFLOW_FAIL = 62,
module.exports.VSCP_TYPE_DIAGNOSTIC_RTC_FAIL = 63,
module.exports.VSCP_TYPE_DIAGNOSTIC_SYSTEM_TEST_FAIL = 64,
module.exports.VSCP_TYPE_DIAGNOSTIC_SENSOR_FAIL = 65,
module.exports.VSCP_TYPE_DIAGNOSTIC_SAFESTATE = 66,
module.exports.VSCP_TYPE_DIAGNOSTIC_SIGNAL_IMPLAUSIBLE = 67,
module.exports.VSCP_TYPE_DIAGNOSTIC_STORAGE_FAIL = 68,
module.exports.VSCP_TYPE_DIAGNOSTIC_SELFTEST_FAIL = 69,
module.exports.VSCP_TYPE_DIAGNOSTIC_ESD_EMC_EMI = 70,
module.exports.VSCP_TYPE_DIAGNOSTIC_TIMEOUT = 71,
module.exports.VSCP_TYPE_DIAGNOSTIC_LCD_FAIL = 72,
module.exports.VSCP_TYPE_DIAGNOSTIC_TOUCHPANEL_FAIL = 73,
module.exports.VSCP_TYPE_DIAGNOSTIC_NOLOAD = 74,
module.exports.VSCP_TYPE_DIAGNOSTIC_COOLING_FAIL = 75,
module.exports.VSCP_TYPE_DIAGNOSTIC_HEATING_FAIL = 76,
module.exports.VSCP_TYPE_DIAGNOSTIC_TX_FAIL = 77,
module.exports.VSCP_TYPE_DIAGNOSTIC_RX_FAIL = 78,
module.exports.VSCP_TYPE_DIAGNOSTIC_EXT_IC_FAIL = 79;


vscp_type_map.set( (506 << 16) + 0,'VSCP_TYPE_DIAGNOSTIC_GENERAL'); 
vscp_type_map.set( (506 << 16) + 1,'VSCP_TYPE_DIAGNOSTIC_OVERVOLTAGE'); 
vscp_type_map.set( (506 << 16) + 2,'VSCP_TYPE_DIAGNOSTIC_UNDERVOLTAGE'); 
vscp_type_map.set( (506 << 16) + 3,'VSCP_TYPE_DIAGNOSTIC_VBUS_LOW'); 
vscp_type_map.set( (506 << 16) + 4,'VSCP_TYPE_DIAGNOSTIC_BATTERY_LOW'); 
vscp_type_map.set( (506 << 16) + 5,'VSCP_TYPE_DIAGNOSTIC_BATTERY_FULL'); 
vscp_type_map.set( (506 << 16) + 6,'VSCP_TYPE_DIAGNOSTIC_BATTERY_ERROR'); 
vscp_type_map.set( (506 << 16) + 7,'VSCP_TYPE_DIAGNOSTIC_BATTERY_OK'); 
vscp_type_map.set( (506 << 16) + 8,'VSCP_TYPE_DIAGNOSTIC_OVERCURRENT'); 
vscp_type_map.set( (506 << 16) + 9,'VSCP_TYPE_DIAGNOSTIC_CIRCUIT_ERROR'); 
vscp_type_map.set( (506 << 16) + 10,'VSCP_TYPE_DIAGNOSTIC_SHORT_CIRCUIT'); 
vscp_type_map.set( (506 << 16) + 11,'VSCP_TYPE_DIAGNOSTIC_OPEN_CIRCUIT'); 
vscp_type_map.set( (506 << 16) + 12,'VSCP_TYPE_DIAGNOSTIC_MOIST'); 
vscp_type_map.set( (506 << 16) + 13,'VSCP_TYPE_DIAGNOSTIC_WIRE_FAIL'); 
vscp_type_map.set( (506 << 16) + 14,'VSCP_TYPE_DIAGNOSTIC_WIRELESS_FAIL'); 
vscp_type_map.set( (506 << 16) + 15,'VSCP_TYPE_DIAGNOSTIC_IR_FAIL'); 
vscp_type_map.set( (506 << 16) + 16,'VSCP_TYPE_DIAGNOSTIC_1WIRE_FAIL'); 
vscp_type_map.set( (506 << 16) + 17,'VSCP_TYPE_DIAGNOSTIC_RS222_FAIL'); 
vscp_type_map.set( (506 << 16) + 18,'VSCP_TYPE_DIAGNOSTIC_RS232_FAIL'); 
vscp_type_map.set( (506 << 16) + 19,'VSCP_TYPE_DIAGNOSTIC_RS423_FAIL'); 
vscp_type_map.set( (506 << 16) + 20,'VSCP_TYPE_DIAGNOSTIC_RS485_FAIL'); 
vscp_type_map.set( (506 << 16) + 21,'VSCP_TYPE_DIAGNOSTIC_CAN_FAIL'); 
vscp_type_map.set( (506 << 16) + 22,'VSCP_TYPE_DIAGNOSTIC_LAN_FAIL'); 
vscp_type_map.set( (506 << 16) + 23,'VSCP_TYPE_DIAGNOSTIC_USB_FAIL'); 
vscp_type_map.set( (506 << 16) + 24,'VSCP_TYPE_DIAGNOSTIC_WIFI_FAIL'); 
vscp_type_map.set( (506 << 16) + 25,'VSCP_TYPE_DIAGNOSTIC_NFC_RFID_FAIL'); 
vscp_type_map.set( (506 << 16) + 26,'VSCP_TYPE_DIAGNOSTIC_LOW_SIGNAL'); 
vscp_type_map.set( (506 << 16) + 27,'VSCP_TYPE_DIAGNOSTIC_HIGH_SIGNAL'); 
vscp_type_map.set( (506 << 16) + 28,'VSCP_TYPE_DIAGNOSTIC_ADC_FAIL'); 
vscp_type_map.set( (506 << 16) + 29,'VSCP_TYPE_DIAGNOSTIC_ALU_FAIL'); 
vscp_type_map.set( (506 << 16) + 30,'VSCP_TYPE_DIAGNOSTIC_ASSERT'); 
vscp_type_map.set( (506 << 16) + 31,'VSCP_TYPE_DIAGNOSTIC_DAC_FAIL'); 
vscp_type_map.set( (506 << 16) + 32,'VSCP_TYPE_DIAGNOSTIC_DMA_FAIL'); 
vscp_type_map.set( (506 << 16) + 33,'VSCP_TYPE_DIAGNOSTIC_ETH_FAIL'); 
vscp_type_map.set( (506 << 16) + 34,'VSCP_TYPE_DIAGNOSTIC_EXCEPTION'); 
vscp_type_map.set( (506 << 16) + 35,'VSCP_TYPE_DIAGNOSTIC_FPU_FAIL'); 
vscp_type_map.set( (506 << 16) + 36,'VSCP_TYPE_DIAGNOSTIC_GPIO_FAIL'); 
vscp_type_map.set( (506 << 16) + 37,'VSCP_TYPE_DIAGNOSTIC_I2C_FAIL'); 
vscp_type_map.set( (506 << 16) + 38,'VSCP_TYPE_DIAGNOSTIC_I2S_FAIL'); 
vscp_type_map.set( (506 << 16) + 39,'VSCP_TYPE_DIAGNOSTIC_INVALID_CONFIG'); 
vscp_type_map.set( (506 << 16) + 40,'VSCP_TYPE_DIAGNOSTIC_MMU_FAIL'); 
vscp_type_map.set( (506 << 16) + 41,'VSCP_TYPE_DIAGNOSTIC_NMI'); 
vscp_type_map.set( (506 << 16) + 42,'VSCP_TYPE_DIAGNOSTIC_OVERHEAT'); 
vscp_type_map.set( (506 << 16) + 43,'VSCP_TYPE_DIAGNOSTIC_PLL_FAIL'); 
vscp_type_map.set( (506 << 16) + 44,'VSCP_TYPE_DIAGNOSTIC_POR_FAIL'); 
vscp_type_map.set( (506 << 16) + 45,'VSCP_TYPE_DIAGNOSTIC_PWM_FAIL'); 
vscp_type_map.set( (506 << 16) + 46,'VSCP_TYPE_DIAGNOSTIC_RAM_FAIL'); 
vscp_type_map.set( (506 << 16) + 47,'VSCP_TYPE_DIAGNOSTIC_ROM_FAIL'); 
vscp_type_map.set( (506 << 16) + 48,'VSCP_TYPE_DIAGNOSTIC_SPI_FAIL'); 
vscp_type_map.set( (506 << 16) + 49,'VSCP_TYPE_DIAGNOSTIC_STACK_FAIL'); 
vscp_type_map.set( (506 << 16) + 50,'VSCP_TYPE_DIAGNOSTIC_LIN_FAIL'); 
vscp_type_map.set( (506 << 16) + 51,'VSCP_TYPE_DIAGNOSTIC_UART_FAIL'); 
vscp_type_map.set( (506 << 16) + 52,'VSCP_TYPE_DIAGNOSTIC_UNHANDLED_INT'); 
vscp_type_map.set( (506 << 16) + 53,'VSCP_TYPE_DIAGNOSTIC_MEMORY_FAIL'); 
vscp_type_map.set( (506 << 16) + 54,'VSCP_TYPE_DIAGNOSTIC_VARIABLE_RANGE'); 
vscp_type_map.set( (506 << 16) + 55,'VSCP_TYPE_DIAGNOSTIC_WDT'); 
vscp_type_map.set( (506 << 16) + 56,'VSCP_TYPE_DIAGNOSTIC_EEPROM_FAIL'); 
vscp_type_map.set( (506 << 16) + 57,'VSCP_TYPE_DIAGNOSTIC_ENCRYPTION_FAIL'); 
vscp_type_map.set( (506 << 16) + 58,'VSCP_TYPE_DIAGNOSTIC_BAD_USER_INPUT'); 
vscp_type_map.set( (506 << 16) + 59,'VSCP_TYPE_DIAGNOSTIC_DECRYPTION_FAIL'); 
vscp_type_map.set( (506 << 16) + 60,'VSCP_TYPE_DIAGNOSTIC_NOISE'); 
vscp_type_map.set( (506 << 16) + 61,'VSCP_TYPE_DIAGNOSTIC_BOOTLOADER_FAIL'); 
vscp_type_map.set( (506 << 16) + 62,'VSCP_TYPE_DIAGNOSTIC_PROGRAMFLOW_FAIL'); 
vscp_type_map.set( (506 << 16) + 63,'VSCP_TYPE_DIAGNOSTIC_RTC_FAIL'); 
vscp_type_map.set( (506 << 16) + 64,'VSCP_TYPE_DIAGNOSTIC_SYSTEM_TEST_FAIL'); 
vscp_type_map.set( (506 << 16) + 65,'VSCP_TYPE_DIAGNOSTIC_SENSOR_FAIL'); 
vscp_type_map.set( (506 << 16) + 66,'VSCP_TYPE_DIAGNOSTIC_SAFESTATE'); 
vscp_type_map.set( (506 << 16) + 67,'VSCP_TYPE_DIAGNOSTIC_SIGNAL_IMPLAUSIBLE'); 
vscp_type_map.set( (506 << 16) + 68,'VSCP_TYPE_DIAGNOSTIC_STORAGE_FAIL'); 
vscp_type_map.set( (506 << 16) + 69,'VSCP_TYPE_DIAGNOSTIC_SELFTEST_FAIL'); 
vscp_type_map.set( (506 << 16) + 70,'VSCP_TYPE_DIAGNOSTIC_ESD_EMC_EMI'); 
vscp_type_map.set( (506 << 16) + 71,'VSCP_TYPE_DIAGNOSTIC_TIMEOUT'); 
vscp_type_map.set( (506 << 16) + 72,'VSCP_TYPE_DIAGNOSTIC_LCD_FAIL'); 
vscp_type_map.set( (506 << 16) + 73,'VSCP_TYPE_DIAGNOSTIC_TOUCHPANEL_FAIL'); 
vscp_type_map.set( (506 << 16) + 74,'VSCP_TYPE_DIAGNOSTIC_NOLOAD'); 
vscp_type_map.set( (506 << 16) + 75,'VSCP_TYPE_DIAGNOSTIC_COOLING_FAIL'); 
vscp_type_map.set( (506 << 16) + 76,'VSCP_TYPE_DIAGNOSTIC_HEATING_FAIL'); 
vscp_type_map.set( (506 << 16) + 77,'VSCP_TYPE_DIAGNOSTIC_TX_FAIL'); 
vscp_type_map.set( (506 << 16) + 78,'VSCP_TYPE_DIAGNOSTIC_RX_FAIL'); 
vscp_type_map.set( (506 << 16) + 79,'VSCP_TYPE_DIAGNOSTIC_EXT_IC_FAIL'); 
 
//  CLASS1.ERROR = 508  -  Error
module.exports.VSCP_TYPE_ERROR_SUCCESS = 0,
module.exports.VSCP_TYPE_ERROR_ERROR = 1,
module.exports.VSCP_TYPE_ERROR_CHANNEL = 7,
module.exports.VSCP_TYPE_ERROR_FIFO_EMPTY = 8,
module.exports.VSCP_TYPE_ERROR_FIFO_FULL = 9,
module.exports.VSCP_TYPE_ERROR_FIFO_SIZE = 10,
module.exports.VSCP_TYPE_ERROR_FIFO_WAIT = 11,
module.exports.VSCP_TYPE_ERROR_GENERIC = 12,
module.exports.VSCP_TYPE_ERROR_HARDWARE = 13,
module.exports.VSCP_TYPE_ERROR_INIT_FAIL = 14,
module.exports.VSCP_TYPE_ERROR_INIT_MISSING = 15,
module.exports.VSCP_TYPE_ERROR_INIT_READY = 16,
module.exports.VSCP_TYPE_ERROR_NOT_SUPPORTED = 17,
module.exports.VSCP_TYPE_ERROR_OVERRUN = 18,
module.exports.VSCP_TYPE_ERROR_RCV_EMPTY = 19,
module.exports.VSCP_TYPE_ERROR_REGISTER = 20,
module.exports.VSCP_TYPE_ERROR_TRM_FULL = 21,
module.exports.VSCP_TYPE_ERROR_LIBRARY = 28,
module.exports.VSCP_TYPE_ERROR_PROCADDRESS = 29,
module.exports.VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE = 30,
module.exports.VSCP_TYPE_ERROR_SUB_DRIVER = 31,
module.exports.VSCP_TYPE_ERROR_TIMEOUT = 32,
module.exports.VSCP_TYPE_ERROR_NOT_OPEN = 33,
module.exports.VSCP_TYPE_ERROR_PARAMETER = 34,
module.exports.VSCP_TYPE_ERROR_MEMORY = 35,
module.exports.VSCP_TYPE_ERROR_INTERNAL = 36,
module.exports.VSCP_TYPE_ERROR_COMMUNICATION = 37,
module.exports.VSCP_TYPE_ERROR_USER = 38,
module.exports.VSCP_TYPE_ERROR_PASSWORD = 39,
module.exports.VSCP_TYPE_ERROR_CONNECTION = 40,
module.exports.VSCP_TYPE_ERROR_INVALID_HANDLE = 41,
module.exports.VSCP_TYPE_ERROR_OPERATION_FAILED = 42,
module.exports.VSCP_TYPE_ERROR_BUFFER_SMALL = 43,
module.exports.VSCP_TYPE_ERROR_ITEM_UNKNOWN = 44,
module.exports.VSCP_TYPE_ERROR_NAME_USED = 45,
module.exports.VSCP_TYPE_ERROR_DATA_WRITE = 46,
module.exports.VSCP_TYPE_ERROR_ABORTED = 47,
module.exports.VSCP_TYPE_ERROR_INVALID_POINTER = 48;


vscp_type_map.set( (508 << 16) + 0,'VSCP_TYPE_ERROR_SUCCESS'); 
vscp_type_map.set( (508 << 16) + 1,'VSCP_TYPE_ERROR_ERROR'); 
vscp_type_map.set( (508 << 16) + 7,'VSCP_TYPE_ERROR_CHANNEL'); 
vscp_type_map.set( (508 << 16) + 8,'VSCP_TYPE_ERROR_FIFO_EMPTY'); 
vscp_type_map.set( (508 << 16) + 9,'VSCP_TYPE_ERROR_FIFO_FULL'); 
vscp_type_map.set( (508 << 16) + 10,'VSCP_TYPE_ERROR_FIFO_SIZE'); 
vscp_type_map.set( (508 << 16) + 11,'VSCP_TYPE_ERROR_FIFO_WAIT'); 
vscp_type_map.set( (508 << 16) + 12,'VSCP_TYPE_ERROR_GENERIC'); 
vscp_type_map.set( (508 << 16) + 13,'VSCP_TYPE_ERROR_HARDWARE'); 
vscp_type_map.set( (508 << 16) + 14,'VSCP_TYPE_ERROR_INIT_FAIL'); 
vscp_type_map.set( (508 << 16) + 15,'VSCP_TYPE_ERROR_INIT_MISSING'); 
vscp_type_map.set( (508 << 16) + 16,'VSCP_TYPE_ERROR_INIT_READY'); 
vscp_type_map.set( (508 << 16) + 17,'VSCP_TYPE_ERROR_NOT_SUPPORTED'); 
vscp_type_map.set( (508 << 16) + 18,'VSCP_TYPE_ERROR_OVERRUN'); 
vscp_type_map.set( (508 << 16) + 19,'VSCP_TYPE_ERROR_RCV_EMPTY'); 
vscp_type_map.set( (508 << 16) + 20,'VSCP_TYPE_ERROR_REGISTER'); 
vscp_type_map.set( (508 << 16) + 21,'VSCP_TYPE_ERROR_TRM_FULL'); 
vscp_type_map.set( (508 << 16) + 28,'VSCP_TYPE_ERROR_LIBRARY'); 
vscp_type_map.set( (508 << 16) + 29,'VSCP_TYPE_ERROR_PROCADDRESS'); 
vscp_type_map.set( (508 << 16) + 30,'VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE'); 
vscp_type_map.set( (508 << 16) + 31,'VSCP_TYPE_ERROR_SUB_DRIVER'); 
vscp_type_map.set( (508 << 16) + 32,'VSCP_TYPE_ERROR_TIMEOUT'); 
vscp_type_map.set( (508 << 16) + 33,'VSCP_TYPE_ERROR_NOT_OPEN'); 
vscp_type_map.set( (508 << 16) + 34,'VSCP_TYPE_ERROR_PARAMETER'); 
vscp_type_map.set( (508 << 16) + 35,'VSCP_TYPE_ERROR_MEMORY'); 
vscp_type_map.set( (508 << 16) + 36,'VSCP_TYPE_ERROR_INTERNAL'); 
vscp_type_map.set( (508 << 16) + 37,'VSCP_TYPE_ERROR_COMMUNICATION'); 
vscp_type_map.set( (508 << 16) + 38,'VSCP_TYPE_ERROR_USER'); 
vscp_type_map.set( (508 << 16) + 39,'VSCP_TYPE_ERROR_PASSWORD'); 
vscp_type_map.set( (508 << 16) + 40,'VSCP_TYPE_ERROR_CONNECTION'); 
vscp_type_map.set( (508 << 16) + 41,'VSCP_TYPE_ERROR_INVALID_HANDLE'); 
vscp_type_map.set( (508 << 16) + 42,'VSCP_TYPE_ERROR_OPERATION_FAILED'); 
vscp_type_map.set( (508 << 16) + 43,'VSCP_TYPE_ERROR_BUFFER_SMALL'); 
vscp_type_map.set( (508 << 16) + 44,'VSCP_TYPE_ERROR_ITEM_UNKNOWN'); 
vscp_type_map.set( (508 << 16) + 45,'VSCP_TYPE_ERROR_NAME_USED'); 
vscp_type_map.set( (508 << 16) + 46,'VSCP_TYPE_ERROR_DATA_WRITE'); 
vscp_type_map.set( (508 << 16) + 47,'VSCP_TYPE_ERROR_ABORTED'); 
vscp_type_map.set( (508 << 16) + 48,'VSCP_TYPE_ERROR_INVALID_POINTER'); 
 
//  CLASS1.LOG = 509  -  Logging
module.exports.VSCP_TYPE_LOG_GENERAL = 0,
module.exports.VSCP_TYPE_LOG_MESSAGE = 1,
module.exports.VSCP_TYPE_LOG_START = 2,
module.exports.VSCP_TYPE_LOG_STOP = 3,
module.exports.VSCP_TYPE_LOG_LEVEL = 4;


vscp_type_map.set( (509 << 16) + 0,'VSCP_TYPE_LOG_GENERAL'); 
vscp_type_map.set( (509 << 16) + 1,'VSCP_TYPE_LOG_MESSAGE'); 
vscp_type_map.set( (509 << 16) + 2,'VSCP_TYPE_LOG_START'); 
vscp_type_map.set( (509 << 16) + 3,'VSCP_TYPE_LOG_STOP'); 
vscp_type_map.set( (509 << 16) + 4,'VSCP_TYPE_LOG_LEVEL'); 
 
//  CLASS1.LABORATORY = 510  -  Laboratory use
module.exports.VSCP_TYPE_LABORATORY_GENERAL = 0;


vscp_type_map.set( (510 << 16) + 0,'VSCP_TYPE_LABORATORY_GENERAL'); 
 
//  CLASS1.LOCAL = 511  -  Local use
module.exports.VSCP_TYPE_LOCAL_GENERAL = 0;


vscp_type_map.set( (511 << 16) + 0,'VSCP_TYPE_LOCAL_GENERAL'); 
 
//  CLASS2.LEVEL1.PROTOCOL = 512  -  Class2 Level I Protocol
// Event types is the same as  CLASS1.PROTOCOL = 0  -  VSCP Protocol Functionality
 
//  CLASS2.LEVEL1.ALARM = 513  -  Class2 Level I Alarm
// Event types is the same as  CLASS1.ALARM = 1  -  Alarm functionality
 
//  CLASS2.LEVEL1.SECURITY = 514  -  Class2 Level I Security
// Event types is the same as  CLASS1.SECURITY = 2  -  Security
 
//  CLASS2.LEVEL1.MEASUREMENT = 522  -  Class2 Level I Measurements
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENTX1 = 523  -  Class2 Level I Measurements
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENTX2 = 524  -  Class2 Level I Measurements
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENTX3 = 525  -  Class2 Level I Measurements
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENTX4 = 526  -  Class2 Level I Measurements
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS2.LEVEL1.DATA = 527  -  Class2 Level I Data
// Event types is the same as  CLASS1.DATA = 15  -  Data
 
//  CLASS2.LEVEL1.INFORMATION1 = 532  -  Class2 Level I Information
// Event types is the same as  CLASS1.INFORMATION = 20  -  Information
 
//  CLASS2.LEVEL1.CONTROL = 542  -  Class2 Level I Control
// Event types is the same as  CLASS1.CONTROL = 30  -  Control
 
//  CLASS2.LEVEL1.MULTIMEDIA = 552  -  Class2 Level I Multimedia
// Event types is the same as  CLASS1.MULTIMEDIA = 40  -  Multimedia
 
//  CLASS2.LEVEL1.AOL = 562  -  Class2 Level I AOL
// Event types is the same as  CLASS1.AOL = 50  -  Alert On LAN
 
//  CLASS2.LEVEL1.MEASUREMENT64 = 572  -  Class2 Level I Measurement64
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT64X1 = 573  -  Class2 Level I Measurement64
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT64X2 = 574  -  Class2 Level I Measurement64
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT64X3 = 575  -  Class2 Level I Measurement64
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT64X4 = 576  -  Class2 Level I Measurement64
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREZONE = 577  -  Class2 Level I Measurementzone
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREZONEX1 = 578  -  Class2 Level I Measurementzone
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREZONEX2 = 579  -  Class2 Level I Measurementzone
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREZONEX3 = 580  -  Class2 Level I Measurementzone
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREZONEX4 = 581  -  Class2 Level I Measurementzone
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT32 = 582  -  Class2 Level I Measuremet32
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT32X1 = 583  -  Class2 Level I Measuremet32
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT32X2 = 584  -  Class2 Level I Measuremet32
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT32X3 = 585  -  Class2 Level I Measuremet32
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT32X4 = 586  -  Class2 Level I Measuremet32
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS2.LEVEL1.SETVALUEZONE = 597  -  Class2 Level I SetValueZone
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.SETVALUEZONEX1 = 598  -  Class2 Level I SetValueZone
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS2.LEVEL1.SETVALUEZONEX2 = 599  -  Class2 Level I SetValueZone
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS2.LEVEL1.SETVALUEZONEX3 = 600  -  Class2 Level I SetValueZone
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS2.LEVEL1.SETVALUEZONEX4 = 601  -  Class2 Level I SetValueZone
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS2.LEVEL1.WEATHER = 602  -  Class2 Level I Weather
// Event types is the same as  CLASS1.WEATHER = 90  -  Weather
 
//  CLASS2.LEVEL1.WEATHERFORECAST = 607  -  Class2 Level I Weather Forecast
// Event types is the same as  CLASS1.WEATHER = 90  -  Weather
 
//  CLASS2.LEVEL1.PHONE = 612  -  Class2 Level I Phone
// Event types is the same as  CLASS1.PHONE = 100  -  Phone
 
//  CLASS2.LEVEL1.DISPLAY = 614  -  Class2 Level I Display
// Event types is the same as  CLASS1.DISPLAY = 102  -  Display
 
//  CLASS2.LEVEL1.IR = 622  -  Class2 Level I IR
// Event types is the same as  CLASS1.IR = 110  -  IR Remote I/f
 
//  CLASS2.LEVEL1.GNSS = 718  -  Class2 Level I GNSS
// Event types is the same as  CLASS1.GNSS = 206  -  Position (GNSS)
 
//  CLASS2.LEVEL1.WIRELESS = 724  -  Class2 Level I Wireless
// Event types is the same as  CLASS1.WIRELESS = 212  -  Wireless
 
//  CLASS2.LEVEL1.DIAGNOSTIC = 1018  -  Class2 Level I Diagnostic
// Event types is the same as  CLASS1.DIAGNOSTIC = 506  -  Diagnostic
 
//  CLASS2.LEVEL1.ERROR = 1020  -  Class2 Level I Error
// Event types is the same as  CLASS1.ERROR = 508  -  Error
 
//  CLASS2.LEVEL1.LOG = 1021  -  Class2 Level I Log
// Event types is the same as  CLASS1.LOG = 509  -  Logging
 
//  CLASS2.LEVEL1.LABORATORY = 1022  -  Class2 Level I Laboratory
// Event types is the same as  CLASS1.LABORATORY = 510  -  Laboratory use
 
//  CLASS2.LEVEL1.LOCAL = 1023  -  Class2 Level I Local
// Event types is the same as  CLASS1.LOCAL = 511  -  Local use
 
//  CLASS2.PROTOCOL = 1024  -  Level II Protocol Functionality
module.exports.VSCP2_TYPE_PROTOCOL_GENERAL = 0,
module.exports.VSCP2_TYPE_PROTOCOL_READ_REGISTER = 1,
module.exports.VSCP2_TYPE_PROTOCOL_WRITE_REGISTER = 2,
module.exports.VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE = 3,
module.exports.VSCP2_TYPE_PROTOCOL_HIGH_END_SERVER_CAPS = 20,
module.exports.VSCP2_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE = 32;


vscp_type_map.set( (1024 << 16) + 0,'VSCP2_TYPE_PROTOCOL_GENERAL'); 
vscp_type_map.set( (1024 << 16) + 1,'VSCP2_TYPE_PROTOCOL_READ_REGISTER'); 
vscp_type_map.set( (1024 << 16) + 2,'VSCP2_TYPE_PROTOCOL_WRITE_REGISTER'); 
vscp_type_map.set( (1024 << 16) + 3,'VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE'); 
vscp_type_map.set( (1024 << 16) + 20,'VSCP2_TYPE_PROTOCOL_HIGH_END_SERVER_CAPS'); 
vscp_type_map.set( (1024 << 16) + 32,'VSCP2_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE'); 
 
//  CLASS2.CONTROL = 1025  -  Level II Control
module.exports.VSCP2_TYPE_CONTROL_GENERAL = 0;


vscp_type_map.set( (1025 << 16) + 0,'VSCP2_TYPE_CONTROL_GENERAL'); 
 
//  CLASS2.INFORMATION = 1026  -  Level II Information
module.exports.VSCP2_TYPE_INFORMATION_GENERAL = 0,
module.exports.VSCP2_TYPE_INFORMATION_TOKEN_ACTIVITY = 1,
module.exports.VSCP2_TYPE_INFORMATION_HEART_BEAT = 2,
module.exports.VSCP2_TYPE_INFORMATION_PROXY_HEART_BEAT = 3,
module.exports.VSCP2_TYPE_INFORMATION_CHANNEL_ANNOUNCE = 4;


vscp_type_map.set( (1026 << 16) + 0,'VSCP2_TYPE_INFORMATION_GENERAL'); 
vscp_type_map.set( (1026 << 16) + 1,'VSCP2_TYPE_INFORMATION_TOKEN_ACTIVITY'); 
vscp_type_map.set( (1026 << 16) + 2,'VSCP2_TYPE_INFORMATION_HEART_BEAT'); 
vscp_type_map.set( (1026 << 16) + 3,'VSCP2_TYPE_INFORMATION_PROXY_HEART_BEAT'); 
vscp_type_map.set( (1026 << 16) + 4,'VSCP2_TYPE_INFORMATION_CHANNEL_ANNOUNCE'); 
 
//  CLASS2.TEXT2SPEECH = 1027  -  Text to speech
module.exports.VSCP2_TYPE_TEXT2SPEECH_GENERAL = 0,
module.exports.VSCP2_TYPE_TEXT2SPEECH_TALK = 1;


vscp_type_map.set( (1027 << 16) + 0,'VSCP2_TYPE_TEXT2SPEECH_GENERAL'); 
vscp_type_map.set( (1027 << 16) + 1,'VSCP2_TYPE_TEXT2SPEECH_TALK'); 
 
//  CLASS2.HLO = 1028  -  High Level Object
module.exports.VSCP2_TYPE_HLO_GENERAL = 0,
module.exports.VSCP2_TYPE_HLO_COMMAND = 1,
module.exports.VSCP2_TYPE_HLO_RESPONSE = 2;


vscp_type_map.set( (1028 << 16) + 0,'VSCP2_TYPE_HLO_GENERAL'); 
vscp_type_map.set( (1028 << 16) + 1,'VSCP2_TYPE_HLO_COMMAND'); 
vscp_type_map.set( (1028 << 16) + 2,'VSCP2_TYPE_HLO_RESPONSE'); 
 
//  CLASS2.CUSTOM = 1029  -  Level II Custom
module.exports.VSCP2_TYPE_CUSTOM_GENERAL = 0;


vscp_type_map.set( (1029 << 16) + 0,'VSCP2_TYPE_CUSTOM_GENERAL'); 
 
//  CLASS2.DISPLAY = 1030  -  Level II Display
module.exports.VSCP2_TYPE_DISPLAY_GENERAL = 0;


vscp_type_map.set( (1030 << 16) + 0,'VSCP2_TYPE_DISPLAY_GENERAL'); 
 
//  CLASS2.MEASUREMENT_STR = 1040  -  Measurement string
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.MEASUREMENT_FLOAT = 1060  -  Measurement float
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.VSCPD = 65535  -  VSCP Daemon internal events
module.exports.VSCP2_TYPE_VSCPD_GENERAL = 0,
module.exports.VSCP2_TYPE_VSCPD_LOOP = 1,
module.exports.VSCP2_TYPE_VSCPD_PAUSE = 3,
module.exports.VSCP2_TYPE_VSCPD_ACTIVATE = 4,
module.exports.VSCP2_TYPE_VSCPD_STARTING_UP = 5,
module.exports.VSCP2_TYPE_VSCPD_SHUTTING_DOWN = 6,
module.exports.VSCP2_TYPE_VSCPD_DRV3_START = 7,
module.exports.VSCP2_TYPE_VSCPD_DRV3_STOP = 8,
module.exports.VSCP2_TYPE_VSCPD_DRV3_PAUSE = 9,
module.exports.VSCP2_TYPE_VSCPD_DRV3_RESUME = 10,
module.exports.VSCP2_TYPE_VSCPD_DRV3_RESTART = 11,
module.exports.VSCP2_TYPE_VSCPD_DRV3_CONFIG = 12 


vscp_type_map.set( (65535 << 16) + 0,'VSCP2_TYPE_VSCPD_GENERAL'); 
vscp_type_map.set( (65535 << 16) + 1,'VSCP2_TYPE_VSCPD_LOOP'); 
vscp_type_map.set( (65535 << 16) + 3,'VSCP2_TYPE_VSCPD_PAUSE'); 
vscp_type_map.set( (65535 << 16) + 4,'VSCP2_TYPE_VSCPD_ACTIVATE'); 
vscp_type_map.set( (65535 << 16) + 5,'VSCP2_TYPE_VSCPD_STARTING_UP'); 
vscp_type_map.set( (65535 << 16) + 6,'VSCP2_TYPE_VSCPD_SHUTTING_DOWN'); 
vscp_type_map.set( (65535 << 16) + 7,'VSCP2_TYPE_VSCPD_DRV3_START'); 
vscp_type_map.set( (65535 << 16) + 8,'VSCP2_TYPE_VSCPD_DRV3_STOP'); 
vscp_type_map.set( (65535 << 16) + 9,'VSCP2_TYPE_VSCPD_DRV3_PAUSE'); 
vscp_type_map.set( (65535 << 16) + 10,'VSCP2_TYPE_VSCPD_DRV3_RESUME'); 
vscp_type_map.set( (65535 << 16) + 11,'VSCP2_TYPE_VSCPD_DRV3_RESTART'); 
vscp_type_map.set( (65535 << 16) + 12,'VSCP2_TYPE_VSCPD_DRV3_CONFIG'); 
 
