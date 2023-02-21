import React from 'react'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import "./styles/style.css"

function CoreValues() {
    // Initalize AOS pluginnpm install react-dropdown  --save

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div className='container px-4 md:px-8 p-8 mx-auto h-full '>
                <h1 className='text-3xl font-semibold text-center mt-4 mb-8 text-black lg:text-5xl'>Our Core Values</h1>

                <div data-aos="fade-up"  class="mt-10 py-16">
                    <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 px-4 md:gap-y-10 md:space-y-0">
                        <div class="relative">
                            <div>
                                <div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-green-500"></div>
                                <p class="ml-16 text-3xl md:text-2xl font-medium leading-6 text-gray-900 mb-2">INGENUITY</p>
                            </div>
                            <p class="mt-2 ml-16 text-base text-gray-500">We believe that there will always be better ways to do anything, and solutions to any problem. </p>
                            <p class="mt-2 ml-16 text-base text-gray-500">Whether by clever discovery, or through innovation and/or a re-invention, SAPPI will act, think, and work as a living proponent to this advocacy.</p>
                        </div>

                        <div class="relative">
                            <div>
                                <div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-green-500"></div>
                                <p class="ml-16 text-3xl md:text-2xl font-medium leading-6 text-gray-900 mb-2">COMMITMENT</p>
                            </div>
                            <p class="mt-2 ml-16 text-base text-gray-500">We are dedicated workers in our own fields, determined to reach our customers’ expectations by consistently delivering time and time again, in order to keep them happy and satisfied.</p>
                        </div>

                        <div class="relative">
                            <div>
                                <div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-green-500"></div>
                                <p class="ml-16 text-3xl md:text-2xl font-medium leading-6 text-gray-900 mb-2">INTEGRITY</p>
                            </div>
                            <p class="mt-2 ml-16 text-base text-gray-500">We follow through on our promises, honor our words with honesty and responsibility, acknowledging that there is an Unseen Boss, whom we all are accountable to, individually.</p>
                            <p class="mt-2 ml-16 text-base text-gray-500">We work with a clean and clear conscience in every aspect of life. </p>
                        </div>

                        <div class="relative">
                            <div>
                                <div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-green-500"></div>
                                <p class="ml-16 text-3xl md:text-2xl font-medium leading-6 text-gray-900 mb-2">TEAM SPIRIT</p>
                            </div>
                            <p class="mt-2 ml-16 text-base text-gray-500">We believe in the concept of family in the workplace; that there is strength in working together, and mutual benefit in synergy. </p>
                            <p class="mt-2 ml-16 text-base text-gray-500">We pledge to take care of each other, putting priority on what is best for the company, while also considering what is right for each member. </p>
                        </div>
                        <div class="relative">
                            <div>
                                <div class="absolute flex h-12 w-12 items-center justify-center rounded-full bg-green-500"></div>
                                <p class="ml-16 text-3xl md:text-2xl font-medium leading-6 text-gray-900 mb-2">EXCELLENCE</p>
                            </div>
                            <p class="mt-2 ml-16 text-base text-gray-500">To imbibe excellence is to take responsibility for everything we think, say and do. We Believe this is a constant and continuous process, and not an end-goal.</p>
                            <p class="mt-2 ml-16 text-base text-gray-500">We achieve by subscribing to the principles of effectiveness and efficiency in our work, and in all we embark on. </p>
                        </div>
                    </dl>
                </div>

                <div className='container px-4 md:px-8 py-24 h-full'>
                    <h1 className='text-2xl font-semibold text-left mt-4 mb-8 text-black lg:text-4xl'>Our Core Competencies</h1>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                        <div className='h-full bg-green-400 px-8 pt-16 pb-24 rounded-lg text-center relative col-span-1 shadow-sm'>
                            <h1 className='text-left text-2xl font-bold'>System Integration</h1>
                            <p className='text-left text-lg mt-4'>We bring together component subsystems into a whole, ensuring that seen functions work seamlessly together based on predetermined
                                and approved specifications and user/client preferences:</p>
                            {/* <ol className='text-left text-lg mt-4 font-semibold'>
                                <li>World Class Implementation</li>
                                <li>Tailored Services</li>
                            </ol> */}
                        </div>
                        <div className='h-full bg-green-400 px-8 pt-16 pb-24 rounded-lg text-center relative col-span-1 shadow-sm'>
                            <h1 className='text-left text-2xl font-bold'>Document Management</h1>
                            <p className='text-left text-lg mt-4'>We take the right puzzle pieces that are unique to your utility, situation, and project.</p>
                            <p className='text-left text-lg mt-4'>We piece them together in the right amounts to ensure a successful project, and thereby meet your scope, schedule, and cost goals.</p>

                        </div>
                        <div className='h-full bg-green-400 px-8 pt-16 pb-24 rounded-lg text-center relative col-span-1 shadow-sm'>
                            <h1 className='text-left text-2xl font-bold'>Project Management </h1>
                            <p className='text-left text-lg mt-4'>Regardless of your industry or mission, this is the value driver that helps your organization get the most out of its performance.</p>
                            <p className='text-left text-lg mt-4'>We work with you to craft an implementation plan that fits your needs. </p>

                        </div>
                    </div>

                </div>
            </div>
           
        </div>
    )
}

export default CoreValues