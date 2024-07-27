const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Cart = sequelize.define(
  "cart",
  {
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sessionId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Cart;
