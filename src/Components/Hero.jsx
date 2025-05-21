import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
                                    src="https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
                                <button className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-100 transition duration-300">Explore Care Products</button>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1673853233647-17ebc2d71b5f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">Get Plant Advice</button>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1558693168-c370615b54e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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