import ProductRow from "./ProductRow";
import CategoryRow from "./CategoryRow";
import PropTypes from "prop-types";

function AdminTable({ products, categories, productTable }) {
  return (
    <div className="w-full relative overflow-x-auto rounded-md cursor-default">
      {productTable ? (
        <table className="w-full">
          <thead className="bg-green h-[3rem] text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow key={product.product_id} product={product} />
            ))}
          </tbody>
        </table>
      ) : (
        <table className="w-full">
          <thead className="bg-green h-[3rem] text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <CategoryRow key={category.category_id} category={category} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

AdminTable.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  productTable: PropTypes.bool.isRequired,
};

export default AdminTable;
