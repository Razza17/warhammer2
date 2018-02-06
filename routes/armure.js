let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Armure = require('../models/armure');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST ARMURES <<<<----
router.post('/', function(req, res) {
    let armure = req.body;

    Armure.create(armure, function(err, armures) {
        if(err) {
            throw err;
        }
        res.json(armures);
    })
});

//---->>>> GET ARMURES <<<<----
router.get('/', function(req, res) {
    Armure.find(function(err, armures) {
        if(err) {
            throw err;
        }
        res.json(armures);
    })
});

//---->>>> DELETE ARMURES <<<<----
router.delete('/:_id', function(req, res) {
    let query = {_id: req.params._id};

    Armure.remove(query, function(err, armures) {
        if(err) {
            throw err;
        }
        res.json(armures);
    })
});

//---->>>> UPDATE ARMURES <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
