import React from 'react';
import { Outlet } from 'react-router';
import DashNav from './DashNav';
import { useTheme } from '../Context/ThemeContext';

const DashLayout = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="min-h-screen flex">
            {/* Left Sidebar */}
            <div className="w-64 flex-shrink-0"> {/* w-64 for fixed width, flex-shrink-0 to prevent shrinking */}
                <DashNav />
            </div>

            {/* Right Content Area */}
            <div className={`flex-grow p-8 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashLayout; 