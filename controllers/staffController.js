const Staff = require('../models/Staff');

exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addStaff = async (req, res) => {
  const { name, role } = req.body;
  try {
    const staff = new Staff({ name, role });
    await staff.save();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};