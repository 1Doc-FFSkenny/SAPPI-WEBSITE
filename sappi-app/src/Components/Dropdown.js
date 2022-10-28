import React from 'react'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Dropdown = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <nav>
                <div className=' items-center justify-center mx-auto py-4 bg-black'  >
                    <li className='list-none text-center'><a href="ourstory" className="text-2xl font-medium py-4 text-white">About Us</a></li>
                    <li className='list-none text-center'><a href="projects" className="text-2xl font-medium py-4 text-white">Projects</a></li>
                    <li className='list-none text-center'><a href="updates" className="text-2xl font-medium py-4 text-white">News</a></li>
                    <li className='list-none text-center'><a href="contact" className="text-2xl font-medium py-4 text-white">Contact</a></li>
                </div>

                <hr />

                <div className='flex flex-row items-center justify-center mx-auto py-4 bg-black'  >
                    <a href='#' class="whitespace-nowrap text-base font-medium text-white">SIGN IN</a>
                    <a href='#' class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-black shadow-sm ">SIGN UP</a>
                </div>
            </nav>
        </div>
    )
}

export default Dropdown