const express = require("express");
const special_events = express.Router();
const special_events_data = require("../models/special-event.model");


special_events.get("/", ( q, s )=>{
  s.json(special_events_data);
})

module.exports = special_events;