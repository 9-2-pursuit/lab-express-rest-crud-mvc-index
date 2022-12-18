const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js");


persons.get("/persons", (req, res) => {
    res.json(personsArray);
  });


  persons.get("/persons/:arrayIndex", (req, res) => {
    if (personsArray[req.params.arrayIndex]) {
      res.json(personsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });

  module.exports = persons;