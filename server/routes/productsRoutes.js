const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.getProducts);
router.get("/search", productsController.searchProducts);
router.get("/count", productsController.countProducts);
router.get("/favorite", productsController.getFavoriteProducts);
router.get("/:id", productsController.getOneProducts);
router.get("/category/:category", productsController.getProductsByCategory);

module.exports = router;
