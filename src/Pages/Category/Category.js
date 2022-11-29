import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const Category = () => {

    const products = useLoaderData();

    return (
        <div>
            <br />
            <h1 className='text-center text-4xl decoration-4 underline'>Book your cycle</h1>
            <br />
            <h1 className='text-center text-3xl'>Total cycles: {products.length}</h1>
            <br />
            <br />
            <div className='justify-items-center grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product =>
                        <div
                            key={product._id}
                            className="card w-4/5 bg-base-100 shadow-xl">

                            <figure className='rounded'><img className='h-48 w-4/5' src={product.image_url} alt="" /></figure>
                            <hr />
                            <div className="card-body">
                                <h2 className="card-title justify-center -mt-5">{product.title}</h2>
                                <div className='category-card'>
                                    <p>Location: {product.location}</p>
                                    <p>Resale Price: ${product.sellingPrice}</p>
                                    <p>Original Price: ${product.originalPrice}</p>
                                    <p>Years of Use: {product.yearsUsage}Years</p>
                                    <p>Posted on: {product.postTime}</p>
                                    <p>Seller: {product.sellersName}</p>
                                </div>
                                <div className="card-actions justify-center -mb-2 mt-3">
                                    <button className="btn btn-primary btn btn-sm center -m-2 rounded-none">Book now</button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Category;