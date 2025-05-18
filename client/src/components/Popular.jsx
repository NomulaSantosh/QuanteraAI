import React, { useState } from 'react';
import starIcon from '../assets/star.png';
const faqData = [
  {
    question: 'Who can enroll in your training programs?',
    answer:
      'Our courses are open to school students (Grade 6 and above), college students, and young professionals. We offer beginner, intermediate, and advanced levels to match different learning needs.',
  },
  {
    question: 'What is the process for establishing a Data Center in a college?',
    answer:
      'Institutions can reach out to us through our partnership page. We will conduct a requirement analysis, propose a setup plan, provide training for faculty and students, and ensure long-term support.',
  },
  {
    question: 'Are the internships remote or physical?',
    answer:
      'We offer both remote and physical internship opportunities depending on the program and location of the candidate.',
  },
  {
    question: 'Do you provide certifications for language courses?',
    answer:
      'Yes, we provide certifications for all our courses including language programs upon successful completion.',
  },
  {
    question: 'Are your programs aligned with school/college curriculum?',
    answer:
      'Yes, our programs are designed to align with academic curricula while adding practical exposure.',
  },
  {
    question: 'Is financial assistance or scholarship available?',
    answer:
      'We offer scholarships and financial aid to deserving students. Please apply through our scholarship page.',
  },
  {
    question: 'How are career counselling sessions conducted?',
    answer:
      'Counselling sessions are conducted virtually through video calls or in person by appointment.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f4f8fc] py-16 px-4">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <div className="w-6 h-1 bg-gradient-to-r from-blue-800 to-blue-500 text-transparent rounded-full" />
          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">Popular FAQs</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-900 rounded-md overflow-hidden transition-all"
          >
            {/* Question with star icon */}
            <button
              className={`w-full flex items-center gap-2 px-4 py-4 text-left font-medium text-gray-800 hover:bg-blue-50 transition ${
                openIndex === index ? 'bg-blue-900 text-white' : 'bg-white'
              }`}
              onClick={() => toggle(index)}
            >
              <img
                src={starIcon}
                alt="star"
                className="w-2 h-3 shrink-0"
              />
              <span className="text-sm sm:text-base font-semibold">
                {faq.question}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 bg-white text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
