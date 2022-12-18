// Depencies
const express = require("express");

// Configuration
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//ErrorHandle
// app.get("*", (req, res) => {
//   res.json({ error: "Sorry, no page found!" });
// });

// index Route Consts
const locationsController = require("./controllers/locations.controller.js");
app.use("/locations", locationsController);

const machinesController = require("./controllers/machines.controller.js");
app.use("/machines", machinesController);

const specialEventsController = require("./controllers/special-events.controller.js");
app.use("/special-events", specialEventsController);

//Export
module.exports = app;
