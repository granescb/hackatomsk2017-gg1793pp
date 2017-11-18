var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var RoomModel = require('../models/roomModel');
var db = require('../model');
var myResponse = require('../utils/response');

function paceUserToRoom(person, room) {
    room.userList.push(this.person.id);
    person.currentRoom = room.id;
    room.currentCount += 1;
    room.save(function (err, room) {
      if (err){
          if (room){
           console.log("Something goes wrong with room " + room.id);
          }
          else{
              console.log("Something goes wrong");
          }
      }
    });
    person.save(function (err, person) {
      if (err){
          if (person){
           console.log("Something goes wrong with user " + person.login);
          }
          else{
              console.log("Something goes wrong");
          }
      }
    });
    var response = myResponse(0,{
        'login': person.login,
        'roomId': room.id
    },'');
    return response;
}

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/add', function(req, res, next) {
  UserModel.findOne({'login': req.session.username}, function (err, person) {
    if (err) res.send(myResponse(1,{},err));
    else if (person){
        console.log(person.login);
        this.person = person;
        RoomModel.find({'isActive': true}, (function (error, rooms) {
            if (error) {response = myResponse(1,{},err)}
            else if(rooms.length){
                for (var room of rooms){
                    var isPlaced = false;
                    if (room.currentCount < room.maxCount){
                        response = paceUserToRoom(this.person, room);
                        isPlaced = true;
                        break;
                    }
                }
                if (!isPlaced){
                    var room = new RoomModel({'userList': this.person.id});
                    response = paceUserToRoom(this.person, room);
                }
            }
            else {
                var room = new RoomModel({'userList': this.person.id});
                response = paceUserToRoom(this.person, room);
            }
            res.send(response);
        }));
    }
    else res.send(myResponse(1,{},'Not person'))
  });
});
module.exports = router;