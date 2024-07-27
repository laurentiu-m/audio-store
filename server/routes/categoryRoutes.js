const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getCategories);
router.get("/count", categoryController.countCategory);
router.get("/search", categoryController.searchCategory);
router.get("/:id", categoryController.getOneCategory);

module.exports = router;
