import { useEffect, useState } from "react";
import axios from "axios";
import CartTableRow from "./CartTableRow";
import PropTypes from "prop-types";

function CartTable({ cartItems, onDelete, onIncrease, onDecrease }) {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(cartItems);

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(
          cartItems.map((cartItem) =>
            axios.get(`${URL}/api/products/${cartItem.productId}`)
          )
        );
        const products = responses.reduce((acc, response, index) => {
          acc[cartItems[index].productId] = response.data;
          return acc;
        }, {});
        setProducts(products);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cartItems, URL]);

  if (loading) {
    return;
  }

  return (
    <table className="w-full">
      <thead className="h-[3rem] border-b border-b-black">
        <tr>
          <th scope="col" className="py-4 font-semibold text-left sm:text-lg">
            Product
          </th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-5 mt-5 sm:gap-2">
        {cartItems.map((cartItem) => (
          <CartTableRow
            key={cartItem.productId}
            product={products[cartItem.productId]}
            quantity={cartItem.quantity}
            onDelete={onDelete}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </tbody>
    </table>
  );
}

CartTable.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default CartTable;
