// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// LOCATIONS ROUTE
const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

// MACHINES ROUTE
const machinesController = require("./controllers/machines.controller");
app.use("/machines", machinesController);

// PERSONS ROUTE
const personsController = require("./controllers/persons.controller");
app.use("/persons", personsController);

// PLANS ROUTE
const plansController = require("./controllers/plans.controller");
app.use("/plans", plansController);

// SPECIAL EVENTS ROUTE
const specialEventsController = require("./controllers/special-events.controller");
app.use("/special-events", specialEventsController);

// CATCH-ALL ROUTE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

module.exports = app;
