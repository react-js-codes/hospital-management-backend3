const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const financeController = require('../controllers/financeController');

router.get('/', auth, financeController.getFinance);
router.post('/', auth, financeController.addFinance);

module.exports = router;