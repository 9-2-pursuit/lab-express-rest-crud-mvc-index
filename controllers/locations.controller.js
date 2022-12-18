const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");
const personsArray = require("../models/person.model");

locations.get("/", (req, res) => {
    res.json(locationsArray);
});

locations.get("/people", (req, res) => {
    // const matchingZip = locationsArray.find(({ zip }) => zip === personsArray.map((z) => z.mainLocation))
    // const locationsZip = locationsArray.map(({ zip }) => zip)
    // console.log(locationsZip)
    // const personsZip = personsArray.map(({ mainLocation }) => mainLocation)
    // console.log(personsZip)

  locationsArray.people = personsArray.map((p) => p)
    console.log(locationsArray)
    // console.log(locationsZip)

    // console.log(matchingZip)
    res.json(locationsArray)
})

locations.get("/:arrayIndex", (req, res) => {
    if (locationsArray[req.params.arrayIndex]) {
      res.json(locationsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
});
  
module.exports = locations