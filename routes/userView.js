const express = require("express");
const path = require("path"); // Import the path module
const router = express.Router();

router.route("/supplierform").get((req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/html/supplierCreateForm.html")); // Use path.join to resolve the path
});

module.exports = router;
