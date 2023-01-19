const locationsData = require("../models/location.model");

const locations = (req, res) => {
  res.send(locationsData);
}

module.exports = locations;