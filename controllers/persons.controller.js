const express = require("express");
const people = express.Router();

const personArr = require("../models/person.model");

people.get("/", (req, res) => {
  res.send(personArr);
});

module.exports = people;
