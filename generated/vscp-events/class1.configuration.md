# Class=120 (0x78) - Configuration

    CLASS1.CONFIGURATION

## Description

Events for configuration of sets and parameters on nodes without register manipulation.

## Type=0 (0x00) - General event :id=type0
```
VSCP_TYPE_CONFIGURATION_GENERAL
```
General Event.
----

## Type=1 (0x01) - Load configuration :id=type1
```
VSCP_TYPE_CONFIGURATION_LOAD
```
Load a specific configuration on a node.  The configuration to load is defined by a 16-byte configuration id. It is recommended that configuration id zero is the default configuration.

The optional control byte can be used to request a reset if the device after configuration is loaded.


CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_LOAD_ACK should be sent by the node after loading the new configuration to acknowledge a successful load of configuration data.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_LOAD_NACK should be sent by the node after loading the new configuration to negative acknowledge a failed load of configuration data.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Index.                | 
 | 1    | Zone.                 | 
 | 2    | Subzone.              | 
 | 3    | Configuration id MSB. | 
 | 4    | Configuration id LSB. |
 | 5    | Control byte (optional). |

## Control byte

| Bit | Description | 
| :----: | ----------- | 
| 0-6    | Reserved.   | 
| 7    | Reboot device after configuration is loaded.   | 

----

## Type=2 (0x02) - Load configuration acknowledge :id=type2
```
VSCP_TYPE_CONFIGURATION_LOAD_ACK
```
This event should be sent by the node after loading a new configuration to acknowledge a successful load of configuration data. The configuration id for the successfully loaded configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=3 (0x03) - Load configuration negative acknowledge :id=type3
```
VSCP_TYPE_CONFIGURATION_LOAD_NACK
```
This event should be sent by the node after loading a new configuration to negative acknowledge an unsuccessful load of configuration data. The configuration id for the unsuccessfully loaded configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=4 (0x04) - Save configuration :id=type4
```
VSCP_TYPE_CONFIGURATION_SAVE
```
Save a specific configuration on a node.  The configuration to save is identified by a 16-byte configuration id. It is recommended that configuration id zero is the default configuration.

The optional control byte can be used to request a reset if the device after configuration is saved.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_SAVE_ACK should be sent by the node after saving the new configuration to acknowledge a successful save of configuration data.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_SAVE_NACK should be sent by the node after saving the new configuration to negative acknowledge a failed save of configuration data.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Index.                | 
 | 1    | Zone.                 | 
 | 2    | Subzone.              | 
 | 3    | Configuration id MSB. | 
 | 4    | Configuration id LSB. |
 | 5    | Control byte (optional). |

## Control byte

| Bit | Description | 
| :----: | ----------- | 
| 0-6    | Reserved.   | 
| 7    | Reboot device after configuration is saved.   | 

----

## Type=5 (0x05) - Save configuration acknowledge :id=type5
```
VSCP_TYPE_CONFIGURATION_SAVE_ACK
```
This event should be sent by the node after saving a new configuration to acknowledge a successful save of configuration data. The configuration id for the successfully saved configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=6 (0x06) - Save configuration negative acknowledge :id=type6
```
VSCP_TYPE_CONFIGURATION_SAVE_NACK
```
This event should be sent by the node after saving a new configuration to negative acknowledge an unsuccessful save of configuration data. The configuration id for the unsuccessfully saved configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=7 (0x07) - commit configuration :id=type7
```
VSCP_TYPE_CONFIGURATION_COMMIT
```
Commit a specific configuration on a node.  The configuration to commit is identified by a 16-byte configuration id. It is recommended that configuration id zero is the default configuration.

The optional control byte can be used to request a reset if the device after configuration is saved.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_COMMIT_ACK should be sent by the node after committing the new configuration to acknowledge a successful commit of configuration data.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_COMMIT_NACK should be sent by the node after committing the new configuration to negative acknowledge a failed commit of configuration data.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Index.                | 
 | 1    | Zone.                 | 
 | 2    | Subzone.              | 
 | 3    | Configuration id MSB. | 
 | 4    | Configuration id LSB. |
 | 5    | Control byte (optional). |

## Control byte

| Bit | Description | 
| :----: | ----------- | 
| 0-6    | Reserved.   | 
| 7    | Reboot device after configuration is committed.   | 

----

## Type=8 (0x08) - Commit configuration acknowledge :id=type8
```
VSCP_TYPE_CONFIGURATION_COMMIT_ACK
```
This event should be sent by the node after committing a new configuration to acknowledge a successful commit of configuration data. The configuration id for the successfully committed configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=9 (0x09) - Commit configuration negative acknowledge :id=type9
```
VSCP_TYPE_CONFIGURATION_COMMIT_NACK
```
This event should be sent by the node after committing a new configuration to negative acknowledge an unsuccessful commit of configuration data. The configuration id for the unsuccessfully committed configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=10 (0x0A) - Reload configuration :id=type10
```
VSCP_TYPE_CONFIGURATION_RELOAD
```
Reload a specific configuration on a node.  The configuration to reload is identified by a 16-byte configuration id. It is recommended that configuration id zero is the default configuration.

