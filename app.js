const express = require("express");

const app = express();

const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

const machinesController = require("./controllers/machines.controller");
app.use("/machines", machinesController)

const personController = require("./controllers/persons.controller");
app.use("/persons", personController)

const plansController = require("./controllers/plans.controller");
app.use("/plans", plansController);

const specialEventsController = require("./controllers/special-events.controller");
app.use("/special-events", specialEventsController);

app.get("/", (req, res) => {
    res.send("Hello, world!")
})



module.exports = app;