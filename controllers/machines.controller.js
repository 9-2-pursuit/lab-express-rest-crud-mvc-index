const express = require("express");
const machines = express.Router();

const machineArr = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.send(machineArr);
});

module.exports = machines;
