import { NavLink } from "react-router-dom";

const ProductList = ({ product }) => {
  return (
    <>
      <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex gap-6 items-center h-52">
        {/* Product Image */}
        <div className="w-2/4">
          <div className="relative">
            <img
              className="rounded-t-lg object-cover h-full w-[290px]  hover:scale-110 hover:overflow-hidden transition-all cursor-pointer"
              src={product.image}
              alt={product.name}
            />
            <span className="absolute top-3 md:top-12 left-3 bg-blue-500 text-white px-3 rounded">
              {product.for}
            </span>
          </div>
        </div>

        <div className="p-4 w-2/4">
          {/* Product Title */}
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>

          {/* Product Price */}
          <p className="text-gray-500 mt-2 text-sm">
            Price ${" "}
            {product.r_price ? (
              <>
                {product.r_price} <del>{product.price}</del>
              </>
            ) : (
              product.price
            )}
          </p>

          {/* Add to Cart Button */}
          <NavLink>
            <button
              //   onClick={() => handleAddToCart(product.id)}
              className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg
            hover:bg-blue-700 transition-colors duration-300">
              Add to Cart
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProductList;
