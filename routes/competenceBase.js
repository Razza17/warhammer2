let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let CompetenceBase = require('../models/competenceBase');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST COMPETENCE BASE <<<<----
router.post('/', function(req, res) {
    let compBase = req.body;

    CompetenceBase.create(compBase, function(err, competence) {
        if(err) {
            throw err;
        }
        res.json(competence);
    })
});

//---->>>> GET COMPETENCE BASE <<<<----
router.get('/', function(req, res) {
    CompetenceBase.find(function(err, competence) {
        if(err) {
            throw err;
        }
        res.json(competence);
    })
});

//---->>>> UPDATE COMPETENCE BASE <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
