import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import chuLogo from '../assets/chu_logo.png';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';

function NavbarAdmin() {
  const [showSearch, setShowSearch] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleLogout = () => {
    setIsFadingOut(true);
    document.querySelector('.overlay').classList.add('fade-in');
    setTimeout(() => {
      localStorage.removeItem('user');
      navigate('/login');
    }, 500);
  };

  const handleLogoClick = () => {
    setIsFadingOut(true);
    document.querySelector('.overlay').classList.add('fade-in');
    setTimeout(() => {
      navigate('/homepageadmin');
    }, 500);
  };

  return (
    <>
      <div className={`overlay ${isFadingOut ? 'fade-out' : ''}`}></div>
      <div className="bg-blue-900 text-white py-2 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={handleLogoClick}>
            <img
              src={chuLogo}
              alt="Logo CHU Oujda"
              className="h-16 mr-4 filter-white"
            />
            <div className="text-left">
              <div className="text-lg font-bold leading-none">OUJDA</div>
              <div className="border-t border-white my-1"></div>
              <div className="text-xs font-medium leading-none">CENTRE HOSPITALIER UNIVERSITAIRE</div>
            </div>
          </div>
          <nav className="flex items-center ml-auto relative z-50 space-x-12">
            <NavLink
              to="/demandestage"
              className={({ isActive }) =>
                isActive ? "flex items-center text-sm font-bold text-blue-500" : "flex items-center text-sm font-bold text-white hover:text-blue-300 transition duration-300 ease-in-out"
              }
            >
              STAGE
            </NavLink>
            <NavLink
              to="/demandejob"
              className={({ isActive }) =>
                isActive ? "flex items-center text-sm font-bold text-blue-500" : "flex items-center text-sm font-bold text-white hover:text-blue-300 transition duration-300 ease-in-out"
              }
            >
              EMPLOI
            </NavLink>
            <div className="flex items-center relative z-50">
              <div className={`flex items-center transition-all duration-500 ease-in-out ${showSearch ? 'w-48' : 'w-0'} overflow-hidden`}>
                <input
                  type="text"
                  className="px-2 py-1 rounded text-black w-full"
                  placeholder="Rechercher..."
                />
              </div>
              <button onClick={handleSearchClick} className="ml-2">
                <FaSearch className="h-4 w-4 text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out" />
              </button>
            </div>
            <button onClick={handleLogout} className="flex items-center ml-4">
              <FaSignOutAlt className="h-6 w-6 text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarAdmin;
