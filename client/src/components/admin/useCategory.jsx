import { useEffect, useState } from "react";
import axios from "axios";

function useCategory(id) {
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/category/${id}`
        );
        setCategoryName(response.data.name);
      } catch (error) {
        console.error("Error fetching category: ", error);
      }
    };
    fetchCategory();
  }, [id]);

  return categoryName;
}

export default useCategory;
