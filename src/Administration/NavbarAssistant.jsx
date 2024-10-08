import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import chuLogo from '../assets/logo_accueil.png';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';

function NavbarAssistant() {
  const [showSearch, setShowSearch] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const sampleData = [
    { id: 1, name: 'Consultation', path: '/rdvadmin' }
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

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      localStorage.removeItem('user');
      navigate('/login');
    }, 1000); // 1 second delay for logout transition
  };

  const handleLogoClick = () => {
    navigate('/homepageassistant/neurologie'); // Update the default specialite
  };

  return (
    <>
      <div className={`overlay ${isLoggingOut ? 'fade-out' : ''}`}></div>
      <div className="bg-blue-900 text-white py-2 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={handleLogoClick}>
            <img
              src={chuLogo}
              alt="Logo CHU Oujda"
              className="h-16 mr-4 filter-white"
            />
          </div>
          <nav className="flex items-center ml-auto relative z-50 space-x-12">
            <NavLink
              to="/rdvadmin"
              className={({ isActive }) =>
                isActive ? "flex items-center text-sm font-bold text-blue-500" : "flex items-center text-sm font-bold text-white hover:text-blue-300 transition duration-300 ease-in-out"
              }
            >
              CONSULTATION
            </NavLink>
            <div className="flex items-center relative z-50">
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
                <FaSearch className="h-4 w-4 text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out" />
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
            <button onClick={handleLogout} className="flex items-center ml-4">
              <FaSignOutAlt className="h-6 w-6 text-gray-300 hover:text-blue-300 transition duration-300 ease-in-out" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarAssistant;
