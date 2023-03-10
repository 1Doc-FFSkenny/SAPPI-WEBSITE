import React from 'react'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import Exec1 from './img/Exec1.jpg'
import Exec2 from './img/Exec2.jpg'
import Exec3 from './img/Exec3.png'
import Exec4 from './img/Exec4.jpg'
import Exec5 from './img/Exec5.jpg'

function Executive() {
  // Initalize AOS plugin
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div>
      <div className='container px-4 md:px-8 py-12 mx-auto h-full'>
        <div className='h-full'>
          <h1 className='text-3xl font-semibold text-center mt-4 mb-8 text-black lg:text-5xl'>Our Leadership</h1>
          {/* HERO 1 */}
          <div data-aos="fade-right">
            <div class="container mx-auto flex px-4 md:px-8 py-36 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who's behind Sappi?</h1>
                <p class="mb-8 text-lg md:text-md leading-relaxed">Jorge Yulo and Cezar Quiambao are both leaders who share the same public-private partnership vision. They have continued to lead different Build-Operate-Transfer (BOT) projects with the same principle.
                  Their broad experience in business development technology and implementation brought the successful development, implementation, and operation of multiple e-Governance, IT-based Solutions, and Hard Infrastructure projects.
                </p>
              </div>
              {/* HERO 1 IMG */}
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className='object-contain ' alt='sappi group photo' src={Exec3}/>

              </div>
            </div>
          </div>

          {/* Hero 2 */}
          <div data-aos="fade-left">
            <div class="container mx-auto flex px-4 md:px-8 py-36 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 h-1/2 w-5/6 mx-auto items-center object-center ">
                {/* Hero 2  Images*/}
                <div className='grid grid-cols-2 gap-2'>
                  <img class="object-cover object-center rounded" alt="hero" src={Exec2} />
                  <img class="object-cover object-center rounded" alt="hero" src={Exec5} />
                </div>

              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CEZAR T. QUIAMBAO</h1>
                <span className='mb-4 text-lg'>Chairman of the Board</span>
                <p class="mb-8 text-lg md:text-md leading-relaxed">Cezar T. Quiambao, a Certified Public Accountant (CPA) and a native of Bayambang, Pangasinan is a successful businessman in Indonesia with more than two (2) decades of experience in logging,
                  infrastructure, information-communication technology and other business interests.</p>
                <p class="mb-8 text-lg md:text-md leading-relaxed">As a CPA, Mr. Quiambao started his career in the pharmaceutical industry as a financial and accountancy executive. He then joined the wood products industry in Indonesia, serving as Executive Vice President of PT Green Timber Java from 1977 to 1982. Since then to this day,   Mr.  Quiambao has been leading several high-value , high impact endeavors focused on improved efficiencies in doing or the conduct of business,  not only increasing people productivity,  but includes a range of double digit to triple digit improvements in bottomline profitabilities.
                </p>
                <p class="mb-8 text-lg md:text-md leading-relaxed">
                </p>

              </div>

            </div>
          </div>

          {/* Hero 3 */}
          <div data-aos="fade-right">
            <div class="container mx-auto flex px-5 py-48 md:flex-row flex-col items-center ">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who's behind Sappi?</h1>
                <span className='mb-4 text-lg'>President & CEO</span>
                <p class="mb-8 text-lg md:text-md leading-relaxed">Jorge M. Yulo is a Filipino business executive with over 45 years of experience in industrial,
                  infrastructure, and information technology projects with multi-national companies.
                </p>
                <p class="mb-8 text-lg md:text-md leading-relaxed">Mr. Yulo ,  who also finished accountancy, started his career when he joined Burroughs Philippines in 1977,  where by the end of it,  became general manager.    He held various sales and marketing management positions prior to taking up a regional function in Malaysia,   where he soon became the Burroughs Far East Regional Manager in 1984,  and was one of the original members in setting up the joint venture manufacturing company in Yunan, China   and managed the eventual transfer of the information and technology,  to the joint-venture company.   When Burroughs merged with Sperry and large American company Unisys Corporation was born,   Mr Yulo later on became its managing director for South East Asia,  and focused on the financial services division  and strengthened several outsourcing business offerings.   Mr Yulo came back to the Philippines,  after 20 years in Burroughs-Unisys,   to continually lead multinational companies in manufacturing,  to later circle to his original prowess in the line of IT , solutions,  IT services,  and systems integrations.
                </p>

              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto items-center object-center ">
                <div className='grid grid-cols-2 gap-2'>
                  <img className='object-scale-down h-84 ' src={Exec4}></img>
                  <img className='object-scale-down h-84 ' src={Exec1}></img>
                </div>
              </div>
            </div>
          </div>s

        </div>
      </div>
    </div>
  )
}

export default Executive