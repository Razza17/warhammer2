var mongoose = require('mongoose');

var experienceSchema = mongoose.Schema({
    actuel: Number,
    total: Number,
    user : String,
    perso : String
});

var Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
