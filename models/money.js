var mongoose = require('mongoose');

var moneySchema = mongoose.Schema({
    couronnes: Number,
    pistoles: Number,
    sous: Number
});

var Money = mongoose.model('Money', moneySchema);
module.exports = Money;
