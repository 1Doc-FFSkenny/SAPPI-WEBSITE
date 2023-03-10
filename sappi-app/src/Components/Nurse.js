import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import Nurse2 from './img/Nurse2.png'

import Call from './img/GRMC NurseCall 1.jpg';
import Call2 from './img/GRMC NurseCall 2.jpg'
function Nurse() {

    // Initalize AOS plugin
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div data-aos="fade-right">
                <div >
                    <div className='py-12 mx-auto px-4 md:px-8'>
                        <span className='mb-4 text-lg'>Medical Assistant system</span>
                        <h1 class="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900 ">Nurse Call System</h1>
                    </div>
                    <img data-aos="fade-up" className=' object-cover w-full h-80' src={Nurse2} />
                    <div data-aos="fade-up">
                        <div className='container py-12 mx-auto px-2'>
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 px-4 md:px-8 ">Project Features</h1>
                            <div className=" md:px-8 md:px-4  grid grid-cols-1 md:grid-cols-2 mt-2">
                                <div className='mt-2 px-2 py-2 text-lg '>
                                    <ul className='list-disc'>
                                        <li className='px-py-2'>Designed for Easy Installation, Configuration, and Maintenance  </li>
                                        <li className='px-py-2'>Equipped with Tools for Improving Patient Satisfaction and Safety  </li>
                                        <li className='px-py-2'>Streamlines Staff Workflows</li>
                                        <li className='px-py-2'>Allows Wireless Communications Connecting Patients and Staff</li>
                                    </ul>
                                </div>
                                <div className='mt-2 spx-4 md:px-8 py-2 text-lg'>
                                    <ul className='list-disc'>
                                        <li className='px-py-2'>Provides One Touch Staff-to-Staff Communications </li>
                                        <li className='px-py-2'>Automates Staff Rounds with Reminders</li>
                                        <li className='px-py-2'>Provides Admin Reports to Measure Staff Performance and Health Care Quality</li>
                                    </ul>
                                </div>

                            </div>
                            <article className='text-lg mt-4 px-8 md:px-4'>
                                Healthcare facilities such as but not limited to hospitals, clinics, birthing centers, and nursing homes require communication solutions to maximize quality of patient care, streamline caregiver workflows, and increase patient satisfaction.
                            </article>

                            <article className='text-lg mt-4 px-8 md:px-4'>
                                With such requirement present in healthcare facilities, the Jeron Electronic Systems, Inc. developed the Provider 790 Nurse Call System with the latest technology solutions to optimize staff efficiency, accessibility, staff mobility, and availability.
                                This turnkey solution is designed with voice over internet protocol (VoIP) technology and simple touchscreen operation allowing ease of use for both patients and health care providers.
                                Nurses can easily manage their patients and staff workflow to ensure happier patients,  ore productivity, and fewer errors.
                            </article>

                            <article className='text-lg mt-4 px-8 md:px-4'>
                                Furthermore, the Provider 790 Nurse Call System, being Jeron’s most advanced nurse call system, is also capable for a broad spectrum of technology add-ons to support in-house wireless phone integration, smart phone alerting and communication, real time staff location, automated rounding, administrative management with reporting, workflow alerting, and many more!
                            </article>

                            {/* Table */}

                            <div className='container flex w-full items-center justify-center py-12'>
                                <table className='shadow-2xl border-2  w-11/12'>
                                    <thead className='text-black'>
                                        <tr className=''>
                                            <th className='py-3 px-3 bg-green-300'>Features</th>
                                            <th className='py-3 px-3 bg-green-300'>Provider 790</th>
                                            <th className='py-3 px-3 bg-green-300'>Provider 700</th>
                                            <th className='py-3 px-3 bg-green-300'>Provider 680</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-black '>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Voice over IP (VoIP) Technology</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Streamlined Workflows</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Automated Roundings and Reminders</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Dome light patient status indicator</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Bathroom communication</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Bed exit monitoring for fall prevention</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>UL 1069 Certified</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Built-in supervision of all devices for any issues</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Wireless Communications Connecting Patients and Staff</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>One Touch Staff-to-Staff Communications</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                        </tr>
                                        {/* second group */}
                                        <tr className=''>
                                            <th className='py-3 px-3 bg-green-300 text-left'>Features</th>
                                            <th className='py-3 px-3 bg-green-300'></th>
                                            <th className='py-3 px-3 bg-green-300'></th>
                                            <th className='py-3 px-3 bg-green-300'></th>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>SIP Wireless Phones</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Text Messaging, Pocket Paging, and Smartphone</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>ASC/Clinic Room Status and Sequencing</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Real-Time Locating</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>PC Console Activity Display</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Call Activity Reporting </td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>ADT (HL7) Patient Information</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Automated Overhead Paging</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                        </tr>
                                        <tr className=' cursor-pointer duration-300 '>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>Smart Bed Integration </td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '>✓</td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                            <td className='border-x border-b px-2 py-4 border-gray-200  '></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>

                            {/* Gallery */}
                            <div data-aos="fade-up">
                                <div className='mt-4 py-12 px-8 md:px-4'>
                                    <h1 className='mb-4 text-4xl md:text-3xl'>Project Gallery</h1>
                                    <div class="flex flex-wrap -m-4">
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src={Call}></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src={Call2}></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://images.pexels.com/photos/8441811/pexels-photo-8441811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://img.freepik.com/free-photo/young-asia-female-doctor-white-medical-uniform-with-stethoscope-using-computer-laptop-talking-video-conference-call-with-patient-desk-health-clinic-hospital_7861-3129.jpg?w=1380&t=st=1675325418~exp=1675326018~hmac=739e60e8e94ae5dec74f40e61925e9a427a89a353ead2f1874c40c1298a82d07'></img>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img src='https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                                            </div>
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

export default Nurse