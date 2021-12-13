const express = require('express');
const router = express.Router();

const newControllers = require('../app/controllers/NewControllers');

router.get('/',newControllers.index);

module.exports = router;
