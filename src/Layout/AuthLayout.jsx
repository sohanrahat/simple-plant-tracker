import React from 'react';
import { Outlet } from 'react-router';
import { useTheme } from '../Context/ThemeContext';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    const { isDarkMode } = useTheme();

    return (

        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AuthLayout;