let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Money = require('../models/money');

mongoose.connect('mongodb://localhost:27017/wolfgang', {
    useMongoClient: true
});

//---->>>> POST MONEY <<<<----
router.post('/', function(req, res) {
    let money = req.body;

    Money.create(money, function(err, money) {
        if(err) {
            throw err;
        }
        res.json(money);
    })
});

//---->>>> GET MONEY <<<<----
router.get('/', function(req, res) {
    Money.find(function(err, money) {
        if(err) {
            throw err;
        }
        res.json(money);
    })
});

//---->>>> UPDATE MONEY <<<<----
router.put('/:_id', function(req, res) {
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

module.exports = router;
