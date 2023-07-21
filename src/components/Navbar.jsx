import React, { useContext, useEffect, useState } from 'react';
import userImg from '../assets/images/user-icon.png';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/eco-logo.png';
import cartContext from '../cartContext';
import { auth } from './../firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';


function Navbar() {
  const {cart,user} = useContext(cartContext);
  const [nav, setNav] = useState(false);

  const [loginSate, setLoginState] = useState(false);


  const handleLogin = () => {
    setLoginState(!loginSate);
  };

const handleSignOut = () => {
signOut(auth).then(() => {
   toast.success('Sign out successful!');
}).catch((error) => {
  toast.error('Error: ' + error.message);
});
};


  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <section className="h-16 md:h-18 text-[#0a1d37] font-mont z-[10] flex items-center px-4 md:px-8 lg:px-10">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/">
        <div className="flex items-center justify-between">
         <img src={logo} className="h-[1.4rem] md:h-[1.5rem] lg:h-[1.5rem] mr-2" alt="" />
          <h5 className="text-[1.2rem] font-[600] md:text-[1.4rem] lg:text-[1.5rem]">KizMart</h5>
        </div>
        </Link>

          <div className="hidden middle md:block">
              <ul className="flex items-center justify-between gap-12 font-medium">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/cart">Cart</NavLink>
                </li>
              </ul>
          </div>

        <div className="flex items-center justify-between Right">
          <div className="relative flex items-center justify-between gap-4 mr-3 md:gap-5">
            <span className="absolute top-0 left-2 md:top-[.2rem] md:left-[.8rem] inline-flex items-center py-0.2 px-[.3rem] rounded-full text-[.6rem] lg:text-[.7rem] font-medium bg-[#0a1d37] text-white">0</span>
            <Link to="/favorite">
              <i className="ri-heart-line text-[1.1rem] md:text-[1.4rem] lg:text-[1.5rem]"></i>
            </Link>

            <span className="absolute top-0 left-[2.6rem] md:left-[3.3rem] md:top-[.3rem] lg:left-[3.5rem] inline-flex items-center py-0.2 px-[.3rem] rounded-full text-[.6rem] lg:text-[.67rem] font-medium bg-[#0a1d37] text-white">{cart.length}</span>

            <Link to="/cart">
              <i className="ri-shopping-bag-line text-[1.1rem] md:text-[1.4rem] lg:text-[1.5rem]"></i>
            </Link>

            <div className="relative">
            <motion.img whileTap={{ scale: 1.2 }} src={userImg} className="h-5 cursor-pointer md:h-7 lg:h-8" alt="" onClick={handleLogin}/>


             {loginSate && <div className="absolute">
           {user ? <button onClick={handleSignOut}>Logout</button> : <><Link to="/login" >Login</Link> <Link to="/signup">Register </Link></>}
           </div>}
            </div>
          </div>
          <div className="block cursor-pointer md:hidden" onClick={handleNav}>
            <i className="ri-menu-line"></i>
          </div>
        </div>

        {nav && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 w-48 h-full mt-4 mr-2 bg-white rounded-lg shadow-lg top-16"
          >
            <ul className="py-4">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 cursor-pointer hover:bg-gray-100"
              >
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 cursor-pointer hover:bg-gray-100"
              >
                <Link to="/shop">Shop</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 cursor-pointer hover:bg-gray-100"
              >
                <Link to="/cart">Cart</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
