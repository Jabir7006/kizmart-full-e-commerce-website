import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './../assets/data/products';
import shopBg from '../assets/images/shop.jpg';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import cartContext from '../cartContext';

function ProductDetails() {
  const {handleAddProduct} = useContext(cartContext);
  const [product, setProduct] = useState(null);
  const [active, setActive] = useState('desc');
  const { id } = useParams();
  const [selectedRating, setSelectedRating] = useState(0);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [userReviews, setUserReviews] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const productFilter = products.find((product) => product.id === id);
    setProduct(productFilter);

    const filteredSimilarProducts = products.filter((pr) => pr.category === productFilter.category);
    setSimilarProducts(filteredSimilarProducts);

    const storedUserReviews = JSON.parse(localStorage.getItem('userReviews'));
    if (storedUserReviews && storedUserReviews.length > 0) {
      setUserReviews(storedUserReviews);
    }
  }, [id]);

  useEffect(() => {
    // Store user reviews in localStorage
    localStorage.setItem('userReviews', JSON.stringify(userReviews));
  }, [userReviews]);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();

    const newReview = {
      name: name,
      rating: selectedRating,
      text: reviewText,
    };

    setUserReviews([...userReviews, newReview]);
    setName('');
    setSelectedRating(0);
    setReviewText('');

    toast.info('Thank you for your review!');
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = userReviews.filter((review, i) => i !== index);
    setUserReviews(updatedReviews);
    toast.info('Review deleted successfully!');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <div style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${shopBg})`,
          }} className="bg-cover bg-no-repeat bg-center py-12 md:py-20 lg:py-28">
          <h1 className="text-white font-medium text-center text-2xl md:text-3xl">{product.productName}</h1>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-12 md:gap-12 lg:gap-20 pb-6 px-8 md:px-12 lg:px-14">
          <div className="md:w-1/2">
            <img src={product.imgUrl} className="w-[70%] m-auto md:w-full" alt="" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-medium mb-1">{product.productName}</h2>
            <div className="flex justify-start items-center gap-8 mb-4">
              <span className="text-[#e9a348]">
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-half-s-line"></i>
              </span>
              <p className="text-[#e9a348]">
                ({product.avgRating} <span className="text-[#999]">ratings</span>)
              </p>
            </div>
            <h3 className="text-[1.3rem] font-medium mb-5">${product.price}</h3>
            <p className="mb-6">{product.shortDesc}</p>
            <motion.button whileTap={{ scale: 1.1 }} className="bg-[#0a1d37] text-white px-5 py-2 rounded-md" onClick={() => handleAddProduct(product)}>
              Add to Cart
            </motion.button>
          </div>
        </div>

        <div className="container mx-auto px-8 md:px-12 lg:px-14 mt-8 pb-16">
          <div className="flex items-center gap-6">
            <h5 className={active === 'desc' ? 'font-bold cursor-pointer' : 'cursor-pointer font-medium'} onClick={() => setActive('desc')}>
              Description
            </h5>
            {product.reviews && (
              <h5 className={active === 'review' ? 'font-bold cursor-pointer' : 'cursor-pointer font-medium'} onClick={() => setActive('review')}>
                Reviews ({userReviews.length})
              </h5>
            )}
          </div>
          {active === 'desc' ? (
            <div className="">
              <p className="mt-10 leading-8 text-[1rem]">{product.description}</p>
            </div>
          ) : (
            <div className="ml-12">
              {userReviews.length > 0 ? (
                userReviews.map((review, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h5 className="mt-10 mb-1 font-medium">{review.name}</h5>
                      <button
                        onClick={() => handleDeleteReview(index)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="flex gap-1 text-[#e49b3d] font-medium mb-4">
                      {Array.from(Array(review.rating).keys()).map((star) => (
                        <i key={star} className="ri-star-fill"></i>
                      ))}
                    </div>
                    <p>{review.text}</p>
                  </div>
                ))
              ) : (
                <>
                  <p className="mt-8">No reviews yet.</p>
                  <div className="mt-14 flex flex-col gap-8">
                    <form className="flex flex-col gap-8 mx-auto w-full lg:w-[60%]" onSubmit={handleSubmitReview}>
                      <h4 className="text-[1.3rem] md:text-2xl font-medium">Leave your experience</h4>
                      <input
                        type="text"
                        placeholder="Enter name"
                        className="w-full p-2 border border-black rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <div className="flex gap-5 text-2xl text-gray-400">
                        {[1, 2, 3, 4, 5].map((index) => (
                          <i
                            key={index}
                            className={`ri-star-fill cursor-pointer ${index <= selectedRating ? 'text-yellow-500' : ''}`}
                            onClick={() => handleRatingClick(index)}
                          ></i>
                        ))}
                      </div>
                      <textarea
                        placeholder="Enter review"
                        cols="30"
                        rows="8"
                        className="w-full p-3 border border-black rounded-md"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                      ></textarea>
                      <button type="submit" className="text-white bg-[#0a1d37] px-5 py-2 rounded-md">
                        Submit
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Similar products */}
      <section className="px-4 md:px-8 lg:px-12 py-20 md:py-22">
        <h2 className="text-2xl font-medium md:mb-3">You might also like</h2>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <Link to={`/product/${product.id}`} className="cursor-pointer" key={product.id}>
              <div>
                <motion.img whileHover={{ scale: 0.9 }} src={product.imgUrl} className="w-full" alt="" />
                <h4 className="mt-4 text-[1.1rem] md:text-[1.3rem] font-medium">{product.productName}</h4>
                <p className="text-[#0a1d37] mt-2 mb-8">{product.category}</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-[1.15rem] md:text-2xl font-medium">${product.price}</h3>
                </div>
                <motion.div whileTap={{ scale: 1.2 }}>
                  <button to="/cart" onClick={() => handleAddProduct(product)}>
                    <i className="ri-add-circle-fill text-2xl md:text-3xl"></i>
                  </button>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
