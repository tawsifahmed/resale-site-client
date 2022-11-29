import React, { useRef } from 'react';
import AdvertisedItems from '../../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {


    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
        </div>
    );
};

export default Home;