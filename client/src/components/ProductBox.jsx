import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/context/CartContext";
import axios from "axios";

function ProductBox({ id, name, price, image }) {
  const URL = import.meta.env.VITE_API_URL;
  const [quantity, setQuantity] = useState(1);
  const { updateTotalQuantity } = useCart();

  const handleAddProduct = async (productId, quantity) => {
    setQuantity(1);
    try {
      const response = await axios.post(
        `${URL}/api/cart`,
        {
          productId: productId,
          quantity: quantity,
        },
        { withCredentials: true }
      );
      const quantityResponse = await axios.get(
        `${URL}/api/cart/total/quantity`,
        {
          withCredentials: true,
        }
      );
      updateTotalQuantity(quantityResponse.data.total);
      console.log("Product added to cart:", response.data);
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };

  return (
    <div className="flex flex-col gap-2 max-w-[9rem] rounded-xl sm:max-w-[14rem]">
      <div className="bg-grey relative flex flex-col items-center justify-between p-4 h-[11rem] rounded-lg shadow-md cursor-pointer group sm:h-[16rem] lg:justify-center">
        <Link to={`/product/${id}`}>
          <img
            src={`${URL}/${image}`}
            alt={`${name}-img`}
            className="h-[6rem] object-cover cursor-pointer transition-all group-hover:scale-110 sm:h-[10rem]"
          />
        </Link>
        <div className="flex w-full justify-center lg:absolute lg:bottom-3 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100">
          <button
            onClick={() => handleAddProduct(id, quantity)}
            className="bg-green text-grey w-full h-[1.8rem] rounded-md text-sm font-medium transition-all hover:bg-darkGreen active:opacity-75 sm:h-[2rem] lg:w-[80%] lg:h-[2.2rem] xl:text-base"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis xl:text-lg">
          {name}
        </p>
        <p className="text-sm font-semibold xl:text-base">${price}</p>
      </div>
    </div>
  );
}

ProductBox.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductBox;
