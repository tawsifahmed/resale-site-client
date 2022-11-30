import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://y-weld-five.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

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
                                        <button className="btn btn-dark btn btn-sm center rounded-none -m-2 text-slate-50">VIEW</button>
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