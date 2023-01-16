const express = require("express");

const machines = express();

const machineModel = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.send(machineModel);
});

module.exports = machines;
