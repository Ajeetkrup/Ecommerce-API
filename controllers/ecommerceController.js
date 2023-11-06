const { default: mongoose } = require("mongoose");
const Product = require("../models/Product");

//function to create a product
module.exports.addProduct = async function (req, res) {
  const input = req.body;
  if (input && input.product) {
    const newProduct = new Product({
      name: input.product.name,
      quantity: input.product.quantity || 0,
    });

    try {
      await newProduct.save();
      return res.status(200).json({
        data: input,
      });
    } catch (err) {
      console.log("Err while creating product - ", err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Plz send valid data",
    });
  }
};

//function to fetch all products
module.exports.getAllProducts = async function (req, res) {
  try {
    let products = await Product.find({});

    products = products.map((product) => {
      const { _id, name, quantity, ...temp } = product;
      return { _id, name, quantity };
    });
    return res.status(200).json({
      data: {
        products: products,
      },
    });
  } catch (err) {
    console.log("Err while fetching the products -", err);
    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//function to delete product by id
module.exports.deleteById = async function (req, res) {
  const productId = req.params.id;

  if (productId) {
    try {
      await Product.deleteOne({ _id: new mongoose.Types.ObjectId(productId) });
      return res.status(200).json({
        data: {
          message: "product is deleted",
        },
      });
    } catch (err) {
      console.log("Error while deleting product -", err);
      return res.status(400).json({
        success: false,
        message: "Internal server error",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Plz send valid product id",
    });
  }
};

//function to update the quantity of the product by id
module.exports.updateQuantityById = async function (req, res) {
  const productId = req.params.id;
  const qty = req.query.number;

  if (productId && qty && qty >= 0) {
    try {
      await Product.updateOne(
        { _id: new mongoose.Types.ObjectId(productId) },
        { quantity: qty }
      );

      const product = await Product.findOne({
        _id: new mongoose.Types.ObjectId(productId),
      });

      return res.status(200).json({
        data: {
          product: {
            id: product.id,
            name: product.name,
            quantity: product.quantity,
          },
        },
      });
    } catch (err) {
      console.log("Error while updating the product - ", err);
      return res.status(400).json({
        success: false,
        message: "Internal server error",
      });
    }
  } else {
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Plz send valid product id",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Plz send valid quantity",
      });
    }
  }
};
