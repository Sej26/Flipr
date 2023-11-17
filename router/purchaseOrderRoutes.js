const express = require('express');
const router = express.Router();
const PurchaseOrder = require('../models/PurchaseOrder');

// Create a new purchase order
router.post('/purchaseOrder', async (req, res) => {
//   if(!mongoose.Types.ObjectId.isValid(req.body.customerId)){
//     console.log("Error");
// }
  try {
    console.log(req.body);
    const purchaseOrder = new PurchaseOrder({
      productName: req.body.productName,
      quantity: req.body.quantity,
      pricing: req.body.pricing,
      mrp: req.body.mrp ,
      purchaseOrderId: req.body.purchaseOrderId,
      customerId: req.body.customerId
    });
    await purchaseOrder.save();
    res.status(201).json(purchaseOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;