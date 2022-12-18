const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

/////////////////////////////////////////////
const locations_controller = require("./controllers/locations.controller");
app.use("/locations", locations_controller);
/////////////////////////////////////////////

/////////////////////////////////////////////
const persons_controller = require("./controllers/persons.controller");
app.use("/persons", persons_controller);
/////////////////////////////////////////////

/////////////////////////////////////////////
const plans_controller = require("./controllers/plans.controller");
app.use("/plans", plans_controller);
/////////////////////////////////////////////

/////////////////////////////////////////////
const machines_controller = require("./controllers/machines.controller");
app.use("/machines", machines_controller);
/////////////////////////////////////////////

/////////////////////////////////////////////
const special_events_controller = require("./controllers/special-events.controller");
app.use("/special-events", special_events_controller);
/////////////////////////////////////////////

app.get("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;