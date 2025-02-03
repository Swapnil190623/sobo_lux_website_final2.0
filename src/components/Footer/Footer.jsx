// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Adjust the path as necessary

function Footer() {
    return (
        <footer className=" bg-black text-gray-800 dark:text-gray-200">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Logo and Branding */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Company Logo" className="h-10 mr-3" />
                        </Link>
                        <p className="mt-2 text-sm">
                            We provide the best luxury real estate services in South Mumbai.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        {/* Main Links */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase mb-4">Navigation</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/properties" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        Properties
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/privacy-policy" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/legal" className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        Disclaimer
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase mb-4">Follow Us</h3>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                                            <path d="M32 16c0-8.839-7.167-16-16-16S0 7.161 0 16c0 7.991 5.824 14.613 13.438 15.854V21.71h-4.047v-5.71h4.047v-4.198c0-4.007 2.418-6.191 5.976-6.191 1.73 0 3.545.308 3.545.308v3.896h-2.021c-1.966 0-2.582 1.22-2.582 2.48v2.979h4.388l-.702 5.71h-3.724v10.144C26.176 30.613 32 23.991 32 16z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                                            <path d="M16 2.248c3.174 0 3.548.012 4.823.07 1.206.058 1.872.247 2.304.414a4.612 4.612 0 011.668.992 4.612 4.612 0 01.992 1.668c.167.432.356 1.098.414 2.304.058 1.275.07 1.649.07 4.823s-.012 3.548-.07 4.823c-.058 1.206-.247 1.872-.414 2.304a4.612 4.612 0 01-.992 1.668 4.612 4.612 0 01-1.668.992c-.432.167-1.098.356-2.304.414-1.275.058-1.649.07-4.823.07s-3.548-.012-4.823-.07c-1.206-.058-1.872-.247-2.304-.414a4.612 4.612 0 01-1.668-.992 4.612 4.612 0 01-.992-1.668c-.167-.432-.356-1.098-.414-2.304C2.26 19.548 2.248 19.174 2.248 16s.012-3.548.07-4.823c.058-1.206.247-1.872.414-2.304a4.612 4.612 0 01.992-1.668 4.612 4.612 0 011.668-.992c.432-.167 1.098-.356 2.304-.414C12.452 2.26 12.826 2.248 16 2.248zm0-2.248C12.955 0 12.631.013 11.39.072 10.172.131 9.259.34 8.455.698a6.621 6.621 0 00-2.4 1.562A6.621 6.621 0 005.393 4.82c-.358.804-.567 1.717-.626 2.935C4.013 9.369 4 9.693 4 12s.013 2.631.072 3.872c.059 1.218.268 2.131.626 2.935a6.621 6.621 0 001.562 2.4 6.621 6.621 0 002.4 1.562c.804.358 1.717.567 2.935.626 1.241.059 1.565.072 3.872.072s2.631-.013 3.872-.072c1.218-.059 2.131-.268 2.935-.626a6.621 6.621 0 002.4-1.562 6.621 6.621 0 001.562-2.4c.358-.804.567-1.717.626-2.935.059-1.241.072-1.565.072-3.872s-.013-2.631-.072-3.872c-.059-1.218-.268-2.131-.626-2.935a6.621 6.621 0 00-1.562-2.4 6.621 6.621 0 00-2.4-1.562c-.804-.358-1.717-.567-2.935-.626C18.631.013 18.307 0 16 0zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                    <p className="text-base leading-relaxed text-white-700">
                        The information provided on this website is for general informational purposes only.
                        While we strive to ensure the accuracy, reliability, and completeness of the content,
                        we make no guarantees or warranties of any kind, express or implied, about the
                        accuracy, suitability, or availability of the information, properties, or services
                        listed.
                    </p>
                    <p className="text-base leading-relaxed text-white-700 mt-4">
                        All property descriptions, prices, and availability are subject to change without
                        notice. Images, videos, and other media are for illustrative purposes only and may
                        not represent the exact property details. Clients are encouraged to verify all
                        property information through independent due diligence before entering into any
                        agreement.
                    </p>
                    <p className="text-base leading-relaxed text-white-700 mt-4">
                        We are not liable for any direct, indirect, incidental, or consequential damages
                        resulting from the use of or inability to use this website or its contents.
                    </p>
                    <p className="text-base leading-relaxed text-white-700 mt-4">
                        This website may contain links to third-party websites, which are provided solely
                        for your convenience. We do not endorse or take responsibility for the content,
                        policies, or practices of these websites.
                    </p>
                    <p className="text-base leading-relaxed text-white-700 mt-4">
                        By using this website, you agree to our terms and acknowledge that all transactions
                        and agreements will be governed by applicable laws and regulations.
                    </p>
                </section>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-8"></div>

                {/* Footer Bottom */}
                <div className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Brand Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
