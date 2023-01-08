const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js");

persons.get("/", (req, res) => {
  res.json(personsArray);
});

persons.get("/:arrayIndex", (req, res) => {
  res.json(personsArray[req.params.arrayIndex]);
});

module.exports = persons;
