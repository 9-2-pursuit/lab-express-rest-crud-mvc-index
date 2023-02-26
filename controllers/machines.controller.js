// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const machines = require("../models/machine.model")
const machine = express.Router()


  // DEFAULT

  machine.get("/", (req, res) => {
    res.json(machines)
} )


module.exports = machine;