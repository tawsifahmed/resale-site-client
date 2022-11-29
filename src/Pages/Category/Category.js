import React from 'react';
import { useLoaderData } from 'react-router';

const Category = ({ name }) => {




    const products = useLoaderData();

    return (
        <div>
            <h1>{products.length}</h1>
            <p>{name}</p>
        </div>
    );
};

export default Category;