# Class=65535 (0xFFFF) VSCP Daemon internal events

    CLASS2.VSCPD
    
## Description

This class is reserved for internal events used by the decision matrix mechanism of the [VSCP Daemon](https://www.vscp.org/docs/vscpd/doku.php). Events of this type should never be visible on a physical bus. 

## Type = 0 (0x0000) Undefined.

General event. 

## Type = 1 (0x0001) Loop

Event is generated each loop in the DM or if no events is received every 100 ms (configurable value). No data is defined.

## Type = 3 (0x0003) Pause

The machine/daemon is going to a pause state. No data is defined.

## Type = 4 (0x0004) Activate

The machine/daemon is going from a pause state. No data is defined.

## Type = 5 (0x0005) Second

Event is generated each new second. No data is defined. 

## Type = 6 (0x0006) Minute

Event is generated each new minute. No data is defined. 

## Type = 7 (0x0007) Hour

Event is generated each new Hour. No data is defined. 

## Type = 8 (0x0008) Noon

Event is generated at 12:00 each day. No data is defined. 

## Type = 9 (0x0009) Midnight

Event is generated at 00:00 each day. No data is defined.

## Type = 11 (0x000B) Week

Event is generated when a new week starts (config setting). No data is defined.

## Type = 12 (0x000C) Month

Event is generated when a new month starts. No data is defined.

## Type = 13 (0x000D) Quarter

Event is generated when a new quarter starts. No data is defined.

## Type = 14 (0x000E) Year

Event is generated when a new year starts. No data is defined.

## Type = 15 (0x000F) random-minute

Event is generated randomly over a minute as is sent once each minute. No data is defined.

## Type = 16 (0x0010) random-hour

Event is generated randomly over an hour and is sent once each hour. No data is defined.

## Type = 17 (0x0011) random-day

Event is generated randomly over a day and is sent once each day. No data is defined.

## Type = 18 (0x0012) random-week

Event is generated randomly over a week and is sent once each week. No data is defined.

## Type = 19 (0x0013) random-month

Event is generated randomly over a month and is sent once each month. No data is defined.

## Type = 20 (0x0014) random-year

Event is generated randomly over a year and is sent once each year. No data is defined.

## Type = 21 (0x0015) Dusk

Event is from calculated dusk. No data is defined.

## Type = 22 (0x0016) Dawn

Event is from calculated dawn. No data is defined.

## Type = 23 (0x0017) Starting up

The machine/daemon is starting up. This is the first event sent after a machine start up. Shutting down . No data is defined.

## Type = 24 (0x0018) Shutting down

The machine/daemon is shutting down. This is the last event sent before a machine is shutting off. No data is defined. 

## Type = 25 (0x0019) Timer started

A timer has been started.

Argument is timer ID and start time for the timer. 

 | Byte | Description                                        | 
 | ---- | -----------                                        | 
 | 0    | 32 bit timer ID. MSB.                              | 
 | 1    | 32 bit timer ID.                                   | 
 | 2    | 32 bit timer ID.                                   | 
 | 3    | 32 bit timer ID. LSB.                              | 
 | 4    | Start time in milliseconds as a 32-bit value. MSB. | 
 | 5    | Start time in milliseconds as a 32-bit value.      | 
 | 6    | Start time in milliseconds as a 32-bit value.      | 
 | 7    | Start time in milliseconds as a 32-bit value. LSB. | 

Max timer value is about 49 days. 

## Type = 26 (0x001A) Timer paused

A timer has been paused.

Argument is timer ID and time when timer was paused. 

 | Byte | Description                                        | 
 | ---- | -----------                                        | 
 | 0    | 32 bit timer ID. MSB.                              | 
 | 1    | 32 bit timer ID.                                   | 
 | 2    | 32 bit timer ID.                                   | 
 | 3    | 32 bit timer ID. LSB.                              | 
 | 4    | Start time in milliseconds as a 32-bit value. MSB. | 
 | 5    | Start time in milliseconds as a 32-bit value.      | 
 | 6    | Start time in milliseconds as a 32-bit value.      | 
 | 7    | Start time in milliseconds as a 32-bit value. LSB  | 

## Type = 27 (0x001B) Timer resumed

A timer has been restarted.

Argument is timer ID and time when timer was restarted. 

 | Byte | Description                                        | 
 | ---- | -----------                                        | 
 | 0    | 32 bit timer ID. MSB.                              | 
 | 1    | 32 bit timer ID.                                   | 
 | 2    | 32 bit timer ID.                                   | 
 | 3    | 32 bit timer ID. LSB.                              | 
 | 4    | Start time in milliseconds as a 32-bit value. MSB. | 
 | 5    | Start time in milliseconds as a 32-bit value.      | 
 | 6    | Start time in milliseconds as a 32-bit value.      | 
 | 7    | Start time in milliseconds as a 32-bit value. LSB. | 

## Type = 28 (0x001C) Timer stopped

A timer has been stopped.

Argument is timer ID and time when timer was stopped. 

 | Byte | Description                                        | 
 | ---- | -----------                                        | 
 | 0    | 32 bit timer ID. MSB.                              | 
 | 1    | 32 bit timer ID.                                   | 
 | 2    | 32 bit timer ID.                                   | 
 | 3    | 32 bit timer ID. LSB.                              | 
 | 4    | Start time in milliseconds as a 32-bit value. MSB. | 
 | 5    | Start time in milliseconds as a 32-bit value.      | 
 | 6    | Start time in milliseconds as a 32-bit value.      | 
 | 7    | Start time in milliseconds as a 32-bit value. LSB. | 

## Type = 29 (0x001D) Timer Elapsed

A timer has elapsed.

Argument is timer ID. 

 | Byte | Description           | 
 | ---- | -----------           | 
 | 0    | 32 bit timer ID. MSB. | 
 | 1    | 32 bit timer ID.      | 
 | 2    | 32 bit timer ID.      | 
 | 3    | 32 bit timer ID. LSB. | 

## Type = 30 (0x001E) New Calculations

This event will be sent once each 24 hours when new astronomical calculations has been performed. The event can be useful if one need to do things when the sunrise/sunset etc times changes.

{% include "./bottom_copyright.md" %}

