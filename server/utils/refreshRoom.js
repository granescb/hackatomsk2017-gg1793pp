var express = require('express');
var UserModel = require('../models/userModel');
var RoomModel = require('../models/roomModel');
var db = require('../model');

function refreshRoom(rooms) {
    for (var room of rooms){
        var timeExit = room.dateStarting;
        timeExit.setSeconds(timeExit.getSeconds() + 10);
        var currTime = new Date();
        if (timeExit < currTime){
            var random = generateRandom();
            var totalSumm = 0;
            var userCount = [];
            room.userBets.forEach(function(item){
                totalSumm += item.amount;
                userCount.push(totalSumm);
            });
            var winCount = totalSumm*random;
            for (var i = 0; i < userCount.length; i++){
                if (userCount[i] > winCount) {
                   var winNumber = i;
                   break;
                }
            }
            room.winLogin = room.userBets[winNumber].userLogin;
            room.isActive = false;
            room.userBets.forEach(function(item){
                UserModel.findOne({'login':item.userLogin}, function (err, user) {
                    if (err) {response = myResponse(1,{},err)}
                    else if(user){
                        user.currentRoom = undefined;
                        if (user.login == room.winLogin){
                            user.balance += totalSumm*0.95
                        }
                        saveObj(user)
                    }
                    else console.log('WoW!!! User not found for pay WIN! '+ item.userLogin)
                });
            });
            saveObj(room)
        }
    }
}

function generateRandom() {
    //TODO
    // Необходимо дописать апи по подключению удаленного рандома
    return Math.random()
}

function saveObj(ogj) {
    ogj.save(function (err, person) {
      if (err){
          if (person){
           console.log("Something goes wrong with obj " + ogj.login);
          }
          else{
              console.log("Something goes wrong");
          }
      }
    });
}

module.exports = refreshRoom;

