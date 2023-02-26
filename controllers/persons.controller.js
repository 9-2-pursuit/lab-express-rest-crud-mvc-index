// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const persons = require("../models/person.model")
const person = express.Router()


  // DEFAULT

  person.get("/", (req, res) => {
    res.json(persons)
} )


module.exports = person;