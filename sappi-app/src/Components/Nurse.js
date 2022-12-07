import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import Nurse1 from './img/Nurse1.jpg'

function Nurse() {

    // Initalize AOS plugin
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div data-aos="fade-right">
                <div >
                    <div className='container py-12 mx-auto px-2'>
                        <span className='mb-4 text-lg'>Medical Assistant system</span>
                        <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">Nurse Call System</h1>
                    </div>
                    <img data-aos="fade-up" className=' object-cover w-full h-80' src={Nurse1}></img>
                    <div data-aos="fade-up">
                        <div className='container py-12 mx-auto px-2'>
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">Project Specifications</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
                                <div className='mt-2 px-2 py-2 text-lg'>
                                    <ul>
                                        <li className='px-py-2'>Lorem Ipsum</li>
                                        <li className='px-py-2'>Lorem Ipsum</li>
                                        <li className='px-py-2'>Lorem Ipsum</li>
                                        <li className='px-py-2'>Lorem Ipsum</li>
                                    </ul>
                                </div>
                                <div className='mt-2 px-2 py-2 text-lg'>
                                    <ul>
                                        <li className='px-py-2'>Lorem Ipsum </li>
                                        <li className='px-py-2'>Lorem Ipsum</li>
                                        <li className='px-py-2'>Lorem Ipsum</li>
                                    </ul>
                                </div>

                            </div>
                            <p className='text-lg mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <p className='text-lg mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <ul className='mt-2 text-md'>
                                <li className='px-py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                                <li className='px-py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                                <li className='px-py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            </ul>

                            {/* Gallery */}
                            <div data-aos="fade-up">
                                <div className='mt-4 py-12'>
                                    <h1 className='mb-4 text-4xl md:text-3xl'>Project Gallery</h1>
                                    <div class="flex flex-wrap -m-4">
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://dummyimage.com/600x360'></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://dummyimage.com/600x360'></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://dummyimage.com/600x360'></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://dummyimage.com/600x360'></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://dummyimage.com/600x360'></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://dummyimage.com/600x360'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nurse