let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let users = require('./routes/users');

let app = express();

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
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wolfgang');

let Profile = require('./models/profile.js');
let Details = require('./models/details.js');
let CaracBase = require('./models/caracBase.js');
let CaracAvance = require('./models/caracAvance.js');
let CaracActuel = require('./models/caracActuel.js');
let Count = require('./models/count.js');
let CompetenceBase = require('./models/competenceBase.js');
let CompetenceAvance = require('./models/competenceAvance.js');
let Talent = require('./models/talent');
let Arme = require('./models/arme');
let Armure = require('./models/armure');

//---->>>> POST PROFILE <<<<----
app.post('/profil', function(req, res) {
    let profil = req.body;

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
    let newData = req.body;
    let query = req.params._id;

    let update = {
        '$set': {
            nom: newData.nom,
            race: newData.race,
            carriereA: newData.carriereA,
            Acarriere: newData.Acarriere
        }
    };

    let options = {new: false};

    Profile.findOneAndUpdate(query, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST DETAILS <<<<----
app.post('/details', function(req, res) {
    let detail = req.body;

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
    let caracBase = req.body;

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
   let newData = req.body;
   let query = req.params._id;

   let update = {
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

   let options = {new: false};

   CaracBase.findOneAndUpdate(query, update, options, function(err, data) {
       if(err) {
           throw err;
       }
       res.json(data);
   })
});

//---->>>> POST CARACTERISTIQUES AVANCE <<<<----
app.post('/caracavance', function(req, res) {
    let caracAvance = req.body;

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
    let newData = req.body;
    let query = req.params._id;

    let update = {
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

    let options = {new: false};

    CaracAvance.findOneAndUpdate(query, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST CARACTERISTIQUES ACTUEL <<<<----
app.post('/caracactuel', function(req, res) {
    let caracActuel = req.body;

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
    let newData = req.body;
    let query = req.params._id;

    let update = {
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

    let options = {new: false};

    CaracActuel.findOneAndUpdate(query, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST COUNT <<<<----
app.post('/count', function(req, res) {
    let count = req.body;

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
    let newData = req.body;

    let update = {
        '$set': {
            value: newData.value
        }
    };

    let options = {new: false};

    Count.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST COMPETENCE BASE <<<<----
app.post('/competencebase', function(req, res) {
    let compBase = req.body;

    CompetenceBase.create(compBase, function(err, competence) {
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
    let newData = req.body;

    let update = {
        '$set': {
            //value: newData.value
        }
    };

    let options = {new: false};

    CompetenceBase.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});*/

//---->>>> POST COMPETENCE AVANCE <<<<----
app.post('/competenceavance', function(req, res) {
    let compAvance = req.body;

    CompetenceAvance.create(compAvance, function(err, competence) {
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
    let newData = req.body;

    let update = {
        '$set': {
            //value: newData.value
        }
    };

    let options = {new: false};

    CompetenceAvance.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});*/

//---->>>> POST TALENT <<<<----
app.post('/talent', function(req, res) {
    let talent = req.body;

    Talent.create(talent, function(err, talents) {
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

//---->>>> POST ARMES <<<<----
app.post('/arme', function(req, res) {
    let arme = req.body;

    Arme.create(arme, function(err, armes) {
        if(err) {
            throw err;
        }
        res.json(armes);
    })
});

//---->>>> GET ARMES <<<<----
app.get('/arme', function(req, res) {
    Arme.find(function(err, armes) {
        if(err) {
            throw err;
        }
        res.json(armes);
    })
});

//---->>>> DELETE ARMES <<<<----
app.delete('/arme/:_id', function(req, res) {
    let query = {_id: req.params._id};

    Arme.remove(query, function(err, armes) {
        if(err) {
            throw err;
        }
        res.json(armes);
    })
});

//---->>>> UPDATE ARMES <<<<----

// TO SETUP

/*app.put('/arme/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            //value: newData.value
        }
    };

    let options = {new: false};

    Arme.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});*/

//---->>>> POST ARMURES <<<<----
app.post('/armure', function(req, res) {
    let armure = req.body;

    Armure.create(armure, function(err, armures) {
        if(err) {
            throw err;
        }
        res.json(armures);
    })
});

//---->>>> GET ARMURES <<<<----
app.get('/armure', function(req, res) {
    Armure.find(function(err, armures) {
        if(err) {
            throw err;
        }
        res.json(armures);
    })
});

//---->>>> DELETE ARMURES <<<<----
app.delete('/armure/:_id', function(req, res) {
    let query = {_id: req.params._id};

    Armure.remove(query, function(err, armures) {
        if(err) {
            throw err;
        }
        res.json(armures);
    })
});

//---->>>> UPDATE ARMURES <<<<----

// TO SETUP

/*app.put('/armure/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            //value: newData.value
        }
    };

    let options = {new: false};

    Armure.updateOne({name: newData.name}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});*/

// END API

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
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
