const express = require("express");
const planned = express.Router();
const plansArray = require("../models/plan.model.js");

planned.get("/", (req, res) => {
  res.json(plansArray);
});

planned.get("/:arrayIndex", (req, res) => {
    // const { arrayIndex } = req.params;
    res.json(plansArray[req.params.arrayIndex]);
  });

module.exports = planned;