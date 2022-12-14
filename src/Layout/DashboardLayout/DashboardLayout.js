import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../../Pages/Home/Home/Shared/Footer/Footer';
import Navbar from '../../Pages/Home/Home/Shared/Navbar/Navbar';
import './DashboardLayout.css'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content outlet2 bg-slate-200">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dash-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-slate-200">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                            </>

                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;