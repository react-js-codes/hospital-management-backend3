const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
  type: { type: String, enum: ['revenue', 'expense'], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Finance', financeSchema);