import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const GooglePop = () => {


    return (
        <div>
            <div className='flex justify-center items-center'>
                <button className='btn btn-dark'>SIGN IN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default GooglePop;