import React from 'react';
import { useEffect } from 'react';
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
                    <div class=" container h-full mx-auto flex px-4 md:px-8 py-44 md:flex-row flex-col items-center max-w-12xl ">
                        {/* INTRO SECTION */}
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-center md:text-left mb-16 md:mb-0 items-center ">
                            <h1 class="sm:text-6xl text-4xl mb-4 font-medium text-gray-900">We are  Strategic Asia Pacific Partners, Inc. (SAPPI)</h1>
                            <p class="mb-8 sm:text-xl py-3">We  value partnerships,  and in building working relationships</p>
                            <div class="flex justify-center">
                                <a href='' class="inline-flex text-white text-2xl bg-green-500 border-0 py-4 px-8 focus:outline-none hover:bg-green-600 rounded">Learn More</a>
                            </div>
                        </div>
                        {/* First image on hero page */}
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                            <img className='object-cover object-center h-fit' alt='Hero Image 1' src={Hero1} />
                        </div>
                    </div>
                </div>

                {/* Who are we section */}

                <div data-aos="fade-right">
                    <div class="container h-full px-4 md:px-8 py-20 mx-auto md:flex-row flex-col items-center max-w-12xl">
                        <h1 class="text-3xl font-semibold text-center  text-gray-800 capitalize lg:text-5xl md:text-6xl">Who are we?</h1>
                        <article className='mt-8 px-12 md:px-24 text-lg'>Sharing in your vision and goal , we strive to work with you to arrive at those.
                            Focused on information technologies and proven technology solutions that fit your financial parameters,  we partner with you for solutions that is apt to your specific situation.    And when you have challenges on cash flows,  we can offer by revenue cycle,  or by stretched payment terms,  for a fee.
                        </article>
                        <article className='mt-4 px-12 md:px-24 text-lg'>SAPPI was incorporated in Guam, USA in 2010,  and continues to embarks on projects,  whether from development stage to stability,  to upgrades and updates,  or by integrating subsystems ,  or by   maintenance for longterm full benefit of decisions made,  or serving documentation requirements and project management.
                        </article>
                        <article className='mt-4 px-12 md:px-24 text-lg'>We are able to deliver contracts with our own expertise made strong with our group of companies,  affiliate companies and in our network of partners.    We work with our shared core values and principles, as of ingenuity,  having commitment and practicing integrity,   imbibing excellence in all we do,  and embracing a team spirit not only among our employees,  but with those whom we partner with as well. We build partnerships that go beyond a single endeavor.   
                        </article>
                    </div>
                </div>


                {/* Features Section */}
                <div data-aos="fade-left">
                    <div class="container h-full px-4 md:px-8 py-44 mx-auto md:flex-row flex-col items-center max-w-12xl">
                        <h1 class="text-3xl font-semibold text-center md:text-left text-gray-800 capitalize lg:text-5xl md:text-6xl">We Provide: Solutions</h1>

                        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 items-baseline  transition ease-linear duration-75">
                            <div class="flex flex-col items-center p-6 space-y-3 text-center">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature1} />
                                </span>

                                <h1 class="text-2xl text-left font-semibold text-black capitalize py-3">Providing Business Development Technology Solutions</h1>

                                <p class="text-black text-left text-md md:text-lg ">
                                    We bring together component subsystems into a whole, ensuring that seen functions work seamlessly together based on predetermined and approved specifications and user/client preferences:
                                </p>

                            </div>

                            <div class="flex flex-col p-6 space-y-3 text-left">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature2} />
                                </span>

                                <h1 class="text-2xl text-left font-semibold text-black capitalize py-3">Project Management</h1>

                                <p class="text-black text-left text-md md:text-lg">
                                    We take the right puzzle pieces that are unique to your utility, situation and project
                                </p>
                                <p class="text-black text-left text-md md:text-lg">
                                    We piece them together in the right amounts to ensure a successful project, and thereby meet your scope, schedule, and cost goals.
                                </p>
                            </div>

                            <div class="flex flex-col p-6 space-y-3 ">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature3} />
                                </span>

                                <h1 class="text-2xl text-left font-semibold text-black capitalize py-3 ">Project Management </h1>

                                <p class="text-black text-left text-md md:text-lg">
                                    Regardless of your industry or mission, this is the value driver that helps your organization get the most out of its performance.
                                </p>

                                <p class="text-black text-left text-md md:text-lg">
                                    We work with you to craft an implementation plan that fits your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >



    )
}

export default Home