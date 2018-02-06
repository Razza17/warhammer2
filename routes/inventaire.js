let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Inventaire = require('../models/inventaire');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST INVENTAIRE <<<<----
router.post('/', function(req, res) {
    let inv = req.body;

    Inventaire.create(inv, function(err, inventaire) {
        if(err) {
            throw err;
        }
        res.json(inventaire);
    })
});

//---->>>> GET INVENTAIRE <<<<----
router.get('/', function(req, res) {
    Inventaire.find(function(err, inventaire) {
        if(err) {
            throw err;
        }
        res.json(inventaire);
    })
});

//---->>>> DELETE INVENTAIRE <<<<----
router.delete('/:_id', function(req, res) {
    let query = {_id: req.params._id};

    Inventaire.remove(query, function(err, inventaire) {
        if(err) {
            throw err;
        }
        res.json(inventaire);
    })
});

//---->>>> UPDATE INVENTAIRE <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
