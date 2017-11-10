var mongoose = require('mongoose');

var inventaireSchema = mongoose.Schema({
    nom: String,
    quantite: Number,
    encombrement: Number,
});

var Inventaire = mongoose.model('Inventaire', inventaireSchema);
module.exports = Inventaire;
