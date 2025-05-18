import React from 'react';
import Tech from '../assets/Tech.png';
import Recog from '../assets/Recog.png';
import Person from '../assets/Person.png';
import Institu from '../assets/Institu.png';
import Industry from '../assets/Industry.png';
import Global from '../assets/Global.png';
import Exper from '../assets/Exper.png';
import Limg from '../assets/Limg.png'
import Rimg from '../assets/Rimg.png'

// Reusable Card Component
const BenefitCard = ({ icon, title }) => (
  <div className="p-[2px] bg-gradient-to-b from-blue-800 to-gray-500 rounded-md">
    <div className="bg-blue-50 rounded-md h-full w-full border-x border-white p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition">
      <img src={icon} alt={title} className="w-12 h-12 mb-4 object-contain" />
      <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
    </div>
  </div>
);

const Benefit = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center py-10 px-4 bg-blue-50'>
      {/* Header */}
      <div className='flex justify-center items-center text-center space-x-2 py-6'>
        <div className="w-7 h-1 rounded-full bg-gradient-to-r from-blue-900 to-blue-400" />
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">
          Key Benefits
        </h2>
      </div>

      {/* Title and Subtitle */}
      <div className='flex flex-col justify-center items-center text-center max-w-xl'>
        <p className='text-4xl sm:text-5xl font-bold py-6'>Why Partner With Us?</p>
        <p className='text-gray-700'>
          Explore the key benefits of our services that make us a trusted choice:
        </p>
      </div>

      {/* Benefit Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10 max-w-6xl'>
        {/* Row 1 */}
        <BenefitCard icon={Tech} title="Technology-Driven Solutions" />
        <BenefitCard icon={Exper} title="Experiential Learning Approach" />
        <BenefitCard icon={Global} title="Global Perspective" />

        {/* Row 2 */}
        <BenefitCard icon={Industry} title="Industry Mentorship" />
        <BenefitCard icon={Person} title="Personalized Career Support" />
        <BenefitCard icon={Institu} title="Institutional Capacity Building" />

        {/* Row 3 (centered under middle card of row 2) */}
        
        <img src={Limg} alt="" />
        <BenefitCard icon={Recog} title="Recognized Certifications" />
        <img src={Rimg} alt="" />
      </div>
    </div>
  );
};

export default Benefit;
