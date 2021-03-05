var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var news = require('./routes/news');

var user = require('./routes/user');
var comments = require('./routes/comments');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/news', news);

app.use('/user', user);
app.use('/comments', comments);

var server = {
    port: 8080
  };
  
  app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));