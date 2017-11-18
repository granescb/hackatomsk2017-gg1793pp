var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
    var newUser =  new UserModel({login: req.body.login,
      password: req.body.password});
    newUser.speak();
    newUser.save(function (err, newUser) {
      if (err){
          //TODO
              // Требуется вываливание ошибок
          if (err.code==11000){
            console.log("Username is user");
          }
          else console.log("Something goes wrong with user " + newUser.login);
          response = myResponse(err.code, {}, 'User is deprecated');

      }
      else{
          response = myResponse(0, {'login': newUser.login,
                    'balance': newUser.balance}, '');
      }
      res.send(response);
    });
});
// this testing function
router.get('/list', function(req, res, next) {
    UserModel.find({}, function (err, person) {
     if (err) return handleError(err);
     else{
        console.log(person);
        console.log(req.session.authorized);
        console.log(req.session.username);
        res.send(person)
     }
    });
});
router.post('/login', function (req, res, next) {
    UserModel.findOne({
        'login': req.body.login,
        'password': req.body.password
    }, function (err, person) {
        if (err) console.log('Error sign-in');
        else if(person){
            if (person.login){
                req.session.authorized = true;
                req.session.username = person.login;
                req.session.userId = person.id;
                req.cookies.user = person.login;
                console.log(person.login + (' is Login!'));
                response = myResponse(0, {'login': person.login,
                    'balance': person.balance}, '');
                res.send(response)
            }
            else {
                res.send('User not found');
            }
        }
    });
});

router.get('/balance', function(req, res, next) {
    UserModel.findOne({'login': req.session.username}, function (err, person) {
     if (err) return handleError(err);
     else if (person){
        console.log(person);
        response = myResponse(0, {'balance': person.balance}, '');
        res.send(response)
     }
    });
});

router.post('/topup/fantic', function(req, res, next) {
    UserModel.findOne({'login': req.session.username}, function (err, person) {
     if (err) return handleError(err);
     else if (person){
        console.log(person);
        person.balance += parseFloat(req.body.amount);
        saveObj(person);
        response = myResponse(0, {'balance': person.balance}, '');
        res.send(response)
     }
    });
});

module.exports = router;
