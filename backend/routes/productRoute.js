const { getAllProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = require('express').Router();
router.get("/products", getAllProducts)
    .post("/products/new", createProduct)
    .get("/products/:id", getProduct)
    .put("/products/:id", updateProduct)
    .delete("/products/:id", deleteProduct)
module.exports = router;