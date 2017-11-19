var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectIdSchema = Schema.ObjectId,
    ObjectId = mongoose.Types.ObjectId,
    db = require('../model');

var TransferModel = new Schema({
    id: {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    amount: String,
    fromUserLogin: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = db.model('Transfer', TransferModel);