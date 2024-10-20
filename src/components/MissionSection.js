import React from 'react';
import missionImage from '../assets/images/mission.jpg'; // Import your mission image

function MissionSection() {
  return (
    <section className="bg-gray-100 py-16 opacity-0 transition-opacity duration-1000" data-scroll>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch text-black">
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center md:pr-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto md:mx-0 text-justify">
            At Resolvelt, our mission is to empower individuals and families to achieve financial freedom through innovative and easy-to-use debt repayment solutions.
          </p>
          {/* Add other mission content */}
        </div>
        <div className="md:w-1/2 flex items-stretch justify-center md:pl-4 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${missionImage})` }}>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
