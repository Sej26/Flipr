const express = require('express');
const router = express.Router();
const ShippingDetail = require('../models/ShippingDetail.js');

// Create a new shipping detail
router.post('/shipppingdetails', async (req, res) => {
  try {
    const shippingDetail = new ShippingDetail({
      address: req.body.address,
      city: req.body.city,
      pincode: req.body.pincode,
      purchaseOrderId: req.body.purchaseOrderId,
      customerId: req.body.customerId});
    await shippingDetail.save();
    res.status(201).json(shippingDetail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;