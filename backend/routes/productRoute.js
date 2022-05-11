const { getAllProducts } = require('../controllers/productController');

const router = require('express').Router();
router.get("/products", getAllProducts);
// router.route("/products").get(getAllProducts);
module.exports = router;