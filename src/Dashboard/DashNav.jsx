import React from 'react';
import { NavLink } from 'react-router';

const DashNav = () => {
    // Define common classes for NavLinks for consistency
    // Using bg-white/20 for active state, similar to the main Navbar
    const navLinkClasses = ({ isActive }) =>
        `px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`;

    return ( // The nav itself will be the full height of the sidebar
        <nav className="h-full flex flex-col bg-green-800 text-white p-4 shadow-md">
            <div className="text-2xl font-bold mb-6">
                Plant Planet Dashboard
            </div>
            <div className="flex flex-col space-y-2"> {/* Vertical links */}
                <NavLink to="/dashboard/my-plants" className={navLinkClasses}>
                    My Plants
                </NavLink>
                <NavLink to="/dashboard/add-plant" className={navLinkClasses}>
                    Add Plant
                </NavLink>
                {/* Assuming these are dashboard-specific routes */}
                <NavLink to="/dashboard/add-product" className={navLinkClasses}>
                    Add a Product
                </NavLink>
                <NavLink to="/dashboard/my-products" className={navLinkClasses}>
                    My Products
                </NavLink>
                {/* Add a general link back to the main site, if desired */}
                <NavLink to="/" className={navLinkClasses}>
                    Back to Main Site
                </NavLink>
            </div>
        </nav>
    );
};

export default DashNav;