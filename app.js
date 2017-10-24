var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wolfgang');

var Profile = require('./models/profile.js');
var Details = require('./models/details.js');

//---->>>> POST CHARACTER PROFILE <<<<----
app.post('/profil', function(req, res) {
    var profil = req.body

    Profile.create(profil, function(err, profile) {
        if(err) {
            throw err;
        }
        res.json(profile);
    })
});

//---->>>> GET CHARACTER PROFILE <<<<----
app.get('/profil', function(req, res) {
    Profile.find(function(err, profile) {
        if(err) {
            throw err;
        }
        res.json(profile);
    })
});

//---->>>> POST CHARACTER DETAILS <<<<----
app.post('/details', function(req, res) {
    var detail = req.body

    Details.create(detail, function(err, detail) {
        if(err) {
            throw err;
        }
        res.json(detail);
    })
});

//---->>>> GET CHARACTER DETAILS <<<<----
app.get('/details', function(req, res) {
    Details.find(function(err, detail) {
        if(err) {
            throw err;
        }
        res.json(detail);
    })
});

// END API

app.use('/', index);
app.use('/users', users);

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

module.exports = app;
