# Class=30 (0x1E) Control

    CLASS1.CONTROL

## Description

Control functionality. One of the main concepts of VSCP is that it is an event driven protocol. Commands are sent out as events to the network not as events to specific devices. A device can belong to a zone which select limit events of interest for the particular node.. If there is a need to control a specific device the registry model should be used. This is the only way to directly control a device. 

## Type = 0 (0x00) Undefined

General control. 

## Type = 1 (0x01) Mute on/off

Mute/Un-mute all sound generating nodes in a zone 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | If equal to zero no mute else mute.                                | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 


## Type = 2 (0x02) (All) Lamp(s) on/off

Turn on/off lamps on nodes in zone.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | If equal to zero off else on.                                      | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

See also [CLASS1.CONTROL, Type=40](./class1.control.md#type_40_0x28_all_lamp_s_on) and [CLASS1.CONTROL, Type=42](./class1.control.md#type_41_0x29_all_lamp_s_off) which don't use byte 0 but instead are separated in two distinct events.

## Type = 3 (0x03) Open

Perform open on all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 4 (0x04) Close

Perform close on all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 5 (0x05) TurnOn

Turn On a nodes in a zone/subzone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 6 (0x06) TurnOff

Turn Off a nodes in a zone/subzone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 7 (0x07) Start

Start all nodes in a zone.

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 8 (0x08) Stop

Stop all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 9 (0x09) Reset

Perform Reset on all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 10 (0x0A) Interrupt

Perform Interrupt on all nodes in zone. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Interrupt level. (0 – 255 , zero is lowest interrupt level. ).   | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 


## Type = 11 (0x0B) Sleep

Perform Sleep on all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 12 (0x0C) Wakeup

Wakeup all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 13 (0x0D) Resume

Resume all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 14 (0x0E) Pause

Pause all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 15 (0x0F) Activate

Activate all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 16 (0x10) Deactivate

Deactivate all nodes in zone. 

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 17 (0x11) Reserved for future use

Reserved. 

## Type = 18 (0x12) Reserved for future use

Reserved. 

## Type = 19 (0x13) Reserved for future use

Reserved. 

## Type = 20 (0x14) Dim lamp(s)

Dim all dimmer devices on a segment to a specified dim value. 

 | Data byte | Description                                                                             | 
 | --------- | -----------                                                                             | 
 | 0         | Value (0 – 100) . 0 = off, 100 = full on. 254 dim down one step. 255 dim up one step. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                              | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                      | 

## Type = 21 (0x15) Change Channel

This is typical for changing TV channels or for changing AV amp input source etc. 

 | Data byte | Description                                                                                                                                                                                                                                                                                                                                               | 
 | --------- | -----------                                                                                                                                                                                                                                                                                                                                               | 
 | 0         | A value between 0 and 127 indicates the channel number. A value between 128 to 157 is change down by the specified number of channels. A value between 160 to 191 is change up by the specified number of channels. A value of 255 means that this is an extended change channel event and that the channel number is sent in byte 3 and after if needed. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                                                                                                                                                                                                                | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                                                                                                                                                                                                        | 

## Type = 22 (0x16) Change Level

Change an absolute level. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Absolute level.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 23 (0x17) Relative Change Level 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Relative level.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 24 (0x18) Measurement Request 

 | Data byte | Description                                                                                                                                                           | 
 | --------- | -----------                                                                                                                                                           | 
 | 0         | Zero indicates all measurements supported by node should be sent (as separate events). Non-zero indicates a node specific index specifying which measurement to send. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                                            | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                                                    | 

## Type = 25 (0x19) Stream Data 

 | Data byte | Description                                                               | 
 | --------- | -----------                                                               | 
 | 0         | Sequence number which is increase by one for each stream data event sent. | 
 | 1-7       | Stream data.                                                              | 

Use this event for streamed data out from a node. The source is then given by the nickname. If a specific received is needed use Zoned Stream. 

## Type = 26 (0x1A) Sync

Synchronize events on a segment. 

 | Data byte | Description                                                                                                                                  | 
 | --------- | -----------                                                                                                                                  | 
 | 0         | Sensor index for a sensor within a module (see [data coding](./data_coding.md). 255 is all sensors. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                                                   | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                                                           | 

The sensor index can be used to index units within a module also or used as some other indexing schema. 
## Type = 27 (0x1B) Zoned Stream Data 

 | Data byte | Description                                                               | 
 | --------- | -----------                                                               | 
 | 0         | Sequence number which is increase by one for each stream data event sent. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.        | 
 | 3-7       | Stream data.                                                              | 

## Type = 28 (0x1C) Set Pre-set

Some nodes may have pre-set configurations to choose from. With this event a pre-set can be set for a zone/sub-zone.

A node that receive and act on this event send CLASS1.INFORMATION, 

Type=48 as a response event. 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Code for pre-set to set.                                           | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 29 (0x1D) Toggle state

Toggle the state of a node.

Note: This may be a bad design option as it often demands that the state should be known for the node on beforehand.

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 


## Type = 30 (0x1E) Timed pulse on.

With this event it is possible to generate a timed pulse that is on for a specified time.

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 
 | 3         | Control byte.                                                       | 
 | 4-7       | Set time as a long with MSB in the first byte.                      | 

##### Control Byte

The control byte have the following bits defined

 | Bit | Description                                                          | 
 | --- | -----------                                                          | 
 | 0-3 | Time code (see table below)                                          | 
 | 4   | Reserved                                                             | 
 | 5   | Reserved                                                             | 
 | 6   | Send on event ( Class=20 Type = 3 (0x03) On ) when pulse goes on.    | 
 | 7   | Send off event ( Class=20 Type = 4 (0x04) Off ) when pulse goes off. | 

##### Time code

 | Code | Description                     | 
 | ---- | -----------                     | 
 | 0    | Time specified in microseconds. | 
 | 1    | Time specified in milliseconds. | 
 | 2    | Time specified in seconds.      | 
 | 3    | Time specified in minutes.      | 
 | 4    | Time specified in hours.        | 
 | 5    | Time specified in days.         | 


## Type = 31 (0x1F) Timed pulse off.

With this event it is possible to generate a timed pulse that is off for a specified time.

 | Data byte | Description                                                         | 
 | --------- | -----------                                                         | 
 | 0         | Optional byte that have a meaning given by the issuer of the event. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.  | 
 | 3         | Control byte.                                                       | 
 | 4-7       | Set time as a long with MSB in the first byte.                      | 

##### Control Byte

The control byte have the following bits defined

 | Bit | Description                                                          | 
 | --- | -----------                                                          | 
 | 0-3 | Time code (see table below)                                          | 
 | 4   | Reserved                                                             | 
 | 5   | Reserved                                                             | 
 | 6   | Send on event ( Class=20 Type = 3 (0x03) On ) when pulse goes on.    | 
 | 7   | Send off event ( Class=20 Type = 4 (0x04) Off ) when pulse goes off. | 

##### Time code

 | Code | Description                     | 
 | ---- | -----------                     | 
 | 0    | Time specified in microseconds. | 
 | 1    | Time specified in milliseconds. | 
 | 2    | Time specified in seconds.      | 
 | 3    | Time specified in minutes.      | 
 | 4    | Time specified in hours.        | 
 | 5    | Time specified in days.         | 


## Type = 32 (0x20) Set country/language.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Country/Language code.                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3-7       | Country/Language code specific                                     | 

 | Language code | Description          | Example                                           | 
 | ------------- | -----------          | -------                                           | 
 | 0             | Custom coded system  | Byte 3 = 0 English, Byte 3 = 1 German or similar. | 
 | 1             | ISO 639-1            | nl for Dutch, en for English.                     | 
 | 2             | ISO 639-2/T          | nid for Dutch, eng for English.                   | 
 | 3             | ISO 639-2/B          | dut for Dutch, eng for English.                   | 
 | 4             | ISO 639-3            | nid for Dutch, eng for English.                   | 
 | 5             | IETF (RFC-5646/4647) | en-US for American English. en-GB British.        | 


ISO codes can be found [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

## Type=33 (0x21) Big Change level

Big Change level can be used in situations when the one byte level of CLASS1.CONTROL, Type=22 is not enough.

 | Data byte | Description                                                                                               | 
 | --------- | -----------                                                                                               | 
 | 0         | Index                                                                                                     | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                        | 
 | 3-7       | Level as signed Integer. The range can be adjusted by the user by sending the needed number of bytes 1-5. | 

## Type = 34 (0x22) Move shutter up 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 35 (0x23) Move shutter down 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 


## Type = 36 (0x24) Move shutter left 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 


## Type = 37 (0x25) Move shutter right 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 


## Type = 38 (0x26) Move shutter to middle position 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

## Type = 39 (0x27) Move shutter to preset position 

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3         | Position 0-100.                                                    | 

## Type = 40 (0x28) (All) Lamp(s) on

Turn on all lamps in a zone.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Not used.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

See also [CLASS1.CONTROL, Type=2](./class1.control.md#type_2_0x02_all_lamp_s_on_off)

## Type = 41 (0x29) (All) Lamp(s) off

Turn off all lamps in a zone.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Not used.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

See also [CLASS1.CONTROL, Type=2](./class1.control.md#type2-0x02-all-lamps-on-off)

## Type = 42 (0x2A) Lock

Lock devices in a zone.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Not used.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 


## Type = 43 (0x2B) Unlock

Unock devices in a zone.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Not used.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 




{% include "./bottom_copyright.md" %}
