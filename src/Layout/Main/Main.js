import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Home/Home/Shared/Footer/Footer';
import Navbar from '../../Pages/Home/Home/Shared/Navbar/Navbar';
import './Main.css'

const Main = () => {
    return (
        <div >
            <Navbar className='max-w-[1440px] mx-auto'></Navbar>
            <div className='bg-slate-200'>
                <div className='outlet max-w-[1440px] mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;