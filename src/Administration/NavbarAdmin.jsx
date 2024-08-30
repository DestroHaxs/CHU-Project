import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import chuLogo from '../assets/logo_accueil.png';
import { FaSearch, FaSignOutAlt, FaCaretDown } from 'react-icons/fa';

function NavbarAdmin() {
  const [showSearch, setShowSearch] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const sampleData = [
    { id: 1, name: 'Stage', path: '/demandestage' },
    { id: 2, name: 'Emploi', path: '/demandejob' },
    { id: 3, name: 'Ajouter Utilisateur', path: '/adduser' },
    { id: 4, name: 'Gérer Utilisateur', path: '/manageusers' }
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
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.role === 'ADMIN') {
        navigate('/homepageadmin');
      } else if (user.role === 'ASSISTANT') {
        navigate(`/homepageassistant/${user.specialite}`);
      }
    } else {
      navigate('/login');
    }
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
            <div className="relative group">
              <div className="flex items-center text-sm font-bold text-white hover:text-blue-300 transition duration-300 ease-in-out cursor-pointer">
                UTILISATEURS <FaCaretDown className="ml-1" />
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out invisible group-hover:visible">
                <NavLink
                  to="/adduser"
                  className="block px-4 py-2 text-blue-900 text-lg hover:bg-gray-200 transition duration-200 ease-in-out"
                >
                  Ajouter Utilisateur
                </NavLink>
                <NavLink
                  to="/manageusers"
                  className="block px-4 py-2 text-blue-900 text-lg hover:bg-gray-200 transition duration-200 ease-in-out"
                >
                  Gérer Utilisateur
                </NavLink>
              </div>
            </div>
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
