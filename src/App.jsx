import React, { useEffect, useState } from 'react';
import './App.css';
import Index from './Routes/Index';
import cartContext from './cartContext';
import products from './assets/data/products';
import { toast } from 'react-toastify';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);


  useEffect(() => {
    // Add an event listener to update the user state whenever the authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Clean up the event listener when the component unmounts
    return () => unsubscribe();
  }, []);



  const handleAddProduct = (product) => {
    const sameProduct = cart.find((item) => item.id === product.id);

    if(sameProduct){
     
      toast.error('Item already added');
    }else{
      toast.success('Item added successfully');
      const updateCart = [...cart, { ...product, qty: 1 }];
      setCart(updateCart);
    }
    
   
  };
  const totalCost = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  



  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        handleAddProduct,
        totalCost,
        user
      }}
    >
      <Index />
    </cartContext.Provider>
  );
}

export default App;
