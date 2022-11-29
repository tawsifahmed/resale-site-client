import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CategoryItem from '../CategoryItem/CategoryItem';
import ProductBookingModal from '../ProductBookingModal/ProductBookingModal';

const Category = () => {

    const products = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null);

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
                        <CategoryItem
                            key={product._id}
                            product={product}
                            setBookProduct={setBookProduct}
                        >

                        </CategoryItem>
                    )
                }
            </div>
            {
                bookProduct &&
                <ProductBookingModal
                    bookProduct={bookProduct}
                ></ProductBookingModal>}

        </div>
    );
};


export default Category;