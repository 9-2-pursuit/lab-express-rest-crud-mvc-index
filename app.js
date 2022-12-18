const express = require("express");
const app = express();
const locationControl = require("./controllers/locations.controller.js");
const machineControl = require("./controllers/machines.controller.js");
const personControl = require("./controllers/persons.controller.js");
const planControl = require("./controllers/plans.controller.js");
const specialControl = require("./controllers/special-events.controller.js")

app.use("/locations", locationControl);

app.use("/machines", machineControl);

app.use("/persons", personControl);

app.use("/plans", planControl);

app.use("/special-events", specialControl);


app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found!"});
  });













module.exports = app