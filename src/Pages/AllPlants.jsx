import React, { useState, useEffect, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import { useTheme } from '../Context/ThemeContext';
import { ImSpinner9 } from 'react-icons/im';

const AllPlants = () => {
    const loadedPlants = useLoaderData();
    const { isDarkMode } = useTheme();

    const [loading, setLoading] = useState(true);
    const [sortField, setSortField] = useState('plantName');
    const [sortDirection, setSortDirection] = useState('asc');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate loading for 1 second
        return () => clearTimeout(timer);
    }, []);

    const plants = useMemo(() => {
        return [...loadedPlants].sort((a, b) => {
            if (sortField === 'careLevel') {
                const careLevelOrder = { 'easy': 1, 'moderate': 2, 'difficult': 3 };
                const valueA = careLevelOrder[a.careLevel] || 0;
                const valueB = careLevelOrder[b.careLevel] || 0;
                return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
            }
            else if (sortField === 'wateringFrequency') {
                const getWateringDays = (freq) => {
                    const match = freq.match(/(\d+)/);
                    return match ? parseInt(match[0]) : 0;
                };
                const valueA = getWateringDays(a.wateringFrequency);
                const valueB = getWateringDays(b.wateringFrequency);
                return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
            }
            else {
                const valueA = a[sortField]?.toLowerCase() || '';
                const valueB = b[sortField]?.toLowerCase() || '';
                return sortDirection === 'asc'
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            }
        });
    }, [loadedPlants, sortField, sortDirection]);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    return (
        <div className={`container mx-auto p-4 ${isDarkMode ? 'bg-gray-900' : ''}`}>
            <h2 className={`text-3xl font-bold text-center mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>All Plants</h2>

            {loading ? (
                <div className="flex justify-center items-center min-h-[300px]">
                    <ImSpinner9 className={`animate-spin text-5xl ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
            ) : (
                <>
                    <div className="mb-4 flex justify-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-sm bg-green-600 hover:bg-green-700 text-white m-1">
                                Sort by: {sortField} {sortDirection === 'asc' ? '↑' : '↓'}
                            </label>
                            <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow rounded-box w-52 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-base-100'}`}>
                                <li><button onClick={() => { handleSort('plantName'); document.activeElement.blur(); }} className={isDarkMode ? 'hover:bg-gray-700' : ''}>Plant Name</button></li>
                                <li><button onClick={() => { handleSort('wateringFrequency'); document.activeElement.blur(); }} className={isDarkMode ? 'hover:bg-gray-700' : ''}>Watering Frequency</button></li>
                                <li><button onClick={() => { handleSort('careLevel'); document.activeElement.blur(); }} className={isDarkMode ? 'hover:bg-gray-700' : ''}>Care Level</button></li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plants.map(plant => (
                            <div
                                key={plant._id}
                                className={`rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={plant.image || 'https://placehold.co/600x400?text=Plant+Image'}
                                        alt={plant.plantName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                        {plant.plantName}
                                    </h3>
                                    <p className={`text-sm capitalize mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        <span className="font-medium">Category:</span> {plant.category}
                                    </p>
                                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        <span className="font-medium">Watering:</span> {plant.wateringFrequency}
                                    </p>
                                    <div className="mt-auto flex justify-between items-center pt-2">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs capitalize ${plant.careLevel === 'easy'
                                                ? isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                                                : plant.careLevel === 'moderate'
                                                    ? isDarkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                                                    : isDarkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'
                                                }`}
                                        >
                                            {plant.careLevel} Care
                                        </span>
                                        <Link
                                            to={`/plant-details/${plant._id}`}
                                            className={`btn btn-sm text-white ${isDarkMode
                                                ? 'bg-green-700 hover:bg-green-600'
                                                : 'bg-green-600 hover:bg-green-700'
                                                }`}
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {plants.length === 0 && (
                        <div className="text-center py-10">
                            <p className="text-gray-500">No plants found</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AllPlants;
