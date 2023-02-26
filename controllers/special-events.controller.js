// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const specialEvents = require("../models/special-event.model")
const specialEvent = express.Router()


  // DEFAULT

  specialEvent.get("/", (req, res) => {
    res.json(specialEvents)
} )


module.exports = specialEvent;