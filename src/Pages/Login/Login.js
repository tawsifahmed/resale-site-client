import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [signInError, setSignInError] = useState('');
    const [signInUserEmail, setSignInUserEmail] = useState('');
    const [token] = useToken(signInUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setSignInError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setSignInUserEmail(data.email);

            })
            .catch(error => {
                console.log(error.message)
                setSignInError(error.message);
            });

    }

    return (
        <div className='h-[800px] flex flex-col justify-center items-center'>
            <h2 className='text-3xl flex justify-center underline mb-5'>Login Form</h2>
            <div className='bg-white rounded pb-5'>
                <form className='text-center bg-white rounded w-96 p-5 -me-5' onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", {
                                required: "Valid email is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
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
                    <input className='btn btn-dark text-white w-80' value="Login" type="submit" />
                    <div>
                        {signInError && <p className='text-red-500'>{signInError}</p>}
                    </div>
                </form>
                <p className='text-center'>New to this site? Then <Link className='text-primary' to={'/register'}>create account</Link>.</p>
                <div className="divider px-5">OR</div>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-dark'>SIGN IN WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default Login;