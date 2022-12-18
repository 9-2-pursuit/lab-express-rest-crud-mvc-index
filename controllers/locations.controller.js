const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");
const personsArray = require("../models/person.model");

locations.get("/", (req, res) => {
    res.json(locationsArray);
});

locations.get("/people", (req, res) => {
    const locationsCopy = [...locationsArray]
    const matchingZip = locationsCopy.map((loc) => {
        loc["people"] = personsArray.filter(({ mainLocation }) => loc.zip === mainLocation)
        return loc
    })
    res.json(matchingZip)
})

locations.get("/:arrayIndex", (req, res) => {
    if (locationsArray[req.params.arrayIndex]) {
      res.json(locationsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
});
  
module.exports = locations