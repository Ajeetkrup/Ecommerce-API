/*
    Model for Products
*/
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
