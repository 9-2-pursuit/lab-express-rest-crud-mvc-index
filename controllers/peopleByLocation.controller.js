const express = require("express");
const peopleByLocation = express.Router();

const personArr = require("../models/person.model");
const locationArr = require("../models/location.model");

peopleByLocation.get("/", (req, res) => {
  const result = [...locationArr];
  locationArr.forEach(({ zip }, index) => {
    const people = personArr.filter((p) => p.mainLocation === zip);
    result[index].people = people;
  });

  res.send(result);
});

module.exports = peopleByLocation;
