// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const plans = require("../models/plan.model")
const plan = express.Router()


  // DEFAULT

  plan.get("/", (req, res) => {
    res.json(plans)
} )


module.exports = plan;