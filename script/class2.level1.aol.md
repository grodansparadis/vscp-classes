# Class=562 (0x0232) - Class2 Level I AOL

    CLASS2.LEVEL1.AOL

## Description

This class mirrors the [CLASS1.AOL](./class1.aol.md) class but use a different data format with a GUID stored in the first 16 bytes of the data followed by the standard data thus offset with 16-bytes.

See [CLASS2.PROTOCOL1](./class2.protocol1.md) for more information on the data format.
## Type=0 (0x00) - General event :id=type0
    VSCP_TYPE_AOL_GENERALGeneral Event.


----


## Type=1 (0x01) - System unplugged from power source :id=type1
    VSCP_TYPE_AOL_UNPLUGGED_POWERThis node was unplugged from its power source.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=2 (0x02) - System unplugged from network :id=type2
    VSCP_TYPE_AOL_UNPLUGGED_LANThis node was unplugged from the network.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=3 (0x03) - Chassis intrusion :id=type3
    VSCP_TYPE_AOL_CHASSIS_INTRUSIONThis node detected chassis intrusion.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=4 (0x04) - Processor removal :id=type4
    VSCP_TYPE_AOL_PROCESSOR_REMOVALThis node detected processor removal.

 | Data byte | Description                                                        | 
 | --------- | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=5 (0x05) - System environmental errors :id=type5
    VSCP_TYPE_AOL_ENVIRONMENT_ERRORThis node detected system environmental errors.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=6 (0x06) - High temperature :id=type6
    VSCP_TYPE_AOL_HIGH_TEMPERATUREThis node detected high temperature.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=7 (0x07) - Fan speed problem :id=type7
    VSCP_TYPE_AOL_FAN_SPEEDThis node detected Fan speed problem.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=8 (0x08) - Voltage fluctuations :id=type8
    VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONSThis node detected Voltage fluctuations.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=9 (0x09) - Operating system errors :id=type9
    VSCP_TYPE_AOL_OS_ERRORThis node detected Operating system errors.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=10 (0x0A) - System power-on error :id=type10
    VSCP_TYPE_AOL_POWER_ON_ERRORThis node detected System power-on errors.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=11 (0x0B) - System is hung :id=type11
    VSCP_TYPE_AOL_SYSTEM_HUNGThis node detected System is hung.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=12 (0x0C) - Component failure :id=type12
    VSCP_TYPE_AOL_COMPONENT_FAILUREThis node detected Component failure.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=13 (0x0D) - Remote system reboot upon report of a critical failure :id=type13
    VSCP_TYPE_AOL_REBOOT_UPON_FAILUREThis node detected Remote system reboot upon report of a critical failure.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=14 (0x0E) - Repair Operating System :id=type14
    VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEMThis node detected Repair Operating System.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=15 (0x0F) - Update BIOS image :id=type15
    VSCP_TYPE_AOL_UPDATE_BIOS_IMAGEThis node detected Update BIOS image.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


## Type=16 (0x10) - Update Perform other diagnostic procedures :id=type16
    VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDUREThis node detected Update Perform other diagnostic procedures.

 | Data byte | Description                                                        | 
 | :---------: | -----------                                                        | 
 | 0         | Index for record.                                                  | 
 | 1         | Zone for which event applies to (0-255). 255 is all zones.         | 
 | 2         | Sub-zone for which event applies to (0-255). 255 is all sub-zones. | 



----


[filename](./bottom_copyright.md ':include')