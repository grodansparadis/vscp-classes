"""Tests for model.py. They work on a temporary copy of ../classes.

Run with: python3 -m unittest discover -s editor
"""

import difflib
import os
import shutil
import sys
import tempfile
import unittest
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

from model import ClassFile, ModelError, Repository  # noqa: E402

CLASSES = os.path.join(HERE, "..", "classes")


def changed_lines(before, after):
    return [
        line
        for line in difflib.unified_diff(before.splitlines(), after.splitlines(), lineterm="", n=0)
        if line[:1] in "+-" and not line.startswith(("+++", "---"))
    ]


class ModelTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.dir = os.path.join(self.tmp, "classes")
        shutil.copytree(CLASSES, self.dir)
        self.repo = Repository(self.dir)

    def tearDown(self):
        shutil.rmtree(self.tmp)

    def read(self, name):
        with open(os.path.join(self.dir, name), encoding="utf-8", newline="") as f:
            return f.read()

    def exists(self, name):
        return os.path.exists(os.path.join(self.dir, name))

    def test_every_listed_class_loads_and_unchanged_edit_keeps_bytes(self):
        for name in self.repo.list_items():
            if not self.exists(name):
                continue
            cf = self.repo.load(name)
            before = cf.text
            for t in list(cf.types):
                cf.set_type(int(t["attrs"]["id"]), dict(t["attrs"]), t["inner"])
            cf.set_class_attrs(dict(cf.attrs))
            self.assertEqual(before, cf.text, name)
            # Same types as ElementTree finds
            root = ET.fromstring(before.encode("utf-8"))
            self.assertEqual(
                [t.attrib["id"] for t in root.findall("type")],
                [t["attrs"]["id"] for t in cf.types],
                name,
            )

    def test_edit_type_changes_only_its_start_tag(self):
        before = self.read("class_1_alarm.xml")
        self.repo.save_type(1, 1, {"id": 1, "name": "Warning!", "token": "VSCP_TYPE_ALARM_WARNING", "extra": {}})
        diff = changed_lines(before, self.read("class_1_alarm.xml"))
        self.assertEqual(['-        name="Warning" ', '+        name="Warning!" '], diff)

    def test_edit_type_content_and_description(self):
        self.repo.save_type(
            1, 2,
            {"id": 2, "name": "Alarm occurred", "token": "VSCP_TYPE_ALARM_ALARM", "extra": {},
             "inner": "\n        <render><vscpworks variables=\"\" template=\"x\"/></render>\n    ",
             "description": "New text\n"},
        )
        detail = self.repo.type_detail(1, 2)
        self.assertIn('template="x"', detail["inner"])
        self.assertEqual("New text\n", self.read("1.2.md"))
        self.assertEqual(["0", "1", "2", "3"], [t["attrs"]["id"] for t in self.repo.load("class_1_alarm.xml").types][:4])

    def test_bad_content_is_refused_and_file_untouched(self):
        before = self.read("class_1_alarm.xml")
        with self.assertRaises(ModelError):
            self.repo.save_type(1, 2, {"id": 2, "name": "A", "token": "T", "inner": "<render>"})
        self.assertEqual(before, self.read("class_1_alarm.xml"))

    def test_change_type_id_moves_block_and_description(self):
        md = self.read("1.2.md")
        self.repo.save_type(1, 2, {"id": 200, "name": "Alarm occurred", "token": "VSCP_TYPE_ALARM_ALARM", "extra": {}})
        ids = [int(t["attrs"]["id"]) for t in self.repo.load("class_1_alarm.xml").types]
        self.assertEqual(sorted(ids), ids)
        self.assertIn(200, ids)
        self.assertNotIn(2, ids)
        self.assertFalse(self.exists("1.2.md"))
        self.assertEqual(md, self.read("1.200.md"))

    def test_add_copy_delete_type(self):
        before = self.read("class_1_alarm.xml")
        self.repo.add_type(1, {"id": 250, "name": "Test", "token": "VSCP_TYPE_ALARM_TEST", "description": "Doc"})
        self.assertEqual("Doc", self.read("1.250.md"))
        self.assertEqual(250, int(self.repo.load("class_1_alarm.xml").types[-1]["attrs"]["id"]))
        with self.assertRaises(ModelError):  # Same id
            self.repo.add_type(1, {"id": 250, "name": "Again", "token": ""})
        with self.assertRaises(ModelError):  # Same token
            self.repo.add_type(1, {"id": 251, "name": "Again", "token": "VSCP_TYPE_ALARM_TEST"})

        self.repo.copy_type(1, 250, 2, {"id": 250, "token": "VSCP_TYPE_SECURITY_TEST"})
        copy = self.repo.type_detail(2, 250)
        self.assertEqual("Test", copy["attrs"]["name"])
        self.assertEqual("Doc", copy["description"])

        self.repo.delete_type(1, 250)
        self.assertFalse(self.exists("1.250.md"))
        self.assertEqual(before, self.read("class_1_alarm.xml"))

    def test_add_type_in_the_middle_keeps_order(self):
        self.repo.delete_type(1, 3)
        self.repo.add_type(1, {"id": 3, "name": "Back", "token": "VSCP_TYPE_ALARM_BACK"})
        ids = [int(t["attrs"]["id"]) for t in self.repo.load("class_1_alarm.xml").types]
        self.assertEqual(sorted(ids), ids)

    def test_level1_type_id_limit(self):
        with self.assertRaises(ModelError):
            self.repo.add_type(1, {"id": 256, "name": "Too big", "token": ""})

    def test_class_using_other_events(self):
        detail = self.repo.class_detail(512)
        self.assertEqual("class_0_protocol.xml", detail["events_class"]["file"])
        self.assertTrue(detail["types"])
        with self.assertRaises(ModelError):
            self.repo.add_type(512, {"id": 100, "name": "No", "token": ""})
        users = self.repo.class_detail(0)["users"]
        self.assertIn(512, [u["id"] for u in users])
        with self.assertRaises(ModelError):  # Used by 512
            self.repo.delete_class(0)

    def test_new_class_edit_and_delete(self):
        before_list = self.read("list_class.xml")
        self.repo.new_class({"id": 9, "name": "Test class", "token": "CLASS1.TEST", "description": "## Description\n\nTest"})
        self.assertTrue(self.exists("class_9_test.xml"))
        self.assertEqual("## Description\n\nTest", self.read("9.md"))
        items = self.repo.list_items()
        self.assertEqual(items.index("class_2_security.xml") + 1, items.index("class_9_test.xml"))
        with self.assertRaises(ModelError):
            self.repo.new_class({"id": 9, "name": "Again", "token": "CLASS1.TEST2"})
        with self.assertRaises(ModelError):  # Token taken
            self.repo.new_class({"id": 8, "name": "Again", "token": "CLASS1.PROTOCOL"})

        self.repo.add_type(9, {"id": 0, "name": "General", "token": "VSCP_TYPE_TEST_GENERAL"})
        self.repo.add_type(9, {"id": 1, "name": "One", "token": "VSCP_TYPE_TEST_ONE"})
        self.repo.save_class(9, {"name": "Renamed", "token": "CLASS1.TEST", "alternative-token": "ALT"})
        attrs = self.repo.load("class_9_test.xml").attrs
        self.assertEqual("Renamed", attrs["name"])
        self.assertEqual("ALT", attrs["alternative-token"])

        removed = self.repo.delete_class(9)
        self.assertIn("9.0.md", removed)
        self.assertFalse(self.exists("class_9_test.xml"))
        self.assertFalse(self.exists("9.md"))
        self.assertEqual(before_list, self.read("list_class.xml"))

    def test_new_class_with_events_of_another(self):
        self.repo.new_class({"id": 900, "name": "Mirror", "token": "CLASS2.MIRROR", "events": "class_1_alarm.xml"})
        detail = self.repo.class_detail(900)
        self.assertEqual(1, detail["events_class"]["id"])
        self.assertIn(900, [u["id"] for u in self.repo.class_detail(1)["users"]])
        with self.assertRaises(ModelError):  # A class with events= can not be the source
            self.repo.new_class({"id": 901, "name": "M2", "token": "CLASS2.M2", "events": "class_512_protocol.xml"})

    def test_check_reports_missing_description(self):
        os.unlink(os.path.join(self.dir, "1.2.md"))
        messages = [p["message"] for p in self.repo.check()]
        self.assertIn("Type 2 has no description 1.2.md", messages)

    def test_check_reports_events_of_a_class_without_own_events(self):
        path = os.path.join(self.dir, "class_1080_timed_weather_forecast.xml")
        with open(path, encoding="utf-8") as f:
            text = f.read()
        with open(path, "w", encoding="utf-8") as f:
            f.write(text.replace('events="class_90_weather.xml"', 'events="class_95_weather_forecast.xml"'))
        messages = [p["message"] for p in self.repo.check() if p["file"] == "class_1080_timed_weather_forecast.xml"]
        self.assertTrue(any("class_95_weather_forecast.xml, which has no events of its own" in m for m in messages))

    def test_bad_file_names_refused(self):
        with self.assertRaises(ModelError):
            self.repo.load("../list_class.xml")


if __name__ == "__main__":
    unittest.main()
