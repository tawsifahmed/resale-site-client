import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");


    return (
        <div className='h-[800px] flex flex-col justify-center items-center'>
            <h2 className='text-3xl flex justify-center underline mb-5'>Login</h2>
            <div className=''>
                <form className='bg-white p-4' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                        <input />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <input />
                    </div>

                    <p>{data}</p>
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Login;