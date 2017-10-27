var mongoose = require('mongoose');

var countSchema = mongoose.Schema({
    name: String,
    value: Number
});

var Count = mongoose.model('Count', countSchema);
module.exports = Count;
