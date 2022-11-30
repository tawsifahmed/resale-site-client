import { data } from 'autoprefixer';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const GooglePop = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [googleUser, setGoogleUser] = useState('')
    const [token] = useToken(googleUser);
    const { updateUser, providerLogin } = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token])

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        getUser(data.name, data.email);
                    })
                    .catch(er => console.log(er));
            })
            .catch(error => console.log(error))

    }

    const getUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setGoogleUser(email);
            });
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-dark'>SIGN IN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default GooglePop;