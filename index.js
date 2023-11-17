const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

const customerRoutes = require('./router/customerRoutes.js');
const purchaseOrderRoutes = require('./router/purchaseOrderRoutes.js');
const shippingDetailRoutes = require('./router/shippingDetailRoutes.js');

app.use('/api', customerRoutes);
app.use('/api', purchaseOrderRoutes);
app.use('/api', shippingDetailRoutes);

// app.post('/', (req,res) => {
//   console.log(res.body);
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});