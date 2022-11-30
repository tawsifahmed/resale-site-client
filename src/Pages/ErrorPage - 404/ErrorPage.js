import React from 'react';

const ErrorPage = () => {
    return (
        <div className='pt-10'>
            <p className='text-4xl text-center'>OPS Error 404</p>
            <p className='text-center text-3xl'>Page not found</p>
            <br />
            <div>
                <img className='w-auto h-fit' src="https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2245&q=80" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;