const express = require("express")

const locations = require("./controllers/locations.controller")
const persons = require("./controllers/persons.controller")
const machines = require("./controllers/machines.controller")
const plans = require("./controllers/plans.controller")
const specialEvents = require("./controllers/special-events.controller")

const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

app.get("/locations", locations)
app.get("/persons", persons)
app.get("/machines", machines)
app.get("/plans", plans)
app.get("/special-events", specialEvents)

app.get((req, res) => {
  res.send("Sorry, no page found!")
})

module.exports = app;