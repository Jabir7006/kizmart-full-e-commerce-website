import React from 'react';
import Banner from './Banner';
import Services from './Services';
import TrendingProducts from './TrendingProducts';
import LimitedOffer from './LimitedOffer';
import NewArrivals from './NewArrivals';

function Home() {
    return (
        <>
            <Banner />
            <Services />
            <TrendingProducts />
            <LimitedOffer />
            <NewArrivals />
        </>
    );
}

export default Home;
