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
<<<<<<< HEAD
    arrival: { $regex: new RegExp(req.body.arrival, "i") },
    date: { $gt: startDate, $lt : endDate},
  }).then((data) => {
    res.json({trips: data});
=======
    arrival: { $regex: new RegExp(req.body.arrival, "i") } ,
  }).then(data => {
      res.json({trips: data});
>>>>>>> 3b14d6c69341ceba206a19974ab91d260af3582e
  });
});

module.exports = router;
