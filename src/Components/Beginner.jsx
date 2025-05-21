import React from 'react';
import { FaWater, FaSun, FaSeedling } from 'react-icons/fa';
import snake from "../assets/snake.avif";
import pothos from "../assets/pothos.avif";
import zz from "../assets/zz.avif";
import spider from "../assets/spider.avif";



const Beginner = () => {
    const beginnerPlants = [
        {
            id: 1,
            name: "Snake Plant",
            image: snake,
            description: "Nearly indestructible, can survive with minimal water and low light.",
            waterNeeds: "Low",
            lightNeeds: "Low to Medium",
            difficulty: "Very Easy"
        },
        {
            id: 2,
            name: "Pothos",
            image: pothos,
            description: "Fast-growing vine that thrives in various conditions.",
            waterNeeds: "Medium",
            lightNeeds: "Low to Bright Indirect",
            difficulty: "Easy"
        },
        {
            id: 3,
            name: "ZZ Plant",
            image: zz,
            description: "Drought-tolerant with glossy leaves, perfect for forgetful waterers.",
            waterNeeds: "Low",
            lightNeeds: "Low to Medium",
            difficulty: "Very Easy"
        },
        {
            id: 4,
            name: "Spider Plant",
            image: spider,
            description: "Produces baby plants on long stems, air-purifying and resilient.",
            waterNeeds: "Medium",
            lightNeeds: "Bright Indirect",
            difficulty: "Easy"
        }
    ];

    return (
        <div className="py-10 px-4 md:px-8 bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Beginner-Friendly Plants</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Start your plant parent journey with these low-maintenance companions that are perfect for beginners.
                    </p>
                </div>

                {/* Quick Tips Section */}
                <div className="bg-green-100 rounded-lg p-6 mb-12">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4">New to Plant Care? Start Here!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start">
                            <div className="bg-green-200 p-3 rounded-full mr-4">
                                <FaWater className="text-green-700 text-xl" />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg text-green-800">Water Wisely</h3>
                                <p className="text-gray-600">Most beginners overwater. Check soil moisture before watering.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-200 p-3 rounded-full mr-4">
                                <FaSun className="text-green-700 text-xl" />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg text-green-800">Light Matters</h3>
                                <p className="text-gray-600">Understand your home's light conditions before choosing plants.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-200 p-3 rounded-full mr-4">
                                <FaSeedling className="text-green-700 text-xl" />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg text-green-800">Start Small</h3>
                                <p className="text-gray-600">Begin with 1-2 plants and expand as you gain confidence.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plant Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {beginnerPlants.map((plant) => (
                        <div key={plant.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={plant.image}
                                    alt={plant.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-green-800 mb-2">{plant.name}</h3>
                                <p className="text-gray-600 mb-4">{plant.description}</p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Water Needs:</span>
                                        <span className="font-medium text-gray-700">{plant.waterNeeds}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Light Needs:</span>
                                        <span className="font-medium text-gray-700">{plant.lightNeeds}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Difficulty:</span>
                                        <span className="font-medium text-green-600">{plant.difficulty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-gray-600 mb-4">Ready to start your plant journey?</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
                        Explore More Plants
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Beginner;