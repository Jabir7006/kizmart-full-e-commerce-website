import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../cartContext';

function Cart() {
  const { cart, setCart, totalCost } = useContext(cartContext);

  const handleRemove = (id) => {
    const updatedData = cart.filter((item) => item.id !== id);
    setCart(updatedData);
  };

  const handleQtyChange = (id, newQty) => {
    const updatedData = cart.map((item) => (item.id === id ? { ...item, qty: newQty } : item));
    setCart(updatedData);
  };

  const handleQtyMinus = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product.qty > 1) {
      handleQtyChange(id, product.qty - 1);
    }
  };

  const handleQtyPlus = (id) => {
    const product = cart.find((item) => item.id === id);
    handleQtyChange(id, product.qty + 1);
  };


  return (
    <div className="container mx-auto mt-10">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row my-10 shadow-md">
          <div className="w-full md:w-3/4 px-4 md:px-10 py-10 bg-white">
            <div className="flex justify-between pb-8 border-b">
              <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              <h2 className="text-2xl font-semibold">{cart.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="w-2/5 text-xs font-semibold text-gray-600 uppercase">Product Details</h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Quantity</h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Price</h3>
              <h3 className="w-1/5 text-xs font-semibold text-center text-gray-600 uppercase">Total</h3>
            </div>

            {cart.map((product) => {
              const { id, productName, imgUrl, category, price, qty } = product;
              return (
                <div className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100" key={id}>
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={imgUrl} alt={productName} />
                    </div>
                    <div className="flex flex-col justify-between flex-grow ml-4">
                      <span className="text-sm font-bold">{productName}</span>
                      <span className="text-xs text-red-500">{category}</span>
                      <button
                        onClick={() => handleRemove(id)}
                        className="cursor-pointer text-gray-500 font-semibold text-xs hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="cursor-pointer w-3 text-gray-600 fill-current"
                      viewBox="0 0 448 512"
                      onClick={() => handleQtyMinus(id)}
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <input
                      className="w-8 mx-2 text-center border"
                      type="text"
                      value={qty}
                      readOnly
                    />
                    <svg
                      className="cursor-pointer w-3 text-gray-600 fill-current"
                      viewBox="0 0 448 512"
                      onClick={() => handleQtyPlus(id)}
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="w-1/5 text-sm font-semibold text-center">${price}</span>
                  <span className="w-1/5 text-sm font-semibold text-center">${price * qty}</span>
                </div>
              );
            })}

            <Link to="/shop" className="flex mt-10 text-sm font-semibold text-indigo-600">
              <svg className="w-4 mr-2 text-indigo-600 fill-current" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-full md:w-1/4 px-4 md:px-8 py-10">
            <h1 className="pb-8 text-2xl font-semibold border-b">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="text-sm font-semibold uppercase">Items {cart.length}</span>
              <span className="text-sm font-semibold">${totalCost}</span>
            </div>
            <div>
              <label className="inline-block mb-3 text-sm font-medium uppercase">Shipping</label>
              <select className="block w-full p-2 text-sm text-gray-600" required>
                <option>Select Shipping Method</option>
                <option>Standard shipping - $10.00</option>
                <option>Express shipping - $25.00</option>
                <option>Premium shipping - $50.00</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="inline-block mb-3 text-sm font-semibold uppercase">
                Promo Code
              </label>
              <input type="text" id="promo" placeholder="Enter your code" className="w-full p-2 text-sm" />
            </div>
            <button className="px-5 py-2 text-sm text-white uppercase bg-red-500 hover:bg-red-600">Apply</button>
            <div className="mt-8 border-t">
              <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                <span>Total cost</span>
                <span>${totalCost}</span>
              </div>
              <button className="w-full py-3 text-sm font-semibold text-white uppercase bg-indigo-500 hover:bg-indigo-600">
                <Link className="w-full" to="/checkout">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-5 pb-20 text-center">
          <h2 className="py-4 mb-4 text-2xl">Cart Is Empty</h2>
          <Link to="/shop" className="bg-[#0a1d37] text-white font-medium px-5 py-2 rounded-md">
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
