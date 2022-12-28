import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

function footer() {
  return (
    <div className='w-full bg-gray-900 text-gray-400 py-2 px-2'>
    <div className=' grid max-w-[1200px] mx-auto grid-cols-2 md:grid-cols-6 py-10 border-b-2 border-gray-600 px-10'>
        <div>
            <h6 className='font-bold uppercase py-3'>Solutions</h6>
            <ul>
                <li className='py-1'>Travel</li>
                <li className='py-1'>Booking</li>
                <li className='py-1'>Flight</li>
                <li className='py-1'>Cruises</li>
                <li className='py-1'>Tourist</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase py-3'>Support</h6>
            <ul>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Documentation</li>
                <li className='py-1'>Ground</li>
                <li className='py-1'>Refunds</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase py-3'>Company</h6>
            <ul>
                <li className='py-1'>About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Jobs</li>
                <li className='py-1'>Press</li>
                <li className='py-1'>Partners</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase py-3'>Legal</h6>
            <ul>
                <li className='py-1'>Claims</li>
                <li className='py-1'>Privacy</li>
                <li className='py-1'>Terms</li>
                <li className='py-1'>Policies</li>
                <li className='py-1'>Conditions</li>
            </ul>
        </div>
        <div className='py-8 col-span-2 md:pt-2'>
            <p className='font-bold uppercase py-3'>Subscribe to our newsletters</p>
            <p className='py-4'>The Latest deals, articles and resources sent to your inbox weekly.</p>

            <form className='flex flex-col sm:flex-row'>
                <input type="email" placeholder='Your Email' className='outline-none p-2 mr-4 w-full mb-4 rounded-md' />
                <button className='p-2 mb-4 rounded-md'>Subscribe</button>
            </form>
        </div>
    </div>
    <div className='flex flex-col sm:flex-row justify-around px-2 py-4'>
        <p className='py-4'>2022 Experiences, LLC. All rights reserved</p>
    <div className='flex justify-between sm:w-[300px] items-center pt-4 text-2xl'>
        <FaFacebook  className=' cursor-pointer'/>
        <FaInstagram  className=' cursor-pointer'/>
        <FaTwitter  className=' cursor-pointer'/>
        <TiSocialPinterest size={30}  className=' cursor-pointer'/>
    </div>
    </div>
    </div>
  )
}

export default footer
