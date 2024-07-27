import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function AddCategory({ refreshData }) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (name === "") {
      return setError(true);
    } else {
      setError(false);
    }

    formData.append("name", name);

    try {
      const category = await axios.post(
        "http://localhost:7000/api/admin/category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Category added: ", category.data);
      setName("");

      refreshData();
    } catch (error) {
      console.error("Error adding category: ", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-5 items-center">
      <h1 className="text-5xl font-semibold">Add Category</h1>
      {error && <p>Please complete the form after submitting it</p>}

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

        <button
          type="submit"
          className="bg-green text-white m-auto w-[10rem] h-[2.7rem] rounded-md transition-all hover:bg-darkGreen active:opacity-90"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}

AddCategory.propTypes = {
  refreshData: PropTypes.func,
};

export default AddCategory;
