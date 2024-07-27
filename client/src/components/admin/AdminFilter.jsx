import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function AdminFilter({ products, setProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching category: ", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (category_id) => {
    if (selectedCategories.includes(category_id)) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== category_id)
      );
    } else {
      setSelectedCategories([...selectedCategories, category_id]);
    }
  };

  const applyFilter = () => {
    const filteredProducts = products.filter((product) =>
      selectedCategories.includes(product.categoryId)
    );
    setProducts(filteredProducts);
    console.log(filteredProducts);
  };

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 items-center">
        <form className="flex gap-5">
          <div className="flex items-center justify-center gap-2">
            <label htmlFor="" className="font-bold uppercase">
              Min
            </label>
            <input
              type="number"
              className="border border-green rounded-md text-center w-[7rem] h-[2.5rem] focus:outline-green"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <label htmlFor="" className="font-bold uppercase">
              Max
            </label>
            <input
              type="number"
              className="border border-green rounded-md text-center w-[7rem] h-[2.5rem] focus:outline-green"
            />
          </div>
        </form>

        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={toggleCategory}
              type="button"
              className="inline-flex justify-between items-center px-5 rounded-md border border-green w-[9rem] h-[2.5rem] font-medium"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Category
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div
              className="origin-top-right z-10 absolute right-50 mt-3 w-[15rem] rounded-md shadow-lg bg-white ring-1 ring-green"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <form className="py-2">
                {categories.map((category) => (
                  <div
                    key={category.category_id}
                    className="flex items-center gap-2 px-4 py-2 text-sm"
                    role="menuitem"
                  >
                    <input
                      type="checkbox"
                      id={category.category_id}
                      checked={selectedCategories.includes(
                        category.category_id
                      )}
                      onChange={() =>
                        handleCategoryChange(category.category_id)
                      }
                    ></input>
                    <label htmlFor={category.category_id}>
                      {category.name}
                    </label>
                  </div>
                ))}
                <button type="button" onClick={applyFilter}>
                  Apply Filter
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

AdminFilter.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
};

export default AdminFilter;
