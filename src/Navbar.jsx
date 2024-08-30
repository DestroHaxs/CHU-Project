import React, { useState, forwardRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import chuLogo from './assets/logo_accueil.png';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

const Navbar = forwardRef((props, ref) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const sampleData = [
    { id: 1, name: 'Consultation', path: '/Consultation' },
    { id: 2, name: 'Visiter un Patient', path: '/VisiterPatient' },
    { id: 3, name: 'Charte du Patient', path: '/ChartePatient' },
    { id: 4, name: 'Demande de Stage', path: '/stage' },
    { id: 5, name: 'Demande d\'Emploi', path: '/job' },
    { id: 6, name: 'Nos Comites', path: '/noscomites' },
    { id: 7, name: 'Qui Sommes Nous', path: '/quinous' },
    { id: 8, name: 'Organigramme', path: '/organigramme' },
    { id: 9, name: 'Soins & Specialites', path: '/soins' },
  ];

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const results = sampleData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchResultClick = (path) => {
    setSearchQuery('');
    setSearchResults([]);
    navigate(path);
  };

  const handleLogoClick = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.dtype === 'ADMIN') {
        navigate('/homepageadmin');
      } else if (user.dtype === 'ASSISTANT') {
        navigate(`/homepageassistant/${user.specialite}`);
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div ref={ref} className="bg-white text-blue-900 py-2 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="flex items-center" onClick={handleLogoClick}>
            <img
              src={chuLogo}
              alt="Logo CHU Oujda"
              className="h-16 mr-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </NavLink>
        </div>
        <nav className="flex items-center ml-auto relative z-50">
          <ul className="flex space-x-12 mr-4">
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
                PATIENTS
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
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </div>
              <button onClick={handleSearchClick} className="ml-2">
                <FaSearch className="h-4 w-4 text-gray-600 hover:text-blue-300 transition duration-300 ease-in-out" />
              </button>
            </div>
            {showSearch && searchResults.length > 0 && (
              <ul className="absolute top-full left-0 w-48 bg-white border border-gray-300 shadow-lg mt-2 z-50">
                {searchResults.map((result) => (
                  <li
                    key={result.id}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSearchResultClick(result.path)}
                  >
                    {result.name}
                  </li>
                ))}
              </ul>
            )}
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
