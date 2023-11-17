const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  pricing: { type: Number, required: true, max: this.mrp },
  mrp: { type: Number, required: true },
  purchaseOrderId: { type: String, required: true, unique: true },
  customerId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true },
});

module.exports = mongoose.models.PurchaseOrder || mongoose.model('PurchaseOrder', purchaseOrderSchema);