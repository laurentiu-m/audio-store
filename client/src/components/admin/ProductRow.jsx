import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useCategory from "./useCategory";
import PropTypes from "prop-types";

function ProductRow({ product }) {
  const categoryName = useCategory(product.categoryId);

  return (
    <tr key={product.product_id} className="border-b">
      <td className="px-6 py-4 text-center">{product.product_id}</td>
      <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
        {product.name}
      </td>
      <td className="px-6 py-4 text-center">{product.price}</td>
      <td className="px-6 py-4 text-center">{categoryName}</td>
      <td className="px-6 py-4 text-center">
        <button>
          <FontAwesomeIcon icon={faTrash} className="text-red-500" />
        </button>
      </td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductRow;
