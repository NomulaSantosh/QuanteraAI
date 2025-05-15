import React from 'react'
import eye from '../assets/eye.png'

const Vission = () => {
  return (
    <div className='flex justify-center items-center text-center bg-[#093060] my-10 py-24 gap-28'>
        <p className='text-2xl text-blue-100'>
                      Our vision is to transform traditional education models with AI-driven<br/> services, accessible
                       open data, and next-generation learning programs. We<br/> believe in holistic development—from
                      technical skill-building and language<br/> learning to personal mentorship and career growth. By
                      creating a future<br/>-ready, global-minded generation, we contribute meaningfully to national<br/>
                       and global development.</p>
        <div className='flex flex-col justify-center items-center text-center'>
            <p className='text-4xl font-bold text-white py-7'>Our Vision</p>
            <img src={eye} alt="" />
        </div>
    </div>
  )
}

export default Vission