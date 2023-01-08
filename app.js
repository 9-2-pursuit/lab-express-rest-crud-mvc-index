const { application } = require("express");
const server = require("express");
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");
const app = server();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

app.get("*", (req, res) => {
  res.status(404).send("Sorry, page not found!");
});

app.listen(3000, () => console.log("estoy ejecutandome"));

module.exports = app;
