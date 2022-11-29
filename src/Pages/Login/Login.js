import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex flex-col justify-center items-center'>
            <h2 className='text-3xl flex justify-center underline mb-5'>Login</h2>
            <div className='bg-white pb-5'>
                <form className='text-center bg-white w-96 p-5 -me-5' onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                        <input />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <input />
                    </div>
                    <input className='btn btn-dark text-white w-80' value="Login" type="submit" />
                </form>
                <p className='text-center'>New to this site? Then <Link className='text-primary' to={'/register'}>create account</Link> .</p>
                <div className="divider px-5">OR</div>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-dark'>SIGN IN WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default Login;