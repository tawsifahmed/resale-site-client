import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Home/Home/Shared/Footer/Footer';
import Navbar from '../../Pages/Home/Home/Shared/Navbar/Navbar';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='outlet'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;