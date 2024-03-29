var express = require('express');
var router = express.Router();
const Bookings = require('../models/bookings');

router.post("/", (req, res) => {
    const newBookings = new Bookings({
      departure: req.body.departure,
      arrival: req.body.arrival,
      // date: req.body.date.getTime(),
    });
    newBookings.save().then((newDoc) => {
      res.json({ newDoc: newDoc });
    });
  });

  router.get("/", (req, res) => {
    Bookings.find().then((data) => {
      res.json({ Bookings : data });
    });
  });

module.exports = router;