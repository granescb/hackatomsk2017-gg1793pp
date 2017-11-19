var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var db = require('../model');
var myResponse = require('../utils/response');


function saveObj(ogj) {
    ogj.save(function (err, person) {
      if (err){
          if (person){
           console.log("Something goes wrong with user " + ogj);
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
    try {
        var person = new UserModel({
            login: req.body.login,
            password: req.body.password
        });
        person.save(function (err, person) {
            if (err) {
                //TODO
                // Требуется вываливание ошибок
                if (err.code == 11000) console.log("Username is use");
                else console.log("Something goes wrong with user " + person.login);
                response = myResponse(err.code, {}, 'User is deprecated');
            }
            else {
                req.session.authorized = true;
                req.session.username = person.login;
                req.cookies.user = person.login;
                response = myResponse(0, {
                    'login': person.login,
                    'balance': person.balance
                }, '');
            }
            res.send(response);
        })
    }
    catch (err){
        response = myResponse(1,{},err);
        res.send(response);
    }
});
// this testing function
router.get('/list', function(req, res, next) {
    UserModel.find({}, function (err, person) {
     if (err) rres.send(myResponse(1,{},err));
     else{
        res.send(person)
     }
    });
});

router.post('/login', function (req, res, next) {
    try {
        UserModel.findOne({
            'login': req.body.login,
            'password': req.body.password
        }, function (err, person) {
            if (err) res.send(myResponse(1, {}, err));
            else if (person) {
                if (person.login) {
                    req.session.authorized = true;
                    req.session.username = person.login;
                    req.cookies.user = person.login;
                    console.log(person.login + (' is Login!'));
                    response = myResponse(0, {
                        'login': person.login,
                        'balance': person.balance
                    }, '');
                    res.send(response)
                }
                else {
                    console.log('User not found');
                }
            }
        });
    }
    catch (err){
        response = myResponse(1,{},err);
        res.send(response);
    }
});

router.get('/logout', function (req, res, next) {
    try {
        UserModel.findOne({}, function (err, person) {
            if (err) res.send(myResponse(1, {}, err));
            else if (person) {
                if (person.login) {
                    req.session.authorized = null;
                    req.session.username = null;
                    req.session.userId = null;
                    req.cookies.user = null;
                    res.send(200);
                }
                else {
                    res.send('User not found');
                }
            }
        });
    }
    catch (err){
        response = myResponse(1,{},err);
        res.send(response);
    }
});

router.get('/balance', function(req, res, next) {
    try {
        console.log(req.session.username);
        UserModel.findOne({'login': req.session.username}, function (err, person) {
            if (err) {
                res.send(myResponse(1, {}, err))
            }
            else if (person) {
                console.log(person);
                response = myResponse(0, {'balance': person.balance}, '');
                res.send(response)
            }
            else {
                response = myResponse(1, {}, 'Not session?!');
                res.send(response)
            }
        });
    }
    catch (err){
        response = myResponse(1,{},err);
        res.send(response);
    }
});

router.post('/topup/fantic', function(req, res, next) {
    try {
        UserModel.findOne({'login': req.session.username}, function (err, person) {
            if (err) res.send(myResponse(1, {}, err));
            else if (person) {
                console.log(person);
                person.balance += parseFloat(req.body.amount);
                saveObj(person);
                response = myResponse(0, {'balance': person.balance}, '');
                res.send(response)
            }
        });
    }
    catch (err){
        response = myResponse(1,{},err);
        res.send(response);
    }
});

module.exports = router;
