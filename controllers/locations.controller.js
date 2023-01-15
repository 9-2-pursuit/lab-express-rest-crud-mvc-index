const express = require('express'); // Import express
const locrouter = express.Router(); // Create a router
const locations = require('../models/location.model'); // Import the locations model

locrouter.get('/', (req, res) => {
    res.json(locations); // Return all locations in JSON format
});

module.exports = locrouter; // Export the locations model