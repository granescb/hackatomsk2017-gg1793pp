var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var RoomModel = require('../models/roomModel');
var db = require('../model');
var myResponse = require('../utils/response');

function saveObj(ogj) {
    ogj.save(function (err, person) {
      if (err){
          if (person){
           console.log("Something goes wrong with user " + ogj.login);
          }
          else{
              console.log("Something goes wrong");
          }
      }
    });
}

function paceUserToRoom(person, room) {
    room.userList.push(this.person.login);
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

router.get('/list', function(req, res, next) {
    // UserModel.findOne({'login': req.session.username}, function (err, person) {
    //     if (err) res.send(myResponse(1,{},err));
    //     else if (person){
    //         RoomModel.findOne({'id': person.currentRoom}, function (err, room) {
    //             if (err) res.send(myResponse(1,{},err));
    //             else if (room){
    //                 response = myResponse(0,room,'');
    //                 res.send(response);
    //             }
    //         })
    //     }
    // });
    RoomModel.find({'isNotPushed': true}, function (err, rooms) {
        if (err) res.send(myResponse(1,{},err));
        else if (rooms.length){
            for (var room of rooms){
                room.userList.forEach(function (item) {
                    if (req.session.username == item){
                        if (!room.isActive){
                            UserModel.findOne({'login': item}, function (err, person) {
                                if (err) console.log('error '+err);
                                else if(person){
                                    person.currentRoom = null;
                                    saveObj(person)
                                }
                            });

                        }
                        response = myResponse(0,room,'');
                        res.send(response);
                    }
                })
            }
        }
    });
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
                var isPlaced = false;
                for (var room of rooms){
                    if (room.currentCount != room.maxCount){
                        response = paceUserToRoom(this.person, room);
                        isPlaced = true;
                        break;
                    }
                }
                if (!isPlaced){
                    var room = new RoomModel({});
                    response = paceUserToRoom(this.person, room);
                }
            }
            else {
                var room = new RoomModel({});
                response = paceUserToRoom(this.person, room);
            }
            res.send(response);
        }));
    }
    else res.send(myResponse(1,{},'Not person'))
  });
});



router.post('/place', function(req, res, next) {
  UserModel.findOne({'login': req.session.username}, function (err, person) {
    if (err) res.send(myResponse(1,{},err));
    else if (person){
        console.log(person.login);
        this.person = person;
        RoomModel.findOne({'id': person.currentRoom}, (function (error, room) {
            if (error) {response = myResponse(1,{},err)}
            else if(room){
                var amount = parseFloat(req.body.amount);
                var firstBet = true;
                if (this.person.balance < amount) {
                    response = myResponse(1,{},'not enought money');
                    res.send(response);
                    return
                }
                room.userBets.forEach(
                    function(item){
                        if (item['userLogin'] == this.person.login)
                            {
                                item['amount'] += amount;
                                firstBet = false;
                                this.person.balance = this.person.balance - amount;
                            }
                });
                if (firstBet){
                    room.userBets.push({
                        userLogin: this.person.login,
                        amount: parseFloat(req.body.amount)
                    })
                    this.person.balance = this.person.balance - amount;
                }
                saveObj(room);
                saveObj(this.person);
                room.markModified('userBets');
                response = myResponse(0,room,'');
            }
            else response = myResponse(1,{},'room not found');
            res.send(response);
        }));
    }
    else res.send(myResponse(1,{},'Not person'))
  });
});

module.exports = router;