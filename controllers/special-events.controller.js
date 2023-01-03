const specialEventsData = require("../models/special-event.model")

const specialEvents = (req, res) => {
  res.send(specialEventsData)
}

module.exports = specialEvents