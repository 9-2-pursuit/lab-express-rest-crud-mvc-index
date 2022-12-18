const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");

machines.get("/", (req, res) => {
  res.json(machinesArray);
});

machines.get("/:arrayIndex", (req, res) => {
    // const { arrayIndex } = req.params;
    res.json(machinesArray[req.params.arrayIndex]);
  });

module.exports = machines;
