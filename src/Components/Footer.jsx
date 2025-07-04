import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { useTheme } from '../Context/ThemeContext';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { isDarkMode } = useTheme();

    return (
        <footer className="bg-gradient-to-r from-green-800 to-green-600 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">PlantPlanet</h2>
                        <p className="mb-4">Your one-stop destination for all plant care guidelines. Bringing nature into your home since 2020.</p>
                    </div>

                    {/* Contact*/}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
                        <div className="flex items-center mb-2">
                            <MdEmail className="mr-2" />
                            <a href="mailto:info@plantplanet.com" className="hover:text-green-300 transition-colors">info@plantplanet.com</a>
                        </div>
                        <div className="flex items-center mb-2">
                            <MdPhone className="mr-2" />
                            <a href="tel:+1234567890" className="hover:text-green-300 transition-colors">(123) 456-7890</a>
                        </div>
                        <p>123 Green Street, Plant City, PC 12345</p>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Connect With Us</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://facebook.com/plantplanet" aria-label="Facebook" className="hover:text-green-300 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com/plantplanet" aria-label="Twitter" className="hover:text-green-300 transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com/plantplanet" aria-label="Instagram" className="hover:text-green-300 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://pinterest.com/plantplanet" aria-label="Pinterest" className="hover:text-green-300 transition-colors">
                                <FaPinterest size={24} />
                            </a>
                        </div>

                        {/* small Contact Form */}
                        <form className="mt-4">
                            <h4 className="text-lg font-medium mb-2 text-white">Send us a message</h4>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full p-2 mb-2 border rounded bg-white text-gray-800 border-gray-300 placeholder-gray-500"
                                required
                            />
                            <textarea
                                placeholder="Your message"
                                className="w-full p-2 mb-2 border rounded bg-white text-gray-800 border-gray-300 placeholder-gray-500"
                                rows="2"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="text-white py-2 px-4 rounded transition-colors bg-green-700 hover:bg-green-600"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 pt-6 text-center border-t border-white/20">
                    <p>&copy; {currentYear} PlantPlanet. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;