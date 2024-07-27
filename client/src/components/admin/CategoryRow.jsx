import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function CategoryRow({ category }) {
  return (
    <tr key={category.category_id} className="border-b">
      <td className="px-6 py-4 text-center">{category.category_id}</td>
      <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
      <td className="px-6 py-4 text-center">
        <button>
          <FontAwesomeIcon icon={faTrash} className="text-red-500" />
        </button>
      </td>
    </tr>
  );
}

CategoryRow.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryRow;
