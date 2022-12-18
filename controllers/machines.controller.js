const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");


machines.get("/machines", (req, res) => {
    res.json(machinesArray);
  });


  machines.get("/machines/:arrayIndex", (req, res) => {
    if (machinesArray[req.params.arrayIndex]) {
      res.json(machinesArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

  module.exports = machines;