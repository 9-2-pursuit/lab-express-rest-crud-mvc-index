const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
    res.json(specialEventsArray);
});

specialEvents.get("/:arrayIndex", (req, res) => {
    if (specialEventsArray[req.params.arrayIndex]) {
      res.json(specialEventsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
});
  
module.exports = specialEvents