var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectIdSchema = Schema.ObjectId,
    ObjectId = mongoose.Types.ObjectId,
    db = require('../model');

var RoomModel = new Schema({
    id: {type:ObjectIdSchema, default: function () { return new ObjectId()} },
    maxCount: {
        type: Number,
        default: 2
    },
    userList : {
        type: Array,
        default: []
    },
    currentCount: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    dateStarting: {
        type: Date,
        default: Date.now
    },
    winLogin: String,
    secondLife: {
        type: Number,
        default: 60
    },
    userBets: {
        type: Array,
        default : []
    }
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // }
});


// RoomModel.getNotFullRoom = function (person) {
//     this.findOne({'isActive': true}).where('maxCount').gt('currentCount').exec(
//         function (err, room) {
//             if (err) console.log('error '+err);
//             else{
//                 console.log(room.isActive);
//             }
//         }
//     )
// };

module.exports = db.model('Room', RoomModel);