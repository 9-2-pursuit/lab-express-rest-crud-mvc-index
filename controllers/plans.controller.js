const express = require('express'); // Import express
const planrouter = express.Router(); // Create a router
const plans = require('../models/plan.model'); // Import the plans model

planrouter.get('/', (req, res) => {
    res.json(plans); // Return all plans in JSON format
});

module.exports = planrouter; // Export the plans model