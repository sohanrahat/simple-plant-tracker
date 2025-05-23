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

                    <div className="overflow-x-auto">
                        <table className="table w-full border-collapse">
                            <thead>
                                <tr className="bg-green-100">
                                    <th className="p-3 text-left">
                                        <button className="font-bold flex items-center" onClick={() => handleSort('plantName')}>
                                            Plant Name
                                            {sortField === 'plantName' && <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>}
                                        </button>
                                    </th>
                                    <th className="p-3 text-left">Category</th>
                                    <th className="p-3 text-left">
                                        <button className="font-bold flex items-center" onClick={() => handleSort('wateringFrequency')}>
                                            Watering Frequency
                                            {sortField === 'wateringFrequency' && <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>}
                                        </button>
                                    </th>
                                    <th className="p-3 text-left">
                                        <button className="font-bold flex items-center" onClick={() => handleSort('careLevel')}>
                                            Care Level
                                            {sortField === 'careLevel' && <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>}
                                        </button>
                                    </th>
                                    <th className="p-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plants.map(plant => (
                                    <tr key={plant._id} className={`border-b ${!isDarkMode && 'hover:bg-green-50'}`}>
                                        <td className="p-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={plant.image} alt={plant.plantName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{plant.plantName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-3 capitalize">{plant.category}</td>
                                        <td className="p-3">{plant.wateringFrequency}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded-full text-xs ${plant.careLevel === 'easy' ? 'bg-green-100 text-green-800' :
                                                plant.careLevel === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                {plant.careLevel}
                                            </span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <Link to={`/plant-details/${plant._id}`} className="btn btn-sm bg-green-600 hover:bg-green-700 text-white">
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
