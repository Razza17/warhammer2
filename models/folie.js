var mongoose = require('mongoose');

var folieSchema = mongoose.Schema({
    nom: String,
    user : String,
    perso : String
});

var Folie = mongoose.model('Folie', folieSchema);
module.exports = Folie;
