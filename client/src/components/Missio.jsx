import React from 'react'
import arrow from '../assets/arrow.png'

const Missio = () => {
  return (
    <div className='flex justify-center items-center my-10 gap-14'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold text-[#1363C6] py-10'>Our Mission</p>
            <img src={arrow} alt="" className='w-20' />
        </div>
        <p className='text-gray-500 text-2xl'>To bridge the gap between classroom learning and real-world applications.
           To foster<br/>  curiosity, creativity, and critical thinking among learners. To deliver impactful training,<br/> mentorship, and educational tools that are inclusive and
           scalable.</p>
    </div>
  )
}

export default Missio