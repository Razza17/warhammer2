var mongoose = require('mongoose');

var competenceAvanceSchema = mongoose.Schema({
    nom: String,
    carac : String,
    acquis : Boolean,
    dix : Boolean,
    vingt : Boolean,
    bonus : Number,
    user : String,
    perso : String

});

var CompetenceAvance = mongoose.model('CompetenceAvance', competenceAvanceSchema);
module.exports = CompetenceAvance;
