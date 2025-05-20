import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-green-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand and About */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">PlantPlanet</h2>
                        <p className="mb-4">Your one-stop destination for all plant care guidelines. Bringing nature into your home since 2020.</p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <div className="flex items-center mb-2">
                            <MdEmail className="mr-2" />
                            <a href="mailto:info@plantplanet.com">info@plantplanet.com</a>
                        </div>
                        <div className="flex items-center mb-2">
                            <MdPhone className="mr-2" />
                            <a href="tel:+1234567890">(123) 456-7890</a>
                        </div>
                        <p>123 Green Street, Plant City, PC 12345</p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
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

                        {/* Quick Contact Form */}
                        <form className="mt-4">
                            <h4 className="text-lg font-medium mb-2">Send us a message</h4>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full p-2 mb-2 bg-white text-gray-800 border border-gray-300 rounded"
                                required
                            />
                            <textarea
                                placeholder="Your message"
                                className="w-full p-2 mb-2 bg-white text-gray-800 border border-gray-300 rounded"
                                rows="2"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-green-700 mt-6 pt-6 text-center">
                    <p>&copy; {currentYear} PlantPlanet. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;