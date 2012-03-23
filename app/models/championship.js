var mongoose = require('mongoose');

var ChampionshipSchema = new mongoose.Schema({
  name: String,
  year: Number
});
var Championship = mongoose.model('Championship', ChampionshipSchema);

module.exports = Championship;
