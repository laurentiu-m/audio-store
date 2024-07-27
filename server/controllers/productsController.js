const Product = require("../models/Product");
const FavoriteProduct = require("../models/FavoriteProduct");
const { Op } = require("sequelize");

class ProductsController {
  async getProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

  async getOneProducts(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product)
        return res.status(404).json({ message: "Product not found" });
      res.json(product);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  async searchProducts(req, res) {
    try {
      const { search } = req.query;
      let where = {};

      if (search) {
        where = {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }

      const products = await Product.findAll({ where });
      res.json(products);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  async getProductsByCategory(req, res) {}

  async countProducts(req, res) {
    try {
      const count = await Product.count();
      res.json({ count });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  async getFavoriteProducts(req, res) {
    try {
      const favorite = await FavoriteProduct.findAll();
      res.json(favorite);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
}

module.exports = new ProductsController();
