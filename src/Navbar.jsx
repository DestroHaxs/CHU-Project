import React, { useState, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import chuLogo from './assets/chu_logo.png';
import { FaUserCircle, FaSearch } from 'react-icons/fa'; 

const Navbar = forwardRef((props, ref) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div ref={ref} className="bg-white text-blue-900 py-2 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="flex items-center">
            <img
              src={chuLogo}
              alt="Logo CHU Oujda"
              className="h-16 mr-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="text-left">
              <div className="text-lg font-bold leading-none">OUJDA</div>
              <div className="border-t border-blue-900 my-1"></div>
              <div className="text-xs font-medium leading-none">CENTRE HOSPITALIER UNIVERSITAIRE</div>
            </div>
          </NavLink>
        </div>
        <nav className="flex items-center ml-auto relative z-50">
          <ul className="flex space-x-12 mr-4">
            {/* Existing nav items */}
            <li className="relative group">
              <div className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
                LE CHU
                <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-blue-900 border border-gray-200 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50">
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/quinous" className="text-white">QUI SOMMES NOUS ?</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/organigramme" className="text-white">ORGANIGRAMME</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/soins" className="text-white">SOINS & SPECIALITES</NavLink></li>
              </ul>
            </li>
            <li className="relative group">
              <div className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
                PATIENTS & VISITEURS
                <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-blue-900 border border-gray-200 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50">
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/Consultation" className="text-white">CONSULTATION</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/VisiterPatient" className="text-white">VISITER UN PATIENT</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/ChartePatient" className="text-white">CHARTE DU PATIENT</NavLink></li>
              </ul>
            </li>
            <li className="relative group">
              <div className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
                STAGE & RECRUTEMENT
                <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-blue-900 border border-gray-200 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50">
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out">
                  <NavLink to="/stage" className="text-white">DEMANDE DE STAGE
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out">
                  <NavLink to="/job" className="text-white">DEMANDE D'EMPLOI
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <NavLink 
                to="/noscomites" 
                className={({ isActive }) => 
                  isActive ? "flex items-center text-sm font-bold text-blue-500" : "flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out"
                }
              >
                NOS COMITES
              </NavLink>
            </li>
          </ul>
          <div className="relative z-50 flex items-center space-x-4">
            <div className="relative z-50 flex items-center">
              <div className={`flex items-center transition-all duration-500 ease-in-out ${showSearch ? 'w-48' : 'w-0'} overflow-hidden`}>
                <input 
                  type="text" 
                  className="px-2 py-1 rounded text-black w-full" 
                  placeholder="Rechercher..." 
                />
              </div>
              <button onClick={handleSearchClick} className="ml-2">
                <FaSearch className="h-4 w-4 text-gray-600 hover:text-blue-300 transition duration-300 ease-in-out" />
              </button>
            </div>
            <a href="/login" target="_blank" className="ml-4">
              <FaUserCircle className="h-8 w-8 text-blue-900 hover:text-blue-300 transition duration-300 ease-in-out" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
});

export default Navbar;
