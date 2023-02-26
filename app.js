// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

const machinesController = require("./controllers/machines.controller");
app.use("/machines", machinesController);

const personsController = require("./controllers/persons.controller");
app.use("/persons", personsController);

const plansController = require("./controllers/plans.controller");
app.use("/plans", plansController);

const specialEventsController = require("./controllers/special-events.controller");
app.use("/special-events", specialEventsController);


// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
