import React from 'react'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import Update1 from "./img/Update-1.png"

function Updates() {

    // Initalize AOS pluginnpm install react-dropdown  --save

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div data-aos="fade-down">
                <div className='container px-4 md:px-8 py-12 mx-auto'>
                    <div class=" h-1/2 mx-auto flex px-4 md:px-8 py-24 md:flex-row flex-col items-center max-w-12xl ">
                        {/* INTRO SECTION */}
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-center md:text-left mb-16 md:mb-0 items-center ">
                            <h2 class="mb-8 text-xs font-semibold tracking-widest text-green-600 uppercase">01/01/2022</h2>
                            <h1 class="sm:text-6xl text-4xl mb-4 font-medium text-gray-900">This is a headline</h1>
                            <p class="mb-8 sm:text-xl py-3 contianer">Excepteur enim ad ad id anim. Adipisicing mollit sint tempor Lorem eiusmod cupidatat occaecat ut amet fugiat. Eu nulla excepteur labore cillum anim ut. Ut dolor reprehenderit incididunt ut reprehenderit aute proident dolor irure fugiat qui duis. Duis in sit occaecat duis aliquip nostrud cillum in eiusmod.</p>

                            <div class="mt-4">
                                <a href="#" class="inline-flex items-center mt-4 font-semibold text-xl text-green-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                            </div>
                        </div>
                        {/* First image on hero page */}
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                            <img className='object-cover object-center h-fit' alt='Hero Image 1' src={Update1} />
                        </div>
                    </div>

                    <div class="h-1/2 mx-auto flex px-4 md:px-8 py-24 md:flex-row flex-col items-center max-w-12xl ">
                            <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
                                <div class="p-2">
                                    <img class="object-cover object-center w-full mb-8 lg:h-52 md:h-36 rounded-xl" src="https://dummyimage.com/720x400" alt="blog" />
                                    <h2 class="mb-8 text-xs font-semibold tracking-widest text-green-600 uppercase">01/01/2022</h2>
                                    <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">Guam Regional Medical City (GRMC)</h1>
                                    <span className='mx-auto mb-8 text-sm font-semibold leading-none tracking-tighter text-neutral-800 lg:text-md'>A $215 million projected located in Dededo, Guam</span>

                                    <div class="mt-4">
                                        <a href="#" class="inline-flex items-center mt-4 font-semibold text-xl text-green-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                                    </div>
                                </div>
                                <div class="p-2">
                                    <img class="object-cover object-center w-full mb-8 lg:h-52 md:h-36 rounded-xl" src="https://dummyimage.com/720x400" alt="blog" />
                                    <h2 class="mb-8 text-xs font-semibold tracking-widest text-green-600 uppercase">01/01/2022</h2>
                                    <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">Extra-Low Voltage System (ELVS)</h1>
                                    <span className='mx-auto mb-8 text-sm font-semibold leading-none tracking-tighter text-neutral-800 lg:text-md'>In the implementation of ELVS, SAPPI contributed to the redesign, in order to make GRMC future-ready.</span>

                                    <div class="mt-4">
                                        <a href="#" class="inline-flex items-center mt-4 font-semibold text-xl text-green-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                                    </div>
                                </div>
                                <div class="p-2">
                                    <img class="object-cover object-center w-full mb-8 lg:h-52 md:h-36 rounded-xl" src="https://dummyimage.com/720x400" alt="blog" />
                                    <h2 class="mb-8 text-xs font-semibold tracking-widest text-green-600 uppercase">01/01/2022</h2>
                                    <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">Electronic Health / Medical Records System (EHR/EMR)</h1>
                                    <span className='mx-auto mb-8 text-sm font-semibold leading-none tracking-tighter text-neutral-800 lg:text-md'>In the implementation of ELVS, SAPPI contributed to the redesign, in order to make GRMC future-ready.</span>

                                    <div class="mt-4">
                                        <a href="#" class="inline-flex items-center mt-4 font-semibold text-xl text-green-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updates