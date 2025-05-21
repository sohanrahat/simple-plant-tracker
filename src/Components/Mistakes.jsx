import React from 'react';
import { FaWater, FaSun, FaLeaf, FaHome, FaThermometerHalf, FaSeedling } from 'react-icons/fa';

const Mistakes = () => {
    const commonMistakes = [
        {
            id: 1,
            title: "Overwatering",
            icon: <FaWater className="text-blue-500 text-2xl" />,
            description: "More houseplants die from overwatering than underwatering. Always check soil moisture before watering and ensure pots have proper drainage.",
            solution: "Wait until the top 1-2 inches of soil feels dry before watering most plants."
        },
        {
            id: 2,
            title: "Improper Light Exposure",
            icon: <FaSun className="text-yellow-500 text-2xl" />,
            description: "Placing shade-loving plants in direct sunlight or sun-loving plants in dark corners will stress your plants.",
            solution: "Research each plant's light requirements and observe how light moves through your home."
        },
        {
            id: 3,
            title: "Ignoring Humidity Needs",
            icon: <FaLeaf className="text-green-500 text-2xl" />,
            description: "Many tropical plants need higher humidity than typical home environments provide.",
            solution: "Group plants together, use pebble trays, or consider a humidifier for moisture-loving plants."
        },
        {
            id: 4,
            title: "Poor Pot Selection",
            icon: <FaHome className="text-brown-500 text-2xl" />,
            description: "Using pots without drainage holes or ones that are too large can lead to root rot and other issues.",
            solution: "Choose pots with drainage holes and only size up 1-2 inches when repotting."
        },
        {
            id: 5,
            title: "Temperature Extremes",
            icon: <FaThermometerHalf className="text-red-500 text-2xl" />,
            description: "Placing plants near drafty windows, heating vents, or air conditioners can damage them.",
            solution: "Keep plants away from temperature fluctuations and cold drafts."
        },
        {
            id: 6,
            title: "Fertilizing Incorrectly",
            icon: <FaSeedling className="text-green-600 text-2xl" />,
            description: "Over-fertilizing can burn roots, while under-fertilizing may lead to nutrient deficiencies.",
            solution: "Follow a seasonal fertilizing schedule with diluted plant food rather than full strength."
        }
    ];

    return (
        <div className="py-12 px-4 md:px-8 bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Top Plant Care Mistakes</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Even experienced plant parents make these common errors. Learn how to avoid them and help your plants thrive.
                    </p>
                </div>

                {/* Mistakes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {commonMistakes.map((mistake) => (
                        <div key={mistake.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    {mistake.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-green-800">{mistake.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{mistake.description}</p>
                            <div className="bg-green-50 p-4 rounded-md">
                                <p className="text-green-800 font-medium">Solution: {mistake.solution}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tips Section */}
                <div className="mt-16 bg-green-100 rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">Pro Tips for Plant Success</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg text-green-800 mb-2">Observe Your Plants</h3>
                            <p className="text-gray-600">
                                Take time each week to really look at your plants. Yellowing leaves, brown tips, or drooping are all signs that something needs to change.
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg text-green-800 mb-2">Start a Plant Journal</h3>
                            <p className="text-gray-600">
                                Track watering, fertilizing, and seasonal changes to better understand your plants' needs and cycles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mistakes;