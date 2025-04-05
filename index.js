const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userView = require("./routes/userView");
const supplier = require("./routes/supplier");

const app = express();

app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", userView);
app.use("/supplier", supplier);
app.listen(process.env.PORT, () => {
  console.log("running on Port", process.env.PORT);
});
