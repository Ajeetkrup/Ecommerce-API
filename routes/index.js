const express = require("express");
const ecommerceController = require("../controllers/ecommerceController");
const router = express.Router();

router.post("/products/create", ecommerceController.addProduct);
router.get("/products", ecommerceController.getAllProducts);
router.delete("/products/:id", ecommerceController.deleteById);
router.post(
  "/products/:id/update_quantity",
  ecommerceController.updateQuantityById
);

module.exports = router;
