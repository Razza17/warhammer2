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
var CaracBase = require('./models/caracBase.js');
var CaracAvance = require('./models/caracAvance.js');
var CaracActuel = require('./models/caracActuel.js');

//---->>>> POST PROFILE <<<<----
app.post('/profil', function(req, res) {
    var profil = req.body;

    Profile.create(profil, function(err, profile) {
        if(err) {
            throw err;
        }
        res.json(profile);
    })
});

//---->>>> GET PROFILE <<<<----
app.get('/profil', function(req, res) {
    Profile.find(function(err, profile) {
        if(err) {
            throw err;
        }
        res.json(profile);
    })
});

//---->>>> POST DETAILS <<<<----
app.post('/details', function(req, res) {
    var detail = req.body;

    Details.create(detail, function(err, detail) {
        if(err) {
            throw err;
        }
        res.json(detail);
    })
});

//---->>>> GET DETAILS <<<<----
app.get('/details', function(req, res) {
    Details.find(function(err, detail) {
        if(err) {
            throw err;
        }
        res.json(detail);
    })
});

//---->>>> POST CARACTERISTIQUES DE BASE <<<<----
app.post('/caracbase', function(req, res) {
    var caracBase = req.body;

    CaracBase.create(caracBase, function(err, caracBase) {
        if(err) {
            throw err;
        }
        res.json(caracBase);
    })
});

//---->>>> GET CARACTERISTIQUES DE BASE <<<<----
app.get('/caracbase', function(req, res) {
    CaracBase.find(function(err, caracBase) {
        if(err) {
            throw err;
        }
        res.json(caracBase);
    })
});

//---->>>> POST CARACTERISTIQUES AVANCE <<<<----
app.post('/caracavance', function(req, res) {
    var caracAvance = req.body;

    CaracAvance.create(caracAvance, function(err, caracAvance) {
        if(err) {
            throw err;
        }
        res.json(caracAvance);
    })
});

//---->>>> GET CARACTERISTIQUES AVANCE <<<<----
app.get('/caracavance', function(req, res) {
    CaracAvance.find(function(err, caracAvance) {
        if(err) {
            throw err;
        }
        res.json(caracAvance);
    })
});

//---->>>> POST CARACTERISTIQUES ACTUEL <<<<----
app.post('/caracactuel', function(req, res) {
    var caracActuel = req.body;

    CaracActuel.create(caracActuel, function(err, caracActuel) {
        if(err) {
            throw err;
        }
        res.json(caracActuel);
    })
});

//---->>>> GET CARACTERISTIQUES ACTUEL <<<<----
app.get('/caracactuel', function(req, res) {
    CaracActuel.find(function(err, caracActuel) {
        if(err) {
            throw err;
        }
        res.json(caracActuel);
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