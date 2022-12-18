const express = require("express");
const machines = express.Router();
const machine_data = require("../models/machine.model");

machines.get("/", ( q, s )=>{
  s.json(machine_data);
})

module.exports = machines;