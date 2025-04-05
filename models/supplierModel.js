const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  customerCode: { type: [String], required: true },
  productDes: { type: [String], required: true },
  deliveryTerm: { type: [String], required: true },
  pic: { type: String, required: true },
  paymentTerm: { type: [String], required: true },
  address: { type: String, required: true },
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
