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
        <div className='container mx-auto h-full md:h-screen px-4 md:px-8 py-12 items-center flex flex-col'>
          <img class=" h-1/2 w-full object-cover px-4 md:px-0" alt="hero" src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" />
          <h1 class="text-3xl font-semibold text-center mt-4 mb-4 text-black lg:text-5xl md:text-6xl">Our Story</h1>
          <div className='mt-4 px-4 md:px-0'>
            <p className='mt- 4 mb-4 leading-relaxed text-md md:text-lg'>Sharing in your vision and goal ,  we strive to work with you to arrive at those.  Focused on information technologies and proven technology solutions that fit your financial parameters,  we partner with you for solutions that is apt to your specific situation.</p>
            <p className='mb-4 leading-relaxed text-md md:text-lg'>SAPPI was incorporated in Guam, USA in 2010,  and continues to embarks on projects,  whether from development stage to stability,  to upgrades and updates,  or by integrating subsystems ,  up to  maintenance for longterm full benefit of decisions made.      </p>
            <p className='mb-4 leading-relaxed text-md md:text-lg'>We are able to deliver contracts with our own expertise made strong with network of partners and affiliate companies we have and belong to.    We work with our shared core values and principles, as of  ingenuity,  having commitment and practicing integrity,   imbibing excellence in all we do,  and embracing a team spirit not only among our employees,  but with those whom we partner with as well.   We build partnerships that go beyond a single endeavor.    </p>
          </div>
        </div>
      </div>

     

    
      {/* CTA Section */}
      <div className='h-full '>
        <div className='bg-gradient-to-r from-green-300 via-green-400 to-green-500'>
          <div class="container mx-auto flex px-4 md:px-8 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h1 class=" sm:text-5xl text-4xl mb-4 font-medium text-white">Have a look at our works and projects</h1>
              <div class="flex justify-center">
                <a href="/projects" class="flex-shrink-0 inline-flex text-white bg-sky-700 border-0 py-2 px-8 focus:outline-none hover:bg-sky-800 rounded text-lg mt-10 sm:mt-0">Learn More</a>
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
