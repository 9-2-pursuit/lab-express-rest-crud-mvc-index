const router = require("express").Router();
const plansModel = require("../models/plan.model")


router.get("/", (req, res) => {
    res.json(plansModel);
}   
)

module.exports = router;