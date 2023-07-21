import React from 'react';
import img from '../assets/images/hero-img.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className="px-4 md:px-8 lg:px-12 bg-[#d3e2fd] py-10 md:py-14">
      <div className="container mx-auto flex items-center pt-5 flex-col md:flex-row lg:py-0">
        <div className="left-side md:w-1/2 ">
          <h6 className="font-medium mb-5">Trending Product In 2022</h6>
          <h3 className="font-[600] text-[1.7rem] md:text-[1.75rem] mb-6 leading-10 lg:text-[2.1rem]">
             Make Your Interior More
            {/* <br className="hidden md:block" /> */}
             Minimalistic & Modern
          </h3>
          <p className="text-[#0a1d37] mb-6 leading-8 md:leading-7 md:font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis. Quo architecto eaque blanditiis a facere reiciendis enim aut distinctio.</p>
          <motion.div whileTap={{ scale: 1.1 }}>
            <Link to="/shop" className="bg-[#0a1d37] text-white px-5 py-2 rounded-md">SHOP NOW</Link>
          </motion.div>
        </div>
        <div className="right-side mt-10 md:w-1/2">
          <img src={img} className="w-full" alt="banner" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
