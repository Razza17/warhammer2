let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Arme = require('../models/arme');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST ARMES <<<<----
router.post('/', function(req, res) {
    let arme = req.body;

    Arme.create(arme, function(err, armes) {
        if(err) {
            throw err;
        }
        res.json(armes);
    })
});

//---->>>> GET ARMES <<<<----
router.get('/', function(req, res) {
    Arme.find(function(err, armes) {
        if(err) {
            throw err;
        }
        res.json(armes);
    })
});

//---->>>> DELETE ARMES <<<<----
router.delete('/:_id', function(req, res) {
    let query = {_id: req.params._id};

    Arme.remove(query, function(err, armes) {
        if(err) {
            throw err;
        }
        res.json(armes);
    })
});

//---->>>> UPDATE ARMES <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
