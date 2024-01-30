const mongoose = require('mongoose');

const panierSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
	price: Number,
});

const Panier = mongoose.model('trips', panierSchema);

module.exports = Panier;