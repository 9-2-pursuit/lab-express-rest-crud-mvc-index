const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");

locations.get("/", (req, res) => {
    res.json(locationsArray);
});

locations.get("/:arrayIndex", (req, res) => {
    if (locationsArray[req.params.arrayIndex]) {
      res.json(locationsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
});
  
module.exports = locations