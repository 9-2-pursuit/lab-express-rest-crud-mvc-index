const express = require("express");
const plans = express.Router();
const plans_data = require("../models/plan.model");

plans.get("/",( q, s )=>{
  s.json(plans_data);
})

module.exports = plans;