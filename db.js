var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/library';
mongoose.connect(mongoDB, {useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo DB connection error'));

module.exports = mongoose;