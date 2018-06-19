-- Create the VSCP class table
CREATE TABLE "vscp_class" ( `class` INTEGER NOT NULL UNIQUE, `name` TEXT NOT NULL, `token` TEXT NOT NULL UNIQUE, `description` TEXT NOT NULL, PRIMARY KEY(class) );