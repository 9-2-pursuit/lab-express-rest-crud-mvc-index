const express = require('express'); // Import express
const macrouter = express.Router(); // Create a router
const machines = require('../models/machine.model'); // Import the machines model

macrouter.get('/', (req, res) => {
    res.json(machines); // Return all machines in JSON format
});

module.exports = macrouter; // Export the machines model