var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectIdSchema = Schema.ObjectId,
    ObjectId = mongoose.Types.ObjectId,
    db = require('../model');

var UserModel = new Schema({
    id: {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    login: {type: String, unique: true},
    password: String,
    balance: {
        type: Number,
        default: 0
    },
    currentRoom: ObjectIdSchema
});

UserModel.methods.create = function (login, password) {
    var greeting = this.login
        ? "My name is " + this.login
        : "I don't have a name";
    console.log(greeting);
};
UserModel.methods.speak = function () {
    var greeting = this.login
        ? "My name is " + this.login
        : "I don't have a name";
    console.log(greeting);
};

module.exports = db.model('User', UserModel);