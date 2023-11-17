const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
// Create a new customer
router.post('/api/customer', async (req, res) => {
  try {
    console.log("Hello");
    console.log(req.body);
    // const {customerName , email, mobileNumber, city, customerId} = req.body;
    const customer = new Customer({
      customerName : req.body.customerName,
      email:req.body.email,
      
      mobileNumber:req.body.mobileNumber,
      city:req.body.city,
      customerId:req.body.customerId
    });
    await customer.save();
    res.json(customer);
    // res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;