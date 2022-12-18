const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});

locations.get("/:arrayIndex", (req, res) => {
  // const { arrayIndex } = req.params;
  res.json(locationsArray[req.params.arrayIndex]);
});
module.exports = locations;
