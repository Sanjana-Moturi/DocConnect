import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-gray-500 text-2xl pt-10'>
        <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10 justify-center mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='text-gray-500 gap-6 flex flex-col justify-center items-start'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p>xxxx Porur <br/>Chennai, Tamil Nadu</p> 
          <p>Tel: +91 9444364164<br/>Email: sanjanamoturi24@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT DOCCONNECT</p>
          <p>Learn more about our teams and job openings</p>
          <button className='px-8 py-4 border border-black text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
