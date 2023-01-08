const router = require("express").Router()
const personsModel = require("../models/person.model")

router.get("/", (req, res) => {
    res.json(personsModel)
});

// router.get("/", (req, res) => {
//   // res.send("Hola desde locations");
//   res.json(locationsData);
// });

module.exports = router;