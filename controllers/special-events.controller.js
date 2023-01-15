const express = require('express'); // Import express
const serouter = express.Router(); // Create a router
const specialEvents = require('../models/special-event.model'); // Import the special-events model

serouter.get('/', (req, res) => {
    res.json(specialEvents); // Return all special-events in JSON format
});

module.exports = serouter; // Export the special-events model