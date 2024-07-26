import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const Year = new Date().getFullYear()
  return (
   <footer className='top-60 relative text-white'>
    <div className='absolute top-0 left-0 w-full overflow-hidden'>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        class="relative block fill-white"></path>
    </svg>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 p-10 text-[18px] font-serif'>
        <div className='flex flex-col'>
            <h2 className='text-3xl text-blue-950 py-2 uppercase  hover:text-green-800 mb-4 hover:cursor-pointer font-semibold'>Info</h2>
            <p className='text-green-600 hover:font-extrabold hover:cursor-pointer text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti at harum rem maxime excepturi aliquam voluptatibus itaque tempore officiis aperiam. </p>
        </div>
        
        <div className='flex flex-col'>
           <ul className='hover:cursor-pointer'>
            <li className='text-[22px] list-none font-semibold text-blue-950 py-2 uppercase hover:text-green-800'>guidelines</li>
            <li className='my-4 list-none text-green-600 hover:font-extrabold'>ipsum dolor sit amet </li>
            <li className='my-4 list-none text-green-600 hover:font-extrabold'>ipsum dolor sit amet </li>
            <li className='my-4 list-none text-green-600 hover:font-extrabold'>ipsum dolor sit amet</li>
            </ul>
        </div>

        <div className='flex flex-col '>
           <ul className='hover:cursor-pointer'>
            <li className='text-[22px] list-none font-semibold text-blue-950 py-2 uppercase hover:text-green-800'>Overview</li>
            <li className='my-4 list-none text-green-600 hover:font-extrabold'>Home</li>
            <li className='my-4 list-none text-green-600 hover:font-extrabold'>Education</li>
            <li className='my-4 list-none text-green-600 hover:font-extrabold'>News</li>
            <li className='my-4 list-none text-green-600 hover:font-extrabold'>About</li>
            </ul>
        </div>

        <div className='flex flex-col '>
           <ul className='hover:cursor-pointer'>
            <li className='text-[22px] list-none font-semibold text-blue-950 py-2 uppercase hover:text-green-800'>Contact</li>
            <li className='my-4 list-none text-green-600  hover:font-extrabold'>Email: sdgoal@gmail.com</li>
            <li className='my-4 list-none text-green-600  hover:font-extrabold'>Phone: +1010-2525-18</li>
            </ul>
            <div className='flex space-x-4'>
                <a className='text-blue-900 hover:text-blue-950
                transform hover:scale-150 transition-all duration-150 ease-in-out' href="">
                    <FaGithub/>
                </a>
                <a className='text-blue-900 hover:text-blue-950
                transform hover:scale-150 transition-all duration-150 ease-in-out' href="">
                    <FaLinkedin/>
                </a>
                <a className='text-blue-900 hover:text-blue-950
                transform hover:scale-150 transition-all duration-150 ease-in-out' href="">
                    <FaTwitter/>
                </a>
                <a className='text-blue-900 hover:text-blue-950
                transform hover:scale-150 transition-all duration-150 ease-in-out' href="">
                    <FaInstagram/>
                </a>
                
            </div>
        </div>
    </div>
    <div>
        <div className='h-full flex items-center justify-center p-5'>
            <form action="" className='w-96 relative'>
                <input type="email"  className='w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none focus:border border-blue-800'/>
                <button type='Submit' className='bg-blue-800 px-8 py-2 rounded-full text-white font-extrabold absolute top-0 right-0 hover:cursor-pointer'>Submit</button>
            </form>
        </div>
        <h6 className='text-center text-blue-950 font-extrabold'>&copy; Copy right SGD {Year}</h6>
    </div>
    </div>
   </footer>
  )
}

export default Footer
