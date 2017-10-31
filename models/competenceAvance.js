var mongoose = require('mongoose');

var competenceAvanceSchema = mongoose.Schema({
    "nom": String,
    "carac" : String,
    "acquis" : Boolean,
    "dix" : Boolean,
    "vingt" : Boolean,
    "bonus" : Number

});

var CompetenceAvance = mongoose.model('CompetenceAvance', competenceAvanceSchema);
module.exports = CompetenceAvance;
