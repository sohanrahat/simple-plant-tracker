import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const AllPlants = () => {
    const plants = useLoaderData();
    // console.log(plants);
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-green-800">All Plants</h2>

            <div className="overflow-x-auto">
                <table className="table w-full border-collapse">
                    <thead>
                        <tr className="bg-green-100">
                            <th className="p-3 text-left">Plant Name</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Watering Frequency</th>
                            <th className="p-3 text-left">Care Level</th>
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