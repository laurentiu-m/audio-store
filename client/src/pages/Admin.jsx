import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AddProduct from "../components/admin/AddProduct";
import AddCategory from "../components/admin/AddCategory";
import AdminTable from "../components/admin/AdminTable";
import AdminFilter from "../components/admin/AdminFilter";
import logoWhite from "../assets/logo-white.png";
import { Link } from "react-router-dom";

function Admin() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [count, setCount] = useState(0);
  const [addProduct, setAddProduct] = useState(false);
  const [productTable, setProductTable] = useState(true);
  const [filter, setFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching product: ", error);
    }
  }, []);

  const fetchCategory = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/category");
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching category: ", error);
    }
  }, []);

  const fetchCount = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/${
          productTable ? "products" : "category"
        }/count`
      );
      setCount(response.data.count);
    } catch (error) {
      console.error("Error fetching count: ", error);
    }
  }, [productTable]);

  useEffect(() => {
    fetchProducts();
    fetchCategory();
    fetchCount();
  }, [productTable, fetchProducts, fetchCategory, fetchCount]);

  useEffect(() => {
    const fetchSearch = async (query = "") => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/${
            productTable ? "products" : "category"
          }/search?search=${query}`
        );
        productTable ? setProducts(response.data) : setCategory(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchSearch(searchQuery);
  }, [searchQuery, productTable]);

  const visibleAddProduct = () => {
    setAddProduct(!addProduct);
  };

  const visibleCategory = () => {
    setProductTable(!productTable);
  };

  const visibleFilter = () => {
    setFilter(!filter);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const refreshData = () => {
    fetchProducts();
    fetchCategory();
    fetchCount();
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <section className="w-full h-[120px] flex items-center justify-evenly">
        <div className="flex flex-row items-center justify-center gap-2 cursor-default">
          <img src={logoWhite} alt="logo" className="w-[3rem]" />
          <p className="font-bold text-xl text-white">Audio.</p>
        </div>

        <h1 className="text-5xl text-white font-semibold cursor-default">
          Admin Page
        </h1>

        <Link to="/">
          <h2 className="text-xl text-white font-semibold">Home</h2>
        </Link>
      </section>

      <section className="w-full min-h-[850px] bg-white py-12">
        <div className="flex flex-col w-[800px] m-auto justify-center gap-4 xl:w-[1200px]">
          <div className="flex gap-4 items-center">
            <h1 className="text-5xl font-semibold cursor-default">List</h1>
            {productTable ? (
              <p className="text-lg cursor-default">
                {count} {count > 1 ? "Products" : "Product"}
              </p>
            ) : (
              <p className="text-lg cursor-default">
                {count} {count > 1 ? "Categories" : "Category"}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={visibleAddProduct}
              className="bg-green text-white flex items-center justify-center font-medium w-[6rem] h-[2.5rem] transition-all rounded-md hover:bg-darkGreen active:opacity-90"
            >
              {addProduct ? (
                <FontAwesomeIcon icon={faXmark} className="text-xl" />
              ) : (
                "Add"
              )}
            </button>

            <button
              onClick={visibleFilter}
              className="bg-green text-white font-medium w-[6rem] h-[2.5rem] rounded-md transition-all hover:bg-darkGreen active:opacity-90"
            >
              Filter
            </button>
            <button
              onClick={visibleCategory}
              className="bg-green text-white font-medium w-[9rem] h-[2.5rem] rounded-md transition-all hover:bg-darkGreen active:opacity-90"
            >
              {productTable ? "Category" : "Product"}
            </button>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              disabled={addProduct}
              className="border border-green px-4 w-full rounded-md focus:outline-green placeholder:text-lg placeholder:text-black placeholder:font-medium"
            />
          </div>

          {filter && (
            <AdminFilter products={products} setProducts={setProducts} />
          )}

          <div className="flex items-center justify-center">
            {addProduct ? (
              productTable ? (
                <AddProduct refreshData={refreshData} />
              ) : (
                <AddCategory refreshData={refreshData} />
              )
            ) : (
              <AdminTable
                products={products}
                categories={category}
                productTable={productTable}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
