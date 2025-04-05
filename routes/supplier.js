const express = require("express");
const router = express.Router();
const Supplier = require("../models/supplierModel");

router.route("/api/v1/supplierdoccreate").post(async (req, res) => {
  console.log(req.body);
  try {
    const supplierData = req.body; // Get the supplier data from the request body
    const newSupplier = new Supplier(supplierData); // Create a new Supplier instance
    console.log("SUPPLIER.JS:", newSupplier);
    await newSupplier.save(); // Save the supplier to the database

    // Send a response back to the client
    res.status(201).json({
      message: "Supplier created successfully",
      supplier: newSupplier,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res
      .status(400)
      .json({ message: "Error creating supplier", error: err.message }); // Send error response
  }
});

module.exports = router;
