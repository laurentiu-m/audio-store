import axios from "axios";
import { useEffect, useState } from "react";
import CartTable from "../components/cart/CartTable";
import { Link } from "react-router-dom";
import { useCart } from "../components/context/CartContext";

function Cart() {
  const [cart, setCart] = useState({
    isEmpty: true,
    cartItems: [],
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const { totalQuantity, updateTotalQuantity } = useCart();

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`${URL}/api/cart`, {
          withCredentials: true,
        });
        setCart(response.data);
        const quantityResponse = await axios.get(
          `${URL}/api/cart/total/quantity`,
          {
            withCredentials: true,
          }
        );
        updateTotalQuantity(quantityResponse.data.total);
      } catch (error) {
        console.error("Error fetching Cart: ", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchTotalPrice = async () => {
      try {
        const response = await axios.get(`${URL}/api/cart/total/price`, {
          withCredentials: true,
        });
        const formattedPrice = response.data.total.toFixed(2);
        setTotalPrice(formattedPrice);
      } catch (error) {
        console.error("Error fetching total price: ", error);
      }
    };

    fetchCart();
    fetchTotalPrice();
  }, [URL, updateTotalQuantity]);

  const handleIncreaseQuantity = async (productId, quantity = 1) => {
    try {
      const response = await axios.put(
        `${URL}/api/cart/quantity/increase`,
        {
          productId: productId,
          quantity: quantity,
        },
        {
          withCredentials: true,
        }
      );

      const quantityResponse = await axios.get(
        `${URL}/api/cart/total/quantity`,
        {
          withCredentials: true,
        }
      );
      updateTotalQuantity(quantityResponse.data.total);
      console.log("Product quantity was increased:", response.data);
    } catch (error) {
      console.error("Error increasing the quantity of the product: ", error);
    }
  };

  const handleDecreaseQuantity = async (productId, quantity = 1) => {
    try {
      const response = await axios.put(
        `${URL}/api/cart/quantity/decrease`,
        {
          productId: productId,
          quantity: quantity,
        },
        {
          withCredentials: true,
        }
      );

      const quantityResponse = await axios.get(
        `${URL}/api/cart/total/quantity`,
        {
          withCredentials: true,
        }
      );
      updateTotalQuantity(quantityResponse.data.total);
      console.log("Product quantity was decreased:", response.data);
    } catch (error) {
      console.error("Error decreasing the quantity of the product: ", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`${URL}/api/cart/${productId}`, {
        withCredentials: true,
      });

      const quantityResponse = await axios.get(
        `${URL}/api/cart/total/quantity`,
        {
          withCredentials: true,
        }
      );
      updateTotalQuantity(quantityResponse.data.total);
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  if (loading) {
    return;
  }

  return (
    <div className="pt-[9rem] pb-10 px-7 bg-white flex flex-col items-center sm:px-16 lg:px-[13rem] xl:px-[15rem] 2xl:px-[25rem] min-[1800px]:px-[35rem] min-[2200px]:px-[45rem]">
      <h1 className="text-5xl font-medium sm:text-6xl">Cart</h1>

      <div className="w-full">
        {cart.isEmpty ? (
          <div className="flex flex-col items-center justify-center text-center gap-5 h-[500px] xl:h-[600px]">
            <h1 className="text-xl sm:text-2xl xl:text-3xl">{cart.message}</h1>
            <Link to={"/shop"}>
              <button className="bg-green text-white w-[10rem] h-[2.5rem] font-medium rounded-md sm:text-lg sm:w-[12rem] sm:h-[3rem]">
                Go to shop
              </button>
            </Link>
          </div>
        ) : (
          <>
            <CartTable
              cartItems={cart.cartItems}
              onDelete={handleDelete}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
            <div className="w-full mt-10 mb-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold md:text-sm">
                  Total {totalQuantity} {totalQuantity > 1 ? "items" : "item"}
                </h3>
                <h2 className="font-semibold md:text-lg">${totalPrice}</h2>
              </div>
              <Link to={"/checkout"}>
                <button className="bg-green text-white w-full h-[3rem] text-sm font-medium rounded-md transition-all hover:bg-darkGreen active:opacity-75 sm:text-base sm:h-[3.5rem] lg:text-lg">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
