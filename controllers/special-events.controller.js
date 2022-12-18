const express = require("express");
const specEvent = express.Router();
const eventsArray = require("../models/special-event.model.js");

specEvent.get("/", (req, res) => {
  res.json(eventsArray);
});

specEvent.get("/:arrayIndex", (req, res) => {
    // const { arrayIndex } = req.params;
    res.json(eventsArray[req.params.arrayIndex]);
  });

module.exports = specEvent;