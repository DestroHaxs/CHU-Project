// src/HomePage.jsx
import React from 'react';
import dropdownIcon from './assets/dropdownmenu.svg'; // Import the SVG icon
import chuLogo from './assets/chu_logo.png'; // Import the logo image

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header>
        <div className="bg-white text-blue-900 py-2 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-0">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center">
                <img
                  src={chuLogo}
                  alt="Logo CHU Oujda"
                  className="h-16 mr-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <div className="text-left">
                  <div className="text-lg font-bold leading-none">OUJD</div>
                  <div className="border-t border-blue-900 my-1"></div>
                  <div className="text-xs font-medium leading-none">CENTRE HOSPITALIER UNIVERSITAIRE</div>
                </div>
              </a>
            </div>
            <nav className="flex items-center ml-auto">
              <ul className="flex space-x-12 mr-4">
                <li className="relative group">
                  <a href="#" className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out">
                    LE CHU
                    <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Dropdown menu */}
                </li>
                <li className="relative group">
                  <a href="#" className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out">
                    PATIENTS & VISITEURS
                    <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Dropdown menu */}
                </li>
                <li className="relative group">
                  <a href="#" className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out">
                    STAGE & RECRUTEMENT
                    <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Dropdown menu */}
                </li>
                <li className="relative group">
                  <a href="#" className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out">
                    NOS COMITES
                    <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Dropdown menu */}
                </li>
              </ul>
              <div className="relative">
                <input 
                  type="text" 
                  className="px-4 py-2 rounded text-black" 
                  placeholder="Rechercher..." 
                />
                <button className="absolute right-0 top-0 mt-2 mr-2">
                  <svg className="h-4 w-4 fill-current text-gray-600 hover:text-blue-300 transition duration-300 ease-in-out" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.42-1.42l4.58 4.58-1.42 1.42-4.58-4.58zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
