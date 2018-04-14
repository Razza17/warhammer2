var mongoose = require('mongoose');

var armeSchema = mongoose.Schema({
    nom: String,
    encombrement: Number,
    degats: Number,
    portee: String,
    rechargement: Number,
    attributs: String,
    user : String,
    perso : String
});

var Arme = mongoose.model('Arme', armeSchema);
module.exports = Arme;
