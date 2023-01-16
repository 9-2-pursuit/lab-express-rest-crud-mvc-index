const express = require("express");

const locations = express();

const locationModel = require("../models/location.model.js");

locations.get("/", (req, res) => {
  res.send(locationModel);
});

module.exports = locations;
