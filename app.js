// Depencies
const express = require("express");

// Configuration
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//Export
module.exports = app;
