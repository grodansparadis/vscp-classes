// VSCP class definition file
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
                        Generated: 2021-03-03 11:53:33.890642
*/


'use strict';

/** 
 * VSCP class map
 */
var vscp_class_map = new Map();

module.exports = function (vscpclass) {
    return vscp_class_map.get(vscpclass);
};

module.exports.VSCP_CLASS1_PROTOCOL = 0;
module.exports.VSCP_CLASS1_ALARM = 1;
module.exports.VSCP_CLASS1_SECURITY = 2;
module.exports.VSCP_CLASS1_MEASUREMENT = 10;
module.exports.VSCP_CLASS1_MEASUREMENTX1 = 11;
module.exports.VSCP_CLASS1_MEASUREMENTX2 = 12;
module.exports.VSCP_CLASS1_MEASUREMENTX3 = 13;
module.exports.VSCP_CLASS1_MEASUREMENTX4 = 14;
module.exports.VSCP_CLASS1_DATA = 15;
module.exports.VSCP_CLASS1_INFORMATION = 20;
module.exports.VSCP_CLASS1_CONTROL = 30;
module.exports.VSCP_CLASS1_MULTIMEDIA = 40;
module.exports.VSCP_CLASS1_AOL = 50;
module.exports.VSCP_CLASS1_MEASUREMENT64 = 60;
module.exports.VSCP_CLASS1_MEASUREMENT64X1 = 61;
module.exports.VSCP_CLASS1_MEASUREMENT64X2 = 62;
module.exports.VSCP_CLASS1_MEASUREMENT64X3 = 63;
module.exports.VSCP_CLASS1_MEASUREMENT64X4 = 64;
module.exports.VSCP_CLASS1_MEASUREZONE = 65;
module.exports.VSCP_CLASS1_MEASUREZONEX1 = 66;
module.exports.VSCP_CLASS1_MEASUREZONEX2 = 67;
module.exports.VSCP_CLASS1_MEASUREZONEX3 = 68;
module.exports.VSCP_CLASS1_MEASUREZONEX4 = 69;
module.exports.VSCP_CLASS1_MEASUREMENT32 = 70;
module.exports.VSCP_CLASS1_MEASUREMENT32X1 = 71;
module.exports.VSCP_CLASS1_MEASUREMENT32X2 = 72;
module.exports.VSCP_CLASS1_MEASUREMENT32X3 = 73;
module.exports.VSCP_CLASS1_MEASUREMENT32X4 = 74;
module.exports.VSCP_CLASS1_SETVALUEZONE = 85;
module.exports.VSCP_CLASS1_SETVALUEZONEX1 = 86;
module.exports.VSCP_CLASS1_SETVALUEZONEX2 = 87;
module.exports.VSCP_CLASS1_SETVALUEZONEX3 = 88;
module.exports.VSCP_CLASS1_SETVALUEZONEX4 = 89;
module.exports.VSCP_CLASS1_WEATHER = 90;
module.exports.VSCP_CLASS1_WEATHER_FORECAST = 95;
module.exports.VSCP_CLASS1_PHONE = 100;
module.exports.VSCP_CLASS1_DISPLAY = 102;
module.exports.VSCP_CLASS1_IR = 110;
module.exports.VSCP_CLASS1_CONFIGURATION = 120;
module.exports.VSCP_CLASS1_GNSS = 206;
module.exports.VSCP_CLASS1_WIRELESS = 212;
module.exports.VSCP_CLASS1_DIAGNOSTIC = 506;
module.exports.VSCP_CLASS1_ERROR = 508;
module.exports.VSCP_CLASS1_LOG = 509;
module.exports.VSCP_CLASS1_LABORATORY = 510;
module.exports.VSCP_CLASS1_LOCAL = 511;
module.exports.VSCP_CLASS2_LEVEL1_PROTOCOL = 512;
module.exports.VSCP_CLASS2_LEVEL1_ALARM = 513;
module.exports.VSCP_CLASS2_LEVEL1_SECURITY = 514;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT = 522;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENTX1 = 523;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENTX2 = 524;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENTX3 = 525;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENTX4 = 526;
module.exports.VSCP_CLASS2_LEVEL1_DATA = 527;
module.exports.VSCP_CLASS2_LEVEL1_INFORMATION1 = 532;
module.exports.VSCP_CLASS2_LEVEL1_CONTROL = 542;
module.exports.VSCP_CLASS2_LEVEL1_MULTIMEDIA = 552;
module.exports.VSCP_CLASS2_LEVEL1_AOL = 562;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT64 = 572;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT64X1 = 573;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT64X2 = 574;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT64X3 = 575;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT64X4 = 576;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREZONE = 577;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREZONEX1 = 578;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREZONEX2 = 579;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREZONEX3 = 580;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREZONEX4 = 581;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT32 = 582;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT32X1 = 583;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT32X2 = 584;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT32X3 = 585;
module.exports.VSCP_CLASS2_LEVEL1_MEASUREMENT32X4 = 586;
module.exports.VSCP_CLASS2_LEVEL1_SETVALUEZONE = 597;
module.exports.VSCP_CLASS2_LEVEL1_SETVALUEZONEX1 = 598;
module.exports.VSCP_CLASS2_LEVEL1_SETVALUEZONEX2 = 599;
module.exports.VSCP_CLASS2_LEVEL1_SETVALUEZONEX3 = 600;
module.exports.VSCP_CLASS2_LEVEL1_SETVALUEZONEX4 = 601;
module.exports.VSCP_CLASS2_LEVEL1_WEATHER = 602;
module.exports.VSCP_CLASS2_LEVEL1_WEATHERFORECAST = 607;
module.exports.VSCP_CLASS2_LEVEL1_PHONE = 612;
module.exports.VSCP_CLASS2_LEVEL1_DISPLAY = 614;
module.exports.VSCP_CLASS2_LEVEL1_IR = 622;
module.exports.VSCP_CLASS2_LEVEL1_GNSS = 718;
module.exports.VSCP_CLASS2_LEVEL1_WIRELESS = 724;
module.exports.VSCP_CLASS2_LEVEL1_DIAGNOSTIC = 1018;
module.exports.VSCP_CLASS2_LEVEL1_ERROR = 1020;
module.exports.VSCP_CLASS2_LEVEL1_LOG = 1021;
module.exports.VSCP_CLASS2_LEVEL1_LABORATORY = 1022;
module.exports.VSCP_CLASS2_LEVEL1_LOCAL = 1023;
module.exports.VSCP_CLASS2_PROTOCOL = 1024;
module.exports.VSCP_CLASS2_CONTROL = 1025;
module.exports.VSCP_CLASS2_INFORMATION = 1026;
module.exports.VSCP_CLASS2_TEXT2SPEECH = 1027;
module.exports.VSCP_CLASS2_HLO = 1028;
module.exports.VSCP_CLASS2_CUSTOM = 1029;
module.exports.VSCP_CLASS2_DISPLAY = 1030;
module.exports.VSCP_CLASS2_MEASUREMENT_STR = 1040;
module.exports.VSCP_CLASS2_MEASUREMENT_FLOAT = 1060;
module.exports.VSCP_CLASS2_VSCPD = 65535;

