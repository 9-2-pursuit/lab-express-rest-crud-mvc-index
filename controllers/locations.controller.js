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
      return person.mainLocation === loc.zip;
    }));
  });
  res.json(locationsArray);
});

module.exports = locations;
