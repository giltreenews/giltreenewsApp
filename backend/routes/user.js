const express = require('express');
const router = express.Router();

var userController = require('../controllers/user.controllers');

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;