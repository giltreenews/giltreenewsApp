var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = {
    port: 8080
  };
  
app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));