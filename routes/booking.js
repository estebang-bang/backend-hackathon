var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');

router.post("/", (req, res) => {
    const newBooking = new Booking({
      departure: req.body.departure,
      arrival: req.body.arrival,
      // date: req.body.date.getTime(),
    });
    newBooking.save().then((newDoc) => {
      res.json({ newDoc: newDoc });
    });
  });

module.exports = router;