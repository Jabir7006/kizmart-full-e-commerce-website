import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img from '../assets/images/counter-timer-img.png';
function LimitedOffer() {

  const [remainingTime, setRemainingTime] = useState({ days: 10, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endTime = new Date().getTime() + remainingTime.days * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });

      if (distance <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="px-4 md:px-8 lg:px-12 md:py-7 bg-[#0a1d37] h-full">
     <div className="container mx-auto py-8 text-white flex flex-col justify-center items-center lg:flex-row lg:justify-between">
   
     <div className="lg:mx-8">
     <h4 className="text-1xl font-[600] mb-2">Limited Offer</h4>
     <h3 className="font-medium mb-4"> Quality Arm Chair</h3>
   
     <div className="flex items-center gap-4 mb-8">
     <span>
      <h3 className="text-2xl">{remainingTime.days}</h3>
      <h3>Days</h3>
     </span>
      <p className="text-white text-2xl">:</p>
     <span>
      <h3 className="text-2xl">{remainingTime.hours}</h3>
      <h3>Hours</h3>
     </span>
     <p className="text-white text-2xl">:</p>
     <span>
      <h3 className="text-2xl">{remainingTime.minutes}</h3>
      <h3>Minutes</h3>
     </span>
     <p className="text-white text-2xl">:</p>
     <span>
      <h3 className="text-2xl">{remainingTime.seconds}</h3>
      <h3>Seconds</h3>
     </span>
  
     </div>
   <motion.div whileTap={{scale : 1.1}} className="bg-white text-black px-4 py-2 rounded-md font-[600] mt-2 cursor-pointer text-center lg:inline">
   <Link to="/shop">Visit Store</Link>
   </motion.div>
     </div>
   <div>
     <img className="w-full" src={img} alt="" />
     </div>
     </div>
     
   </section>
  )
}

export default LimitedOffer;




