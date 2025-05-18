import React from 'react';
import star1 from '../assets/star1.png'; 

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rishab Arora",
      role: "Businessman",
      rating: 5,
      comment: "Amazing experience working with you saves design and unbelievable customer service!! H recommend time4design!!"
    },
    {
      name: "Ankit Kapoor",
      role: "Company Secretary",
      rating: 5,
      comment: "We recently completed a redesign of our existing website and could not be happier with the results. The cost was reasonable and we now have a clean and sleek website that we anticipate."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mt-2">
        {[...Array(rating)].map((_, i) => (
          <img key={i} src={star1} alt="star" className="w-5 h-5" />
        ))}
      </div>
    );
  };

  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-1 bg-gradient-to-r from-blue-800 to-blue-500 rounded-full" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">Testimonials</h2>
          </div>
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            What Say Our Clients!
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-blue-100 flex flex-col justify-center items-center text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                
                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-5">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-gray-600 leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;