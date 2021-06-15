// VSCP class definition file
//
// Copyright © 2012-2021 Ake Hedman, The VSCP Project
// <info@vscp.org>
// Copyright © 2015-2021 Andreas Merkle
// <vscp@blue-andi.de>
//
// Licence:
// The MIT License (MIT)
// [OSI Approved License]
//
// The MIT License (MIT)
//
// Copyright © 2012-2021 The VSCP Project
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
// The VSCP Project at info@grodansparadis.com, http://www.grodansparadis.com
//

/*
            !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!
                           This file is auto-generated
                see https://github.com/grodansparadis/vscp-classes
                        Generated: 2021-06-15 13:32:58.784300
*/

/** Namespace for all functionality of the VSCP provided libraries.
 * @namespace vscp
 */
var vscp = vscp || {};

/** VSCP classes
 * @enum {number}
 * @const
 */
vscp.constants.classes = {

    VSCP_CLASS1_PROTOCOL: 0,
    VSCP_CLASS1_ALARM: 1,
    VSCP_CLASS1_SECURITY: 2,
    VSCP_CLASS1_MEASUREMENT: 10,
    VSCP_CLASS1_MEASUREMENTX1: 11,
    VSCP_CLASS1_MEASUREMENTX2: 12,
    VSCP_CLASS1_MEASUREMENTX3: 13,
    VSCP_CLASS1_MEASUREMENTX4: 14,
    VSCP_CLASS1_DATA: 15,
    VSCP_CLASS1_INFORMATION: 20,
    VSCP_CLASS1_CONTROL: 30,
    VSCP_CLASS1_MULTIMEDIA: 40,
    VSCP_CLASS1_AOL: 50,
    VSCP_CLASS1_MEASUREMENT64: 60,
    VSCP_CLASS1_MEASUREMENT64X1: 61,
    VSCP_CLASS1_MEASUREMENT64X2: 62,
    VSCP_CLASS1_MEASUREMENT64X3: 63,
    VSCP_CLASS1_MEASUREMENT64X4: 64,
    VSCP_CLASS1_MEASUREZONE: 65,
    VSCP_CLASS1_MEASUREZONEX1: 66,
    VSCP_CLASS1_MEASUREZONEX2: 67,
    VSCP_CLASS1_MEASUREZONEX3: 68,
    VSCP_CLASS1_MEASUREZONEX4: 69,
    VSCP_CLASS1_MEASUREMENT32: 70,
    VSCP_CLASS1_MEASUREMENT32X1: 71,
    VSCP_CLASS1_MEASUREMENT32X2: 72,
    VSCP_CLASS1_MEASUREMENT32X3: 73,
    VSCP_CLASS1_MEASUREMENT32X4: 74,
    VSCP_CLASS1_SETVALUEZONE: 85,
    VSCP_CLASS1_SETVALUEZONEX1: 86,
    VSCP_CLASS1_SETVALUEZONEX2: 87,
    VSCP_CLASS1_SETVALUEZONEX3: 88,
    VSCP_CLASS1_SETVALUEZONEX4: 89,
    VSCP_CLASS1_WEATHER: 90,
    VSCP_CLASS1_WEATHER_FORECAST: 95,
    VSCP_CLASS1_PHONE: 100,
    VSCP_CLASS1_DISPLAY: 102,
    VSCP_CLASS1_IR: 110,
    VSCP_CLASS1_CONFIGURATION: 120,
    VSCP_CLASS1_GNSS: 206,
    VSCP_CLASS1_WIRELESS: 212,
    VSCP_CLASS1_DIAGNOSTIC: 506,
    VSCP_CLASS1_ERROR: 508,
    VSCP_CLASS1_LOG: 509,
    VSCP_CLASS1_LABORATORY: 510,
    VSCP_CLASS1_LOCAL: 511,
    VSCP_CLASS2_LEVEL1_PROTOCOL: 512,
    VSCP_CLASS2_LEVEL1_ALARM: 513,
    VSCP_CLASS2_LEVEL1_SECURITY: 514,
    VSCP_CLASS2_LEVEL1_MEASUREMENT: 522,
    VSCP_CLASS2_LEVEL1_MEASUREMENTX1: 523,
    VSCP_CLASS2_LEVEL1_MEASUREMENTX2: 524,
    VSCP_CLASS2_LEVEL1_MEASUREMENTX3: 525,
    VSCP_CLASS2_LEVEL1_MEASUREMENTX4: 526,
    VSCP_CLASS2_LEVEL1_DATA: 527,
    VSCP_CLASS2_LEVEL1_INFORMATION1: 532,
    VSCP_CLASS2_LEVEL1_CONTROL: 542,
    VSCP_CLASS2_LEVEL1_MULTIMEDIA: 552,
    VSCP_CLASS2_LEVEL1_AOL: 562,
    VSCP_CLASS2_LEVEL1_MEASUREMENT64: 572,
    VSCP_CLASS2_LEVEL1_MEASUREMENT64X1: 573,
    VSCP_CLASS2_LEVEL1_MEASUREMENT64X2: 574,
    VSCP_CLASS2_LEVEL1_MEASUREMENT64X3: 575,
    VSCP_CLASS2_LEVEL1_MEASUREMENT64X4: 576,
    VSCP_CLASS2_LEVEL1_MEASUREZONE: 577,
    VSCP_CLASS2_LEVEL1_MEASUREZONEX1: 578,
    VSCP_CLASS2_LEVEL1_MEASUREZONEX2: 579,
    VSCP_CLASS2_LEVEL1_MEASUREZONEX3: 580,
    VSCP_CLASS2_LEVEL1_MEASUREZONEX4: 581,
    VSCP_CLASS2_LEVEL1_MEASUREMENT32: 582,
    VSCP_CLASS2_LEVEL1_MEASUREMENT32X1: 583,
    VSCP_CLASS2_LEVEL1_MEASUREMENT32X2: 584,
    VSCP_CLASS2_LEVEL1_MEASUREMENT32X3: 585,
    VSCP_CLASS2_LEVEL1_MEASUREMENT32X4: 586,
    VSCP_CLASS2_LEVEL1_SETVALUEZONE: 597,
    VSCP_CLASS2_LEVEL1_SETVALUEZONEX1: 598,
    VSCP_CLASS2_LEVEL1_SETVALUEZONEX2: 599,
    VSCP_CLASS2_LEVEL1_SETVALUEZONEX3: 600,
    VSCP_CLASS2_LEVEL1_SETVALUEZONEX4: 601,
    VSCP_CLASS2_LEVEL1_WEATHER: 602,
    VSCP_CLASS2_LEVEL1_WEATHERFORECAST: 607,
    VSCP_CLASS2_LEVEL1_PHONE: 612,
    VSCP_CLASS2_LEVEL1_DISPLAY: 614,
    VSCP_CLASS2_LEVEL1_IR: 622,
    VSCP_CLASS2_LEVEL1_GNSS: 718,
    VSCP_CLASS2_LEVEL1_WIRELESS: 724,
    VSCP_CLASS2_LEVEL1_DIAGNOSTIC: 1018,
    VSCP_CLASS2_LEVEL1_ERROR: 1020,
    VSCP_CLASS2_LEVEL1_LOG: 1021,
    VSCP_CLASS2_LEVEL1_LABORATORY: 1022,
    VSCP_CLASS2_LEVEL1_LOCAL: 1023,
    VSCP_CLASS2_PROTOCOL: 1024,
    VSCP_CLASS2_CONTROL: 1025,
    VSCP_CLASS2_INFORMATION: 1026,
    VSCP_CLASS2_TEXT2SPEECH: 1027,
    VSCP_CLASS2_HLO: 1028,
    VSCP_CLASS2_CUSTOM: 1029,
    VSCP_CLASS2_DISPLAY: 1030,
    VSCP_CLASS2_MEASUREMENT_STR: 1040,
    VSCP_CLASS2_MEASUREMENT_FLOAT: 1060,
    VSCP_CLASS2_VSCPD: 65535

};
