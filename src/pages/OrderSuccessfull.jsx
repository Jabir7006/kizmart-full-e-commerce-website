import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccessfull() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md max-w-md w-full">
        <svg
          className="w-16 h-16 mx-auto text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-3xl font-bold mt-4">Order Successful!</h2>
        <p className="text-gray-500 mt-2">Your order has been successfully placed.</p>
        <div className="flex justify-center mt-6">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessfull;
