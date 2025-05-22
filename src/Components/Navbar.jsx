import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // console.log('User logged out successfully');
                localStorage.removeItem('plantPlanetUser');
                window.location.reload(); // Force reload to clear any cached state
            })
            .catch(error => {
                // console.error('Logout error:', error);
            });
    };

    // Profile Pic 
    const defaultAvatar = "https://i.ibb.co/MBtjqXQ/no-avatar.gif";
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to='/all-plants'>All Plants</Link></li>
                            <li><Link to='/add-plant'>Add a Plant</Link></li>
                            <li><Link to='/my-plants'>My Plants</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl text">PP</Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-center gap-2">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/all-plants'>All Plants</Link></li>
                        <li><Link to='/add-plant'>Add a Plant</Link></li>
                        <li><Link to='/my-plants'>My Plants</Link></li>

                    </ul>
                </div>
                <div className="navbar-end gap-2">
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
                            <button onClick={handleLogout} className="btn">Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link to='/login' className="btn">Login</Link>
                            <Link to='/Register' className="btn">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;