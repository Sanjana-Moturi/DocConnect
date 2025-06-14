import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className=' text-gray-600 md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img className='mb-5 w-40' src={assets.docc} alt="" />
                    <p className='w-full md:w-2/3 leading-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div>
                    <p className='font-medium text-xl mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2'>
                        <li>+91 9444364164</li>
                        <li>sanjanamoturi24@gmail.com</li>
                    </ul>

                </div>

            </div>
            <div>
                <hr/>
                <p className='text-center py-5 text-sm'>Copyright © 2025 SanjanaMoturi - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
