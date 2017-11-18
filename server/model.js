var mongoose = require('mongoose'),
  db = mongoose.createConnection('mongodb://localhost/roulette');

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback () {
    console.log("Connected!")
});

module.exports = db;