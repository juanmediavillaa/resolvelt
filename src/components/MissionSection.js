import React from 'react';
import missionImage from '../assets/images/mission.jpg'; // Adjust the path based on your folder structure

function MissionSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch text-black">
        {/* Mission Section */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center md:pr-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto md:mx-0 text-justify">
            At Resolvelt, our mission is to empower individuals and families to achieve financial freedom
            through innovative and easy-to-use debt repayment solutions. We are committed to providing the tools 
            and support needed to reduce financial stress and build a brighter future.
          </p>
          <p className="text-lg max-w-2xl mx-auto md:mx-0 mt-4 text-justify">
            We understand that managing debt can be overwhelming and stressful. That's why we are dedicated 
            to offering personalized solutions that cater to your unique financial situation. Our team is here 
            to support you every step of the way.
          </p>
          <p className="text-lg max-w-2xl mx-auto md:mx-0 mt-4 text-justify">
            Join our community of satisfied customers who have successfully navigated their debt repayment 
            journey with Resolvelt. Together, we can overcome financial challenges and work towards a more 
            secure and prosperous future.
          </p>
        </div>
        {/* Image Section */}
        <div
          className="md:w-1/2 flex items-stretch justify-center md:pl-4 bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${missionImage})` }}
        ></div>
      </div>
    </section>
  );
}

export default MissionSection;
