import React from 'react'

import Exec1 from './img/Exec1.png'
import Exec2 from './img/Exec2.png'
import Exec3 from './img/Exec3.png'

function Executive() {
  return (
    <div>
      <div className='container px-5 py-12 mx-auto h-full '>
        <div className='h-full'>
          <h1 className='text-3xl font-semibold text-center mt-4 mb-8 text-black lg:text-5xl'>Our Leadership</h1>

          {/* Hero 1 */}
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who's behind Sappi?</h1>
              <p class="mb-8 text-lg md:text-md leading-relaxed">Jorge Yulo and Cezar Quiambao are both leaders who share the same public-private partnership vision. They have continued to lead different Build-Operate-Transfer (BOT) projects with the same principle.
                Their broad experience in business development technology and implementation brought the successful development, implementation, and operation of multiple e-Governance, IT-based Solutions, and Hard Infrastructure projects.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className='object-scale-down h-96 ' src={Exec3}></img>
            </div>
          </div>

          {/* Hero 2 */}
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img class="object-cover object-center rounded" alt="hero" src={Exec2} />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CEZAR T. QUIAMBAO</h1>
              <span className='mb-4 text-lg'>Chairman of the Board</span>
              <p class="mb-8 text-lg md:text-md leading-relaxed">Cezar T. Quiambao, a Certified Public Accountant (CPA) and a native of Bayambang, Pangasinan is a successful businessman in Indonesia with more than two (2) decades of experience in logging,
                infrastructure, information-communication technology and other business interests.</p>
              <p class="mb-8 text-lg md:text-md leading-relaxed">As a CPA, Quiambao started his career in the pharmaceutical industry as a financial and accountancy executive. He then joined the wood products industry in Indonesia, serving as Executive Vice President of PT Green Timber Java from 1977 to 1982.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>

              </div>
            </div>
          </div>

          {/* Hero 3 */}
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who's behind Sappi?</h1>
              <span className='mb-4 text-lg'>Chairman of the Board</span>
              <p class="mb-8 text-lg md:text-md leading-relaxed">Jorge M. Yulo is a Filipino business executive with over 35 years of experience in industrial,
                infrastructure, and information technology projects with multi-national companies.
              </p>
              <p class="mb-8 text-lg md:text-md leading-relaxed">Mr. Yulo started his career when he joined Burroughs Philippines in 1977.
                He held various sales and marketing management positions prior to taking up a regional function.
                He soon became the Burroughs Far East Regional Manager in 1984, and was one of the original members in setting up a joint venture manufacturing company in Yunan, China, and managed the eventual transfer of information and technology to the joint-venture company.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className='object-scale-down h-96 ' src={Exec1}></img>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Executive