const express = require('express');
const router = express.Router();
var authenticateJwt = require('../middleware/authenticateJwt');

//const model = require('../models/news.model')();
var preferencesController = require('../controllers/preference.controllers');


router.post('/add',authenticateJwt, preferencesController.add);

module.exports = router;