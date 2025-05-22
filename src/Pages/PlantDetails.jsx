import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        console.log("Fetching plant with ID:", id);
        fetch(`http://localhost:3000/plants/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log("Plant data received:", data);
                setPlant(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching plant:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [id]);
    
    if (loading) {
        return <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-emerald-600"></span>
        </div>;
    }
    
    if (error) {
        return <div className="text-center py-10">
            <h2 className="text-2xl text-red-500">Error: {error}</h2>
        </div>;
    }
    
    if (!plant) {
        return <div className="text-center py-10">
            <h2 className="text-2xl text-red-500">Plant not found</h2>
        </div>;
    }

    return (
        <div className="container mx-auto p-4 max-w-5xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Hero section with image */}
                <div className="relative h-64 md:h-80">
                    <img 
                        src={plant.image || "https://placehold.co/600x400?text=Plant+Image"} 
                        alt={plant.plantName} 
                        className="w-full h-full object-cover"
                        onError={(e) => {e.target.src = "https://placehold.co/600x400?text=Plant+Image"}}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h1 className="text-3xl font-bold text-white">{plant.plantName?.trim()}</h1>
                        <div className="flex items-center mt-2">
                            <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full capitalize">
                                {plant.category}
                            </span>
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                plant.careLevel === 'easy' ? 'bg-green-100 text-green-800' : 
                                plant.careLevel === 'moderate' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-red-100 text-red-800'
                            }`}>
                                {plant.careLevel} care
                            </span>
                        </div>
                    </div>
                </div>

                {/* Details section */}
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-emerald-800">About this Plant</h2>
                            <p className="text-gray-700">{plant.description?.trim()}</p>
                            
                            <h3 className="text-lg font-semibold mt-6 mb-2 text-emerald-800">Care Information</h3>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <span className="w-40 font-medium text-gray-600">Watering:</span>
                                    <span>{plant.wateringFrequency?.trim()}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-40 font-medium text-gray-600">Last Watered:</span>
                                    <span>{plant.lastWateredDate}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-40 font-medium text-gray-600">Next Watering:</span>
                                    <span>{plant.nextWateringDate}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-40 font-medium text-gray-600">Health Status:</span>
                                    <span>{plant.healthStatus}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4 text-emerald-800">Plant Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <span className="w-32 font-medium text-gray-600">Added by:</span>
                                    <span>{plant.userName}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-32 font-medium text-gray-600">Contact:</span>
                                    <span>{plant.userEmail}</span>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end">
                                <button 
                                    onClick={() => window.history.back()} 
                                    className="btn btn-outline btn-sm mr-2"
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;