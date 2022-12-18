const express = require('express')
const app = express();
const locations = require("./controllers/locations.controller.js");
const machines = require("./controllers/machines.controller.js");
const persons = require("./controllers/persons.controller.js");
const plans = require("./controllers/plans.controller.js");
const specialEvents = require("./controllers/special-events.controller.js");



app.use(locations,machines,persons,plans,specialEvents);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello, world!')
})


module.exports = app;