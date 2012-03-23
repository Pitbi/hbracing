var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ParticipationSchema = new mongoose.Schema({
  position: Number,
  bestTime: Number,
  average:  Number,
  laps:     Number,
  race: { type: Schema.ObjectId, ref: 'Race' }, 
  driver: { type: Schema.ObjectId, ref: 'Driver'}
});

var RaceSchema = new Schema({
  startDate:  Date,
  duration:   Number,
  maxDrivers: Number,
  track:      { type: Schema.ObjectId, ref: 'Track' },
  championship: { type : Schema.ObjectId, ref : 'Championship' },
  participations: [ParticipationSchema]              //Add a collection (participation) into Race object.
});
var Race = mongoose.model('Race', RaceSchema);

module.exports = Race;
