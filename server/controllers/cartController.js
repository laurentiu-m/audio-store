const Cart = require("../models/Cart");
const Product = require("../models/Product");
const CartItem = require("../models/CartItem");
const { Sequelize } = require("sequelize");

class cartController {
  async getCart(req, res) {
    const sessionId = req.sessionID;
    req.session.visited = true;

    try {
      let cart = await Cart.findOne({ where: { sessionId } });

      if (!cart) {
        cart = await Cart.create({ sessionId });
      }

      const cartId = cart.cart_id;

      let cartItems = await CartItem.findAll({
        where: { cartId },
        order: [["productId", "ASC"]],
      });

      if (cartItems.length === 0)
        return res.status(200).json({
          isEmpty: true,
          message: "Your cart is empty right now",
        });

      res.status(200).json({ isEmpty: false, cartItems });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  }

  async getTotalQuantity(req, res) {
    const sessionId = req.sessionID;

    console.log(sessionId);

    try {
      let cart = await Cart.findOne({ where: { sessionId } });

      if (!cart) {
        cart = await Cart.create({ sessionId });
      }

      const cartId = cart.cart_id;

      let cartItems = await CartItem.findAll({ where: { cartId } });

      if (cartItems.length === 0) {
        return res.status(200).json({ total: 0 });
      }

      const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      res.status(200).json({ total });
    } catch (error) {
      res.status(500).send("Server error");
    }
  }

  async totalPrice(req, res) {
    const sessionId = req.sessionID;

    try {
      let cart = await Cart.findOne({ where: { sessionId } });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      const cartId = cart.cart_id;

      let cartItems = await CartItem.findAll({ where: { cartId } });

      if (cartItems.length === 0) {
        return res.status(200).json({ total: 0 });
      }

      const total = await cartItems.reduce(async (sumPromise, item) => {
        const sum = await sumPromise;
        const product = await Product.findByPk(item.productId);
        return sum + product.price * item.quantity;
      }, Promise.resolve(0));

      res.status(200).send({ total });
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }

  async addItemToCart(req, res) {
    const sessionId = req.sessionID;
    const { productId, quantity } = req.body;

    console.log(sessionId);

    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(401).json({ message: "Product not found" });
      }

      let cart = await Cart.findOne({ where: { sessionId } });
      if (!cart) {
        cart = await Cart.create({ sessionId });
      }

      let cartItem = await CartItem.findOne({
        where: { cartId: cart.cart_id, productId },
      });

      if (cartItem) {
        cartItem.quantity += quantity;
        await cartItem.save();
      } else {
        cartItem = await CartItem.create({
          cartId: cart.cart_id,
          productId,
          quantity,
        });
      }

      return res.status(200).json({ cart, cartItem });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  }

  async increaseQuantity(req, res) {
    const sessionId = req.sessionID;
    const { productId, quantity } = req.body;

    try {
      let cart = await Cart.findOne({ where: { sessionId } });
      if (!cart) return res.status(404).json({ message: "Cart not found" });

      let cartId = cart.cart_id;
      let cartItem = await CartItem.findOne({
        where: { cartId, productId },
      });

      if (!cartItem) {
        return res.status(404).json({ message: "Item not found in cart" });
      }

      cartItem.quantity += quantity;
      await cartItem.save();

      res.status(200).json({ message: "Item quantity updated" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  }

  async decreaseQuantity(req, res) {
    const sessionId = req.sessionID;
    const { productId, quantity } = req.body;

    try {
      let cart = await Cart.findOne({ where: { sessionId } });
      if (!cart) return res.status(404).json({ message: "Cart not found" });

      let cartId = cart.cart_id;
      let cartItem = await CartItem.findOne({
        where: { cartId, productId },
      });

      if (!cartItem) {
        return res.status(404).json({ message: "Item not found in cart" });
      }

      cartItem.quantity -= quantity;
      await cartItem.save();

      res.status(200).json({ message: "Item quantity updated" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  }

  async deleteItem(req, res) {
    const sessionId = req.sessionID;
    const { productId } = req.params;

    try {
      let cart = await Cart.findOne({ where: { sessionId } });
      if (!cart) return res.status(404).json({ message: "Cart not found" });

      let cartId = cart.cart_id;
      let cartItem = await CartItem.findOne({
        where: { cartId, productId },
      });

      if (!cartItem)
        return res.status(404).json({ message: "Item not found in cart" });

      await CartItem.destroy({ where: { id: cartItem.id } });
      res.status(200).json({
        message: `Item removed from cart`,
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to remove item from cart" });
    }
  }

  async deleteCart(req, res) {
    const sessionId = req.sessionID;

    try {
      const cart = await Cart.findOne({ where: { sessionId } });
      if (!cart)
        return res
          .status(404)
          .json({ success: false, message: "Cart not found" });

      const cartId = cart.cart_id;

      await CartItem.destroy({ where: { cartId } });
      await Cart.destroy({ where: { sessionId } });

      res
        .status(200)
        .json({ success: true, message: "Cart and items deleted" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Failed to delete cart" });
    }
  }

  async deleteExpiredCarts(expirationTime) {
    const now = new Date();
    const threshold = new Date(now.getTime() - expirationTime * 1000 * 60 * 60);

    await Cart.destroy({
      where: {
        updatedAt: {
          [Sequelize.Op.lt]: threshold,
        },
      },
    });

    await CartItem.destroy({
      where: {
        updatedAt: {
          [Sequelize.Op.lt]: threshold,
        },
      },
    });
    console.log("Expired carts are deleted");
  }
}

const cartControllerInstance = new cartController();

const deleteInterval = 1000 * 60 * 60;
setInterval(() => {
  cartControllerInstance.deleteExpiredCarts(3600);
}, deleteInterval);

module.exports = new cartController();
