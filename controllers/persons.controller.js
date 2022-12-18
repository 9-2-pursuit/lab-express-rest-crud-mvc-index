const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model");

persons.get("/", (req, res) => {
    res.json(personsArray);
});

persons.get("/:arrayIndex", (req, res) => {
    if (personsArray[req.params.arrayIndex]) {
      res.json(personsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
});
  
module.exports = persons