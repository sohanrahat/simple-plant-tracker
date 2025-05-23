import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { useTheme } from '../Context/ThemeContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import Swal from 'sweetalert2';

const MyPlants = () => {
    const allPlants = useLoaderData();
    const { user } = useContext(AuthContext);
    const { isDarkMode } = useTheme();
    const [loading, setLoading] = useState(true);

    // Filter plants to show only those added by current user
    const filteredPlants = allPlants.filter(plant => plant.userEmail === user.email);
    const [myPlants, setMyPlants] = useState(filteredPlants);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ten-mango-server.vercel.app/plants/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const updatedPlants = myPlants.filter(plant => plant._id !== _id);
                            setMyPlants(updatedPlants);
                            Swal.fire(
                                'Deleted!',
                                'Your plant has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };

    return (
        <div className={`container mx-auto p-4 ${isDarkMode ? 'bg-gray-900' : ''}`}>
            <h2 className={`text-3xl font-bold text-center mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>
                My Plants
            </h2>

            {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <ImSpinner9 className={`animate-spin text-4xl ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
            ) : myPlants.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myPlants.map(plant => (
                        <div key={plant._id} className={`card shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-base-100'}`}>
                            <figure className="h-48 overflow-hidden">
                                <img src={plant.image} alt={plant.plantName} className="w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className={`card-title ${isDarkMode ? 'text-white' : ''}`}>{plant.plantName}</h2>
                                <p className={`capitalize ${isDarkMode ? 'text-gray-300' : ''}`}>
                                    <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : ''}`}>Category:</span> {plant.category}
                                </p>
                                <p className={isDarkMode ? 'text-gray-300' : ''}>
                                    <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : ''}`}>Watering:</span> {plant.wateringFrequency}
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : ''}`}>Care Level:</span>
                                    <span className={`px-2 py-1 rounded-full text-xs ${plant.careLevel === 'easy'
                                        ? isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                                        : plant.careLevel === 'moderate'
                                            ? isDarkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                                            : isDarkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'
                                        }`}>
                                        {plant.careLevel}
                                    </span>
                                </p>
                                <div className="card-actions justify-end mt-4">
                                    <Link
                                        to={`/update-plant/${plant._id}`}
                                        className={`btn btn-sm text-white ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                                    >
                                        <FaEdit className="mr-1" /> Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(plant._id)}
                                        className={`btn btn-sm text-white ${isDarkMode ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'}`}
                                    >
                                        <FaTrashAlt className="mr-1" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className={isDarkMode ? 'text-gray-400 mb-4' : 'text-gray-500 mb-4'}>You haven't added any plants yet</p>
                    <Link to="/add-plant" className={`btn text-white ${isDarkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'}`}>
                        Add Your First Plant
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyPlants;
