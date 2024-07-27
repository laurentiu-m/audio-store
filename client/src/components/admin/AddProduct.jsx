import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function AddProduct({ refreshData }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (name === "" || price === "" || image === null || category === "") {
      return setError(true);
    } else {
      setError(false);
    }

    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", category);
    formData.append("image", image);

    console.log(formData);

    try {
      const product = await axios.post(
        "http://localhost:7000/api/admin/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product added: ", product.data);

      setName("");
      setPrice("");
      setImage(null);
      setCategory("");

      refreshData();
    } catch (error) {
      console.error("Error adding products: ", error);
    }
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <div className="flex flex-col gap-4 mt-5 items-center">
      <h1 className="text-5xl font-semibold">Add Product</h1>
      {error && (
        <p className="text-lg text-red-500">
          Please complete the form after submitting it
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-5 w-[700px]"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-green h-[2.5rem] px-4 rounded-md focus:outline-green"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="text-sm font-bold">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-green h-[2.5rem] px-4 rounded-md focus:outline-green"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="text-sm font-bold">
            Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImage}
            className="file:bg-green file:border-0 file:text-white file:h-[2.5rem] file:px-4 file:mr-4 file:rounded-md file:cursor-pointer cursor-pointer w-[16rem]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-sm font-bold">
            Category
          </label>
          <input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="number"
            className="border border-green h-[2.5rem] px-4 rounded-md aut focus:outline-green"
          />
        </div>

        <button
          type="submit"
          className="bg-green text-white m-auto w-[10rem] h-[2.7rem] rounded-md transition-all hover:bg-darkGreen active:opacity-90"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

AddProduct.propTypes = {
  refreshData: PropTypes.func,
};

export default AddProduct;
