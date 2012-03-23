var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hbracing_development');

module.exports = {
  Driver:        require('./app/models/driver'),
  Race:          require('./app/models/race'),
  Track:         require('./app/models/track'),
  Championship:  require('./app/models/championship')
};
