const Patient = require('../models/Patient');

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addPatient = async (req, res) => {
  const { name, age, gender, condition } = req.body;
  try {
    const patient = new Patient({ name, age, gender, condition });
    await patient.save();
    res.json(patient);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};