const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");


locations.get("/locations", (req, res) => {
    res.json(locationsArray);
  });


  locations.get("/locations/:arrayIndex", (req, res) => {
    if (locationsArray[req.params.arrayIndex]) {
      res.json(locationsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
  module.exports = locations;