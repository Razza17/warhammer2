let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let CompetenceAvance = require('../models/competenceAvance');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST COMPETENCE AVANCE <<<<----
router.post('/', function(req, res) {
    let compAvance = req.body;

    CompetenceAvance.create(compAvance, function(err, competence) {
        if(err) {
            throw err;
        }
        res.json(competence);
    })
});

//---->>>> GET COMPETENCE AVANCE <<<<----
router.get('/', function(req, res) {
    CompetenceAvance.find(function(err, competence) {
        if(err) {
            throw err;
        }
        res.json(competence);
    })
});

//---->>>> UPDATE COMPETENCE AVANCE <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
