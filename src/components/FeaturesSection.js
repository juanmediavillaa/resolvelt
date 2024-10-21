import React from 'react';

const FeaturesSection = () => {
  return (
    <section
      className="bg-blue-100 py-16"
      data-scroll
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-500 mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Fast & Efficient
            </h3>
            <p className="text-gray-600 mt-2">
              We ensure quick and smooth services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-500 mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Secure & Reliable
            </h3>
            <p className="text-gray-600 mt-2">
              Your data and transactions are secure with us.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-500 mb-4">🌎</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Global Reach
            </h3>
            <p className="text-gray-600 mt-2">
              We serve clients across the world with top-notch services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
