const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model.js");


plans.get("/plans", (req, res) => {
    res.json(plansArray);
  });


  plans.get("/plans/:arrayIndex", (req, res) => {
    if (plansArray[req.params.arrayIndex]) {
      res.json(plansArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

  module.exports = plans;