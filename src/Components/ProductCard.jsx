import React from "react";

const ProductCard = ({ product }) => {

  const rating = product?.rating?.rate || 0;
  const totalStar = 5;

  return (
    <div
      className="w-full max-w-sm bg-white/90 backdrop-blur-md p-6 border border-gray-200 
                 rounded-xl shadow-lg transition-all duration-300 
                 hover:shadow-2xl hover:-translate-y-2 hover:bg-white"
    >
      {/* Image */}
      <div className="product_image">
        <img
          className="rounded-xl mb-6 h-52 transition-transform duration-500 ease-out 
                     hover:scale-105 hover:rotate-1"
          src={product?.image || "https://flowbite.com/docs/images/products/apple-watch.png"}
          alt={product?.description}
          title={product?.description}
        />
        </div>
   

      <div>
        {/* Dynamic Rating */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 transition-all duration-300 drop-shadow-sm
                  ${
                    i < rating
                      ? "text-yellow-400 scale-110"
                      : "text-gray-300 scale-90"
                  }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            ))}
          </div>

          <span className="bg-yellow-50 border border-yellow-300 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded-md shadow-sm">
            {rating} out of {totalStar}
          </span>
        </div>

       {/* Title */}

<div className="product-title">
  <h5 className="text-xl text-gray-900 font-semibold tracking-tight 
                 transition-colors duration-300 hover:text-indigo-600">
    {product?.title?.length > 15
      ? product.title.slice(0, 15) + "..."
      : product?.title || "Apple Watch Series 7 GPS, Aluminium Case, Starlight"}
  </h5>
  </div>



        {/* Price + Button */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-extrabold text-gray-900">${product?.price || "599"}</span>

          <button
            type="button"
            className="inline-flex items-center cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 
                       border border-transparent shadow-md hover:shadow-xl 
                       transition-all duration-300 rounded-lg text-sm px-4 py-2 
                       active:scale-95"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
