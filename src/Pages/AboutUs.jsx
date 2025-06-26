import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import Sarah from '../assets/Sarah.jpg';
import Alex from '../assets/Alex.jpg';
import Maya from '../assets/Maya.jpg';

const AboutUs = () => {
    const { isDarkMode } = useTheme();

    const features = [
        {
            icon: "🌱",
            title: "Plant Tracking",
            description: "Monitor your plants' growth, watering schedules, and health status with our intuitive tracking system."
        },
        {
            icon: "📊",
            title: "Growth Analytics",
            description: "Visualize your plants' progress with detailed charts and insights to optimize their care."
        },
        {
            icon: "🏆",
            title: "Community Sharing",
            description: "Connect with fellow plant enthusiasts, share your green achievements, and learn from others."
        },
        {
            icon: "🔔",
            title: "Smart Reminders",
            description: "Never forget to water or fertilize your plants with our intelligent notification system."
        }
    ];

    const team = [
        {
            name: "Sarah Chen",
            role: "Founder & Plant Biologist",
            description: "PhD in Plant Sciences with 10+ years of research experience. Passionate about making plant care accessible to everyone.",
            avatar: <img src={Sarah} alt="Sarah Chen" className="w-24 h-24 rounded-full mx-auto block object-cover" />
        },
        {
            name: "Alex Rivera",
            role: "Lead Developer",
            description: "Full-stack developer with a green thumb. Combines technology with nature to create seamless user experiences.",
            avatar: <img src={Alex} alt="Alex Rivera" className="w-24 h-24 rounded-full mx-auto block object-cover" />
        },
        {
            name: "Maya Patel",
            role: "UX Designer",
            description: "Designs intuitive interfaces that make plant care feel natural and enjoyable for users of all skill levels.",
            avatar: <img src={Maya} alt="Maya Patel" className="w-24 h-24 rounded-full mx-auto block object-cover" />
        }
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200 mb-10' : 'bg-white text-gray-800'}`}>
            {/* Hero Section */}
            <div className={`hero min-h-96 ${isDarkMode ? 'bg-gray-800' : 'bg-green-50'}`}>
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>
                            Growing Together, One Plant at a Time
                        </h1>
                        <p className={`text-xl mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Plant Planet is more than just a tracking app – it's a community of plant lovers
                            dedicated to nurturing green life and creating sustainable, beautiful spaces.
                        </p>
                        <div className="flex justify-center items-center gap-4 text-6xl">
                            <span>🌿</span>
                            <span>🌱</span>
                            <span>🌳</span>
                            <span>🌸</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Our Mission</h2>
                        <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            We believe that everyone deserves to experience the joy of nurturing plants.
                            Our mission is to make plant care accessible, enjoyable, and successful for
                            gardeners of all experience levels.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-green-50'} p-6 rounded-lg`}>
                                <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>🌍 Environmental Impact</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Every plant matters. By helping people successfully grow and care for plants,
                                    we contribute to cleaner air, biodiversity, and a healthier planet.
                                </p>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-green-50'} p-6 rounded-lg`}>
                                <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>🤝 Community Building</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    We foster connections between plant enthusiasts, creating a supportive
                                    community where knowledge, experiences, and green wisdom are shared freely.
                                </p>
                            </div>
                        </div>
                        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-green-100'} p-8 rounded-2xl`}>
                            <div className="text-center">
                                <div className="text-8xl mb-6">🌱</div>
                                <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>50,000+</h3>
                                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Plants tracked and thriving</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-green-50'} py-20 px-4`}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>What Makes Us Special</h2>
                        <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Discover the features that make Plant Planet the perfect companion for your green journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Meet Our Green Team</h2>
                        <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Passionate individuals who bring together expertise in plants, technology, and design.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-green-50'} p-8 rounded-lg text-center`}>
                                <div className="text-6xl mb-4">{member.avatar}</div>
                                <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{member.name}</h3>
                                <p className={`font-medium mb-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>{member.role}</p>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-green-50'} py-20 px-4`}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="text-5xl">🌿</div>
                            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Sustainability</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Promoting eco-friendly practices and environmental consciousness in everything we do.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl">📚</div>
                            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Education</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Sharing knowledge and empowering users with the information they need to succeed.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-5xl">❤️</div>
                            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Passion</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Our genuine love for plants and people drives everything we create and improve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>Ready to Start Your Plant Journey?</h2>
                    <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Join thousands of plant enthusiasts who are already growing with Plant Planet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className={`py-3 px-8 rounded-lg font-semibold transition-colors duration-300 ${isDarkMode
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                            }`}>
                            Add Your First Plant
                        </button>
                        <button className={`py-3 px-8 rounded-lg font-semibold transition-colors duration-300 bg-transparent border ${isDarkMode
                            ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
                            : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                            }`}>
                            Explore Plant Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;