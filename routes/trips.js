var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");


//Route pour trouver un trajet
router.post("/", (req, res) => {
  Trip.find({
    departure: { $regex: new RegExp(req.body.departure, "i") },
    arrival: { $regex: new RegExp(req.body.arrival, "i") } ,
  }).then(data => {
      res.json(data);
  });
});

module.exports = router;