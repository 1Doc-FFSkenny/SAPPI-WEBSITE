import React from 'react';
import { useEffect } from 'react';
import './styles/style.css';
import Aos from "aos";
import "aos/dist/aos.css";


// Imported svgs from pexels.com
import Hero1 from './img/Hero1.svg';

// Imported svgs from undraw.com
import Feature1 from './img/Feature1.svg';
import Feature2 from './img/Feature2.svg';
import Feature3 from './img/Feature3.svg';

// Imported from react icons
import { BiCog } from "react-icons/bi";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { MdOutlineDocumentScanner } from "react-icons/md";


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
                <div data-aos="fade-up">
                    <div class=" container h-full mx-auto flex px-4 md:px-8 py-36 md:flex-row flex-col items-center max-w-12xl ">
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

                <div data-aos="fade-up">
                    <div class="container h-full px-4 md:px-8 py-24 mx-auto md:flex-row flex-col items-center max-w-12xl">
                        <h1 class="text-3xl font-semibold text-center  text-gray-800 capitalize lg:text-5xl md:text-6xl">Who are we?</h1>
                        <article className='mt-8 px-12 md:px-24 text-lg'>Sharing in your vision and goal , we strive to work with you to arrive at those.
                            Focused on information technologies and proven technology solutions that fit your financial parameters,  we partner with you for solutions that is apt to your specific situation.    And when you have challenges on cash flows,  we can offer by revenue cycle,  or by stretched payment terms,  for a fee.
                        </article>
                        <article className='mt-4 px-12 md:px-24 text-lg'>SAPPI was incorporated in Guam, USA in 2010,  and continues to embarks on projects,  whether from development stage to stability,  to upgrades and updates,  or by integrating subsystems ,  or by   maintenance for longterm full benefit of decisions made,  or serving documentation requirements and project management.
                        </article>
                        <article className='mt-4 px-12 md:px-24 text-lg'>We are able to deliver contracts with our own expertise made strong with our group of companies,  affiliate companies and in our network of partners.    We work with our shared core values and principles, as of ingenuity,  having commitment and practicing integrity,   imbibing excellence in all we do,  and embracing a team spirit not only among our employees,  but with those whom we partner with as well. We build partnerships that go beyond a single endeavor.
                        </article>
                        <article className='mt-4 px-12 md:px-24 text-lg'>SAPPI identifies opportunities, and creates, build and later nurture highly productive and profitable Mutual-Relationships with projects.   We identify potential worthwhile engagements by serving a need by establishing business relationships and matching them with the resources of the company and its network of partners and suppliers, to a development point where it can take off as a full-fledged approved Information Technology (IT), or technology- based project.
                            We believe in the importance of formal business and project studies, prior to pursuing one.
                        </article>
                    </div>
                </div>

                {/* Additional Details */}

                <div data-aos="fade-up">

                    <div class="container px-5 py-24 mx-auto">
                        <h1 class="text-3xl font-semibold text-center md:text-left text-gray-800 capitalize lg:text-5xl md:text-6xl mb-8">What we offer</h1>
                        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 py-24">
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-green-200 text-green-500 mb-4 flex-shrink-0">
                                    <MdOutlineIntegrationInstructions style={{ fontSize: '25px' }} />
                                </div>
                                <div class="flex-grow pl-6">
                                    <p class="leading-relaxed text-base">We offer Systems Integration that brings together component subsystems into a whole, ensuring seamless functions based on predetermined and approved specifications and user/client preferences.  </p>

                                </div>
                            </div>
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-green-200 text-green-500 mb-4 flex-shrink-0">
                                    <BiCog style={{ fontSize: '25px' }} />
                                </div>
                                <div class="flex-grow pl-6">
                                    <p class="leading-relaxed text-base">We include Project Management regardless of your industry or mission; the value driver that helps your organization get the most out of its performance. </p>

                                </div>
                            </div>
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-green-200 text-green-500 mb-4 flex-shrink-0">
                                    <MdOutlineDocumentScanner style={{ fontSize: '25px' }} />
                                </div>
                                <div class="flex-grow pl-6">
                                    <p class="leading-relaxed text-base">We offer Document Management System that allows organizations to fully manage any type of content – from simple office documents, to scanned images, photographs, engineering drawings, and even large video files, and digitize them, prepared to serve what they may be of use, in the future</p>
                                </div>
                            </div>
                        </div>
                        <div className='container mx-auto rounded-md items-center mt-3'>
                            <img className='rounded-md w-2/3 h-auto object-center mx-auto' src='https://images.pexels.com/photos/8467589/pexels-photo-8467589.jpeg?auto=compress&cs=tinysrgb&w=1600' />
                        </div>
                    </div>



                </div>


                {/* Features Section */}
                <div data-aos="fade-up">
                    <div class="container h-full px-4 md:px-8 py-24 mx-auto md:flex-row flex-col items-center max-w-12xl">
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