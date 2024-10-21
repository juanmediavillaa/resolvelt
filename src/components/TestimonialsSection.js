import React from 'react';
import testimonial1 from '../assets/images/testimonial1.jpg'; // Adjust the path based on your folder structure
import testimonial2 from '../assets/images/testimonial2.jpg';
import testimonial3 from '../assets/images/testimonial3.jpg';

function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      {/* Testimonial 1 */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={testimonial1}
            alt="Testimonial"
            className="w-48 h-48 rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Jane Smith</h3>
          <p className="text-lg text-gray-600">
            "Resolvelt has been a game-changer for me. Their innovative debt repayment solutions have made managing my finances so much easier. I feel more in control and less stressed about my financial future."
          </p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={testimonial2}
            alt="Testimonial"
            className="w-48 h-48 rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Michael Johnson</h3>
          <p className="text-lg text-gray-600">
            "Thanks to Resolvelt, I have been able to pay off my debts faster than I ever thought possible. Their user-friendly platform and supportive team have made all the difference. I highly recommend their services."
          </p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={testimonial3}
            alt="Testimonial"
            className="w-48 h-48 rounded-full shadow-lg"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Emily Davis</h3>
          <p className="text-lg text-gray-600">
            "I can't thank Resolvelt enough for their help. Their debt repayment methods are straightforward and effective. I've been able to save money and reduce my debt significantly. It's been a life-changing experience."
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
