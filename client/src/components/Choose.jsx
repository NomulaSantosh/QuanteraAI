import React from 'react';
import happy from '../assets/happy.png'; // your uploaded icon
import project from '../assets/project.png'; // your project icon

const Choose = () => {
  return (
    <div className="bg-[#eaf2fb] py-16 px-4 text-center">
      {/* Title */}
      <div className="flex items-center justify-center space-x-2 py-6">
        <div className="w-7 h-1 rounded-full bg-gradient-to-r from-blue-900 to-blue-400" />
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">
          Why Choose Us
        </h2>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        We're Best in AI Industry with 5 Years of Experience
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 mb-10">
        Data Analysis and AI Based Training and Short Term Courses
      </p>

      {/* Features List */}
      <div className="max-w-xl mx-auto space-y-4 mb-12">
        {[
          "Data Consistency",
          "Personalized Customer Services",
          "Business Intelligence and Reporting",
          "Web and Mobile Development",
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center border border-blue-500 rounded-md py-2 px-4 text-blue-800 bg-white hover:bg-blue-50 transition"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
            <span className="text-sm sm:text-base font-medium">{item}</span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {/* Happy Clients */}
        <div className="flex items-center bg-[#012A5D] text-white px-8 py-6 rounded-md w-64">
            <img src={happy} alt="Happy Clients" className="w-10 h-10 mb-3" />
            <div className='flex flex-col items-center justify-center px-4'>
                 <h3 className="text-3xl font-bold">80</h3>
                 <p className="mt-1 text-sm">Happy Clients</p>
            </div>
        </div>

        {/* Project Complete */}
        <div className="flex items-center bg-[#012A5D] text-white px-8 py-6 rounded-md w-64">
          <img src={project} alt="Project Complete" className="w-10 h-10 mb-3" />
          <div className='flex flex-col items-center justify-center px-4'>
                 <h3 className="text-3xl font-bold">100</h3>
                 <p className="mt-1 text-sm">Project Complete</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
