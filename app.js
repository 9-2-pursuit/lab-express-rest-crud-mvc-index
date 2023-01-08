const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller.js");
app.use("/locations", locationsController);

const machinesController = require("./controllers/machines.controller.js");
app.use("/machines", machinesController);

const personsController = require("./controllers/persons.controller.js");
app.use("/persons", personsController);

const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController);

const specEvController = require("./controllers/special-events.controller.js");
app.use("/special-events", specEvController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;
