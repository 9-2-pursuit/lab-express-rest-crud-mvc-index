const express = require("express");
const { rawListeners } = require("../app");
const locations = express.Router();
const location_data = require("../models/location.model");

locations.get("/",( r, s )=>{
  console.log(location_data);
  s.json(location_data);
})

locations.get("/people",( r, s )=>{
  const persons_data = require("../models/person.model");
  const ret = location_data.map(el=>{
    el.people = persons_data.filter(person=> el.zip===person.mainLocation );
    return el;
  })

  s.json(ret);
})

module.exports = locations;