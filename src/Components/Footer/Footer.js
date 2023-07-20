import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer
            className="bg-gray-800 text-gray-300 py-6">
            <div
                className="container mx-auto px-4">
                <div
                    className="flex flex-wrap gap-6">
                    <div
                        className="w-full md:w-1/2 lg:w-1/3">
                        <div className="footer-section">
                            <h2
                                className="text-white font-bold text-lg mb-4">
                                About Us
                            </h2>
                            <p
                                className="text-gray-400">Hi...You will get some best wallpapers here!! Welome
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-1/2 lg:w-1/3">
                        <div
                            className="footer-section">
                            <h2
                                className="text-white font-bold text-lg mb-4">
                                Contact Us
                            </h2>
                            <p
                                className="text-gray-400">
                                Email: akhileshibi@gmail.com
                            </p>
                            <p
                                className="text-gray-400">
                                Phone: 9752464362
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-1/2 lg:w-1/3">
                        <div
                            className="footer-section">
                            <h2
                                className="text-white font-bold text-lg mb-4">
                                Social Media
                            </h2>
                            <div
                                className="flex space-x-4">
                                <a
                                    href="https://www.twitter.com"
                                    className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <FaTwitter size={24} />
                                </a>
                                <a
                                    href="https://www.facebook.com"
                                    className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <FaFacebook size={24} />
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr
                    className="border-gray-700 my-6" />
                <div
                    className="text-center text-gray-400">
                    &copy; {new Date().getFullYear()} InviCia. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

