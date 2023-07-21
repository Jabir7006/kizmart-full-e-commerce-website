import React, { useContext, useState } from 'react';
import cartContext from '../cartContext';
import cashondelivery from '../assets/images/cashondelivery.jpg';
import paypal from '../assets/images/download.png';
import card from '../assets/images/download.jpg';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cart , totalCost} = useContext(cartContext);
  const [isTrue, setIsTrue] = useState(false);
  const [shipping, setShipping] = useState(60);


const handleChange = (e) => {
 if (e.target.value === 'paypal' || e.target.value === 'card') {
  setIsTrue(true);
  setShipping(0);
 } else {
  setIsTrue(false);
  setShipping(60);
 }
 
};


  return (
    <>
  <div className="px-8 lg:px-12">
    
    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p className="text-xl font-medium">Payment Details</p>
      <p className="text-gray-400">Complete your order by providing your payment details.</p>
      <div>
        <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">Name</label>
        <div className="relative">
          <input type="text" id="name" name="name" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your name" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <i xmlns="http://www.w3.org/2000/svg" className="h-auto w-4 text-gray-400 ri-user-line" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            </i>
          </div>
        </div>
        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div className="relative">
          <input type="email" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        </div>
        <label htmlFor="number" className="mt-4 mb-2 block text-sm font-medium">Mobile Number</label>
        <div className="relative">
          <input type="tel" id="number" name="number" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your number" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <i xmlns="http://www.w3.org/2000/svg" className="h-auto w-4 text-gray-400 ri-phone-line" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            
            </i>
          </div>
        </div>
         {isTrue && <>
          <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
        <div className="relative">
          <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
            </svg>
          </div>
        </div>
        <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
        <div className="flex">
          <div className="relative w-7/12 flex-shrink-0">
            <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
              </svg>
            </div>
          </div>
          <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
          <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
        </div>
         </>}
        <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
        <div className="flex flex-col sm:flex-row">
          <div className="relative flex-shrink-0 sm:w-7/12">
            <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="image" />
            </div>
          </div>
          <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
            <option value="State">State</option>
          </select>
          <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
        </div>
        <div>



        <p className="mt-8 text-lg font-medium">Paymant Methods</p>
      <form className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative">
          <input className="peer hidden" id="radio_1" type="radio" name="radio" defaultChecked value="cashOnDelivery" onClick={handleChange}/>
          <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
          <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
            <img className="w-14 object-contain" src={cashondelivery} alt="image" />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Cash On Delivery</span>
              <p className="text-slate-500 text-sm leading-6">Delivery: 5-7 Days</p>
            </div>
          </label>
        </div>
        <div className="relative">
          <input className="peer hidden" id="radio_2" type="radio" name="radio" value="paypal" onClick={handleChange}/>
          <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
          <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
            <img className="w-14 object-contain" src={paypal} alt="image" />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Pay With Paypal</span>
              <p className="text-slate-500 text-sm leading-6">Delivery: 3-5 Days</p>
            </div>
          </label>
        </div>
        <div className="relative">
          <input className="peer hidden" id="radio_3" type="radio" name="radio" value="card" onClick={handleChange}/>
          <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
          <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_3">
            <img className="w-14 object-contain" src={card} alt="image" />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Pay With Card</span>
              <p className="text-slate-500 text-sm leading-6">Delivery: 3-5 Days</p>
            </div>
          </label>
        </div>
      </form>
        </div>
        {/* Total */}
        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900">${totalCost}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Shipping</p>
            <p className="font-semibold text-gray-900">${shipping}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">${totalCost + shipping}</p>
        </div>
      </div>
      <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
        <Link to="/success">Place Order</Link>
      </button>

    </div>




   
  </div>
</>


  );
}

export default Checkout;
