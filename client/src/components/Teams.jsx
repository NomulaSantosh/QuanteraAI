import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const TeamSection = () => {
  const teamMembers = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center mb-12">
          <div className='flex justify-center items-center text-center gap-2 mb-10'>
            <div className="w-6 h-1 bg-blue-800 rounded-full" />
            <p className="text-blue-800 text-lg">Our Teams</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Meet Our Experienced Team Members
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={member.image} 
                alt="Team member" 
                className="w-auto h-auto object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;