var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectIdSchema = Schema.ObjectId,
    ObjectId = mongoose.Types.ObjectId,
    db = require('../model');

var TransferModel = new Schema({
    id: {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    amount: {type: String, unique: true},
    fromUserId: ObjectIdSchema,
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    balance: {
        type: Number,
        default: 0
    },
    currentRoom: ObjectIdSchema,
    expireAt: { type: Date, default: undefined }
});

module.exports = db.model('Transfer', TransferModel);