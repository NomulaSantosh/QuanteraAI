// Navbar.jsx
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Services', path: '/' },
    { name: 'Our Team', path: '/' },
    { name: 'Features', path: '/' },
    { name: 'FAQs', path: '/' },
    { name: 'Contact', path: '/' },
  ]

  return (
    <nav className='relative'>
      <div className='flex items-center justify-between py-4 px-4 sm:px-6'>
        <Link to='/'>
          <img src={logo} alt="" className='w-28 sm:w-32 lg:w-40'/>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-6 lg:gap-12 text-2xl'>
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className='hover:text-blue-700 transition-colors'
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden p-2 text-2xl'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className='flex flex-col items-center gap-4 p-4'>
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className='w-full text-center py-2 hover:bg-blue-50 rounded-lg'
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar