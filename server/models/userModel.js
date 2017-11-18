var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectIdSchema = Schema.ObjectId,
    ObjectId = mongoose.Types.ObjectId,
    db = require('../model');

var UserModel = new Schema({
    id: {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    login: {type: String, unique: true},
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '30d'
    },
    balance: {
        type: Number,
        default: 0
    },
    currentRoom: ObjectIdSchema,
    expireAt: { type: Date, default: undefined }
});
UserModel.index({ "expireAt": 1 }, { expireAfterSeconds: 5 });

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