import React from 'react';
import RobotImage from '../assets/robot.png';
import robo from '../assets/robo.png';
import suitcase from '../assets/suitcase.png';
import uparrow from '../assets/uparrow.png';
import grad from '../assets/grad.png';
import board from '../assets/board.png';
import blue from '../assets/blue.png';

const servicesData = [
  {
    icon: robo,
    title: "Artificial Intelligence (AI)-Based Services",
    description:
      "AI Application Development: Design and deployment of AI-powered applications in education, health, and business.",
  },
  {
    icon: grad,
    title: "Open Data Centers in Educational Institutions",
    description:
      "Establishment of Data Labs: Creation of real-time open data centers for research and innovation.",
  },
  {
    icon: suitcase,
    title: "Internship Programs",
    description:
      "Project-Based Internships: Live projects in AI, marketing, HR, finance, and operations. Remote and On-Site Options: Flexible engagement modes.",
  },
  {
    icon: board,
    title: "Emerging Technology Training Programs",
    description:
      "Live coding labs, project-based assessments, and industry certifications included.",
  },
];

const Services = () => {
  return (
    <div className="relative bg-[#f2f7fc] py-16 px-4 flex flex-col items-center text-center">
      
      {/* Header */}
      <div className='flex justify-center items-center space-x-2 py-6'>
        <div className="w-7 h-1 rounded-full bg-gradient-to-r from-blue-900 to-blue-400" />
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">
          Our Services
        </h2>
      </div>

      <h3 className='text-4xl sm:text-5xl font-bold my-10'>Our Excellent AI Solutions</h3>
      <p className='text-gray-600 max-w-4xl mb-20'>
        At QuanteraAI Analytics Private Limited, we are pioneers in the realm of Artificial Intelligence, Machine Learning, and<br />
        Data Science. Harnessing cutting-edge technologies, we empower businesses to transform data into actionable<br />
        insights, driving innovation and growth. Explore the possibilities with QuanteraAI and embark on a journey towards a smarter, data-driven future.
      </p>

      {/* Main content section */}
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start lg:items-center">
        
        {/* Blue background stripe */}
        <img src={blue} alt="" className='absolute top-30 -left-20 right-0 h-[60px] z-0 transform -translate-y-1/2' />
        <img src={blue} alt="" className='absolute bottom-15 -left-20 right-0 h-[60px] z-0 transform -translate-y-1/2' />
        <img src={RobotImage} alt="Robot" className="absolute right-0 top-0 w-[350px] max-w-full object-contain mb-4" />

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 z-10 relative lg:w-3/4">
          {servicesData.map((service, index) => (
            <div key={index} className="relative">
              <div className="relative bg-white rounded-xl shadow-md px-6 py-16 text-left border border-t-blue-600 border-l-blue-600 border-r-blue-600 border-b-gray-300 hover:shadow-lg transition-all">
                <img
                  src={uparrow}
                  alt="arrow"
                  className="absolute top-4 right-4 w-12 h-12 rounded-full text-white shadow"
                />
                <img
                  src={service.icon}
                  alt="icon"
                  className="absolute w-10 top-3 right-60 h-10 mb-10"
                />
                <h4 className="text-lg font-bold text-blue-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Robot + Button column (desktop) */}
        <div className="hidden lg:flex flex-col items-center justify-center ml-10 z-10">
          <button className="px-10 py-4 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition-all">
            View All
          </button>
        </div>
      </div>

      {/* Robot + Button (mobile view) */}
      <div className="lg:hidden flex flex-col items-center justify-center mt-10 z-10">
        <img src={RobotImage} alt="Robot" className="w-[300px] max-w-full object-contain mb-4" />
        <button className="px-10 py-4 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition-all">
          View All
        </button>
      </div>
    </div>
  );
};

export default Services;
