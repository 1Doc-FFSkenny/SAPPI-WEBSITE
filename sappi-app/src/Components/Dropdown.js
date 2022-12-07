import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

//Headless UI Imports
import { Menu } from '@headlessui/react'

// Import from react icons
import { HiMenu } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <nav>
                {/* MENU CONTAINER */}
                <Menu>
                    {/* OUR STORY, CORE VALUES, EXECUTIVES */}
                    <Menu.Button className="inline-flex w-full text-xl px-2 py-2 text-black text-center items-center mx-auto font-medium border"><p className="text-center">About Us</p><BiChevronDown /></Menu.Button>
                    <Menu.Items>
                        <div className="text-left px-4 border-0 border-black ">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className="mx-4 py-4 text-lg font-semibold " href="/ourstory">Our Story</a>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="text-left px-4 border-0 border-black ">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className="mx-4 py-4  text-lg  font-semibold " href="/corevalues">Core Values</a>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="text-left px-4 border-0 border-black ">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className="mx-4 py-4  text-lg  font-semibold" href="/executives">Our Executives</a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>

                </Menu>

                <Menu>
                    <Menu.Button className="inline-flex w-full text-xl px-2 py-2 text-black text-center items-center mx-auto border font-medium"><p className="text-center">Projects</p><BiChevronDown /></Menu.Button>
                    <Menu.Items>
                        <div className="text-left px-4 border-0 border-black ">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className="mx-4 py-4  text-center text-lg font-semibold " href="/projects">Overview</a>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="text-left px-4 border-0 border-black ">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className="mx-4 py-4  text-center text-lg font-semibold " href="/GRMC">Guam Regional Medical Center (GRMC)</a>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="text-left px-4 border-0 border-black font-semibold">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className="mx-4 py-4  text-center text-lg font-semibold " href="/ELVS">Electric Low Voltage System (ELVS)</a>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="text-left px-4 border-0 border-black font-semibold">
                            <Menu.Item>
                                {({ active }) => (
                                    <a className="mx-4 py-4  text-center text-lg  " href="/EHR">Electronic Health Record (EHR)</a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>

                </Menu>               

                <div className="flex flex-col text-left text-xl text-black font-medium border">
                    <NavLink to="updates" className="text-lg text-black px-2 py-2">Updates</NavLink>
                </div>

                <div className="flex flex-col text-left text-xl text-black font-medium border">
                    <NavLink to="contact" className="text-lg text-black px-2 py-2">Contact Us</NavLink>
                </div>

                {/* LOGIN, SIGN UP */}
                <div className='flex flex-row items-center justify-center mx-auto py-4 bg-black'  >
                    <a href='#' class="whitespace-nowrap text-base font-medium text-white">SIGN IN</a>
                    <a href='#' class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-black shadow-sm ">SIGN UP</a>
                </div>
            </nav>
        </div>
    )
}

export default Dropdown