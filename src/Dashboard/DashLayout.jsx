import React from 'react';
import { Outlet } from 'react-router';
import DashNav from './DashNav';
import { useTheme } from '../Context/ThemeContext';
import Navbar from '../Components/Navbar'; // Import the main Navbar component

const DashLayout = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="min-h-screen flex flex-col"> {/* Main container is now a flex column */}
            <Navbar /> {/* The main Navbar sits at the very top */}

            {/* This div will contain the sidebar and the main content, and will grow to fill remaining height */}
            <div className="flex flex-grow w-11/12 mx-auto rounded-xl overflow-hidden">
                {/* Left Sidebar */}
                <div className="w-64 flex-shrink-0"> {/* w-64 for fixed width, flex-shrink-0 to prevent shrinking */}
                    <DashNav />
                </div>
                {/* Right Content Area */}
                <div className={`flex-grow p-8 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashLayout; 