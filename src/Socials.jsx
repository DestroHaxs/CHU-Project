import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPlus } from 'react-icons/fa';

function Socials() {
  return (
    <div className="fixed left-0 top-2/3 transform -translate-y-1/2 flex flex-col items-center space-y-8 opacity-70">
      <a href="#" className="transition duration-300 ease-in-out text-blue-500 hover:text-blue-700">
        <FaFacebookF size={18} />
      </a>
      <a href="#" className="transition duration-300 ease-in-out text-blue-500 hover:text-blue-700">
        <FaInstagram size={18} />
      </a>
      <a href="#" className="transition duration-300 ease-in-out text-blue-500 hover:text-blue-700">
        <FaLinkedinIn size={18} />
      </a>
      <a href="#" className="transition duration-300 ease-in-out text-blue-500 hover:text-blue-700">
        <FaYoutube size={18} />
      </a>
      <div className="w-px h-16 bg-blue-500"></div>
      <a href="#" className="relative flex flex-col items-center justify-center bg-blue-500 text-white w-20 h-56 hover:bg-blue-700 transition duration-300 ease-in-out fixed bottom-0 left-0 mb-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 flex items-center">
          <span className="whitespace-nowrap text-sm font-bold">
            ACCÈS DIRECTS
          </span>
          <FaPlus className="ml-2 text-2xl font-bold" />
        </div>
      </a>
    </div>
  );
}

export default Socials;
