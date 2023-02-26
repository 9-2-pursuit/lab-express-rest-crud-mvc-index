
// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const locations = require("../models/location.model")
const location = express.Router()


  // DEFAULT

  location.get("/", (req, res) => {
    res.json(locations)
} )


module.exports = location;