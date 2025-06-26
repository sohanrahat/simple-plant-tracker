import React from 'react';
import { FaWater, FaSun, FaLeaf, FaHome, FaThermometerHalf, FaSeedling } from 'react-icons/fa';
import { useTheme } from '../Context/ThemeContext';

const Mistakes = () => {
    const { isDarkMode } = useTheme();

    const commonMistakes = [
        {
            id: 1,
            title: "Overwatering",
            icon: <FaWater className={`text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />,
            description: "More houseplants die from overwatering than underwatering. Always check soil moisture before watering and ensure pots have proper drainage.",
            solution: "Wait until the top 1-2 inches of soil feels dry before watering most plants."
        },
        {
            id: 2,
            title: "Improper Light Exposure",
            icon: <FaSun className={`text-2xl ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />,
            description: "Placing shade-loving plants in direct sunlight or sun-loving plants in dark corners will stress your plants.",
            solution: "Research each plant's light requirements and observe how light moves through your home."
        },
        {
            id: 3,
            title: "Ignoring Humidity Needs",
            icon: <FaLeaf className={`text-2xl ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />,
            description: "Many tropical plants need higher humidity than typical home environments provide.",
            solution: "Group plants together, use pebble trays, or consider a humidifier for moisture-loving plants."
        },
        {
            id: 4,
            title: "Poor Pot Selection",
            icon: <FaHome className={`text-2xl ${isDarkMode ? 'text-orange-400' : 'text-brown-500'}`} />,
            description: "Using pots without drainage holes or ones that are too large can lead to root rot and other issues.",
            solution: "Choose pots with drainage holes and only size up 1-2 inches when repotting."
        },
        {
            id: 5,
            title: "Temperature Extremes",
            icon: <FaThermometerHalf className={`text-2xl ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />,
            description: "Placing plants near drafty windows, heating vents, or air conditioners can damage them.",
            solution: "Keep plants away from temperature fluctuations and cold drafts."
        },
        {
            id: 6,
            title: "Fertilizing Incorrectly",
            icon: <FaSeedling className={`text-2xl ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />,
            description: "Over-fertilizing can burn roots, while under-fertilizing may lead to nutrient deficiencies.",
            solution: "Follow a seasonal fertilizing schedule with diluted plant food rather than full strength."
        }
    ];

    return (
        <div className={` px-4 md:px-8 ${isDarkMode
                ? 'bg-gradient-to-b from-gray-900 to-gray-800'
                : 'bg-gradient-to-b from-green-50 to-white'
            }`}>
            <div className="max-w-6xl mx-auto">
                {/* Header*/}
                <div className="text-center mb-12">
                    <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-800'
                        }`}>Top Plant Care Mistakes</h1>
                    <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Even experienced plant parents make these common errors. Learn how to avoid them and help your plants thrive.
                    </p>
                </div>

                {/* Mistakes*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {commonMistakes.map((mistake) => (
                        <div key={mistake.id} className={`rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500 ${isDarkMode ? 'bg-gray-700' : 'bg-white'
                            }`}>
                            <div className="flex items-center mb-4">
                                <div className={`p-3 rounded-full mr-4 ${isDarkMode ? 'bg-gray-600' : 'bg-green-100'
                                    }`}>
                                    {mistake.icon}
                                </div>
                                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-800'
                                    }`}>{mistake.title}</h3>
                            </div>
                            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>{mistake.description}</p>
                            <div className={`p-4 rounded-md ${isDarkMode ? 'bg-gray-600' : 'bg-green-50'
                                }`}>
                                <p className={`font-medium ${isDarkMode ? 'text-green-400' : 'text-green-800'
                                    }`}>Solution: {mistake.solution}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tips*/}
                <div className={`mt-16 rounded-lg p-8 ${isDarkMode ? 'bg-gray-700' : 'bg-green-100'
                    }`}>
                    <h2 className={`text-2xl font-semibold mb-6 text-center ${isDarkMode ? 'text-green-400' : 'text-green-800'
                        }`}>Pro Tips for Plant Success</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className={`p-5 rounded-lg shadow-sm ${isDarkMode ? 'bg-gray-600' : 'bg-white'
                            }`}>
                            <h3 className={`font-medium text-lg mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-800'
                                }`}>Observe Your Plants</h3>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                                Take time each week to really look at your plants. Yellowing leaves, brown tips, or drooping are all signs that something needs to change.
                            </p>
                        </div>
                        <div className={`p-5 rounded-lg shadow-sm ${isDarkMode ? 'bg-gray-600' : 'bg-white'
                            }`}>
                            <h3 className={`font-medium text-lg mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-800'
                                }`}>Start a Plant Journal</h3>
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
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