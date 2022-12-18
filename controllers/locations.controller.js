const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");
const personsArray = require("../models/person.model");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});

locations.get("/people", (req, res) => {
  const locationsArrayCopy = [...locationsArray];
  locationsArrayCopy.map((loc) => {
    return (loc.people = personsArray.filter((person) => {
      // || work around for 23 Broadway
      return (
        person.mainLocation === loc.zip ||
        (person.mainLocation === "10011" && loc.zip === "11011")
      );
    }));
  });
  res.json(locationsArray);
});

module.exports = locations;
