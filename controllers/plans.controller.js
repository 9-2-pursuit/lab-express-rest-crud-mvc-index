const express = require("express");
const plans = express.Router();
const plansArr = require("../models/plan.model.js");

plans.get("/", (req, res) => {
  res.json(plansArr);
});

module.exports = plans;
