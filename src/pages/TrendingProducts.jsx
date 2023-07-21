import React, { useContext, useEffect, useState } from 'react'
import products from './../assets/data/products';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import cartContext from '../cartContext';

function TrendingProducts() {
const {handleAddProduct} = useContext(cartContext);

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

 
 useEffect(() => {
     const filteredTrendingProducts = products.filter((product) => product.category === 'chair');
     setTrendingProducts(filteredTrendingProducts);
 
     const filteredBestSalesProducts = products.filter((product) => product.category === 'sofa');
     setBestSalesProducts(filteredBestSalesProducts);

 }, [])

 

 
  return (
   <>
    <section className="px-4 py-20 md:px-8 lg:px-12 md:py-22">
      <h2 className="text-center text-2xl font-[600] lg:text-3xl md:mb-3">Trending Products</h2>
      <div className="container grid grid-cols-2 gap-6 mx-auto md:grid-cols-3 lg:grid-cols-4">
        

        {trendingProducts.map((product) => {
          const {id,productName,imgUrl,category,price} = product;
          return (
            <div className="cursor pointer" key={id}>
              
              <Link to={`/product/${id}`} >
              <motion.img whileHover={{scale : 0.9}} src={imgUrl} className="w-full cursor-pointer" alt="" />
              <h4 className="mt-4 text-[1.1rem] md:text-[1.3rem] font-medium">{productName}</h4>
              <p className="text-[#0a1d37] mt-2 mb-8">{category}</p>
              </Link>
              
              <div className="flex items-center justify-between">
              <div>
              <h3 className="text-[1.15rem] md:text-2xl font-medium">${price}</h3>
              </div>
             <motion.div whileTap={{scale: 1.2}}>
              <button onClick={() => handleAddProduct(product)}>
              <i className="text-2xl ri-add-circle-fill md:text-3xl"></i>
              </button>
             </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </section>

    {/* Best Sales  */}

    <section className="px-4 py-20 md:px-8 lg:px-12 md:py-22">
      <h2 className="text-center text-2xl font-[600] lg:text-3xl md:mb-3">Best Sales</h2>
      <div className="container grid grid-cols-2 gap-6 mx-auto md:grid-cols-3 lg:grid-cols-4">
        

        {bestSalesProducts.map((product) => {
          const {id,productName,imgUrl,category,price} = product;
          return (
            <div className="cursor pointer" key={id}>
              
              <Link  to={`/product/${id}`}>
              <motion.img whileHover={{scale : 0.9}} src={imgUrl} className="w-full cursor-pointer" alt="" />
              <h4 className="mt-4 text-[1.1rem] md:text-[1.3rem] font-medium">{productName}</h4>
              <p className="text-[#0a1d37] mt-2 mb-8">{category}</p>
              </Link>
              
              <div className="flex items-center justify-between">
              <div>
              <h3 className="text-[1.15rem] md:text-2xl font-medium">${price}</h3>
              </div>
             <motion.div whileTap={{scale: 1.2}}>
             <button onClick={() => handleAddProduct(product)}>
              <i className="text-2xl ri-add-circle-fill md:text-3xl"></i>
              </button>
             </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
   </>
  )
}

export default TrendingProducts;

 