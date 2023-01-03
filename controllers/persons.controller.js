const personsData = require("../models/person.model");

const person = (req, res) => {
  res.send(personsData)
}

module.exports = person;