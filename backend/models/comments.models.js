var db = require('../db/mongo-connect')();
var Schema = require('mongoose').Schema;

var comments = Schema({
    articleId: {type: Schema.Types.ObjectId, ref: 'news'},
    user: Object,
    content: String,
    createdAt: Date,
    answer : Object

});
module.exports = db.model('comments', comments);