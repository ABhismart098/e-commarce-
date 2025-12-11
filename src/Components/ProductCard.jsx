import React from "react";

const ProductCard = () => {
  return (
    <div
      className="w-full max-w-sm bg-white p-6 border border-gray-200 rounded-xl shadow-md 
                 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      {/* Image */}
      <a href="#">
        <img
          className="rounded-lg mb-6 transition-all duration-300 hover:scale-105"
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt="product image"
        />
      </a>

      {/* Rating */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
          ))}
        </div>

        <span className="bg-yellow-100 border border-yellow-300 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded">
          4.8 out of 5
        </span>
      </div>

      {/* Title */}
      <a href="#">
        <h5 className="text-xl font-semibold text-gray-900 leading-snug hover:text-indigo-600 transition">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight
        </h5>
      </a>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-3xl font-bold text-gray-900">$599</span>

        <button
          type="button"
          className="inline-flex items-center text-white bg-indigo-600 hover:bg-indigo-700 
                     border border-transparent shadow-md font-medium rounded-lg text-sm px-4 py-2 
                     transition-all duration-300 hover:shadow-xl"
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
  );
};

export default ProductCard;
