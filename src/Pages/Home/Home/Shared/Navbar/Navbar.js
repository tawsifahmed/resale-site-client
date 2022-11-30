import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider';
import logo from '../../../../../logo.svg'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    };

    const navItems = <React.Fragment>
        {user?.uid ?
            <>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </>
            :
            <>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
            </>
        }
    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100 mt-3 px-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                    <Link to='/' className="-mx-5 btn btn-ghost normal-case text-4xl"> buy2nD</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <React.Fragment>

                        {user?.uid ?
                            <>
                                <button onClick={handleLogOut}>Logout</button>

                                <br />
                                <br />
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <br />
                                <Link to='/register'>Register</Link>

                                <br />
                                <br />
                            </>

                        }

                    </React.Fragment>
                </div>
                <label htmlFor="dash-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;