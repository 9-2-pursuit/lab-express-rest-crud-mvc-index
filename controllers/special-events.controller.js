const express = require("express");

const specialEvents = express();

const specialEventModel = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
  res.send(specialEventModel);
});

module.exports = specialEvents;
