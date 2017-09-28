const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flatSchema = new Schema({
    title: String,
    price: Number,
    address: String,
    charges: Number,
    area: Number,
    deposit: Number,
    availableFrom: Date,
    availableTo: Date,
    minRentTime: Number,
    isOwner: Boolean,
    isAgency: Boolean,
    description: String,
    noOfRooms: Number,
    isGarage: Boolean
});

const Flats = mongoose.model('Flats', flatSchema);

module.exports = Flats;