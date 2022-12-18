const express = require("express");
const persons = express.Router();
const persons_data = require("../models/person.model");

persons.get("/", ( q, s )=>{
  s.json(persons_data);
})


module.exports = persons;