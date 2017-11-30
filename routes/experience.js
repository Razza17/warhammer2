let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Experience = require('../models/experience');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST EXPERIENCE <<<<----
router.post('/', function(req, res) {
    let inv = req.body;

    Experience.create(inv, function(err, experience) {
        if(err) {
            throw err;
        }
        res.json(experience);
    })
});

//---->>>> GET EXPERIENCE <<<<----
router.get('/', function(req, res) {
    Experience.find(function(err, experience) {
        if(err) {
            throw err;
        }
        res.json(experience);
    })
});

//---->>>> UPDATE EXPERIENCE <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
