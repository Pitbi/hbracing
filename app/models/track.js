var mongoose = require('mongoose');

var TrackSchema = new mongoose.Schema({
  name:          String,
  location:      String,
  lenght:        Number,
  description:   String,
  maxCars:       Number,
  bestTime:      Number,
  confirmedTime: Number
});
var Track = mongoose.model('Track', TrackSchema);

module.exports = Track;
