import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPlus } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

function Socials() {
  return (
    <div className="h-full w-16 bg-white flex flex-col items-center justify-between fixed top-0 left-0 z-40">
      <div className="flex flex-col items-center space-y-8 pt-52">
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
      </div>
      <Link to="acces-directs" smooth={true} duration={500} className="relative flex flex-col items-center justify-center bg-blue-500 text-white w-full h-56 hover:bg-blue-700 transition duration-300 ease-in-out mb-0 cursor-pointer">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 flex items-center">
          <span className="whitespace-nowrap text-sm font-bold">
            ACCÈS DIRECTS
          </span>
          <FaPlus className="ml-2 text-2xl font-bold" />
        </div>
      </Link>
    </div>
  );
}

export default Socials;
