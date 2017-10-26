var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var httpProxy = require('http-proxy');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//PROXY TO API
/*const apiProxy = httpProxy.createProxyServer({
    target:'http://localhost:3001'
});
app.use('/api', function(req, res) {
    apiProxy.web(req, res);
});*/

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

//---->>>> UPDATE PROFILE <<<<----
app.put('/profil/:_id', function(req, res) {
    var newData = req.body;
    var query = req.params._id;

    var update = {
        '$set': {
            nom: newData.nom,
            race: newData.race,
            carriereA: newData.carriereA,
            Acarriere: newData.Acarriere
        }
    };

    var options = {new: false};

    Profile.findOneAndUpdate(query, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
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

//---->>>> UPDATE CARACTERISTIQUES DE BASE <<<<----
app.put('/caracbase/:_id', function(req, res) {
   var caracBase = req.body;
   var query = req.params._id;

   var update = {
       '$set': {
           cc: caracBase.cc,
           ct: caracBase.ct,
           f: caracBase.f,
           e: caracBase.e,
           ag: caracBase.ag,
           int: caracBase.int,
           fm: caracBase.fm,
           soc: caracBase.soc,
           a: caracBase.a,
           b: caracBase.b,
           bf: caracBase.bf,
           be: caracBase.be,
           m: caracBase.m,
           mag: caracBase.mag,
           pf: caracBase.pf,
           pd: caracBase.pd
       }
   };

   var options = {new: false};

   CaracBase.findOneAndUpdate(query, update, options, function(err, caracBase) {
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
