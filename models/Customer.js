const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  city: { type: String, required: true },
  customerId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Customer', customerSchema);