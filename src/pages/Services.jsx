import React from 'react'
import serviceData from '../assets/data/serviceData'
import { motion } from 'framer-motion';


function Services() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-10 md:py-14">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
        {serviceData.map((service,index) =>{
          const {icon,title,bg,subtitle} = service;
          return (
            <motion.div whileHover={{scale : .9}} key={index} className="flex items-center gap-5 py-2 px-3 md:p-3 lg:p-5 rounded-md" style={{backgroundColor:bg}}>
             <div className="text-2xl bg-[#111b2b] text-white py-1 px-2 rounded-full">
             <i className={icon}></i>
             </div>
              <div> 
              <h4 className="text-[#0a1d37] text-[.9rem] md:tex-[1rem] font-bold">{title}</h4>
              <p className="text-[#0a1d37] text-[.8rem] md:text-[.9rem]">{subtitle}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Services