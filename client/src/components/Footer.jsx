import React from 'react';
import logo1 from '../assets/logo1.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import call from '../assets/call.png'
import pin from '../assets/pin.png'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo1} alt="" />
            <p className="text-lg text-gray-500">
              QuanteraAI Analytics Private Limited - Unlock the power of Artificial Intelligence, 
              Machine Learning, and Data Science with QuanteraAI. Transform your business through 
              innovative solutions and data-driven insights.
            </p>

            <div className="flex gap-4 mt-4">
              <h3 className="text-white mt-2">Follow Us:</h3>
              <img src={linkedin} alt="" />
            </div>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-2xl font-normal text-white mb-4">Popular Links</h3>
            <ul className="space-y-2 text-lg">
              {['About Us', 'Contact Us', 'Privacy policy', 'Term & Condition', 'Career'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-normal text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-lg">
              {[
                'Artificial Intelligence (AI)-Based Services',
                'Open Data Centers in Educational Institutions',
                'Emerging Technology Training Programs',
                'Spanish Language Program for Students',
                'Internship Programs',
                'Career Counseling Services'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-500 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-2xl font-normal text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-lg">

                <div className='flex justify-center'>
                    <img src={pin} alt="" className=' w-6 h-6'/>
                    <p className='text-gray-500'>
                302, County Planet, KIBS Hospital Road,<br />
                Vijay Nagar, Indore, M.P.,<br />
                India 452010
              </p>

                </div>
              
              <div className='flex justify-center gap-1'>
                <img src={call} alt="" className='w-5 h-5' />
                <p className='text-gray-500'>+91-7803060320 / 9827295020</p>
              </div>
              
              <div className='flex justify-center'>
                <img src={mail} alt="" className='w-8 h-8' />
                <p className='text-gray-500'>
                <a href="mailto:info@quanteraai.com" className="hover:text-white transition-colors">
                  info@quanteraai.com
                </a>
              </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Follow Us and Copyright */}
        <div className=" mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center text-gray-500 ml-96">
            
              © 2020 LIN Media. All rights reserved.
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;