import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4'>
        <Link to={'/'}>
        <img src={logo} alt="" className='w-28 sm:w-32 lg:w-40'/>
        </Link>

        <div className='flex items-center gap-6 sm:gap-12 text-2xl'>
            <p className='hover:text-blue-700 cursor-pointer'>Home</p>
            <p className='hover:text-blue-700 cursor-pointer'>About</p>
            <p className='hover:text-blue-700 cursor-pointer'>Services</p>
            <p className='hover:text-blue-700 cursor-pointer'>Our Team</p>
            <p className='hover:text-blue-700 cursor-pointer'>Features</p>
            <p className='hover:text-blue-700 cursor-pointer'>FAQs</p>
            <p className='hover:text-blue-700 cursor-pointer'>Contact</p>
        </div>
    </div>
  )
}

export default Navbar