var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModelSchema = new Schema({
    name: String,
    email: String,
    password: String

});

module.exports = mongoose.model('userModel', userModelSchema);