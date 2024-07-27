import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartTableRow({ product, quantity, onDelete, onIncrease, onDecrease }) {
  const URL = import.meta.env.VITE_API_URL;

  return (
    <tr className="flex gap-2 h-[7rem] w-full items-center justify-center sm:h-[12rem] sm:gap-5">
      <td className="w-[6rem] h-[6rem] flex items-center justify-center bg-grey rounded-md cursor-pointer group sm:w-[11rem] sm:h-[11rem]">
        <Link to={`/product/${product.product_id}`}>
          <img
            src={`${URL}/${product.image}`}
            alt={`${name}-img`}
            className="h-[5rem] object-contain transition-all group-hover:scale-110 sm:h-[9rem]"
          />
        </Link>
      </td>
      <td className="flex-1 flex flex-col gap-1 w-[9rem] h-[6rem] justify-center sm:h-[11rem] sm:gap-2">
        <h2 className="overflow-hidden whitespace-nowrap text-ellipsis sm:text-lg">
          {product.name}
        </h2>

        <h3 className="text-sm font-semibold sm:text-base">${product.price}</h3>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <button
              onClick={() => onDecrease(product.product_id)}
              className="border border-green rounded-md w-[1.5rem] h-[1.5rem] transition-all hover:bg-green hover:text-white active:bg-darkGreen sm:w-[2rem] sm:h-[2rem] sm:text-2xl"
            >
              -
            </button>
            <p className="sm:text-lg">{quantity}</p>
            <button
              onClick={() => onIncrease(product.product_id)}
              className="border border-green rounded-md w-[1.5rem] h-[1.5rem] transition-all hover:bg-green hover:text-white active:bg-darkGreen sm:w-[2rem] sm:h-[2rem] sm:text-2xl"
            >
              +
            </button>
          </div>
          <div>
            <FontAwesomeIcon
              onClick={() => onDelete(product.product_id)}
              icon={faTrash}
              className="text-red-500 cursor-pointer sm:text-xl"
            />
          </div>
        </div>
      </td>
    </tr>
  );
}

CartTableRow.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default CartTableRow;
