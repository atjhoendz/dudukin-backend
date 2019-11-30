var express = require('express');
var router = express.Router();
var User = require('../models/user');
var { getAllUser } = require('../controllers/UserController');
var auth = require('../middleware/auth');

/* GET users listing. */
router.get('/', auth.isAuthorized, getAllUser);

module.exports = router;
