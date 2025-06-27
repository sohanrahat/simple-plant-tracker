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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {myPlants.map(plant => (
                        <div key={plant._id} className={`relative group border rounded-lg overflow-hidden transition-shadow hover:shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                            <Link to={`/plant-details/${plant._id}`} className="block cursor-pointer">
                                <figure className="h-48">
                                    <img src={plant.image} alt={plant.plantName} className="w-full h-full object-cover" />
                                </figure>
                                <div className="p-4">
                                    <div className="flex justify-between items-start">
                                        <h2 className={`text-lg font-semibold truncate ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{plant.plantName}</h2>
                                        <span className={`capitalize px-2 py-1 rounded-full text-xs font-medium ${plant.careLevel === 'easy'
                                            ? isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                                            : plant.careLevel === 'moderate'
                                                ? isDarkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                                                : isDarkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {plant.careLevel}
                                        </span>
                                    </div>
                                    <p className={`text-sm capitalize mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {plant.category}
                                    </p>
                                </div>
                            </Link>
                            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link
                                    to={`/dashboard/update-plant/${plant._id}`}
                                    className={`btn btn-circle btn-sm ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                                    title="Update Plant"
                                >
                                    <FaEdit />
                                </Link>
                                <button
                                    onClick={() => handleDelete(plant._id)}
                                    className={`btn btn-circle btn-sm ${isDarkMode ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white hover:bg-red-600'}`}
                                    title="Delete Plant"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className={isDarkMode ? 'text-gray-400 mb-4' : 'text-gray-500 mb-4'}>You haven't added any plants yet</p>
                    <Link to="/dashboard/add-plant" className={`btn text-white ${isDarkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'}`}>
                        Add Your First Plant
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyPlants;
