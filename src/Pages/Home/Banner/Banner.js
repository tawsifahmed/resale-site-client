import React, { useRef } from 'react';
import banner from '../../../assets/banner.jpeg';

const Banner = () => {


    return (
        <div>
            <br />
            <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 mt-2 text-5xl font-bold">Welcome to <span className='underline decoration-pink-500'>buy2nd</span></h1>
                        <br />
                        <h1 className='text-3xl'>Find the best used and 2nd hand bicycles available for sale at our online store</h1>
                        <br />
                        <div className='px-5'>
                            <p className="px-5">People want to buy second-hand cycles that run like a new one. </p>
                            <p>When it comes to resale/second-hand/refurbished, we are the most reliable eShop in this world. <br></br> When you do find a bike that you're interested in, <br></br>cross-check its price based on the category.</p>
                        </div>
                        <br />
                        <button className="btn btn-primary mb-3">Browse Categories</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;