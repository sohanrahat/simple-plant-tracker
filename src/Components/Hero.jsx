import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTheme } from '../Context/ThemeContext';
import indoorPlant from '../assets/indoorPlant.jpg';
import personalized from '../assets/personalized.jpg';
import plantCare from '../assets/plantCare.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="hero-container">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[80vh]"
            >
                {/* Slide 1*/}
                <SwiperSlide>
                    <div className={`hero-slide h-full flex items-center ${isDarkMode
                            ? 'bg-gradient-to-r from-gray-900 to-gray-800'
                            : 'bg-gradient-to-r from-green-800 to-green-600'
                        }`}>
                        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 text-white p-8">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Space with Indoor Plants</h1>
                                <p className="text-lg mb-6">Discover our collection of air-purifying, low-maintenance indoor plants perfect for any home or office.</p>
                                <button className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${isDarkMode
                                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                                        : 'bg-white text-green-800 hover:bg-green-100'
                                    }`}>Shop Indoor Plants</button>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src={indoorPlant}
                                    alt="Indoor Plants Collection"
                                    className="rounded-lg shadow-xl max-h-[60vh] object-cover mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2*/}
                <SwiperSlide>
                    <div className={`hero-slide h-full flex items-center ${isDarkMode
                            ? 'bg-gradient-to-r from-gray-900 to-gray-800'
                            : 'bg-gradient-to-r from-green-800 to-green-600'
                        }`}>
                        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 text-white p-8">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Plant Care Essentials</h1>
                                <p className="text-lg mb-6">Everything you need to keep your plants thriving - from premium soil to specialized tools and organic fertilizers.</p>
                                <button className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${isDarkMode
                                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                                        : 'bg-white text-green-800 hover:bg-green-100'
                                    }`}>Explore Care Products</button>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src={plantCare}
                                    alt="Plant Care Products"
                                    className="rounded-lg shadow-xl max-h-[60vh] object-cover mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3*/}
                <SwiperSlide>
                    <div className={`hero-slide h-full flex items-center ${isDarkMode
                            ? 'bg-gradient-to-r from-gray-900 to-gray-800'
                            : 'bg-gradient-to-r from-green-800 to-green-600'
                        }`}>
                        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 text-white p-8">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Plant Care Advice</h1>
                                <p className="text-lg mb-6">Get personalized guidance from our plant specialists and access our library of care guides for all plant types.</p>
                                <button className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${isDarkMode
                                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                                        : 'bg-white text-green-800 hover:bg-green-100'
                                    }`}>Get Plant Advice</button>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src={personalized}
                                    alt="Plant Expert Advice"
                                    className="rounded-lg shadow-xl max-h-[60vh] object-cover mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;