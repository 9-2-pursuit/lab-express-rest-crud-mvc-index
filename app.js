// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// 404
app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, page not found" });
});

// EXPORT
module.exports = app;
