# Class=532 (0x0214) - Class2 Level I Information

    CLASS2.LEVEL1.INFORMATION1

## Description

This class mirrors the [CLASS1.INFORMATION](./class1.information.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## Type=0 (0x00) - General event :id=type0

```
VSCP_TYPE_INFORMATION_GENERAL
```
General Event.


----


## Type=1 (0x01) - Button :id=type1

```
VSCP_TYPE_INFORMATION_BUTTON
```
A button has been pressed/released. 

 | Data byte | Description                                                                                                                                                        | 
 | :---------: | -----------                                                                                                                                                        | 
 | 0         | Bits 0,1,2 If 0 the button has been released. If 1 the button is pressed. If equal to 2 this is a key value (press followed by release). Bits 3-7 is repeats 0-32. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones                                                                                                          | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones                                                                                                  | 
 | 3         | MSB of code for button.                                                                                                                                            | 
 | 4         | LSB of code for button.                                                                                                                                            | 
 | 5         | MSB of optional code-page.                                                                                                                                         | 
 | 6         | LSB of optional code-page.                                                                                                                                         | 



----


## Type=2 (0x02) - Mouse :id=type2

```
VSCP_TYPE_INFORMATION_MOUSE
```
A mouse movement has occurred. 

 | Data byte | Description                                                                       | 
 | :---------: | -----------                                                                       | 
 | 0         | If zero absolute coordinates follow. If equal to one relative coordinates follow. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones                         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones                 | 
 | 3         | MSB of normalized X-coordinate.                                                   | 
 | 4         | LSB of normalized X-coordinate.                                                   | 
 | 5         | MSB of normalized Y-coordinate.                                                   | 
 | 6         | LSB of normalized Y-coordinate.                                                   | 



----


## Type=3 (0x03) - On :id=type3

```
VSCP_TYPE_INFORMATION_ON
```
A node indicates that a condition is in its on state. Heater on, lights on are two examples. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | index. Often used as an index for channels within a module.        | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=4 (0x04) - Off :id=type4

```
VSCP_TYPE_INFORMATION_OFF
```
A node indicates that a condition is in its off state. Heater off, lights off are two examples. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=5 (0x05) - Alive :id=type5

```
VSCP_TYPE_INFORMATION_ALIVE
```
A node tells the world that it is alive. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=6 (0x06) - Terminating :id=type6

```
VSCP_TYPE_INFORMATION_TERMINATING
```
A node tells the world that it is terminating. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

Byte2 Sub-zone for which event applies to (0-255). 255 is all sub-zones.



----


## Type=7 (0x07) - Opened :id=type7

```
VSCP_TYPE_INFORMATION_OPENED
```
A node indicates that an open has occurred. This can be a door/window open, a modem line open etc. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=8 (0x08) - Closed :id=type8

```
VSCP_TYPE_INFORMATION_CLOSED
```
A node indicates that a close has occurred. This can be a door/window close, a modem line closure etc. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=9 (0x09) - Node Heartbeat :id=type9

```
VSCP_TYPE_INFORMATION_NODE_HEARTBEAT
```
Heartbeats can be used to indicate that a unit is alive or to send periodic data. This can be sent out at predefined intervals to indicate that the node is alive, however, it does not necessarily mean the node is functioning as it should. It simply states that the node is connected to the network. To check if a node is functioning, other properties such as a measurement event or registry should be used. This event should be sent as a response to a “Segment Status Heartbeat” (CLASS1.PROTOCOL, Type=1) in order to provide a method of finding out what is connected to the network. The data bytes from byte 3 and forward can be used to send a descriptive/user friendly name if desired.

**Mandatory.** All nodes should send this event at least once each minute. A Level II node should normally not send this event but instead send [Level II node heartbeat](./class2.information.md#type2). Recommended interval is 30-60 seconds but in a node that need to sleep longer to save resources a longer interval can be used.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=10 (0x0A) - Below limit :id=type10

```
VSCP_TYPE_INFORMATION_BELOW_LIMIT
```
This indicates that the node has a condition that is below a configurable limit. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=11 (0x0B) - Above limit :id=type11

```
VSCP_TYPE_INFORMATION_ABOVE_LIMIT
```
This indicates that the node has a condition that is above a configurable limit. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=12 (0x0C) - Pulse :id=type12

```
VSCP_TYPE_INFORMATION_PULSE
```
This can be used for slow pulse counts. This can be an S0-pulse interface or something similar. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=13 (0x0D) - Error :id=type13

```
VSCP_TYPE_INFORMATION_ERROR
```
A node indicates that an error occurred. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=14 (0x0E) - Resumed :id=type14

```
VSCP_TYPE_INFORMATION_RESUMED
```
A node indicates that it has resumed operation. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=15 (0x0F) - Paused :id=type15

```
VSCP_TYPE_INFORMATION_PAUSED
```
A node indicates that it has paused. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=16 (0x10) - Sleeping :id=type16

```
VSCP_TYPE_INFORMATION_SLEEP
```
A node indicates that it entered a sleeping state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=17 (0x11) - Good morning :id=type17

```
VSCP_TYPE_INFORMATION_GOOD_MORNING
```
The system should enter its morning state. This can be a user pressing a button to set his/her house to its morning state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=18 (0x12) - Good day :id=type18

```
VSCP_TYPE_INFORMATION_GOOD_DAY
```
The system should enter its day state. This can be a user pressing a button to set his/her house to its day state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=19 (0x13) - Good afternoon :id=type19

```
VSCP_TYPE_INFORMATION_GOOD_AFTERNOON
```
The system should enter its afternoon state. This can be a user pressing a button to set his/her house to its afternoon state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=20 (0x14) - Good evening :id=type20

```
VSCP_TYPE_INFORMATION_GOOD_EVENING
```
The system should enter its evening state. This can be a user pressing a button to set his/her house to its evening state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=21 (0x15) - Good night :id=type21

```
VSCP_TYPE_INFORMATION_GOOD_NIGHT
```
The system should enter its night state. This can be a user pressing a button to set his/her house to its night state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=22 (0x16) - See you soon :id=type22

```
VSCP_TYPE_INFORMATION_SEE_YOU_SOON
```
The system should be on a temporary alert. This can be a user locking the door to go out to the waste bin or similar situation. An alarm system should not be activated in this situation. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=23 (0x17) - Goodbye :id=type23

```
VSCP_TYPE_INFORMATION_GOODBYE
```
The system should be on a goodbye alert. This can be a user locking the door to go out for a days work or similar situation. All alarm systems should be activated in this situation. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=24 (0x18) - Stop :id=type24

```
VSCP_TYPE_INFORMATION_STOP
```
A node indicates that a stop event occurred. This can for example be a motor stopping. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=25 (0x19) - Start :id=type25

```
VSCP_TYPE_INFORMATION_START
```
A node indicates that a start event occurred. This can be a motor starting. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=26 (0x1A) - ResetCompleted :id=type26

```
VSCP_TYPE_INFORMATION_RESET_COMPLETED
```
A node indicates that a reset occurred. This can be a node doing a warm start. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=27 (0x1B) - Interrupted :id=type27

```
VSCP_TYPE_INFORMATION_INTERRUPTED
```
A node indicates that a reset occurred. This can also be a node doing a warm start. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=28 (0x1C) - PreparingToSleep :id=type28

```
VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP
```
A node indicates that a sleep event occurred. This can be a node going to its inactive state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=29 (0x1D) - WokenUp :id=type29

```
VSCP_TYPE_INFORMATION_WOKEN_UP
```
A node indicates that a wakeup event occurred. This can be a node going to it awake state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=30 (0x1E) - Dusk :id=type30

```
VSCP_TYPE_INFORMATION_DUSK
```
A node indicates that the system should enter its dusk state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=31 (0x1F) - Dawn :id=type31

```
VSCP_TYPE_INFORMATION_DAWN
```
A node indicates that the system should enter its dawn state. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=32 (0x20) - Active :id=type32

```
VSCP_TYPE_INFORMATION_ACTIVE
```
A node indicates that its active. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=33 (0x21) - Inactive :id=type33

```
VSCP_TYPE_INFORMATION_INACTIVE
```
A node indicates that its inactive. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=34 (0x22) - Busy :id=type34

```
VSCP_TYPE_INFORMATION_BUSY
```
A node indicates that its busy. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=35 (0x23) - Idle :id=type35

```
VSCP_TYPE_INFORMATION_IDLE
```
A node indicates that its idle. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=36 (0x24) - Stream Data :id=type36

```
VSCP_TYPE_INFORMATION_STREAM_DATA
```
A steam of information from a node can be reported with this event. This can be a serial RS-232 channel or some other sequential stream. 

 | Data byte | Description                                                                                                                                                                                                                                  | 
 | :---------: | -----------                                                                                                                                                                                                                                  | 
 | 0         | Sequence number which is increased by one for every new event with stream data. The sequence number is increased for every frame sent going from 0 - 255 and back to 0 and so on if needed. A new stream starts with a sequence number of 0. | 
 | 1-7       | Stream data.                                                                                                                                                                                                                                 | 



----


## Type=37 (0x25) - Token Activity :id=type37

```
VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY
```
This event is used for cards, RFID's, iButtons, GSM phones and other identification devices. The event is generated when the token device is attached/detached to/from the system. Level II has a counterpart to this event that can take more data. CLASS2.INFORMATION Type=1

Depending on the Token device type a number of this event are sent on the segment with frame index increase for each event. The total expected number can be deduced from the type. 

 | Data byte | Description                                                                                      | 
 | :---------: | -----------                                                                                      | 
 | 0         | Bit 0,1 - Event code. Bit 2-7 - Token device type code.                                          | 
 | 1         | Zone.                                                                                            | 
 | 2         | Sub-zone.                                                                                        | 
 | 3         | Frame index (Increase by one for every frame sent out for one token activity. Start with zero ). | 
 | 4-7       | Token data.                                                                                      | 

#####  Event codes

 | Code | Description           | 
 | ---- | -----------           | 
 | 0    | Touched and released. | 
 | 1    | Touched.              | 
 | 2    | Released.             | 
 | 3    | Reserved.             | 

##### Token device type codes

 | Code  | Description                                                                                                                     | Size    
 | ----  | -----------                                                                                                                     | ----    
 | 0     | Unknown Token.                                                                                                                  | 128-bits | 
 | 1     | iButton 64-bit token.                                                                                                           | 64-bits  | 
 | 2     | RFID Token.                                                                                                                     | 64-bits  | 
 | 3     | RFID Token.                                                                                                                     | 128-bits | 
 | 4     | RFID Token.                                                                                                                     | 256-bits | 
 | 5-8   | Reserved.                                                                                                                       |          | 
 | 9     | ID/Credit card.                                                                                                                 | 128-bits | 
 | 10-15 | Reserved.                                                                                                                       |          | 
 | 16    | Biometric device.                                                                                                               | 256-bits | 
 | 17    | Biometric device.                                                                                                               | 64-bits  | 
 | 18    | Bluetooth device.                                                                                                               | 48-bits  | 
 | 19    | GSM IMEI code (International Mobile Equipment Identity) AA-BBBBBB-CCCCCC-D packed in 64 bits. https://en.wikipedia.org/wiki/IMEI | 64-bits  | 
 | 20    | GSM IMSI code (International Mobile Subscriber Identity) packed in 64 bits. https://en.wikipedia.org/wiki/IMSI                   | 64-bits  | 
 | 21    | RFID Token.                                                                                                                     | 40-bits  | 
 | 22    | RFID Token.                                                                                                                     | 32-bits  | 
 | 23    | RFID Token.                                                                                                                     | 24-bits  | 
 | 24    | RFID Token.                                                                                                                     | 16-bits  | 
 | 25    | RFID Token.                                                                                                                     | 8-bits   | 
 | 26-63 | Reserved.                         |          | 


----


## Type=38 (0x26) - Stream Data with zone :id=type38

```
VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE
```
A steam of information from a node can be reported with this event. This can be a serial RS-232 channel or some other sequential stream. 

 | Data byte | Description                                                                                                                                                                                                                                  | 
 | :---------: | -----------                                                                                                                                                                                                                                  | 
 | 0         | Zone.                                                                                                                                                                                                                                        | 
 | 1         | Sub-zone.                                                                                                                                                                                                                                    | 
 | 2         | Sequence number which is increased by one for every new event with stream data. The sequence number is increased for every frame sent going from 0 - 255 and back to 0 and so on if needed. A new stream starts with a sequence number of 0. | 
 | 3-7       | Stream data.                                                                                                                                                                                                                                | 



----


## Type=39 (0x27) - Confirm :id=type39

```
VSCP_TYPE_INFORMATION_CONFIRM
```
This event can be used as a general confirm event for zoned and stream data. 

 | Data byte | Description             | 
 | :---------: | -----------           | 
 | 0         | Zone.                   | 
 | 1         | Sub-zone.               | 
 | 2         | Sequence number byte    |
 | 3         | Class MSB.              | 
 | 4         | Class LSB.              | 
 | 5         | Type MSB.               | 
 | 6         | Type LSB.               | 



----


## Type=40 (0x28) - Level Changed :id=type40

```
VSCP_TYPE_INFORMATION_LEVEL_CHANGED
```
Response/confirmation from ex. a dimmer control after a dimmer command or some other unit that change a level. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Relative or absolute level.                                        | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=41 (0x29) - Warning :id=type41

```
VSCP_TYPE_INFORMATION_WARNING
```
 A node indicates that a warning condition occurred. 

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0         | Reserved level. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=42 (0x2A) - State :id=type42

```
VSCP_TYPE_INFORMATION_STATE
```
A node indicates that a state change has occurred. Th numerical ID for the current state and the state that is about to become active is supplied. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3         | State changed from.                                                | 
 | 4         | New State.                                                         | 



----


## Type=43 (0x2B) - Action Trigger :id=type43

```
VSCP_TYPE_INFORMATION_ACTION_TRIGGER
```
A node indicates that an action has been triggered by this event. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Action ID.                                                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=44 (0x2C) - Sunrise :id=type44

```
VSCP_TYPE_INFORMATION_SUNRISE
```
A node indicates that sunrise is detected/calculated. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=45 (0x2D) - Sunset :id=type45

```
VSCP_TYPE_INFORMATION_SUNSET
```
A node indicates that sunset is detected/calculated. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=46 (0x2E) - Start of record :id=type46

```
VSCP_TYPE_INFORMATION_START_OF_RECORD
```
This event is used to mark the start of a multi-frame data transfer. This can typically be a GPS received which sends a train of events from one GPS record. The index byte can be used to distinguish record between each other. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3         | Number of frames to follow or zero for not used.                   | 



----


## Type=47 (0x2F) - End of record :id=type47

```
VSCP_TYPE_INFORMATION_END_OF_RECORD
```
This event is used to mark the end of a multi-frame data transfer. The index byte can be used to distinguish record between each other. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=48 (0x30) - Pre-set active :id=type48

```
VSCP_TYPE_INFORMATION_PRESET_ACTIVE
```
This event is used to tell the system that a pre-set configuration is active. Usually a response from a node after a CLASS1.CONTROL, Type=28 has been received by a node.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3         | Code for pre-set that has been set.                                | 



----


## Type=49 (0x31) - Detect :id=type49

```
VSCP_TYPE_INFORMATION_DETECT
```
This event is used to tell the system that a detection of some kind has occurred. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

The first byte is used as an index if a module have several channels or detectors. 



----


## Type=50 (0x32) - Overflow :id=type50

```
VSCP_TYPE_INFORMATION_OVERFLOW
```
This event is used to tell the system that an overflow of some kind has occurred. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index.                                                             | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 

The first byte is used as an index if a module have several channels or detectors.



----


## Type=51 (0x33) - Big level changed :id=type51

```
VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED
```
This is meant to be used as a confirmation event for CLASS1.CONTROL, Type=33 events.

 | Data byte | Description                                                                                               | 
 | :---------: | -----------                                                                                               | 
 | 0         | Index.                                                                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.                                                | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.                                        | 
 | 3,4,5,6,7 | Level as signed Integer. The range can be adjusted by the user by sending the needed number of bytes 1-5. | 



----


## Type=52 (0x34) - Civil sunrise twilight time :id=type52

```
VSCP_TYPE_INFORMATION_SUNRISE_TWILIGHT_START
```
Civil twilight is the period when the Sun is below the horizon but its center is less than 6 degrees below. The "Civil Twilight Starts" time is the dawn or civil dawn, with the center of the Sun at exactly 6 degrees below the horizon. Equally, the "Civil Twilight Ends" time is dusk or civil dusk, when the Sun is 6 degrees below the horizon in the evening.

During civil twilight, the sky is still illuminated, and with clear weather it is brightest in the direction of the Sun. The Moon and the brightest stars and planets may be visible. It is usually bright enough for outdoor activities without additional lighting.

Near the equator, where the Sun sets and rises in an almost vertical direction, the civil twilight period can last only 21 minutes, a very fast nightfall compared to the much longer periods at southern and northern latitudes. In regions north of 60°24' N or south of 60°24' S, there will be at least one night when it does not get darker than this.

Technically, the start and end times are when the true geocentric position of the Sun is 96 degrees from the zenith position.

A node indicates that sunrise twilight time is detected/calculated. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=53 (0x35) - Civil sunset twilight time :id=type53

```
VSCP_TYPE_INFORMATION_SUNSET_TWILIGHT_START
```
A node indicates that sunset twilight time is detected/calculated.

Civil twilight is the period when the Sun is below the horizon but its center is less than 6 degrees below. The "Civil Twilight Starts" time is the dawn or civil dawn, with the center of the Sun at exactly 6 degrees below the horizon. Equally, the "Civil Twilight Ends" time is dusk or civil dusk, when the Sun is 6 degrees below the horizon in the evening.

During civil twilight, the sky is still illuminated, and with clear weather it is brightest in the direction of the Sun. The Moon and the brightest stars and planets may be visible. It is usually bright enough for outdoor activities without additional lighting.

Near the equator, where the Sun sets and rises in an almost vertical direction, the civil twilight period can last only 21 minutes, a very fast nightfall compared to the much longer periods at southern and northern latitudes. In regions north of 60°24' N or south of 60°24' S, there will be at least one night when it does not get darker than this.

Technically, the start and end times are when the true geocentric position of the Sun is 96 degrees from the zenith position.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=54 (0x36) - Nautical sunrise twilight time :id=type54

```
VSCP_TYPE_INFORMATION_NAUTICAL_SUNRISE_TWILIGHT_START
```
A node indicates that nautical sunrise twilight time is detected/calculated. 

Nautical twilight is the period when the center of the Sun is between 6 and 12 degrees below the horizon, when bright stars are still visible in clear weather and the horizon is becoming visible. It is too dark to do outdoor activities without additional lighting.

In the morning, nautical twilight starts at nautical dawn, when the Sun rises above 12 degrees below the horizon; it ends when the Sun's center reaches 6 degrees below the horizon. In the evening, nautical twilight begins when the Sun sinks below 6 degrees; it ends at nautical dusk, when the Sun is lower than 12 degrees below the horizon.

For locations north of 54°34' N or south of 54°34' S latitude, the Sun will never be lower than 12 degrees below the horizon for a period in the summer.

Technically, the start and end times are when the true geocentric position of the Sun is 102 degrees from the zenith position.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=55 (0x37) - Nautical sunset twilight time :id=type55

```
VSCP_TYPE_INFORMATION_NAUTICAL_SUNSET_TWILIGHT_START
```
A node indicates that nautical sunset twilight time is detected/calculated.

Nautical twilight is the period when the center of the Sun is between 6 and 12 degrees below the horizon, when bright stars are still visible in clear weather and the horizon is becoming visible. It is too dark to do outdoor activities without additional lighting.

In the morning, nautical twilight starts at nautical dawn, when the Sun rises above 12 degrees below the horizon; it ends when the Sun's center reaches 6 degrees below the horizon. In the evening, nautical twilight begins when the Sun sinks below 6 degrees; it ends at nautical dusk, when the Sun is lower than 12 degrees below the horizon.

For locations north of 54°34' N or south of 54°34' S latitude, the Sun will never be lower than 12 degrees below the horizon for a period in the summer.

Technically, the start and end times are when the true geocentric position of the Sun is 102 degrees from the zenith position.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=56 (0x38) - Astronomical sunrise twilight time :id=type56

```
VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNRISE_TWILIGHT_START
```
A node indicates that astronomical sunrise twilight time is detected/calculated. 

Astronomical twilight is the period when the center of the Sun is between 12 and 18 degrees below the horizon. It starts at astronomical dawn, early in the morning when the Sun is higher than 18 degrees below the horizon. From this point, it will be difficult to observe certain faint stars, galaxies, and other objects because the Sun starts to illuminate the sky. Astronomical twilight ends at astronomical dusk in the late evening, when those faint objects again can be visible because the Sun is lower than 18 degrees below the horizon. In locations north of 48°24' N or south of 48°24', it never gets darker than this near the middle of the summer solstice (June or December).

Technically, the start and end times are when the true geocentric position of the Sun is 108 degrees from the zenith position, or directly above the observer.

Astronomical twilight is the period when the center of the Sun is between 12 and 18 degrees below the horizon.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=57 (0x39) - Astronomical sunset twilight time :id=type57

```
VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNSET_TWILIGHT_START
```
A node indicates that astronomical sunset twilight time is detected/calculated.

Astronomical twilight is the period when the center of the Sun is between 12 and 18 degrees below the horizon. It starts at astronomical dawn, early in the morning when the Sun is higher than 18 degrees below the horizon. From this point, it will be difficult to observe certain faint stars, galaxies, and other objects because the Sun starts to illuminate the sky. Astronomical twilight ends at astronomical dusk in the late evening, when those faint objects again can be visible because the Sun is lower than 18 degrees below the horizon. In locations north of 48°24' N or south of 48°24', it never gets darker than this near the middle of the summer solstice (June or December).

Technically, the start and end times are when the true geocentric position of the Sun is 108 degrees from the zenith position, or directly above the observer.

Astronomical twilight is the period when the center of the Sun is between 12 and 18 degrees below the horizon.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | User specified.                                                    | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=58 (0x3A) - Calculated Noon :id=type58

```
VSCP_TYPE_INFORMATION_CALCULATED_NOON
```
This event is used for reporting of a calculated noon (real noon).

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=59 (0x3B) - Shutter up :id=type59

```
VSCP_TYPE_INFORMATION_SHUTTER_UP
```
Shutter is moving up.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=60 (0x3C) - Shutter down :id=type60

```
VSCP_TYPE_INFORMATION_SHUTTER_DOWN
```
Shutter is moving down.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=61 (0x3D) - Shutter left :id=type61

```
VSCP_TYPE_INFORMATION_SHUTTER_LEFT
```
Shutter is moving left.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=62 (0x3E) - Shutter right :id=type62

```
VSCP_TYPE_INFORMATION_SHUTTER_RIGHT
```
Shutter is moving right.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=63 (0x3F) - Shutter reached top end :id=type63

```
VSCP_TYPE_INFORMATION_SHUTTER_END_TOP
```
Shutter reached top end.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 




----


## Type=64 (0x40) - Shutter reached bottom end :id=type64

```
VSCP_TYPE_INFORMATION_SHUTTER_END_BOTTOM
```
Shutter reached bottom end.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=65 (0x41) - Shutter reached middle end :id=type65

```
VSCP_TYPE_INFORMATION_SHUTTER_END_MIDDLE
```
Shutter reached middle end.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=66 (0x42) - Shutter reached preset end :id=type66

```
VSCP_TYPE_INFORMATION_SHUTTER_END_PRESET
```
Shutter reached preset end.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=67 (0x43) - Shutter reached preset left :id=type67

```
VSCP_TYPE_INFORMATION_SHUTTER_END_LEFT
```
Shutter reached preset left.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=68 (0x44) - Shutter reached preset right :id=type68

```
VSCP_TYPE_INFORMATION_SHUTTER_END_RIGHT
```
Shutter reached preset right.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Reserved.                                                          | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=69 (0x45) - Long click :id=type69

```
VSCP_TYPE_INFORMATION_LONG_CLICK
```
Long click detected.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device generating long click. Set to zero if not used.   | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=70 (0x46) - Single click :id=type70

```
VSCP_TYPE_INFORMATION_SINGLE_CLICK
```
Single click detected.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device generating single click. Set to zero if not used. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=71 (0x47) - Double click :id=type71

```
VSCP_TYPE_INFORMATION_DOUBLE_CLICK
```
Double click detected.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device generating double click. Set to zero if not used. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=72 (0x48) - Date :id=type72

```
VSCP_TYPE_INFORMATION_DATE
```
A device generated a date event. Time is UTC. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device generating date. Set to zero if not used.         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3         | year century                                                       | 
 | 4         | year                                                               | 
 | 5         | month (1-12)                                                       | 
 | 6         | day (1-31)                                                         | 

See also [CLASS1.INFORMATION, Type=77](./class1.information.md#type77) which combines date and time in one event.



----


## Type=73 (0x49) - Time :id=type73

```
VSCP_TYPE_INFORMATION_TIME
```
A device generated a time event. Time is UTC. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device generating time. Set to zero if not used.         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3         | Hour (0-23)                                                        | 
 | 4         | minutes (0-59)                                                     | 
 | 5         | seconds (0-60)                                                     | 
 | 6         | milliseconds MSB (0-999)                                           | 
 | 7         | milliseconds LSB (0-999)                                           | 

See also [CLASS1.INFORMATION, Type=77](./class1.information.md#type77) which combines date and time in one event.



----


## Type=74 (0x4A) - Weekday :id=type74

```
VSCP_TYPE_INFORMATION_WEEKDAY
```
A device generated a weekday event.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device generating weekday info. Set to zero if not used. | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3         | Weekday ( 0 (Monday) - 6 (Sunday))                                 | 



----


## Type=75 (0x4B) - Lock :id=type75

```
VSCP_TYPE_INFORMATION_LOCK
```
A device got locked.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=76 (0x4C) - Unlock :id=type76

```
VSCP_TYPE_INFORMATION_UNLOCK
```
A device got unlocked.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=77 (0x4D) - DateTime :id=type77

```
VSCP_TYPE_INFORMATION_DATETIME
```
A device generated a date/time event. Time is UTC. 

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3 - 7     | Date/time in  five byte bit array.                                 | 

**Bitfields** 

 | Year  | Month | Day   | Hour  | Minute | Second | 
 | :----:  | :-----: | :---:   | :----:  | :------: | :------: | 
 | 26-37 | 22-25 | 17-21 | 12-16 | 6-11   | 0-5    | 

Bit 39 is bit 7 of data byte 4. Bit 0 is bit 0 of data byte 7.

Bit 39 and bit 38 is reserved.

** Valid values**

 | Item    | Value range | 
 | :----:    | :-----------: | 
 | Year    | 0-4095      | 
 | Month   | 1-12        | 
 | Day     | 1-31        | 
 | Hour    | 0-23        | 
 | Minute  | 0-59        | 
 | Seconds | 0-59        | 



----


## Type=78 (0x4E) - Rising :id=type78

```
VSCP_TYPE_INFORMATION_RISING
```
A rising (edge) is detected.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=79 (0x4F) - Falling :id=type79

```
VSCP_TYPE_INFORMATION_FALLING
```
A falling (edge) is detected.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=80 (0x50) - Updated :id=type80

```
VSCP_TYPE_INFORMATION_UPDATED
```
Something has been updated.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=81 (0x51) - Connect :id=type81

```
VSCP_TYPE_INFORMATION_CONNECT
```
Something has been connected.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=82 (0x52) - Disconnect :id=type82

```
VSCP_TYPE_INFORMATION_DISCONNECT
```
Something has been disconnected.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=83 (0x53) - Reconnect :id=type83

```
VSCP_TYPE_INFORMATION_RECONNECT
```
Something has been reconnected.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for device. Set to zero if not used.                         | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=84 (0x54) - Enter :id=type84

```
VSCP_TYPE_INFORMATION_ENTER
```
Enter, something has been entered.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Index for device. Set to zero if not used. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=85 (0x55) - Exit :id=type85

```
VSCP_TYPE_INFORMATION_EXIT
```
Exit, something has been exited.

 | Data byte | Description | 
 | :---------: | ----------- | 
 | 0 | Index for device. Set to zero if not used.| 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 


----


## Type=86 (0x56) - Incremented :id=type86

```
VSCP_TYPE_INFORMATION_INCREMENTED
```
This is meant to be used as a confirmation event for CLASS1.CONTROL, Type=52 events.

 | Data byte | Description  | 
 | :---------: | -----------   | 
 | 0         | Optional byte that have a meaning given by the issuer of the event.        | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.   | 
 | 3-7       | Incremented value. The range can be adjusted by the user by sending just the needed number of bytes 1-5. | 



----


## Type=87 (0x57) - Decremented :id=type87

```
VSCP_TYPE_INFORMATION_DECREMENTED
```
This is meant to be used as a confirmation event for CLASS1.CONTROL, Type=53 events.

 | Data byte | Description  | 
 | :---------: | -----------   | 
 | 0         | Optional byte that have a meaning given by the issuer of the event.        | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.        | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones.   | 
 | 3-7       | Decremented value. The range can be adjusted by the user by sending just the needed number of bytes 1-5. | 



----


## Type=88 (0x58) - Proximity detected :id=type88

```
VSCP_TYPE_INFORMATION_PROXIMITY_DETECTED
```
Proximity detected.

 | Data byte | Description  | 
 | :---------: | -----------   | 
 | 0 | Optional byte that have a meaning given by the issuer of the event. | 
 | 1 | Zone for which event applies to (0-255). 255 is all zones. | 
 | 2 | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 
 | 3, 4 | Optional uint16 that sets proximity level if present. | 
 



----


[filename](./bottom_copyright.md ':include')