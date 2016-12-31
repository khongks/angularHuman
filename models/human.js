var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HumanSchema = new Schema({
    name: String,
    age: Number
});

var Model = mongoose.model('Human', HumanSchema, 'humans');

module.exports = Model;