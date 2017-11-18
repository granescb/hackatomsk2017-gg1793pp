var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var db = require('../model');
var myResponse = require('../utils/response');


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
          console.log("Something goes wrong with user " + newUser.login);
      }
      else{
          newUser.speak();
      }
    });
    res.send('Ok');
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
        else {
            if (person.login){
                req.session.authorized = true;
                req.session.username = person.login;
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
module.exports = router;
