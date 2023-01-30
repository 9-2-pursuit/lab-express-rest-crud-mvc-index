// DEPENDENCIES
const express = require("express");
const specialEvents = express.Router();
const specialEventsArr = require("../models/special-event.model");

// INDEX
specialEvents.get("/", (req, res) => {
  res.json(specialEventsArr);
});

module.exports = specialEvents;
