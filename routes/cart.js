var express = require("express");
var router = express.Router();
const Panier = require("../models/panier");

router.post("/", (req, res) => {
  const newPanier = new Panier({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: new Date(req.body.date),
    price : req.body.price,
  });
  newPanier.save().then((newDoc) => {
    res.json({ newDoc: newDoc });
  });
});

router.get("/", (req, res) => {
  Panier.find().then((data) => {
    res.json({ Panier: data });
  });
});



module.exports = router;
