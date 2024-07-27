const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/products", adminController.addProducts);
router.post("/category", adminController.addCategory);
router.post("/products/favorite", adminController.addFavoriteProduct);
router.delete("/products/:id", adminController.deleteProducts);

module.exports = router;
