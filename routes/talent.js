let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Talent = require('../models/talent');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST TALENT <<<<----
router.post('/', function(req, res) {
    let talent = req.body;

    Talent.create(talent, function(err, talents) {
        if(err) {
            throw err;
        }
        res.json(talents);
    })
});

//---->>>> GET TALENT <<<<----
router.get('/', function(req, res) {
    Talent.find(function(err, talents) {
        if(err) {
            throw err;
        }
        res.json(talents);
    })
});

//---->>>> UPDATE TALENT <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
