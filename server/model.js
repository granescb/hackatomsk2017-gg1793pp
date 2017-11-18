var mongoose = require('mongoose'),
db = mongoose.connect('mongodb://localhost/roulette', {server:{
        poolSize: 10
    }
});


mongoose.connection.on("error", console.error.bind(console, "connection error:"));
mongoose.connection.once("open", function callback () {
    console.log("Connected!")
});

module.exports = db;