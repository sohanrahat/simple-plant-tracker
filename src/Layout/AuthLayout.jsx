import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useTheme } from '../Context/ThemeContext';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    const { isDarkMode } = useTheme();


    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('bg-gray-900', 'text-gray-200');
            body.classList.remove('bg-white', 'text-gray-800');
        } else {
            body.classList.add('bg-white', 'text-gray-800');
            body.classList.remove('bg-gray-900', 'text-gray-200');
        }
    }, [isDarkMode]);

    return (
        <div className="min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AuthLayout;