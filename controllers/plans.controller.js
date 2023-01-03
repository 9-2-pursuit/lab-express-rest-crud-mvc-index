const plansData = require("../models/plan.model")

const plans = (req, res) => {
  res.send(plansData)
}

module.exports = plans