

const router = require("express").Router();
const machinesModel = require("../models/machine.model")


router.get("/", (req, res) => {
  res.json(machinesModel);
});

module.exports = router;
