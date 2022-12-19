const express = require("express");
const locations = express.Router();
const locationsArr = require("../models/location.model.js");

locations.get("/", (req, res) => {
  res.json(locationsArr);
});

module.exports = locations;
