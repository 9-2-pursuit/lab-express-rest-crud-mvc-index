const express = require("express");

// CONFIGURATION
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

app.get("/", (req, res) => {
  console.log(express);
  res.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

// EXPORT
module.exports = app;
