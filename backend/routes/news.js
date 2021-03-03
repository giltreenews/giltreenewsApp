const express = require('express');
const router = express.Router();

var newsController = require('../controllers/news.controllers');

router.get('/', newsController.show);

router.get('/one',newsController.showOneAny);

router.get('/recently',newsController.showLimitThree)
router.get('/flashinfos',newsController.showLimitTwenty)


router.post('/add', newsController.save);

router.put('/edit/:id',newsController.update);

router.get('/select/:id', newsController.showOne);

router.delete('/delete/:id', newsController.delete);

module.exports = router;