// Importing React Stuff
import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import Dropdown from "./Dropdown";

//Import Dropdown CSS
import './styles/style.css'

//Headless UI Imports
import { Menu } from '@headlessui/react'

// Import from react icons
import { HiMenu } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";

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
                        {/* OUR STORY, CORE VALUES, OUR EXECUTIVES */}
                        <div className="relative sub-menu">
                            <Menu>
                                <Menu.Button className="inline-flex text-lg">ABOUT US<BiChevronDown /></Menu.Button>
                                <Menu.Items className="absolute right-0 mt-2 w-56 py-6 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                                    <div className="px-2 py-2 grid grid-cols-1 align-center mx-auto gap-2">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/ourstory">Our Story</a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                                <Menu.Items className="absolute right-0 mt-2 w-56 py-6 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                                    <div className="px-2 py-2 grid grid-cols-1 gap-2">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/ourstory">Our Story</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/corevalues">Core Values</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/executives">Our Executives</a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Menu>

                        </div>

                        {/* Projects Dropdown */}
                        <div className="relative sub-menu">
                            <Menu>
                                <Menu.Button className="inline-flex text-lg ">PROJECTS <BiChevronDown /></Menu.Button>
                                <Menu.Items className="absolute right-0 mt-2 w-80 py-6 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                                    {/* OVERVIEW, GRMC, ELVS, EHR, NURSE CALL SYSTEM */}
                                    <div className="px-2 py-2 grid grid-cols-1 gap-2">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/projects">Overview</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/GRMC">Guam Regional Medical Center (GRMC)</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/ELVS">Electric Low Voltage System (ELVS)</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/EHR">Electronic Health Record (EHR)</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a className="mx-4 text-md " href="/nurse">Nurse Call System</a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Menu>
                        </div>

                        {/* News page link */}
                        <NavLink to="updates" className="text-lg text-black  hover:text-green-600">UPDATES</NavLink>
                        {/* Contact Uslink */}
                        {/* <NavLink to="contact" className="text-lg font-medium text-black hover:text-green-600">CONTACT US</NavLink> */}
                        <NavLink to="contact" className="text-lg text-black  hover:text-green-600">CONTACT US</NavLink>
                    </nav>

                    {/* Sign in and Sign up contianer */}
                    <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <NavLink to class="whitespace-nowrap text-lg  text-black">LOGIN</NavLink>
                        <NavLink to="#" >
                            <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 py-2 text-lg text-white shadow-sm hover:bg-green-700">
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