var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
const db = require('./config/db');
var UserModel = require('./models/userModel');
var RoomModel = require('./models/roomModel');

var index = require('./routes/index');
var users = require('./routes/users');
var rooms = require('./routes/rooms');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var secret = '12409sfdkh0182rhwfASnx';
app.use(cookieParser());
app.use(session({ secret: secret }));
app.use(bodyParser());

app.use('/', index);
app.use('/api/user', users);
app.use('/api/rooms', rooms);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// test init user
var newUser =  new UserModel({login: 'test',
      password: 'test'});
    newUser.save(function (err, newUser) {
      if (err){
          if (newUser){
           console.log("Something goes wrong with user " + newUser.login);
          }
          else{
              console.log("Something goes wrong");
          }
      }
      else{
          newUser.speak();
      }
    });
// test init room
var room = new RoomModel({});
room.save(function (err, room) {
  if (err){
      if (room){
       console.log("Something goes wrong with user " + room.id);
      }
      else{
          console.log("Something goes wrong");
      }
  }
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
