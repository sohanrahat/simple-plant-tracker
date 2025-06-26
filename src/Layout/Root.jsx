import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { useTheme } from '../Context/ThemeContext';

const Root = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}>
            <nav>
                <Navbar />
            </nav>
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;