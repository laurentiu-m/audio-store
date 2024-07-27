const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Product = require("./Product");

const FavoriteProduct = sequelize.define(
  "favoriteProduct",
  {
    favorite_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "product_id",
      },
    },
  },
  {
    timestamps: true,
  }
);

FavoriteProduct.belongsTo(Product, { foreignKey: "product_id" });

module.exports = FavoriteProduct;