The optional control byte can be used to request a reset if the device after configuration is saved.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_RELOAD_ACK should be sent by the node after reloadinf the new configuration to acknowledge a successful reload of configuration data.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_RELOAD_NACK should be sent by the node after reloading the new configuration to negative acknowledge a failed reload of configuration data.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Index.                | 
 | 1    | Zone.                 | 
 | 2    | Subzone.              | 
 | 3    | Configuration id MSB. | 
 | 4    | Configuration id LSB. |
 | 5    | Control byte (optional). |

## Control byte

| Bit | Description | 
| :----: | ----------- | 
| 0-6    | Reserved.   | 
| 7    | Reboot device after configuration is reloaded.   | 

----

## Type=11 (0x0B) - Reload configuration acknowledge :id=type11
```
VSCP_TYPE_CONFIGURATION_REALOD_ACK
```
This event should be sent by the node after reloading a new configuration to acknowledge a successful reload of configuration data. The configuration id for the successfully reloaded configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=12 (0x0C) - Reload configuration negative acknowledge :id=type12
```
VSCP_TYPE_CONFIGURATION_RELOAD_NACK
```
This event should be sent by the node after reloading a new configuration to negative acknowledge an unsuccessful reload of configuration data. The configuration id for the unsuccessfully reloaded configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=13 (0x0D) - Restore configuration :id=type13
```
VSCP_TYPE_CONFIGURATION_RESTORE
```
Restore a specific configuration on a node.  The configuration to restore is identified by a 16-byte configuration id. It is recommended that configuration id zero is the default configuration.

The optional control byte can be used to request a reset if the device after configuration is saved.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_RESTORE_ACK should be sent by the node after restoring the new configuration to acknowledge a successful restore of configuration data.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_RESTORE_NACK should be sent by the node after restoring the new configuration to negative acknowledge a failed restore of configuration data.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Index.                | 
 | 1    | Zone.                 | 
 | 2    | Subzone.              | 
 | 3    | Configuration id MSB. | 
 | 4    | Configuration id LSB. |
 | 5    | Control byte (optional). |

## Control byte

| Bit | Description | 
| :----: | ----------- | 
| 0-6    | Reserved.   | 
| 7    | Rboot device after configuration is restored.   | 

----

## Type=14 (0x0E) - Restore configuration acknowledge :id=type14
```
VSCP_TYPE_CONFIGURATION_RESTORE_ACK
```
This event should be sent by the node after restoring a new configuration to acknowledge a successful restore of configuration data. The configuration id for the successfully restored configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=15 (0x0F) - Restore configuration negative acknowledge :id=type15
```
VSCP_TYPE_CONFIGURATION_RESTORE_NACK
```
This event should be sent by the node after restoring a new configuration to negative acknowledge an unsuccessful restore of configuration data. The configuration id for the unsuccessfully restored configuration should be given in byte 0 and 1.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Configuration id MSB. | 
 | 1    | Configuration id LSB. |

----

## Type=30 (0x1E) - Set parameter :id=type30
```
VSCP_TYPE_CONFIGURATION_SET_PARAMETER
```
Set a parameter identified by a 16-bit parameter id to a value identified by a 16-bit value identifier. A typical examples of the use of this event is to set the unit for a measurement on one or several nodes. It is recommended that the value identifier zero is used as the default value for a parameter.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_SET_MODE_ACK should be sent by the node after setting the new value.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_SET_MODE_NACK should be sent by the node if it fails to set the new value.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Index.                | 
 | 1    | Zone.                 | 
 | 2    | Subzone.              | 
 | 3    | Parameter id MSB. | 
 | 4    | Parameter id LSB. |
 | 5    | Value id MSB. | 
 | 6    | Value id LSB. |

----

## Type=31 (0x1F) - Set parameter to default :id=type31
```
VSCP_TYPE_CONFIGURATION_SET_PARAMETER_DEFAULT
```
Set the default value for a parameter identified by a 16-bit parameter id. In most cases this is the same as setting the mode for a parameter to value id zero.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_SET_MODE_ACK should be sent by the node after setting the new value.

CLASS1.CONFIGURATION, VSCP_TYPE_CONFIGURATION_SET_MODE_NACK should be sent by the node if it fails to set the new value.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Index.                | 
 | 1    | Zone.                 | 
 | 2    | Subzone.              | 
 | 3    | Parameter id MSB. | 
 | 4    | Parameter id LSB. |
 

----

## Type=32 (0x20) - Set parameter acknowledge :id=type32
```
VSCP_TYPE_CONFIGURATION_SET_PARAMETER_ACK
```
This event should be sent by the node after setting the new value.

 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Parameter id MSB. | 
 | 1    | Parameter id LSB. |
 | 2    | Value id MSB. | 
 | 3    | Value id LSB. |

----

## Type=33 (0x21) - Set paramter negative acknowledge :id=type33
```
VSCP_TYPE_CONFIGURATION_SET_PARAMETER_NACK
```
Should be sent by the node if it fails to set the new value.


 | Byte | Description | 
 | :----: | ----------- | 
 | 0    | Parameter id MSB. | 
 | 1    | Parameter id LSB. |
 | 2    | Value id MSB. | 
 | 3    | Value id LSB. |

----

[filename](./bottom_copyright.md ':include')