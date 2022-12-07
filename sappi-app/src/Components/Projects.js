import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import Project3 from "./img/Project3.png";

import Test1 from "./img/TEST1.jpg";
import Test2 from "./img/TEST2.jpg";
import Nurse1 from './img/Nurse1.jpg'

const Projects = () => {

  // Initalize AOS plugin
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div>
      <div data-aos="fade-right">
        <div className='container px-5 py-12 mx-auto'>
          <h1 className='text-3xl font-semibold text-center mt-4 mb-8 text-black lg:text-5xl'>Our Projects</h1>
          <div className='mt-4 px-4 md:px-0'>
            <p className='mt- 4 mb-4 leading-relaxed text-center text-lg md:text-left md:text-xl text-black'>SAPPI is a subsidiary of one of the leading IT implementer and systems integrator in Asia and Micronesia,
              Strategic Alliance Holdings Inc. (SAHI). SAHI has grown from handling large-scale infrastructure projects to the development of Information and Communications technology (ICT)
              projects that are part of an even larger country-wide e-Government initiative.</p>
            <p className='mt- 4 mb-4 leading-relaxed text-center text-lg md:text-left md:text-xl text-black'>Together we stand at the
              forefront of Build-Own-Operate (BOO) and Build-Operate-Transfer (BOT) related interactions between the Public and Private Sectors. Our broad experience in business development technology and implementation brought
              us to the successful development, implementation, and operation of e-Governance,
              IT-based Solutions, and Hard Infrastructure projects such as these:</p>
          </div>
        </div>
      </div>

      <div data-aos="fade-left">
        <div class=" container h-1/2 md:h-screen px-5 py-14 mx-auto">
          <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-2">

            {/* PROJECT GRMC DIV */}
            <div class="p-6">
              <img class="object-cover object-center w-full mb-8 lg:h-52 md:h-36 rounded-xl" src={Test1} alt="blog" />
              <h2 class="mb-8 text-xs font-semibold tracking-widest text-green-600 uppercase">01/01/2022</h2>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">Guam Regional Medical City (GRMC)</h1>
              <span className='mx-auto mb-8 text-sm font-semibold leading-none tracking-tighter text-neutral-800 lg:text-md'>A $215 million projected located in Dededo, Guam</span>

              <div class="mt-4">
                <a href="/GRMC" class="inline-flex items-center mt-4 font-semibold text-xl text-green-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
              </div>
            </div>

            {/* PROJECT ELVS DIV */}
            <div class="p-6">
              <img class="object-cover object-center w-full mb-8 lg:h-52 md:h-36 rounded-xl" src={Test2} alt="blog" />
              <h2 class="mb-8 text-xs font-semibold tracking-widest text-green-600 uppercase">01/01/2022</h2>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">Extra-Low Voltage System (ELVS)</h1>
              <span className='mx-auto mb-8 text-sm font-semibold leading-none tracking-tighter text-neutral-800 lg:text-md'>In the implementation of ELVS, SAPPI contributed to the redesign, in order to make GRMC future-ready.</span>

              <div class="mt-4">
                <a href="/ELVS" class="inline-flex items-center mt-4 font-semibold text-xl text-green-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
              </div>
            </div>

            {/* PROJECT EHR DIV */}
            <div class="p-6">
              <img class="object-cover object-center w-full mb-8 lg:h-52 md:h-36 rounded-xl" src={Project3} alt="blog" />
              <h2 class="mb-8 text-xs font-semibold tracking-widest text-green-600 uppercase">01/01/2022</h2>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">Electronic Health / Medical Records System (EHR/EMR)</h1>
              <span className='mx-auto mb-8 text-sm font-semibold leading-none tracking-tighter text-neutral-800 lg:text-md'>In the implementation of ELVS, SAPPI contributed to the redesign, in order to make GRMC future-ready.</span>

              <div class="mt-4">
                <a href="/EHR" class="inline-flex items-center mt-4 font-semibold text-xl text-green-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
              </div>
            </div>

            {/* PROJECT NURSE CALL DIV */}
            <div class="p-6">
              <img class="object-cover object-center w-full mb-8 lg:h-52 md:h-36 rounded-xl" src={Nurse1} alt="blog" />
              <h2 class="mb-8 text-xs font-semibold tracking-widest text-green-600 uppercase">01/01/2022</h2>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-800 lg:text-3xl">Nurse Call System</h1>
              <span className='mx-auto mb-8 text-sm font-semibold leading-none tracking-tighter text-neutral-800 lg:text-md'>LOREM IPSUM</span>

              <div class="mt-4">
                <a href="/nurse" class="inline-flex items-center mt-4 font-semibold text-xl text-green-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Projects