import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Project1 from "./img/Project1.png";

function GRMC() {
  // Initalize AOS plugin
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div>
      <div data-aos="fade-right">
        <div className='container py-12 mx-auto px-4 md:px-8'>
          <span className='mb-4 text-lg'>Hospital Project</span>
          <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">Guam Regional Medical City (GRMC)</h1>
        </div>
      </div>

      <img data-aos="fade-up" className=' object-cover w-full h-80' src={Project1}></img>
      <div data-aos="fade-up">
        <div className='container  py-12 mx-auto px-4 md:px-8'>

          <div className='container px-4 md:px-8 '>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">Project Specifications</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
              <div className='mt-2 px-2 py-2 text-lg'>
                <ul>
                  <li className='px-py-2'>Project Cost: $215 Million</li>
                  <li className='px-py-2'>Location: Dededo, Guam </li>
                  <li className='px-py-2'>Hospital Size: 267,000 sq. feet</li>
                  <li className='px-py-2'>Bed Capacity: 130</li>
                </ul>
              </div>
              <div className='mt-2 px-2 py-2 text-lg'>
                <ul>
                  <li className='px-py-2'>Construction Workforce: Approx. 300</li>
                  <li className='px-py-2'>Hospital Workforce: Approx. 400</li>
                  <li className='px-py-2'>Opened in 2015, Completed in 2016</li>
                </ul>
              </div>
            </div>

            <p className='text-lg mt-4'>This infrastructure is configured to allow hospital services to operate in the most efficient possible manner to best serve the needs of the patients, staff, the healthcare organization and the environment. </p>
            <p className='text-lg mt-4'> The design of the infrastructure facilitates distributed intelligence, allowing the systems to interoperate in different ways within the control center and monitoring of energy in different departments of the facility.  </p>

            <div class="container mx-auto px-4 md:px-8 py-12">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="flex justify-center text-2xl border-2 border-gray-100 border-opacity-50 rounded-lg p-4 bg-gray-100">

                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-200 text-green-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <p className='text-base '>Improved patient and staff safety in the mental health facility with staff protection and access control systems</p>
                </div>

                <div class="flex justify-center text-2xl border-2 border-gray-100 border-opacity-50 rounded-lg p-4 bg-gray-100">

                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-200 text-green-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <p className='text-base '>Improved the environment in a patient room with nurse call services, patient lighting and environmental control</p>
                </div>

                <div class="flex justify-center text-2xl border-2 border-gray-100 border-opacity-50 rounded-lg p-4 bg-gray-100">

                  <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-200 text-green-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <p className='text-base '> Improved energy efficiency in the energy source</p>
                </div>
              </div>
            </div>

          </div>

          {/* Gallery */}
          <div data-aos="fade-up">
            <div className='mt-4 py-12 px-4 md:px-8'>
              <h1 className='mb-4 pb-4 text-4xl md:text-3xl '>Project Gallery</h1>
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
  )
}

export default GRMC