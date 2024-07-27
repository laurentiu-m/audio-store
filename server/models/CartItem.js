const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Product = require("./Product");
const Cart = require("./Cart");

const CartItem = sequelize.define(
  "cart-item",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cart,
        key: "cart_id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "product_id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    timestamps: true,
  }
);

CartItem.belongsTo(Cart, { foreignKey: "cartId" });
CartItem.belongsTo(Product, { foreignKey: "productId" });

module.exports = CartItem;
