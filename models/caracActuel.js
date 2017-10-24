var mongoose = require('mongoose');

var caracActuelSchema = mongoose.Schema({
    cc: Number,
    ct: Number,
    f: Number,
    e: Number,
    ag: Number,
    int: Number,
    fm: Number,
    soc: Number,
    a: Number,
    b: Number,
    bf: Number,
    be: Number,
    m: Number,
    mag: Number,
    pf: Number,
    pd: Number
});

var CaracActuel = mongoose.model('CaracActuel', caracActuelSchema);
module.exports = CaracActuel;
