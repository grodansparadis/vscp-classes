#
# VSCP (Very Simple Control Protocol)
# http://www.vscp.org
#
# The MIT License (MIT)
#
# Copyright (C) 2000-2026 Ake Hedman, The VSCP Project <info@grodansparadis.com>
#
# Make the measurement unit table from the units of CLASS1.MEASUREMENT
# (classes/class_10_measurement.xml).
#
#   python3 make_vscphelper_units.py        C header vscp-units.h (vscp/src/vscp/common)
#   python3 make_vscphelper_units.py json   JSON file vscp-units.json
#
# The C header holds each unit as  value_in_unit_0 = value * scale + offset,
# computed from the conversion0 expression. Every conversion must be linear
# (a * x + b) and conversion must be the inverse of conversion0, otherwise
# the script stops with an error and writes nothing.
#
# The JSON file holds the expressions themselves, for code that evaluates
# them at runtime.
#

import ast
import datetime
from fractions import Fraction
import json
import operator
import re
import sys
import xml.etree.ElementTree as ET

CLASS_FILE = "../classes/class_10_measurement.xml"
VAL = re.compile(r"\{\{\{?\s*val\s*\}?\}\}")


def fail(msg):
    sys.stderr.write("make_vscphelper_units.py: " + msg + "\n")
    sys.exit(1)


_OPS = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv}


def evaluate(expr, value):
    """Evaluate a unit expression: numbers, + - * /, unary +/-, parentheses
    and {{{val}}}. The same grammar as vscp_evalUnitExpression() in vscp.
    Computed with exact fractions (numbers are taken as written)."""
    text = VAL.sub("__val__", expr)

    def ev(node):
        if isinstance(node, ast.Expression):
            return ev(node.body)
        if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)) and not isinstance(node.value, bool):
            return Fraction(repr(node.value))
        if isinstance(node, ast.Name) and node.id == "__val__":
            return Fraction(value)
        if isinstance(node, ast.BinOp) and type(node.op) in _OPS:
            return _OPS[type(node.op)](ev(node.left), ev(node.right))
        if isinstance(node, ast.UnaryOp) and isinstance(node.op, (ast.UAdd, ast.USub)):
            v = ev(node.operand)
            return -v if isinstance(node.op, ast.USub) else v
        raise ValueError("not allowed in a unit expression: " + ast.dump(node)[:60])

    try:
        return ev(ast.parse(text.strip(), mode="eval"))
    except (SyntaxError, ValueError, ZeroDivisionError) as ex:
        raise ValueError("%r: %s" % (expr, ex))


def close(a, b):
    return abs(a - b) <= 1e-9 * max(1.0, abs(a), abs(b))


def read_units():
    root = ET.parse(CLASS_FILE).getroot()
    units = []
    for t in root.iter("type"):
        tid = int(t.attrib["id"])
        for u in t.iter("unit"):
            uid = int(u.attrib["id"])
            where = "type %d unit %d (%s)" % (tid, uid, u.attrib.get("name", ""))
            c0 = u.attrib.get("conversion0", "{{{val}}}")
            c = u.attrib.get("conversion", "{{{val}}}")
            convertible = u.attrib.get("convertible", "true").strip().lower() not in ("false", "0", "no")
            if any(x["type"] == tid and x["unit"] == uid for x in units):
                fail(where + ": unit id used twice")
            try:
                offset = evaluate(c0, 0)
                scale = evaluate(c0, 1) - offset
                for x in (Fraction(-50), Fraction("3.3"), Fraction(12345)):
                    if evaluate(c0, x) != scale * x + offset:
                        fail(where + ": conversion0 is not linear (a * x + b): " + c0)
                    if evaluate(c, evaluate(c0, x)) != x:
                        fail(where + ": conversion is not the inverse of conversion0")
            except ValueError as ex:
                fail(where + ": " + str(ex))
            if scale == 0.0:
                fail(where + ": conversion0 does not depend on the value")
            if uid == 0 and not (scale == 1.0 and offset == 0.0):
                fail(where + ": unit 0 must convert to itself")
            units.append({
                "type": tid,
                "unit": uid,
                "name": u.attrib.get("name", "").strip(),
                "description": u.attrib.get("description", "").strip(),
                "symbol-ascii": u.attrib.get("symbol-ascii", "").strip(),
                "symbol-utf8": u.attrib.get("symbol-utf8", "").strip(),
                "convertible": convertible,
                "conversion0": c0.strip(),
                "conversion": c.strip(),
                "scale": float(scale),
                "offset": float(offset),
            })
    units.sort(key=lambda x: (x["type"], x["unit"]))
    return units


def c_string(s):
    """C string literal; non-ASCII as octal escapes (safe before any character)."""
    out = []
    for b in s.encode("utf-8"):
        ch = chr(b)
        if ch in '\\"':
            out.append("\\" + ch)
        elif 32 <= b < 127:
            out.append(ch)
        else:
            out.append("\\%03o" % b)
    return '"' + "".join(out) + '"'


def c_double(v):
    if v == int(v) and abs(v) < 1e15:
        return "%d.0" % int(v)
    return repr(float(v))


def make_header(units):
    print("""/*
            !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!
                           This file is auto-generated
                see https://github.com/grodansparadis/vscp-classes
                        Generated: %s
*/

/*
  Measurement units of CLASS1.MEASUREMENT (class 10). The same types and
  units are used by all measurement classes (X1-X4 included).

  A value in a unit is converted to the default unit (unit 0) with

      value_in_unit_0 = value * scale + offset

  and back with  value = (value_in_unit_0 - offset) / scale.
  Units with convertible = 0 can not be converted (for example latitude
  and longitude); they only have a name and symbol.
*/

#ifndef VSCP_UNITS_H
#define VSCP_UNITS_H

#include <stdint.h>

typedef struct vscp_unit_def {
  uint16_t vscp_type;        /* Measurement type (CLASS1.MEASUREMENT type) */
  uint8_t unit;              /* Unit 0-255 */
  uint8_t convertible;       /* 1 if the unit can be converted to/from unit 0 */
  double scale;              /* value_in_unit_0 = value * scale + offset */
  double offset;
  const char *name;
  const char *symbol_ascii;
  const char *symbol_utf8;
} vscp_unit_def_t;

static const vscp_unit_def_t vscp_unit_table[] = {""" % datetime.datetime.now())
    for u in units:
        print("  { %d, %d, %d, %s, %s, %s, %s, %s }," % (
            u["type"], u["unit"], 1 if u["convertible"] else 0, c_double(u["scale"]), c_double(u["offset"]),
            c_string(u["name"]), c_string(u["symbol-ascii"]), c_string(u["symbol-utf8"])))
    print("""};

#define VSCP_UNIT_TABLE_SIZE (sizeof(vscp_unit_table) / sizeof(vscp_unit_table[0]))

#endif /* VSCP_UNITS_H */""")


def make_json(units):
    out = {
        "generated": str(datetime.datetime.now()),
        "source": "https://github.com/grodansparadis/vscp-classes",
        "description": "Measurement units of CLASS1.MEASUREMENT (class 10), used by all measurement classes. "
                       "conversion0 converts a value in the unit to unit 0, conversion converts a unit 0 value "
                       "to the unit. {{{val}}} is the value.",
        "units": [{k: u[k] for k in ("type", "unit", "name", "description", "symbol-ascii", "symbol-utf8",
                                     "convertible", "conversion0", "conversion")} for u in units],
    }
    print(json.dumps(out, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    units = read_units()
    if len(sys.argv) > 1 and sys.argv[1] == "json":
        make_json(units)
    else:
        make_header(units)
