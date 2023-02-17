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
          <div className='container py-12 mx-auto px-4 md:px-8'>
            <span className='mb-4 text-lg'>Electrical Project</span>
            <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">Extra-Low Voltage System (ELVS) </h1>
          </div>
        </div>

        <img data-aos="fade-up" className=' object-cover w-full h-80' src={Project2}></img>
        <div data-aos="fade-up">
          <div className='container py-12 mx-auto px-4 md:px-8'>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900  px-4 md:px-8">Project Specifications</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 px-4 md:px-8">
              <div className='mt-2 px-2 py-2 text-lg'>
                <ul>
                  <li className='px-py-2'>Lorem Ipsum</li>
                  <li className='px-py-2'>Lorem Ipsum </li>
                  <li className='px-py-2'>Lorem Ipsum</li>
                  <li className='px-py-2'>Lorem Ipsum</li>
                </ul>
              </div>
              <div className='mt-2 px-2 py-2 text-lg'>
                <ul>
                  <li className='px-py-2'>Lorem Ipsum</li>
                  <li className='px-py-2'>Lorem Ipsum</li>
                  <li className='px-py-2'>Lorem Ipsum</li>
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div data-aos="fade-up">
              <div className='mt-4 py-12 px-4 md:px-8'>
                <h1 className='mb-8 text-4xl md:text-3xl md:px-8 '>Project Gallery</h1>
                <div class="flex flex-wrap -m-4 ">
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