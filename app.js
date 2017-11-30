let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

let Details = require('./models/details');
let Caracteristique = require('./models/Caracteristique');
let Count = require('./models/count');
let CompetenceBase = require('./models/competenceBase');
let CompetenceAvance = require('./models/competenceAvance');
let Talent = require('./models/talent');
let Arme = require('./models/arme');
let Armure = require('./models/armure');
let Money = require('./models/money');
let Inventaire = require('./models/inventaire');
let Folie = require('./models/folie');
let Experience = require('./models/experience');

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

//---->>>> POST CARACTERISTIQUES <<<<----
app.post('/caracteristique', function(req, res) {
    let carac = req.body;

    Caracteristique.create(carac, function(err, carac) {
        if(err) {
            throw err;
        }
        res.json(carac);
    })
});

//---->>>> GET CARACTERISTIQUES <<<<----
app.get('/caracteristique', function(req, res) {
    Caracteristique.find(function(err, carac) {
        if(err) {
            throw err;
        }
        res.json(carac);
    })
});

//---->>>> UPDATE CARACTERISTIQUES <<<<----
app.put('/caracteristique/:_id', function(req, res) {
    let newData = req.body;

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

    Caracteristique.updateOne({_id: newData._id}, update, options, function(err, data) {
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
app.put('/competencebase/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            acquis: newData.acquis,
            dix: newData.dix,
            vingt: newData.vingt,
            bonus: newData.bonus
        }
    };

    let options = {new: false};

    CompetenceBase.updateOne({_id: newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

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
app.put('/competenceavance/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            nom: newData.nom,
            carac: newData.carac,
            acquis: newData.acquis,
            dix: newData.dix,
            vingt: newData.vingt,
            bonus: newData.bonus
        }
    };

    let options = {new: false};

    CompetenceAvance.updateOne({_id: newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

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

//---->>>> UPDATE TALENT <<<<----
app.put('/talent/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            nom: newData.nom,
            desc: newData.desc,
            competence: newData.competence,
            bonus: newData.bonus
        }
    };

    let options = {new: false};

    Talent.updateOne({_id: newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
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
app.put('/arme/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            nom: newData.nom,
            encombrement: newData.encombrement,
            degats: newData.degats,
            portee: newData.portee,
            rechargement: newData.rechargement,
            attributs: newData.attributs
        }
    };

    let options = {new: false};

    Arme.updateOne({_id: newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

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
app.put('/armure/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            nom: newData.nom,
            encombrement: newData.encombrement,
            couverture: newData.couverture,
            points: newData.points
        }
    };

    let options = {new: false};

    Armure.updateOne({_id:newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST MONEY <<<<----
app.post('/money', function(req, res) {
    let money = req.body;

    Money.create(money, function(err, money) {
        if(err) {
            throw err;
        }
        res.json(money);
    })
});

//---->>>> GET MONEY <<<<----
app.get('/money', function(req, res) {
    Money.find(function(err, money) {
        if(err) {
            throw err;
        }
        res.json(money);
    })
});

//---->>>> UPDATE MONEY <<<<----
app.put('/money/:_id', function(req, res) {
    let newData = req.body;
    let query = req.params._id;

    console.log('newData : ', newData.couronnes);
    console.log('query : ', query);

    let update = {
        '$set': {
            couronnes: newData.couronnes,
            pistoles: newData.pistoles,
            sous: newData.sous
        }
    };

    let options = {new: false};

    Money.findOneAndUpdate(query, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST INVENTAIRE <<<<----
app.post('/inventaire', function(req, res) {
    let inv = req.body;

    Inventaire.create(inv, function(err, inventaire) {
        if(err) {
            throw err;
        }
        res.json(inventaire);
    })
});

//---->>>> GET INVENTAIRE <<<<----
app.get('/inventaire', function(req, res) {
    Inventaire.find(function(err, inventaire) {
        if(err) {
            throw err;
        }
        res.json(inventaire);
    })
});

//---->>>> DELETE INVENTAIRE <<<<----
app.delete('/inventaire/:_id', function(req, res) {
    let query = {_id: req.params._id};

    Inventaire.remove(query, function(err, inventaire) {
        if(err) {
            throw err;
        }
        res.json(inventaire);
    })
});

//---->>>> UPDATE INVENTAIRE <<<<----
app.put('/inventaire/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            nom: newData.nom,
            quantite: newData.quantite,
            encombrement: newData.encombrement
        }
    };

    let options = {new: false};

    Inventaire.updateOne({_id: newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST FOLIE <<<<----
app.post('/folie', function(req, res) {
    let inv = req.body;

    Folie.create(inv, function(err, folie) {
        if(err) {
            throw err;
        }
        res.json(folie);
    })
});

//---->>>> GET FOLIE <<<<----
app.get('/folie', function(req, res) {
    Folie.find(function(err, folie) {
        if(err) {
            throw err;
        }
        res.json(folie);
    })
});

//---->>>> DELETE FOLIE <<<<----
app.delete('/folie/:_id', function(req, res) {
    let query = {_id: req.params._id};

    Folie.remove(query, function(err, folie) {
        if(err) {
            throw err;
        }
        res.json(folie);
    })
});

//---->>>> UPDATE FOLIE <<<<----
app.put('/folie/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            nom: newData.nom,
            quantite: newData.quantite,
            encombrement: newData.encombrement
        }
    };

    let options = {new: false};

    Folie.updateOne({_id: newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

//---->>>> POST EXPERIENCE <<<<----
app.post('/experience', function(req, res) {
    let inv = req.body;

    Experience.create(inv, function(err, experience) {
        if(err) {
            throw err;
        }
        res.json(experience);
    })
});

//---->>>> GET EXPERIENCE <<<<----
app.get('/experience', function(req, res) {
    Experience.find(function(err, experience) {
        if(err) {
            throw err;
        }
        res.json(experience);
    })
});

//---->>>> UPDATE EXPERIENCE <<<<----
app.put('/experience/:_id', function(req, res) {
    let newData = req.body;

    let update = {
        '$set': {
            actuel: newData.actuel,
            total: newData.total
        }
    };

    let options = {new: false};

    Experience.updateOne({_id: newData._id}, update, options, function(err, data) {
        if(err) {
            throw err;
        }
        res.json(data);
    })
});

// END API

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
