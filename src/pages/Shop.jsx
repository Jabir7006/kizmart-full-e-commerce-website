import React, { useContext, useEffect, useState } from 'react';
import shopBg from '../assets/images/shop.jpg';
import product from '../assets/data/products';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import cartContext from '../cartContext';

function Shop() {
  const {handleAddProduct} = useContext(cartContext);

  const [products, setProducts] = useState(product);

  
  const handleChange = (e) => {
    const value = e.target.value;
    
    if (value === 'all') {
       setProducts(product);
    }
    else {
      const filteredSofa = product.filter((product) => product.category === value)
      setProducts(filteredSofa);
    }
    
   
  };

const handleSearch = (e) => {
  const search = e.target.value;
    const searchData = product.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );
  setProducts(searchData);
  }
  

  return (
    <section className="pb-12">
      
        <div
          className="py-24 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${shopBg})`,
          }}
        >
          <h2 className="text-3xl font-bold text-center text-white">Products</h2>
    
      </div>
      <div className="container flex flex-col items-center gap-5 py-8 pb-16 md:flex-row md:justify-between md:px-14 lg:px-20 pt-14 md:gap-6">

      <div>
        <select className="bg-[#0a1d37] text-white px-5 py-2 rounded-md" onChange={handleChange}>
          <option value="all">Filter By Category</option>
          <option value="sofa">Sofa</option>
          <option value="mobile">Mobile</option>
          <option value="chair">Chair</option>
          <option value="watch">Watch</option>
          <option value="wireless">Wireless</option>
        </select>
      </div>
      <div>
        <select className="bg-[#0a1d37] text-white px-8 py-2 rounded-md">
          <option>Sort By</option>
        </select>
      </div>
      <div className="border border-[#0a1d37] flex justify-between items-center rounded-md w-1/2 px-3">
        <input type="search" className="w-full px-5 py-2 border-none outline-none" onChange={handleSearch} placeholder='Search...'/>
        <span>
        <i className="ri-search-line"></i>
        </span>
      </div>
      </div>

      {products.length > 0 ? <div className="grid grid-cols-2 gap-6 mx-10 md:grid-cols-3 lg:grid-cols-4 lg:mx-20">
        {products.map((product) => {
          const {id,productName,imgUrl,category,price} = product;
          return (
            <div className="cursor-pointer" key={id}>
              
              <Link to={`/product/${id}`}>
              <motion.img whileHover={{scale : 0.9}} src={imgUrl} className="w-full" alt="" />
              <h4 className="mt-4 text-[1.1rem] md:text-[1.3rem] font-medium">{productName}</h4>
              <p className="text-[#0a1d37] mt-2 mb-8">{category}</p>
              </Link>
              
              <div className="flex items-center justify-between">
              <div>
              <h3 className="text-[1.15rem] md:text-2xl font-medium">${price}</h3>
              </div>
             <motion.div whileTap={{scale: 1.2}}>
              <button onClick={()=>handleAddProduct(product)}>
              <i className="text-2xl ri-add-circle-fill md:text-3xl"></i>
              </button>
             </motion.div>
              </div>
            </div>
          )
        })}
        </div> : <h2 className="py-4 text-2xl text-center">No Products are found</h2>}
    </section>
  );
}

export default Shop;
