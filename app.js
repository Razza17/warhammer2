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
var Count = require('./models/count.js');
var CompetenceBase = require('./models/competenceBase.js');
var CompetenceAvance = require('./models/competenceAvance.js');
var Talent = require('./models/talent');

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
   var newData = req.body;
   var query = req.params._id;

   var update = {
       '$set': {
           cc: newData.cc,
           ct: newData.ct,
           f: newData.f,
           e: newData.e,
           ag: newData.ag,
           int: newData.int,
           fm: newData.fm,
           soc: newData.soc,
           a: newData.a,
           b: newData.b,
           bf: newData.bf,
           be: newData.be,
           m: newData.m,
           mag: newData.mag,
           pf: newData.pf,
           pd: newData.pd
       }
   };

   var options = {new: false};

   CaracBase.findOneAndUpdate(query, update, options, function(err, data) {
       if(err) {
           throw err;
       }
       res.json(data);
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

//---->>>> UPDATE CARACTERISTIQUES AVANCE <<<<----
app.put('/caracavance/:_id', function(req, res) {
    var newData = req.body;
    var query = req.params._id;

    var update = {
        '$set': {
            cc: newData.cc,
            ct: newData.ct,
            f: newData.f,
            e: newData.e,
            ag: newData.ag,
            int: newData.int,
            fm: newData.fm,
            soc: newData.soc,
            a: newData.a,
            b: newData.b,
            bf: newData.bf,
            be: newData.be,
            m: newData.m,
            mag: newData.mag,
            pf: newData.pf,
            pd: newData.pd
        }
    };

    var options = {new: false};

    CaracAvance.findOneAndUpdate(query, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
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

//---->>>> UPDATE CARACTERISTIQUES ACTUEL <<<<----
app.put('/caracactuel/:_id', function(req, res) {
    var newData = req.body;
    var query = req.params._id;

    var update = {
        '$set': {
            cc: newData.cc,
            ct: newData.ct,
            f: newData.f,
            e: newData.e,
            ag: newData.ag,
            int: newData.int,
            fm: newData.fm,
            soc: newData.soc,
            a: newData.a,
            b: newData.b,
            bf: newData.bf,
            be: newData.be,
            m: newData.m,
            mag: newData.mag,
            pf: newData.pf,
            pd: newData.pd
        }
    };

    var options = {new: false};

    CaracActuel.findOneAndUpdate(query, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST COUNT <<<<----
app.post('/count', function(req, res) {
    var count = req.body;

    Count.create(count, function(err, counting) {
        if(err) {
            throw err;
        }
        res.json(counting);
    })
});

//---->>>> GET COUNT <<<<----
app.get('/count', function(req, res) {
    Count.find(function(err, counting) {
        if(err) {
            throw err;
        }
        res.json(counting);
    })
});

//---->>>> UPDATE COUNT <<<<----
app.put('/count/:_id', function(req, res) {
    var newData = req.body;

    var update = {
        '$set': {
            value: newData.value
        }
    };

    var options = {new: false};

    Count.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST COMPETENCE BASE <<<<----
app.post('/competencebase', function(req, res) {
    var count = req.body;

    CompetenceBase.create(count, function(err, competence) {
        if(err) {
            throw err;
        }
        res.json(competence);
    })
});

//---->>>> GET COMPETENCE BASE <<<<----
app.get('/competencebase', function(req, res) {
    CompetenceBase.find(function(err, competence) {
        if(err) {
            throw err;
        }
        res.json(competence);
    })
});

//---->>>> UPDATE COMPETENCE BASE <<<<----

// TO SETUP

/*app.put('/competencebase/:_id', function(req, res) {
    var newData = req.body;

    var update = {
        '$set': {
            //value: newData.value
        }
    };

    var options = {new: false};

    CompetenceBase.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});*/

//---->>>> POST COMPETENCE AVANCE <<<<----
app.post('/competenceavance', function(req, res) {
    var count = req.body;

    CompetenceAvance.create(count, function(err, competence) {
        if(err) {
            throw err;
        }
        res.json(competence);
    })
});

//---->>>> GET COMPETENCE AVANCE <<<<----
app.get('/competenceavance', function(req, res) {
    CompetenceAvance.find(function(err, competence) {
        if(err) {
            throw err;
        }
        res.json(competence);
    })
});

//---->>>> UPDATE COMPETENCE AVANCE <<<<----

// TO SETUP

/*app.put('/competenceavance/:_id', function(req, res) {
    var newData = req.body;

    var update = {
        '$set': {
            //value: newData.value
        }
    };

    var options = {new: false};

    CompetenceAvance.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});*/

//---->>>> POST TALENT <<<<----
app.post('/talent', function(req, res) {
    var count = req.body;

    Talent.create(count, function(err, talents) {
        if(err) {
            throw err;
        }
        res.json(talents);
    })
});

//---->>>> GET TALENT <<<<----
app.get('/talent', function(req, res) {
    Talent.find(function(err, talents) {
        if(err) {
            throw err;
        }
        res.json(talents);
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
