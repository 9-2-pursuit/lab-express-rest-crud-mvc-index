const express = require("express");
const specialEv = express.Router();
const specialEvArray = require("../models/special-event.model.js");

specialEv.get("/", (req, res) => {
  res.json(specialEvArray);
});

specialEv.get("/:arrayIndex", (req, res) => {
  res.json(specialEvArray[req.params.arrayIndex]);
});

module.exports = specialEv;
