const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Category = require("./Category");

const Product = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "category_id",
      },
    },
  },
  {
    timestamps: true,
  }
);

Product.belongsTo(Category, { foreignKey: "categoryId" });

module.exports = Product;
