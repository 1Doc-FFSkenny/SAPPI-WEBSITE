import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Project2 from "./img/Project2.png";



function ELVS() {
  // Initalize AOS plugin
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div>
      <div>
        <div data-aos="fade-right">
          <div className='container py-12 mx-auto px-2'>
            <span className='mb-4 text-lg'>Hospital Project</span>
            <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">Guam Regional Medical City (GRMC)</h1>
          </div>
        </div>

        <img data-aos="fade-up" className=' object-cover w-full h-80' src={Project2}></img>
        <div data-aos="fade-up">
          <div className='container py-12 mx-auto px-2'>
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
            <ul className='mt-2 text-md'>
              <li className='px-py-2'>Improved energy efficiency in the energy sources.</li>
              <li className='px-py-2'>improved patient and staff safety in the mental health facility with staff protection and access control systems.</li>
              <li className='px-py-2'>Improved the environment in a patient room with nurse call services, patient lighting and environmental control.
              </li>
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
  )
}

export default ELVS