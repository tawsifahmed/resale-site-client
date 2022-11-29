import React from 'react';

const CategoryItem = ({ product, setBookProduct }) => {

    const { image_url, title, location, sellingPrice, originalPrice, yearsUsage, postTime, sellersName } = product;
    return (
        <div

            className="card w-4/5 bg-base-100 shadow-xl">

            <figure className='rounded'><img className='h-48 w-4/5' src={image_url} alt="" /></figure>
            <hr />
            <div className="card-body">
                <h2 className="card-title justify-center -mt-5">{title}</h2>
                <div className='category-card'>
                    <p><span className='font-bold'>Location:</span> {location}</p>
                    <p><span className='font-bold'>Resale Price:</span> ${sellingPrice}</p>
                    <p><span className='font-bold'>Original Price:</span> ${originalPrice}</p>
                    <p><span className='font-bold'>Years of Use:</span> {yearsUsage} Years</p>
                    <p><span className='font-bold'>Posted on:</span> {postTime}</p>
                    <p><span className='font-bold'>Seller:</span> {sellersName}</p>
                </div>
                <div className="card-actions justify-center -mb-2 mt-3">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-dark btn btn-sm center -m-2 text-slate-50"
                        onClick={() => setBookProduct(product)}>Book now</label>
                </div>
            </div>

        </div>
    );
};

export default CategoryItem;