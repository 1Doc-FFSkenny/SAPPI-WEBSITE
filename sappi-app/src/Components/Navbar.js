// Importing React Stuff
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

// Import Hamburger menu from react icons
import { HiMenu } from "react-icons/hi";
import Contact from "./Contact";


const Navbar = () => {

    return (
        // Navbar Container
        <div className="relative bg-white">
            <div className="mx-auto max-w-12xl sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-200 py-6 md:justify-start md:space-x10">
                    {/* Brand Logo Container */}
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <NavLink to="/">
                            <img src={require('../Components/img/Logo.png')} alt="Sappi Company Logo" className="object-contain lg:h-10 h-12 mx-4" />
                        </NavLink>
                    </div>
                    {/* Mobile Menu Container */}
                    <div className="-my-2 -mr-2 px-4 lg:hidden">
                        <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" aria-expanded="false">
                            <span className="sr-only h-12">Open Menu</span>
                            {/* Hero Icon: HiMenu from React Icons  */}
                            <HiMenu size="2.5em" />
                        </button>
                    </div>
                    <nav className="hidden space-x-10 md:flex">
                        <div className="relative sub-menu">
                            <a href="/ourstory" type="button" class="toggle text-black group inline-flex items-center rounded-md bg-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-expanded="false">
                                <span>ABOUT US</span>
                                {/* Heroicon name: mini/chevron-down

                                Item active: "text-gray-600", Item inactive: "text-gray-400" */}

                                <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        <div className="relative">
                            <a href="/projects"  class="text-black group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-expanded="false">
                                <span>PROJECTS</span>
                                <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        {/* News page link */}
                        <NavLink to="/" className="text-base font-medium text-black hover:text-green-600">UPDATES</NavLink>
                        {/* Contact Uslink */}
                        {/* <NavLink to="contact" className="text-base font-medium text-black hover:text-green-600">CONTACT US</NavLink> */}
                        <a href="contact" className="text-base font-medium text-black hover:text-green-600">CONTACT US</a>
                    </nav>

                    {/* Sign in and Sign up contianer */}
                    <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a href="#" class="whitespace-nowrap text-base font-medium text-black hover:text-green-700">SIGN IN</a>
                        <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700">SIGN UP</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;