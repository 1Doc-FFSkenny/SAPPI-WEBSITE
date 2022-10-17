import React from 'react';
import { useRef, useEffect, useState } from 'react';
import './styles/style.css';


// Imported svgs from pexels.com
import Hero1 from './img/Hero1.svg';
import Hero2 from './img/Hero2.jpg';

// Imported svgs from undraw.com
import Feature1 from './img/Feature1.svg';
import Feature2 from './img/Feature2.svg';
import Feature3 from './img/Feature3.svg';


const Home = () => {

    // Set useRef
    const myRef = useRef();
    const [isVisible, setVisible] = useState();


    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        })
        observer.observe(myRef.current)
    }, [])

    //Home page content
    return (
        //HOME CONTAINER
        <div>

            <div className='h-full'>

                <section>
                    <div class="container h-screen mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-12xl ">
                        {/* INTRO SECTION */}
                        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-center md:text-left mb-16 md:mb-0 items-center ">
                            <h1 ref={myRef} className={StyleSheet.myRef} class="{sm:text-6xl text-4xl mb-4 font-medium text-gray-900">Before they sold out
                                hello
                            </h1>
                            <p class="mb-8 sm:text-xl py-3"><b>Your goal</b> is to reach your vision. We provide you with the solutions to make that possible.</p>
                            <div class="flex justify-center">
                                <button class="inline-flex text-white text-2xl bg-green-500 border-0 py-4 px-8 focus:outline-none hover:bg-green-600 rounded">Learn More</button>
                            </div>
                        </div>
                        {/* First image on hero page */}
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                            <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Hero1} />
                        </div>
                    </div>
                </section>


                {/* Features Section */}


                <section className=''>
                    <div class="container h-screen px-6 py-6 mx-auto md:flex-row flex-col items-center max-w-12xl">
                        <h1 class="text-3xl font-semibold text-center md:text-left text-gray-800 capitalize lg:text-5xl md:text-6xl">What we offer</h1>

                        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 items-baseline transition ease-linear duration-75">
                            <div class="flex flex-col items-center p-6 space-y-3 text-center">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature1} />
                                </span>

                                <h1 class="text-2xl font-semibold text-gray-700 capitalize py-3">Providing Business Development Technology Solutions</h1>

                                <p class="text-black leading-6 ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit ac arcu vehicula aliquam at in ex. Cras commodo metus velit, sed venenatis purus mattis sit amet.
                                </p>
                            </div>

                            <div class="flex flex-col items-center p-6 space-y-3 text-center">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature2} />
                                </span>

                                <h1 class="text-2xl font-semibold text-gray-700 capitalize ">Project Management</h1>

                                <p class="text-black leading-6 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>

                            <div class="flex flex-col items-center p-6 space-y-3 text-center">
                                <span class="inline-block  ">
                                    <img className='object-cover object-center h-1/4' alt='Hero Image 1' src={Feature3} />
                                </span>

                                <h1 class="text-2xl font-semibold text-gray-700 capitalize ">Systems Integration</h1>

                                <p class="text-black leading-6 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}

                <section className=''>
                    <div className=' container h-screen px-3 py-6 mx-auto md:flex-row flex-col items-center max-w-12xl'>
                        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-5xl md:text-6xl mb-4">Insights</h1>
                        <div className='rounded-xl py-8 bg-green-500 shadow-md mt-6'>
                            <p className='text-center justify-center text-xl md:text-2xl font-bold text-white m-2'> Proident irure excepteur est dolor quis culpa est in adipisicing laborum ipsum proident minim aliqua. Laboris ullamco nostrud excepteur nostrud ea. Id amet consectetur ullamco ex sint do dolore sint adipisicing. Velit culpa in labore ea et id sunt. Esse nostrud velit ex tempor ex laboris enim anim dolore culpa. Magna duis dolore consequat ea excepteur do elit officia.</p>
                        </div>
                        <span class="mx-auto items-center justify-center  ">
                            <img className='mx-auto h-1/4 mt-2 shadow-md' alt='Hero Image 1' src={Hero2} />
                        </span>
                    </div>
                </section>
            </div>


        </div >



    )
}

export default Home