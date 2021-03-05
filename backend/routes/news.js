const express = require('express');
const router = express.Router();
var authenticateJwt = require('../middleware/authenticateJwt');
var roleCheck = require('../middleware/roleCheck');
var newsController = require('../controllers/news.controllers');

router.post('/', newsController.show);
router.post('/add',[authenticateJwt,roleCheck], newsController.save);
router.put('/edit/:id',[authenticateJwt,roleCheck] ,newsController.update);
router.get('/select/:id', newsController.showOne);
router.delete('/delete/:id',[authenticateJwt,roleCheck], newsController.delete);
router.post('/recherche',newsController.search);
module.exports = router;