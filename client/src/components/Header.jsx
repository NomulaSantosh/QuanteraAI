import React from 'react'
import head from '../assets/head.png'
import about from '../assets/about.png'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div>
            <img src={head} alt="" />
            <div className='flex justify-center items-center gap-10 my-10 text-2xl'>
              <button className='border border-[#1363C6] px-7 py-3 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-black'>Read More</button>
              <button className='bg-[#14183E] px-7 py-3 text-white rounded-lg hover:bg-blue-600 hover:text-black'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Header