var mongoose = require('mongoose');

var folieSchema = mongoose.Schema({
    nom: String
});

var Folie = mongoose.model('Folie', folieSchema);
module.exports = Folie;
