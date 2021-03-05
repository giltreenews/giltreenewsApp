const express = require('express');
const router = express.Router();
var authenticateJwt = require('../middleware/authenticateJwt');

//const model = require('../models/news.model')();
var commentsController = require('../controllers/comments.controllers');


router.post('/add/:articleId',authenticateJwt, commentsController.add);
router.get('/get/:id', commentsController.getById);

module.exports = router;