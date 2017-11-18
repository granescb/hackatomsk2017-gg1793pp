var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    db = require('../model');
    // mongoose.createConnection('mongodb://localhost:27017/roulette');

var UserModel = new Schema({
    login: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 120
    },
    balance: {
        type: Number,
        default: 0
    }
});
UserModel.methods.speak = function () {
    var greeting = this.login
        ? "My name is " + this.login
        : "I don't have a name";
    console.log(greeting);
};

module.exports = db.model('User', UserModel);