const express = require("express");
const persons = express.Router();
const personArray = require("../models/person.model");

persons.get("/", (req, res) => {
    res.json(personArray);
})

module.exports = persons;