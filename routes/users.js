var express = require('express');
var router = express.Router();
var User = require('../models/user');
var auth = require('../middleware/auth');
var { getAll, get, deleteUser, update, updateRole, updatePassword } = require('../controllers/UserController');

// router.get('/', auth.isAuthorized, getAllUser);
router.get('/', getAll);
router.get('/find/:key/:value', get);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', update);
router.put('/update/role/:id', updateRole);
router.put('/update/pwd/:id', updatePassword);

module.exports = router;
