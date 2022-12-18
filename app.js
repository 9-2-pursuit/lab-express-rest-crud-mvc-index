const express = require("express");
const app = express();
const locationControl = require("./controllers/locations.controller.js");


app.use("/locations", locationControl);

app.get("/", (req, res) => {
    res.send("Hello, world!")
})















module.exports = app