const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
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
  description: String
});

const Rooms = mongoose.model('Rooms', roomSchema);

module.exports = Rooms;