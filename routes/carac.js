let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Caracteristique = require('../models/Caracteristique');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST CARACTERISTIQUES <<<<----
router.post('/', function(req, res) {
    let carac = req.body;

    Caracteristique.create(carac, function(err, carac) {
        if(err) {
            throw err;
        }
        res.json(carac);
    })
});

//---->>>> GET CARACTERISTIQUES <<<<----
router.get('/', function(req, res) {
    Caracteristique.find(function(err, carac) {
        if(err) {
            throw err;
        }
        res.json(carac);
    })
});

//---->>>> UPDATE CARACTERISTIQUES <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
