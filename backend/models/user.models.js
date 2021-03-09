var db = require('../db/mongo-connect')();
var Schema = require('mongoose').Schema;

var user = Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    role: String,
    preferences: []
});
module.exports = db.model('user', user);