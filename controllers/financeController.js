const Finance = require('../models/Finance');

exports.getFinance = async (req, res) => {
  try {
    const finances = await Finance.find();
    res.json(finances);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addFinance = async (req, res) => {
  const { type, amount } = req.body;
  try {
    const finance = new Finance({ type, amount });
    await finance.save();
    res.json(finance);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};