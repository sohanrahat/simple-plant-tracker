import React from 'react';
import { Link } from 'react-router';
import { useTheme } from '../Context/ThemeContext';

const NewPlants = ({ plants = [] }) => {
    const { isDarkMode } = useTheme();

    return (
        <section className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>New Plants</h2>
                
                {plants.length === 0 ? (
                    <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>No plants available at the moment</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plants.map(plant => (
                            <div key={plant._id} className={`rounded-lg shadow-md overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={plant.image || "https://placehold.co/600x400?text=Plant+Image"} 
                                        alt={plant.plantName} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {e.target.src = "https://placehold.co/600x400?text=Plant+Image"}}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : ''}`}>{plant.plantName?.trim()}</h3>
                                    <p className={`mb-2 line-clamp-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{plant.description?.trim()}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className={`px-2 py-1 rounded-full text-xs ${ 
                                            plant.careLevel === 'easy' ? 
                                                (isDarkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800') : 
                                            plant.careLevel === 'moderate' ? 
                                                (isDarkMode ? 'bg-yellow-800 text-yellow-100' : 'bg-yellow-100 text-yellow-800') : 
                                                (isDarkMode ? 'bg-red-800 text-red-100' : 'bg-red-100 text-red-800')
                                        }`}>
                                            {plant.careLevel} care
                                        </span>
                                        <Link 
                                            to={`/plant-details/${plant._id}`} 
                                            className={`btn btn-sm text-white ${isDarkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700'}`}
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