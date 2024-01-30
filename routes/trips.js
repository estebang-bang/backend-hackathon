var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");


//Route pour trouver un trajet
router.get("/", (req, res) => {
  Trip.findOne({
    departure: { $regex: new RegExp(req.body.departure, "i") },
    arrival: { $regex: new RegExp(req.body.arrival, "i") } ,
    date: req.body.date.getTime()
  }).then((data) => {
      res.json({ trips: data });
  });
});

module.exports = router;
