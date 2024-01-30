var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");


//Route pour trouver un trajet
router.get("/", (req, res) => {
  let dateRecherchee = new Date(req.body.date)
  Trip.find({
    departure: { $regex: new RegExp(req.body.departure, "i") },
    arrival: { $regex: new RegExp(req.body.arrival, "i") } ,
    //date: req.body.date.getTime()
  }).then((data) => {
      res.json({ trips: data });
  });
});

module.exports = router;