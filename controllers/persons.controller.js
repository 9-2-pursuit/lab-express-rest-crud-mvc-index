const express = require("express");
const people = express.Router();
const peopleArr = require("../models/person.model.js");

people.get("/", (req, res) => {
  res.json(peopleArr);
});

module.exports = people;
