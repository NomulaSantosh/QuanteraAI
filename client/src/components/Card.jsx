import React from 'react';
import robotI from '../assets/robotI.png';
import bluee from '../assets/bluee.png';
import send from '../assets/send.png';

const Card = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden md:max-w-6xl min-h-[400px]">
          <div className="md:flex h-full">
            {/* Right Side - Content */}
            <div className="p-10 flex-1 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-1.5 bg-gradient-to-r from-blue-800 to-blue-500 rounded-full" />
                <p className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">Join Us</p>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Let's subscribe the newsletter
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                Join us in shaping a future where intelligence is the driving force behind every decision.
              </p>

              <form className="space-y-6">
                <div className='flex gap-4'>
                  <label htmlFor="email" className="sr-only">Enter Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter Your Email"
                    required
                  />

                  <button
                    type="submit"
                    className="w-20 h-16 bg-gradient-to-b from-blue-700 to-blue-900 text-white rounded-xl hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center"
                  >
                    <img src={send} alt="send" className='w-8 h-8' />
                  </button>
                </div>
              </form>
            </div>

            {/* Left Side - Image Container */}
            <div className="relative md:flex md:w-1/2">
              <img 
                src={bluee} 
                alt="" 
                className="absolute left-50 inset-0 w-96 h-full object-cover z-10"
              />
              <div className="z-20 h-full flex items-center justify-center p-10">
                <img
                  className=" absolute left-50 w-96 max-w-[400px] object-contain"
                  src={robotI}
                  alt="Robot illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;