var mongoose = require('mongoose');

var DriverSchema = new mongoose.Schema({
  name:        String,
  nickname:    String,
  email:       String,
  phone:       String,
  description: String,
  birthday:    Number,
  nationality: String,
  webSite:     String
});
var Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;
