const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const patientController = require('../controllers/patientController');

router.get('/', auth, patientController.getPatients);
router.post('/', auth, patientController.addPatient);

module.exports = router;