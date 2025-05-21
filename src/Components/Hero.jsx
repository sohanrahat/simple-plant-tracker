import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import indoorPlant from '../assets/indoorPlant.jpg';
import personalized from '../assets/personalized.jpg';
import plantCare from '../assets/plantCare.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
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
                {/* Slide 1: Indoor Plants */}
                <SwiperSlide>
                    <div className="hero-slide bg-gradient-to-r from-green-800 to-green-600 h-full flex items-center">
                        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 text-white p-8">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Space with Indoor Plants</h1>
                                <p className="text-lg mb-6">Discover our collection of air-purifying, low-maintenance indoor plants perfect for any home or office.</p>
                                <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300">Shop Indoor Plants</button>
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

                {/* Slide 2: Plant Care Essentials */}
                <SwiperSlide>
                    <div className="hero-slide bg-gradient-to-r from-green-800 to-green-600 h-full flex items-center">
                        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/2 text-white p-8">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Plant Care Essentials</h1>
                                <p className="text-lg mb-6">Everything you need to keep your plants thriving - from premium soil to specialized tools and organic fertilizers.</p>
                                <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300">Explore Care Products</button>
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

                {/* Slide 3: Expert Advice */}
                <SwiperSlide>
                    <div className="hero-slide bg-gradient-to-r from-green-800 to-green-600 h-full flex items-center">
                        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 text-white p-8">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Plant Care Advice</h1>
                                <p className="text-lg mb-6">Get personalized guidance from our plant specialists and access our library of care guides for all plant types.</p>
                                <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300">Get Plant Advice</button>
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