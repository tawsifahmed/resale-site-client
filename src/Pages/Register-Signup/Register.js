import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);

    const handleRegister = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // form.reset();
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='h-[800px] flex flex-col justify-center items-center'>
            <h2 className='text-3xl flex justify-center underline mb-5'>Registration Form</h2>
            <div className='bg-white rounded pb-5'>
                <form className='text-center rounded bg-white w-96 p-5 -me-5' onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: "Please enter your name"
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", {
                                required: "Valid email is required"
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'password must be minimum 6 characters long' },
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <br />
                    <input className='btn btn-dark text-white w-80' value="Register" type="submit" />
                </form>
                <p className='text-center'>Already have an account? Then <Link className='text-primary' to={'/login'}>login here</Link> .</p>
                <div className="divider px-5">OR</div>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-dark'>SIGN IN WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default Register;