import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const AllPlants = () => {
    const loadedPlants = useLoaderData();
    const [sortField, setSortField] = useState('plantName');
    const [sortDirection, setSortDirection] = useState('asc');

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
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-green-800">All Plants</h2>

            <div className="mb-4 flex justify-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-sm bg-green-600 hover:bg-green-700 text-white m-1">
                        Sort by: {sortField} {sortDirection === 'asc' ? '↑' : '↓'}
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleSort('plantName')}>Plant Name</button></li>
                        <li><button onClick={() => handleSort('wateringFrequency')}>Watering Frequency</button></li>
                        <li><button onClick={() => handleSort('careLevel')}>Care Level</button></li>
                    </ul>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full border-collapse">
                    <thead>
                        <tr className="bg-green-100">
                            <th className="p-3 text-left">
                                <button
                                    className="font-bold flex items-center"
                                    onClick={() => handleSort('plantName')}
                                >
                                    Plant Name
                                    {sortField === 'plantName' && (
                                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                                    )}
                                </button>
                            </th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">
                                <button
                                    className="font-bold flex items-center"
                                    onClick={() => handleSort('wateringFrequency')}
                                >
                                    Watering Frequency
                                    {sortField === 'wateringFrequency' && (
                                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                                    )}
                                </button>
                            </th>
                            <th className="p-3 text-left">
                                <button
                                    className="font-bold flex items-center"
                                    onClick={() => handleSort('careLevel')}
                                >
                                    Care Level
                                    {sortField === 'careLevel' && (
                                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                                    )}
                                </button>
                            </th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plants.map(plant => (
                            <tr key={plant._id} className="border-b hover:bg-green-50">
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
                                        plant.careLevel === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
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
        </div>
    );
};

export default AllPlants;