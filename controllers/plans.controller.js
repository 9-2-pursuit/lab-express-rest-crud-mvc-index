const express = require("express");

const plans = express();

const planModel = require("../models/plan.model");

plans.get("/", (req, res) => {
  res.send(planModel);
});

module.exports = plans;
