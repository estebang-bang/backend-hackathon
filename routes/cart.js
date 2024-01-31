var express = require("express");
var router = express.Router();
const Panier = require("../models/panier");
const Trip = require('../models/trips')

router.post("/", (req, res) => {
  console.log(req.body);

  Trip.findById(req.body.tripId).then((docFound) => {
    if (docFound) {
      const newPanier = new Panier({
        departure: docFound.departure,
        arrival: docFound.arrival,
        price: docFound.price,
        date: docFound.date
    
      });
      newPanier.save().then((newDoc) => {
        console.log(newDoc)
        res.json({ newDoc: newDoc });
      });
    } else {
      res.json({ result: false, error: 'trip not found / does not exist'})
    }
  });
});

router.get("/", (req, res) => {
  Panier.find().then((data) => {
    res.json({ Panier: data });
  });
});



module.exports = router;
