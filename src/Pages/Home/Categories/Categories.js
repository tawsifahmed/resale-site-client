import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../Category/Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='my-16'>
            <br />
            <h1 className=' my-5 text-center text-4xl'>Browse Categories: {categories.length}</h1>
            <div className='justify-items-center grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category =>
                        <div
                            key={category._id}
                            className="card w-4/5 bg-base-100 shadow-xl">
                            <Link
                                to={`/category/${category._id}`}>
                                <figure className='rounded'><img className='h-48 w-full' src={category.img} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title justify-center -mt-5">{category.name}</h2>
                                    <div className="card-actions justify-center -mb-2 mt-2">
                                        <button className="btn btn-primary btn btn-sm center -m-2 rounded-none">VIEW</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;