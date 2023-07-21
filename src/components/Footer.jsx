import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

   <section className="px-4 md:px-8 lg:px-12 pt-12 pb-4 md:pt-16 md:pb-5 bg-[#0a1d37] text-white font-light">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4 md:place-items-center lg:flex lg:justify-between">
        <div className="md:lg:w-[30%]"> 
          <h5 className="font-[600] mb-5">KizMart</h5>
          <p className="text-white text-[.9rem] mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aperiam autem reprehenderit veritatis dolores architecto officiis laboriosam recusandae ipsa doloremque.</p>
        </div>
        <div className="mb-4 lg:w-[20%] lg:ps-6">
        <h5 className="font-[600] mb-5 text-[1.1rem]">Top Categories</h5>
          <ul className="flex flex-col gap-2 mb-2">
            <li>
              <Link className="text-[.9rem]">Mobile Phones</Link>
            </li>
            <li>
              <Link className="text-[.9rem]">Modern Sofa</Link>
            </li>
            <li>
              <Link className="text-[.9rem]">Arm Chair</Link>
            </li>
            <li>
              <Link className="e text-[.9rem]">Smart Watches</Link>
            </li>
          </ul>
        </div>
        <div className="mb-5 lg:w-[20%]">
        <h5 className="font-[600] mb-3 text-[1.1rem]">Useful Links</h5>
          <ul className="flex flex-col gap-2 mb-2">
            <li>
              <Link to="/shop" className="text-[.9rem]">Shop</Link>
            </li>
            <li>
              <Link to="/cart" className="text-[.9rem]">Cart</Link>
            </li>
            <li>
              <Link to="/login" className="text-[.9rem]">Login</Link>
            </li>
            <li>
              <Link to="policy" className="text-[.9rem]">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="lg:w-[30%] lg:ms-auto pb-8">
        <h5 className="font-[600] mb-2 pb-3 text-[1.1rem]">Contact</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/shop" className="flex items-center gap-2">
              <i className="ri-map-pin-line text-[1.1rem]"></i>
              <p className="text-white text-[.9rem]">123 Raipara Jessore, Bangladesh</p>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center gap-2">
             <i className="ri-phone-line text-[1.1rem]"></i>
             <p className="text-white text-[.9rem]">+88 01627159355</p>
              </Link>
            </li>
            <li>
              <Link to="/login" className="flex items-center gap-2">
              <i className="ri-mail-line text-[1.1rem]"></i>
              <p className="text-white text-[.9rem]">www.jabirahmad@gmail.com</p>
              </Link>
            </li>
            <li>
              <Link to="policy" className="flex items-center gap-2">
              <i className="ri-contacts-line text-[1.1rem]"></i>
              <p className="text-white text-[.9rem]">Jabir Ahmad</p>
              </Link>
            </li>
          </ul>
        </div>
        
    </div>
    <p className="text-center">copyright 2023 jabir ahmad, all rights reserved</p>
   </section>

  )
}

export default Footer