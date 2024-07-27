const Router = require("express");
const router = new Router();

const adminRoutes = require("./adminRoutes");
const productsRoutes = require("./productsRoutes");
const categoryRoutes = require("./categoryRoutes");
const cartRoutes = require("./cartRoutes");

router.use("/admin", adminRoutes);
router.use("/products", productsRoutes);
router.use("/category", categoryRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
