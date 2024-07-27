import { useEffect, useState } from "react";
import ProductBox from "../ProductBox";
import axios from "axios";

function ShopProducts() {
  const [products, setProducts] = useState([]);

  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${URL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [URL]);

  return (
    <div className="grid grid-cols-2 gap-5 mb-10 sm:gap-10 min-[768px]:grid-cols-3 lg:grid-cols-4 2xl:gap-[3rem]">
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
  );
}

export default ShopProducts;
