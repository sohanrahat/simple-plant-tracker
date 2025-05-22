import React from 'react';
import { Link } from 'react-router';

const NewPlants = ({ plants = [] }) => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-green-800">New Plants</h2>
                
                {plants.length === 0 ? (
                    <p className="text-center text-gray-500">No plants available at the moment</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plants.map(plant => (
                            <div key={plant._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={plant.image || "https://placehold.co/600x400?text=Plant+Image"} 
                                        alt={plant.plantName} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {e.target.src = "https://placehold.co/600x400?text=Plant+Image"}}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{plant.plantName?.trim()}</h3>
                                    <p className="text-gray-600 mb-2 line-clamp-2">{plant.description?.trim()}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                            plant.careLevel === 'easy' ? 'bg-green-100 text-green-800' : 
                                            plant.careLevel === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {plant.careLevel} care
                                        </span>
                                        <Link 
                                            to={`/plant-details/${plant._id}`} 
                                            className="btn btn-sm bg-green-600 hover:bg-green-700 text-white"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewPlants;