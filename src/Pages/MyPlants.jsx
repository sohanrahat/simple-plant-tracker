import React, { useContext, useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';


const MyPlants = () => {
    const allPlants = useLoaderData();
    const { user } = useContext(AuthContext);

    // Filter plants to show only those added by the current user
    const filteredPlants = allPlants.filter(plant => plant.userEmail === user.email);
    const [myPlants, setMyPlants] = useState(filteredPlants);

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
                fetch(`http://localhost:3000/plants/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // Update the state to reflect the deletion
                            const updatedPlants = myPlants.filter(plant => plant._id !== _id);
                            setMyPlants(updatedPlants);
                            
                            // Show success message
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
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-green-800">My Plants</h2>

            {myPlants.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myPlants.map(plant => (
                        <div key={plant._id} className="card bg-base-100 shadow-xl">
                            <figure className="h-48 overflow-hidden">
                                <img src={plant.image} alt={plant.plantName} className="w-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{plant.plantName}</h2>
                                <p className="capitalize"><span className="font-semibold">Category:</span> {plant.category}</p>
                                <p><span className="font-semibold">Watering:</span> {plant.wateringFrequency}</p>
                                <p className="flex items-center gap-2">
                                    <span className="font-semibold">Care Level:</span>
                                    <span className={`px-2 py-1 rounded-full text-xs ${plant.careLevel === 'easy' ? 'bg-green-100 text-green-800' :
                                        plant.careLevel === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {plant.careLevel}
                                    </span>
                                </p>
                                <div className="card-actions justify-end mt-4">
                                    <Link
                                        to={`/update-plant/${plant._id}`}
                                        className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        <FaEdit className="mr-1" /> Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(plant._id)}
                                        className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
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
                    <p className="text-gray-500 mb-4">You haven't added any plants yet</p>
                    <Link to="/add-plant" className="btn bg-green-600 hover:bg-green-700 text-white">
                        Add Your First Plant
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyPlants;