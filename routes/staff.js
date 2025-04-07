const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const staffController = require('../controllers/staffController');

router.get('/', auth, staffController.getStaff);
router.post('/', auth, staffController.addStaff);

module.exports = router;