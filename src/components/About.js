import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Section 1 with Image Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-bullseye text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            At Resolvelt, we simplify debt repayment with personalized aid and a
            clear user interface.
          </p>
        </div>

        {/* Section 2 with Image Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-history text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Our History</h3>
          <p className="text-gray-600">
            Founded in 2024, we offer innovative solutions for efficient debt
            management.
          </p>
        </div>

        {/* Section 3 with Icon */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-hand-holding-usd text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
          <p className="text-gray-600">
            Our platform provides personalized plans to meet your unique
            financial needs.
          </p>
        </div>

        {/* Section 4 with Image Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-user-plus text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Join Us</h3>
          <p className="text-gray-600">
            Join us to make debt repayment hassle-free and achieve financial
            freedom.
          </p>
        </div>

        {/* Section 5 with Icon */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-users text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-600">
            Our team is dedicated to providing you with the best debt management
            experience.
          </p>
        </div>

        {/* Section 6 with Image Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-chart-line text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Financial Goals</h3>
          <p className="text-gray-600">
            We are committed to helping you achieve your financial goals and
            secure your future.
          </p>
        </div>

        {/* Section 7 with Icon */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-lock text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Data Security</h3>
          <p className="text-gray-600">
            Your data is safe with us. We prioritize security and
            confidentiality in all transactions.
          </p>
        </div>

        {/* Section 8 with Image Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-globe text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Global Services</h3>
          <p className="text-gray-600">
            Our services are accessible worldwide, ensuring that everyone can
            benefit from our expertise.
          </p>
        </div>

        {/* Section 9 with Icon */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <i className="fas fa-handshake text-blue-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Client Relationships</h3>
          <p className="text-gray-600">
            We believe in building strong relationships with our clients and
            providing exceptional service.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
