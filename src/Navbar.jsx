import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import chuLogo from './assets/chu_logo.png';

const Navbar = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white text-blue-900 py-2 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-0">
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
            <li className="relative group">
              <NavLink to="#" className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out">
                LE CHU
                <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                </svg>
              </NavLink>
              <ul className="absolute left-0 mt-2 w-56 bg-blue-900 border border-gray-200 shadow-lg opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out z-50">
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="#" className="text-white">QUI SOMMES NOUS ?</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/organigramme" className="text-white">ORGANIGRAMME</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/soins" className="text-white">SOINS & SPECIALITES</NavLink></li>
              </ul>
            </li>
            <li className="relative group">
              <NavLink to="#" className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out">
                PATIENTS & VISITEURS
                <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                </svg>
              </NavLink>
              <ul className="absolute left-0 mt-2 w-56 bg-blue-900 border border-gray-200 shadow-lg opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out z-50">
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/Consultation" className="text-white">CONSULTATION</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/VisiterPatient" className="text-white">VISITER UN PATIENT</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/ChartePatient" className="text-white">CHARTE DU PATIENT</NavLink></li>
              </ul>
            </li>
            <li className="relative group">
              <NavLink to="#" className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out">
                STAGE & RECRUTEMENT
                <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                </svg>
              </NavLink>
              <ul className="absolute left-0 mt-2 w-56 bg-blue-900 border border-gray-200 shadow-lg opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out z-50">
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/stage" className="text-white">DEMANDE DE STAGE</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out"><NavLink to="/job" className="text-white">DEMANDE D'EMPLOI</NavLink></li>
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
          <div className="relative z-50">
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
  );
});

export default Navbar;
