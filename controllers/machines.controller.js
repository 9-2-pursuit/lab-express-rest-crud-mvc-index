const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model");

machines.get("/", (req, res) => {
    res.json(machinesArray);
});

machines.get("/:arrayIndex", (req, res) => {
    if (machinesArray[req.params.arrayIndex]) {
      res.json(machinesArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
});
  
module.exports = machines