const express = require("express");
const locations = express.Router();
const locationArr = require("../models/location.model");

locations.get("/", (req, res) => {
  res.json(locationArr);
});

module.exports = locations;
