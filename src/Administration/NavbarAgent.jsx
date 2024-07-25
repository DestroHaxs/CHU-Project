import React from 'react';
import { NavLink } from 'react-router-dom';
import chuLogo from './assets/chu_logo.png';

function NavbarAgent() {
  return (
    <div className="bg-blue-900 text-white py-2 shadow-md fixed top-0 left-0 right-0 z-50">
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
              <div className="border-t border-white my-1"></div>
              <div className="text-xs font-medium leading-none">CENTRE HOSPITALIER UNIVERSITAIRE</div>
            </div>
          </NavLink>
        </div>
        <nav className="flex items-center ml-auto relative z-50">
          <ul className="flex space-x-12 mr-4">
            <li className="relative group">
              <NavLink 
                to="/consultation" 
                className={({ isActive }) => 
                  isActive ? "flex items-center text-sm font-bold text-blue-500" : "flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out text-white"
                }
              >
                CONSULTATION
              </NavLink>
            </li>
            <li className="relative group">
              <div className="flex items-center text-sm font-bold group-hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer text-white">
                STAGE & RECRUTEMENT
                <svg className="ml-2 h-3 w-3 fill-current group-hover:text-blue-300 transition duration-300 ease-in-out text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <ul className="absolute left-0 mt-2 w-56 bg-blue-700 border border-gray-200 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50">
                <li className="px-4 py-2 hover:bg-blue-600 transition duration-200 ease-in-out"><NavLink to="/stage" className="text-white">DEMANDE DE STAGE</NavLink></li>
                <li className="px-4 py-2 hover:bg-blue-600 transition duration-200 ease-in-out"><NavLink to="/job" className="text-white">DEMANDE D'EMPLOI</NavLink></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavbarAgent;
