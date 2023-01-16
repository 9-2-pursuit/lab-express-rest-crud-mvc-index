const express = require("express");

const persons = express();

const personModel = require("../models/person.model");

persons.get("/", (req, res) => {
  res.send(personModel);
});

module.exports = persons;
