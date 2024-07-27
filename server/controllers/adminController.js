const Category = require("../models/Category");
const Product = require("../models/Product");
const FavoriteProduct = require("../models/FavoriteProduct");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

class adminController {
  async addProducts(req, res) {
    const { name, price, categoryId } = req.body;

    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    const { image } = req.files;
    let fileName = uuid.v4() + path.extname(image.name);
    const filePath = path.resolve(__dirname, "..", "static", fileName);

    try {
      await image.mv(filePath);

      const newProduct = await Product.create({
        name,
        price,
        categoryId,
        image: fileName,
      });
      res
        .status(201)
        .json({ message: "Product added successfully", newProduct });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error adding product" });
    }
  }

  async addCategory(req, res) {
    const { name } = req.body;

    try {
      const newCategory = await Category.create({ name });
      res.json({ message: "Category created successfully!", newCategory });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error creating category" });
    }
  }

  async deleteProducts(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Missing product ID" });
    }

    try {
      const product = await Product.findOne({ where: { product_id: id } });

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product with ID ${id} not found` });
      }

      const deletedProduct = await Product.destroy({
        where: {
          product_id: id,
        },
      });

      if (deletedProduct) {
        const imagePath = path.resolve(
          __dirname,
          "..",
          "static",
          product.image
        );
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.error(`Error deleting image file: ${err}`);
            return res.status(500).json({
              message:
                "Error deleting product image, but product deleted from database",
            });
          }

          res.json({
            message: `Product with ID ${id} and its image deleted successfully`,
          });
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting product" });
    }
  }

  async addFavoriteProduct(req, res) {
    try {
      const { product_id } = req.body;

      if (!product_id) {
        return res.status(400).json({ error: "Product ID is required" });
      }

      const favoriteProduct = await FavoriteProduct.create({ product_id });
      res.status(201).json(favoriteProduct);
    } catch (error) {
      console.error("Error adding favorite product: ", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new adminController();
