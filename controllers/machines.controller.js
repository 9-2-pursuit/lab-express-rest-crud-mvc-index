const machinesData = require("../models/machine.model")

const machines = (req, res) => {
  res.send(machinesData);
}

module.exports = machines;