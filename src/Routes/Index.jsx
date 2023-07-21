import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductDetails from './../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Error from './../components/Error';
import SignUp from '../components/SignUp';
import Login from './../pages/Login';
import ProtectedRouter from '../components/ProtectedRouter';
import OrderSuccessfull from '../pages/OrderSuccessfull';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/checkout"
                    element={
                        <ProtectedRouter>
                            <Checkout />
                        </ProtectedRouter>
                    }
                />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/success" element={<OrderSuccessfull />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Index;
