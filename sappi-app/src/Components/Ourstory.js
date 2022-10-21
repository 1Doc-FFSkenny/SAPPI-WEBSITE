import React from 'react'
import Aos from "aos";
import { useEffect } from 'react';

const Ourstory = () => {
  // Initalize AOS plugin
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div>
      <div data-aos="fade-up">
        <div className='container mx-auto h-full md:h-screen py-12 items-center flex flex-col'>
          <img class=" h-1/2 w-full object-cover px-4 md:px-0" alt="hero" src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" />
          <h1 class="text-3xl font-semibold text-center mt-4 mb-4 text-black lg:text-5xl md:text-6xl">Our Story</h1>
          <div className='mt-4 px-4 md:px-0'>
            <p className='mt- 4 mb-4 leading-relaxed text-md md:text-lg'>Sharing in your vision and goal ,  we strive to work with you to arrive at those.  Focused on information technologies and proven technology solutions that fit your financial parameters,  we partner with you for solutions that is apt to your specific situation.</p>
            <p className='mb-4 leading-relaxed text-md md:text-lg'>SAPPI was incorporated in Guam, USA in 2010,  and continues to embarks on projects,  whether from development stage to stability,  to upgrades and updates,  or by integrating subsystems ,  up to  maintenance for longterm full benefit of decisions made.      </p>
            <p className='mb-4 leading-relaxed text-md md:text-lg'>We are able to deliver contracts with our own expertise made strong with network of partners and affiliate companies we have and belong to.    We work with our shared core values and principles, as of  ingenuity,  having commitment and practicing integrity,   imbibing excellence in all we do,  and embracing a team spirit not only among our employees,  but with those whom we partner with as well.   We build partnerships that go beyond a single endeavor.    </p>
          </div>
        </div>
      </div>

      {/* CORE VALUES SECTION */}
      <div data-aos="fade-right" className='container h-full md:h-screen px-5 py-12 mx-auto'>
        <div className='flex flex-wrap h-full  w-full mb-20 flex-col items-center text-center'>
          <h1 className='font-semibold text-center mt-4 mb-4 text-black lg:text-4xl md:text-5xl'>Our Core Values</h1>
          {/* DIV TO REPLICATE */}
          <div className='flex flex-wrap -m-4'>
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='p-3'>
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-500  mb-4">
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">INGENUITY</h2>
                <p class="leading-relaxed text-base">Whether by clever discovery, or through innovation and/or a re-invention, SAPPI will act, think, and work as a living proponent to this advocacy. </p>
              </div>
            </div>
            {/* DIV TO REPLICATE */}
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='p-3'>
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-500  mb-4">
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">INTEGRITY</h2>
                <p class="leading-relaxed text-base">We follow through on our promises, honor our words with honesty and responsibility, acknowledging that there is an Unseen Boss, whom we all are accountable to, individually.</p>
              </div>
            </div>
            {/* DIV TO REPLICATE */}
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='p-3'>
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-500  mb-4">
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">EXCELLENCE</h2>
                <p class="leading-relaxed text-base">To imbibe excellence is to take responsibility for everything we think, say and do. We Believe this is a constant and continuous process, and not an end-goal. </p>
              </div>
            </div>
            {/* DIV TO REPLICATE */}
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='p-3'>
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-500  mb-4">
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">COMMITMENT</h2>
                <p class="leading-relaxed text-base">We are dedicated workers in our own fields, determined to reach our customers’ expectations by consistently delivering time and time again, in order to keep them happy and satisfied.</p>
              </div>
            </div>
            {/* DIV TO REPLICATE */}
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='p-3'>
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-500  mb-4">
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">TEAM SPIRIT</h2>
                <p class="leading-relaxed text-base">We pledge to take care of each other, putting priority on what is best for the company, while also considering what is right for each member. </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <div className='h-full '>
        <div className='bg-gradient-to-r from-cyan-500 to-green-600'>
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h1 class=" sm:text-5xl text-4xl mb-4 font-medium text-white">Have a look at our works and projects</h1>
              <div class="flex justify-center">
                <a href="/projects" class="flex-shrink-0 inline-flex text-white bg-sky-800 border-0 py-2 px-8 focus:outline-none hover:bg-sky-900 rounded text-lg mt-10 sm:mt-0">Learn More</a>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Ourstory
