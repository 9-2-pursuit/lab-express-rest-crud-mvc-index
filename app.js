//Dependencies
const express = require('express');
//Config
const app = express();
//Controllers
const locationsController = require('./controllers/locations.controller.js');
const machinesController = require('./controllers/machines.controller.js');
const personsController = require('./controllers/persons.controller.js');
const plansController = require('./controllers/plans.controller.js');
const specialEventsController = require('./controllers/special-events.controller.js');

//Middleware
app.use(express.json()); // Parse JSON bodies

//Routes
app.get('/', (req, res) => { // When the client makes a GET request to the root of the server
    res.send('Hello, world!'); // Send a response to the client
    });

app.use('/locations', locationsController); // Use the locations controller for requests to the /locations route
app.use('/machines', machinesController); // Use the machines controller for requests to the /machines route
app.use('/persons', personsController); // Use the persons controller for requests to the /persons route
app.use('/plans', plansController); // Use the plans controller for requests to the /plans route
app.use('/special-events', specialEventsController); // Use the special-events controller for requests to the /special-events route

app.get('*', (req, res) => { // When the client makes a GET request to any other route
        res.status(404).send('Page not found'); // Send a 404 response to the client
        });

module.exports = app; // Export the app so we can use it in server.js

