import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './styles/style.css';
import Aos from "aos";
import "aos/dist/aos.css";


// Imported svgs from pexels.com
import Hero1 from './img/Hero1.svg';
import Hero2 from './img/Hero2.jpg';

// Imported svgs from undraw.com
import Feature1 from './img/Feature1.svg';
import Feature2 from './img/Feature2.svg';
import Feature3 from './img/Feature3.svg';


const Home = () => {

    // Initalize AOS plugin
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    //Home page content
    return (
        //HOME CONTAINER
        <div>
            <div className="flex flex-col min-h-screen">
                <div data-aos="fade-right">
                    <div class=" container h-full mx-auto flex px-5 py-40 md:flex-row flex-col items-center max-w-12xl ">
                        {/* INTRO SECTION */}
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-center md:text-left mb-16 md:mb-0 items-center ">
                            <h1 class="sm:text-6xl text-4xl mb-4 font-medium text-gray-900">Before they sold out
                                hello
                            </h1>
                            <p class="mb-8 sm:text-xl py-3"><b>Your partners</b> for solutions that work, with payment flexibility and timely delivery.</p>
                            <div class="flex justify-center">
                                <button class="inline-flex text-white text-2xl bg-green-500 border-0 py-4 px-8 focus:outline-none hover:bg-green-600 rounded">Learn More</button>
                            </div>
                        </div>
                        {/* First image on hero page */}
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                            <img className='object-cover object-center h-fit' alt='Hero Image 1' src={Hero1} />
                        </div>
                    </div>
                </div>


                {/* Features Section */}
                <div data-aos="fade-left">
                    <div class="container h-full px-6 py-40 mx-auto md:flex-row flex-col items-center max-w-12xl">
                        <h1 class="text-3xl font-semibold text-center md:text-left text-gray-800 capitalize lg:text-5xl md:text-6xl">What we offer</h1>

                        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 items-baseline  transition ease-linear duration-75">
                            <div class="flex flex-col items-center p-6 space-y-3 text-center">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature1} />
                                </span>

                                <h1 class="text-3xl font-semibold text-gray-700 capitalize py-3">Providing Business Development Technology Solutions</h1>

                                <p class="text-black leading-6 text-md md:text-lg ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit ac arcu vehicula aliquam at in ex. Cras commodo metus velit, sed venenatis purus mattis sit amet.
                                </p>
                            </div>

                            <div class="flex flex-col items-center p-6 space-y-3 text-center">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature2} />
                                </span>

                                <h1 class="text-3xl font-semibold text-gray-700 capitalize ">Project Management</h1>

                                <p class="text-black leading-6 text-md md:text-lg ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>

                            <div class="flex flex-col items-center p-6 space-y-3 text-center">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature3} />
                                </span>

                                <h1 class="text-3xl font-semibold text-gray-700 capitalize ">Systems Integration</h1>

                                <p class="text-black leading-6 text-md md:text-lg ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}

                <div data-aos="fade-right">
                    <div class="container h-full mx-auto flex px-6 py-44 md:flex-row flex-col items-center max-w-12xl">
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img class="object-cover h-96" alt="hero" src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" />
                        </div>
                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 class="text-3xl font-semibold text-center mb-4 md:text-left text-gray-800 capitalize lg:text-5xl md:text-6xl">We are S.A.P.P.I</h1>
                            <p className='mb-8 leading-relaxed text-md md:text-lg' >Sharing in your vision and goal ,  we strive to work with you to arrive at those.  Focused on information technologies and proven technology solutions that fit your financial parameters,  we partner with you for solutions that is apt to your specific situation. </p>
                            {/* <p class="mb-8 leading-relaxed text-sm md:text-xl">Sharing in your vision and goal ,  we strive to work with you to arrive at those.  Focused on information technologies and proven technology solutions that fit your financial parameters,  we partner with you for solutions that is apt to your specific situation. </p> */}

                            <div class="flex justify-center">
                                <a href='/outstory' class="inline-flex text-white text-2xl bg-green-500 border-0 py-4 px-8 focus:outline-none hover:bg-green-600 rounded">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >



    )
}

export default Home