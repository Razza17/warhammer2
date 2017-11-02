var mongoose = require('mongoose');

var armureSchema = mongoose.Schema({
    nom: String,
    encombrement: Number,
    couverture: String,
    points: Number
});

var Armure = mongoose.model('Armure', armureSchema);
module.exports = Armure;
