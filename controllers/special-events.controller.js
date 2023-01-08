const router = require("express").Router();
const specialEventsModel = require("../models/special-event.model");

router.get("/", (req, res) => {
    res.json(specialEventsModel);
})

module.exports = router;
