const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/", cartController.getCart);
router.get("/total/quantity", cartController.getTotalQuantity);
router.get("/total/price", cartController.totalPrice);
router.post("/", cartController.addItemToCart);
router.put("/quantity/increase", cartController.increaseQuantity);
router.put("/quantity/decrease", cartController.decreaseQuantity);
router.delete("/:productId", cartController.deleteItem);
router.delete("/", cartController.deleteCart);

module.exports = router;
