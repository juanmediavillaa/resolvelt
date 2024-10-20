import React from 'react';
import backgroundVideo from '../assets/videos/infinity.mp4'; // Import your video

function MainSection() {
  return (
    <main className="relative bg-white h-screen w-full py-20 opacity-0 transition-opacity duration-1000" data-scroll>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative container mx-auto px-4 text-center z-10 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-black">Repaying Debt Made Easy</h1>
        <div className="max-w-md mx-auto">
          <p className="text-black mt-4 text-xl font-semibold">
            Save time and reduce stress with our easy debt repayment methods. Achieve financial freedom and enjoy more of what you love.
          </p>
        </div>
        <a href="/workinprogress.html" className="inline-block mt-8 bg-blue-500 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-600 transition duration-300 max-w-xs mx-auto">
          Get Started
        </a>
      </div>
    </main>
  );
}

export default MainSection;
