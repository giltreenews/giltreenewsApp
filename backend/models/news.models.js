module.exports = function(){
    var db = require('../db/mongo-connect')();
    var Schema = require('mongoose').Schema;

    var news = Schema({
        source: {id: String, name: String},
        author: String,
        title: String,
        description: String,
        url: String,
        urlToImage: String,
        publishedAt: String,
        content: String,
		category: String
    });

    return db.model('news', news);

}