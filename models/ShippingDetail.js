const mongoose = require('mongoose');

const shippingDetailSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  purchaseOrderId: { type: String, required: true },
  customerId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true },
});

module.exports = mongoose.model('ShippingDetail', shippingDetailSchema);