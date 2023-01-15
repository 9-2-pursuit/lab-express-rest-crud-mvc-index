const express = require('express'); // Import express
const persrouter = express.Router(); // Create a router
const persons = require('../models/person.model'); // Import the persons model

persrouter.get('/', (req, res) => {
    res.json(persons); // Return all persons in JSON format
});

module.exports = persrouter; // Export the persons model