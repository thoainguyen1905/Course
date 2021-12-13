const express = require('express');

const router = express.Router();

const loginControllers = require('../app/controllers/LoginControllers');


router.get('/login',loginControllers.login);
router.post('/login',loginControllers.login)
router.get('/register',loginControllers.register);
router.post('/register',loginControllers.register);


module.exports = router;
