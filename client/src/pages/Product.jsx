import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../components/context/CartContext";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { updateTotalQuantity } = useCart();

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${URL}/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };

    fetchProduct();
  }, [URL, id]);

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
    <div className="pt-[9rem] pb-16 px-7 bg-white flex flex-col w-full lg:h-[800px] xl:h-[900px]">
      <div className="flex flex-col w-[15rem] m-auto gap-3 min-[425px]:w-[18rem] lg:w-[28rem]">
        <div className="flex items-center justify-center py-10 bg-grey rounded-md shadow-md">
          <img
            src={`${URL}/${product.image}`}
            alt={`${product.name}-img`}
            className="h-[14rem] object-cover lg:h-[20rem]"
          />
        </div>

        <h1 className="text-lg font-semibold lg:text-xl">{product.name}</h1>
        <h1 className="font-medium lg:text-lg">${product.price}</h1>
        <button
          onClick={() => handleAddProduct(id, quantity)}
          className="bg-green text-white font-medium h-[2.5rem] rounded-md w-full transition-all hover:bg-darkGreen lg:active:opacity-75 lg:text-lg lg:h-[3rem]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
