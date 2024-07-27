const Category = require("../models/Category");
const { Op } = require("sequelize");

class categoryController {
  async getCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  async getOneCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category)
        return res.status(404).json({ message: "Category not found" });
      res.json(category);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  async countCategory(req, res) {
    try {
      const count = await Category.count();
      res.json({ count });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  async searchCategory(req, res) {
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

      const category = await Category.findAll({ where });
      res.json(category);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
}

module.exports = new categoryController();