// Assign elements to class map
vscp_class_map.set(0,'CLASS1.PROTOCOL');
vscp_class_map.set(1,'CLASS1.ALARM');
vscp_class_map.set(2,'CLASS1.SECURITY');
vscp_class_map.set(10,'CLASS1.MEASUREMENT');
vscp_class_map.set(11,'CLASS1.MEASUREMENTX1');
vscp_class_map.set(12,'CLASS1.MEASUREMENTX2');
vscp_class_map.set(13,'CLASS1.MEASUREMENTX3');
vscp_class_map.set(14,'CLASS1.MEASUREMENTX4');
vscp_class_map.set(15,'CLASS1.DATA');
vscp_class_map.set(20,'CLASS1.INFORMATION');
vscp_class_map.set(30,'CLASS1.CONTROL');
vscp_class_map.set(40,'CLASS1.MULTIMEDIA');
vscp_class_map.set(50,'CLASS1.AOL');
vscp_class_map.set(60,'CLASS1.MEASUREMENT64');
vscp_class_map.set(61,'CLASS1.MEASUREMENT64X1');
vscp_class_map.set(62,'CLASS1.MEASUREMENT64X2');
vscp_class_map.set(63,'CLASS1.MEASUREMENT64X3');
vscp_class_map.set(64,'CLASS1.MEASUREMENT64X4');
vscp_class_map.set(65,'CLASS1.MEASUREZONE');
vscp_class_map.set(66,'CLASS1.MEASUREZONEX1');
vscp_class_map.set(67,'CLASS1.MEASUREZONEX2');
vscp_class_map.set(68,'CLASS1.MEASUREZONEX3');
vscp_class_map.set(69,'CLASS1.MEASUREZONEX4');
vscp_class_map.set(70,'CLASS1.MEASUREMENT32');
vscp_class_map.set(71,'CLASS1.MEASUREMENT32X1');
vscp_class_map.set(72,'CLASS1.MEASUREMENT32X2');
vscp_class_map.set(73,'CLASS1.MEASUREMENT32X3');
vscp_class_map.set(74,'CLASS1.MEASUREMENT32X4');
vscp_class_map.set(85,'CLASS1.SETVALUEZONE');
vscp_class_map.set(86,'CLASS1.SETVALUEZONEX1');
vscp_class_map.set(87,'CLASS1.SETVALUEZONEX2');
vscp_class_map.set(88,'CLASS1.SETVALUEZONEX3');
vscp_class_map.set(89,'CLASS1.SETVALUEZONEX4');
vscp_class_map.set(90,'CLASS1.WEATHER');
vscp_class_map.set(95,'CLASS1.WEATHER_FORECAST');
vscp_class_map.set(100,'CLASS1.PHONE');
vscp_class_map.set(102,'CLASS1.DISPLAY');
vscp_class_map.set(110,'CLASS1.IR');
vscp_class_map.set(120,'CLASS1.CONFIGURATION');
vscp_class_map.set(206,'CLASS1.GNSS');
vscp_class_map.set(212,'CLASS1.WIRELESS');
vscp_class_map.set(506,'CLASS1.DIAGNOSTIC');
vscp_class_map.set(508,'CLASS1.ERROR');
vscp_class_map.set(509,'CLASS1.LOG');
vscp_class_map.set(510,'CLASS1.LABORATORY');
vscp_class_map.set(511,'CLASS1.LOCAL');
vscp_class_map.set(512,'CLASS2.LEVEL1.PROTOCOL');
vscp_class_map.set(513,'CLASS2.LEVEL1.ALARM');
vscp_class_map.set(514,'CLASS2.LEVEL1.SECURITY');
vscp_class_map.set(522,'CLASS2.LEVEL1.MEASUREMENT');
vscp_class_map.set(523,'CLASS2.LEVEL1.MEASUREMENTX1');
vscp_class_map.set(524,'CLASS2.LEVEL1.MEASUREMENTX2');
vscp_class_map.set(525,'CLASS2.LEVEL1.MEASUREMENTX3');
vscp_class_map.set(526,'CLASS2.LEVEL1.MEASUREMENTX4');
vscp_class_map.set(527,'CLASS2.LEVEL1.DATA');
vscp_class_map.set(532,'CLASS2.LEVEL1.INFORMATION1');
vscp_class_map.set(542,'CLASS2.LEVEL1.CONTROL');
vscp_class_map.set(552,'CLASS2.LEVEL1.MULTIMEDIA');
vscp_class_map.set(562,'CLASS2.LEVEL1.AOL');
vscp_class_map.set(572,'CLASS2.LEVEL1.MEASUREMENT64');
vscp_class_map.set(573,'CLASS2.LEVEL1.MEASUREMENT64X1');
vscp_class_map.set(574,'CLASS2.LEVEL1.MEASUREMENT64X2');
vscp_class_map.set(575,'CLASS2.LEVEL1.MEASUREMENT64X3');
vscp_class_map.set(576,'CLASS2.LEVEL1.MEASUREMENT64X4');
vscp_class_map.set(577,'CLASS2.LEVEL1.MEASUREZONE');
vscp_class_map.set(578,'CLASS2.LEVEL1.MEASUREZONEX1');
vscp_class_map.set(579,'CLASS2.LEVEL1.MEASUREZONEX2');
vscp_class_map.set(580,'CLASS2.LEVEL1.MEASUREZONEX3');
vscp_class_map.set(581,'CLASS2.LEVEL1.MEASUREZONEX4');
vscp_class_map.set(582,'CLASS2.LEVEL1.MEASUREMENT32');
vscp_class_map.set(583,'CLASS2.LEVEL1.MEASUREMENT32X1');
vscp_class_map.set(584,'CLASS2.LEVEL1.MEASUREMENT32X2');
vscp_class_map.set(585,'CLASS2.LEVEL1.MEASUREMENT32X3');
vscp_class_map.set(586,'CLASS2.LEVEL1.MEASUREMENT32X4');
vscp_class_map.set(597,'CLASS2.LEVEL1.SETVALUEZONE');
vscp_class_map.set(598,'CLASS2.LEVEL1.SETVALUEZONEX1');
vscp_class_map.set(599,'CLASS2.LEVEL1.SETVALUEZONEX2');
vscp_class_map.set(600,'CLASS2.LEVEL1.SETVALUEZONEX3');
vscp_class_map.set(601,'CLASS2.LEVEL1.SETVALUEZONEX4');
vscp_class_map.set(602,'CLASS2.LEVEL1.WEATHER');
vscp_class_map.set(607,'CLASS2.LEVEL1.WEATHERFORECAST');
vscp_class_map.set(612,'CLASS2.LEVEL1.PHONE');
vscp_class_map.set(614,'CLASS2.LEVEL1.DISPLAY');
vscp_class_map.set(622,'CLASS2.LEVEL1.IR');
vscp_class_map.set(718,'CLASS2.LEVEL1.GNSS');
vscp_class_map.set(724,'CLASS2.LEVEL1.WIRELESS');
vscp_class_map.set(1018,'CLASS2.LEVEL1.DIAGNOSTIC');
vscp_class_map.set(1020,'CLASS2.LEVEL1.ERROR');
vscp_class_map.set(1021,'CLASS2.LEVEL1.LOG');
vscp_class_map.set(1022,'CLASS2.LEVEL1.LABORATORY');
vscp_class_map.set(1023,'CLASS2.LEVEL1.LOCAL');
vscp_class_map.set(1024,'CLASS2.PROTOCOL');
vscp_class_map.set(1025,'CLASS2.CONTROL');
vscp_class_map.set(1026,'CLASS2.INFORMATION');
vscp_class_map.set(1027,'CLASS2.TEXT2SPEECH');
vscp_class_map.set(1028,'CLASS2.HLO');
vscp_class_map.set(1029,'CLASS2.CUSTOM');
vscp_class_map.set(1030,'CLASS2.DISPLAY');
vscp_class_map.set(1040,'CLASS2.MEASUREMENT_STR');
vscp_class_map.set(1060,'CLASS2.MEASUREMENT_FLOAT');
vscp_class_map.set(65535,'CLASS2.VSCPD');
