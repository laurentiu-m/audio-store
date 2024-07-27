import { useState, useEffect } from "react";
import ProductBox from "../ProductBox";
import axios from "axios";
import { Link } from "react-router-dom";

function BestSeller() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const response = await axios.get(`${URL}/api/products/favorite`);
        setFavoriteProducts(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchFavoriteProducts();
  }, [URL]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProductsPromises = favoriteProducts.map((favoriteProduct) =>
          axios.get(`${URL}/api/products/${favoriteProduct.product_id}`)
        );

        const allProductsResponses = await Promise.all(allProductsPromises);
        const products = allProductsResponses.map((response) => response.data);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };

    fetchProducts();
  }, [favoriteProducts, URL]);

  return (
    <div className="bg-white text-black h-[1800px] flex flex-col items-center justify-center gap-10 px-10 min-[375px]:h-[1000px] sm:h-[1300px] sm:gap-14 xl:h-[1000px]">
      <h1 className="font-semibold text-center text-5xl sm:text-6xl">
        Best Seller
      </h1>

      <div className="grid grid-cols-1 gap-5 min-[375px]:grid-cols-2 xl:grid-cols-3 xl:gap-10">
        {products.map((product) => (
          <ProductBox
            key={product.product_id}
            id={product.product_id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      <Link to={"/shop"}>
        <button className="bg-green text-white w-[10rem] h-[2.5rem] rounded-md font-medium transition-all active:opacity-75 lg:text-lg lg:w-[12rem] lg:h-[3rem] lg:hover:scale-105">
          See more
        </button>
      </Link>
    </div>
  );
}

export default BestSeller;
