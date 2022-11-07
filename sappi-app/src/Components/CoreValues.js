import React from 'react'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function CoreValues() {
    // Initalize AOS pluginnpm install react-dropdown  --save

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div className='container px-5 py-12 mx-auto'>
                <h1 className='text-3xl font-semibold text-center mt-4 mb-8 text-black lg:text-5xl'>Our Core Values</h1>

                <div class="mt-10">
                    <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
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
            </div>
        </div>
    )
}

export default CoreValues