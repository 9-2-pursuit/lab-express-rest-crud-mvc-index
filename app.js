// DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);

app.use("/machines", machinesController);

// 404
app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, page not found" });
});

// EXPORT
module.exports = app;
