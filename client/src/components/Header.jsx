import React from 'react'
import head from '../assets/head.png'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div>
            <img src={head} alt="" />
        </div>
    </div>
  )
}

export default Header