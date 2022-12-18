const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model");

plans.get("/", (req, res) => {
    res.json(plansArray);
});

plans.get("/:arrayIndex", (req, res) => {
    if (plansArray[req.params.arrayIndex]) {
      res.json(plansArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
});
  
module.exports = plans