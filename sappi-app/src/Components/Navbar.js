// Importing React Stuff
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Dropdown from "./Dropdown";


// Import Hamburger menu from react icons
import { HiMenu } from "react-icons/hi";
import { VscChevronDown } from "react-icons/vsc";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        // Navbar Container
        <div>
            <div className="mx-auto max-w-12xl sm:px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-200 py-6 md:justify-start md:space-x10">
                    {/* Brand Logo Container */}
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <NavLink to="/">
                            <img src={require('../Components/img/Logo.png')} alt="Sappi Company Logo" className="object-contain lg:h-10 h-12 mx-4" />
                        </NavLink>
                    </div>
                    {/* Mobile Menu Container */}
                    <div onClick={() => setIsOpen(!isOpen)} className="-my-2 -mr-2 px-4 lg:hidden">
                        <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" aria-expanded="false">
                            <span className="sr-only h-12">Open Menu</span>
                            {/* Hero Icon: HiMenu from React Icons  */}
                            <HiMenu size="2.5em" />
                        </button>
                    </div>
                    <nav className="hidden space-x-10 md:flex">
                        <div className="relative sub-menu">
                            <NavLink to="/ourstory" type="button" class="toggle text-black group flex flex-wrap items-center rounded-md bg-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-expanded="false">
                                <span>ABOUT US ▼</span>
                              
                            </NavLink>

                        </div>
                        <div className="relative">
                            <NavLink to="/projects" class="text-black group flex-nowrap items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" aria-expanded="false">
                                <span>PROJECTS ▼</span>
                              
                            </NavLink>
                        </div>

                        {/* News page link */}
                        <NavLink to="updates" className="text-base font-medium text-black hover:text-green-600">UPDATES</NavLink>
                        {/* Contact Uslink */}
                        {/* <NavLink to="contact" className="text-base font-medium text-black hover:text-green-600">CONTACT US</NavLink> */}
                        <NavLink to="contact" className="text-base font-medium text-black hover:text-green-600">CONTACT US</NavLink>
                    </nav>

                    {/* Sign in and Sign up contianer */}
                    <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <NavLink to class="whitespace-nowrap text-base\text-black">LOGIN</NavLink>
                        <NavLink to="#" >
                            <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700">
                                SIGN UP
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            {
                isOpen ? <Dropdown /> : <div></div>
            }
        </div>

    );
};



export default Navbar;