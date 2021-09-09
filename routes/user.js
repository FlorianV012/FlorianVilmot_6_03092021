const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const emailCheck = require('../middleware/email-check');
const passwordCheck = require('../middleware/password-check');

router.post('/signup', emailCheck, passwordCheck, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;