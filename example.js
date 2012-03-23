var app = require('./app');
var Driver = app.Driver;
var Track  = app.Track;
var Race   = app.Race;
var Championship = app.Championship;

var race   = new Race();
var driver = new Driver({name: "Pitbi"});

race.participations.push({driver: driver});


driver.save(function(err) {
  race.save(function(err) {
    Race.find().populate('participations.driver').run(function(err, races) {
      races.forEach(function(race) {
        console.log("course: "+race);
        race.participations.forEach(function(participation) {
          console.log(participation.driver);     
        });
      });
    });
  });
});

/*
var track = new Track({name: "Francorchamps"});
var championship = new Championship({name : "2012-2013"});
var race  = new Race({track: track, championship: championship});

championship.save(function(err) {
  track.save(function(err) {
    race.save(function(err) {
      Race.find().populate('track').populate('championship').run(function(err, races) {
        races.forEach(function(race) {
          console.log("Course sur le circuit: " + race.track + "\nPour le championnat :" + race.championship);
        });
      });
    });
  });
});
*/

/*var pit = new Driver({name: "Pierre Biezemans", email: "pit@bit.com", phone: "123456465"});
pit.save();

Driver.find(function(err, drivers) {
  drivers.forEach(function(driver) {
    console.log("deleting driver " + driver.name + "...");
    driver.remove();
  });
});


var citykart = new Track({name:"City Kart", location:"Bruxelles", bestTime:50.456});
citykart.save();

Track.find(function(err, tracks) {
  tracks.forEach(function(track) {
    console.log("Circuit: " + track.name + "\nLocation: " + track.location + "\nTemps à battre: " + track.bestTime);
    track.remove();
    console.log("Le circuit est instantanément supprimer!");
  });
});*/
