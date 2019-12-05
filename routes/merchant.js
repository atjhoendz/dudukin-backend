const express = require('express');
const router = express.Router();
const Merchant = require('../models/merchant');
const { getAll, get, add, update, deleteMerchant } = require('../controllers/MerchantController');

router.get('/getAll', getAll);
router.get('/find/:key/:value', get);
router.post('/add', add);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteMerchant);

module.exports = router;
