import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { useTheme } from '../Context/ThemeContext';

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const { isDarkMode, toggleTheme } = useTheme();

    const handleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('plantPlanetUser');
                window.location.reload();
            })
            .catch(error => {
            });
    };

    const defaultAvatar = "https://i.ibb.co/MBtjqXQ/no-avatar.gif";

    return (
        <div>
            <div className={`navbar shadow-sm ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-green-100'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className={`menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-green-100'
                                }`}>
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                            <li><NavLink to='/all-plants' className={({ isActive }) => isActive ? 'active' : ''}>All Plants</NavLink></li>
                            <li><NavLink to='/about-us' className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
                            <li><NavLink to='/add-plant' className={({ isActive }) => isActive ? 'active' : ''}>Add a Plant</NavLink></li>
                            <li><NavLink to='/my-plants' className={({ isActive }) => isActive ? 'active' : ''}>My Plants</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">PP</Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-center gap-2">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                        <li><NavLink to='/all-plants' className={({ isActive }) => isActive ? 'active' : ''}>All Plants</NavLink></li>
                        <li><NavLink to='/about-us' className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
                        <li><NavLink to='/add-plant' className={({ isActive }) => isActive ? 'active' : ''}>Add a Plant</NavLink></li>
                        <li><NavLink to='/my-plants' className={({ isActive }) => isActive ? 'active' : ''}>My Plants</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button
                        onClick={toggleTheme}
                        className={`btn btn-circle ${isDarkMode ? 'btn-ghost text-yellow-500' : 'btn-ghost text-gray-600'}`}
                    >
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                    {loading ? (
                        <span className="loading loading-spinner loading-md text-emerald-500"></span>
                    ) : user ? (
                        <div className="flex items-center gap-3">
                            <div className="tooltip tooltip-left z-10" data-tip={user?.displayName || user?.email || 'User'}>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
                                        <img
                                            src={user?.photoURL || defaultAvatar}
                                            alt="User"
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.target.src = defaultAvatar }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleLogout} className={`btn ${isDarkMode ? 'btn-ghost text-white' : ''}`}>Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link to='/login' className={`btn ${isDarkMode ? 'btn-ghost text-white' : ''}`}>Login</Link>
                            <Link to='/Register' className={`btn ${isDarkMode ? 'btn-ghost text-white' : ''}`}>Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;