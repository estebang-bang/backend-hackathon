var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");

//Route pour trouver un trajet
router.post("/", (req, res) => {
  let startDate = new Date(req.body.date)
  let endDate = new Date(req.body.date)
  endDate.setDate(startDate.getDate() + 1)

  Trip.find({
    departure: { $regex: new RegExp(req.body.departure, "i") },
    arrival: { $regex: new RegExp(req.body.arrival, "i") },
    date: { $gt: startDate, $lt : endDate},
  }).then((data) => {
    res.json({trips: data});
  });
});

module.exports = router;
