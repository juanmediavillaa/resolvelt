import React from 'react';
import logo from '../assets/images/money.png'; // Import your logo
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow border-b border-gray w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
          <div className="text-2xl font-bold">Resolvelt</div>
        </div>
        <div id="menu" className="flex items-center flex-col md:flex-row">
          <a href="/index" className="text-gray-700 hover:text-blue-500 mx-2 my-2 md:my-0">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500 mx-2 my-0">About</a>
          <a href="/services" className="text-gray-700 hover:text-blue-500 mx-2 my-0">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500 mx-2 my-0">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
