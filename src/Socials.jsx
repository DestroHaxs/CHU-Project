import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPlus, FaUserMd, FaProcedures, FaHospitalAlt, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';

function Socials() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="h-full w-16 bg-white flex flex-col items-center justify-between fixed top-0 left-0 z-40">
      <div className="flex flex-col items-center space-y-8 pt-52">
        <a href="https://web.facebook.com/CentreHospitalierUniversitaireMohammedViOujda/?ref=br_rs&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out text-blue-500 hover:text-blue-700">
          <FaFacebookF size={18} />
        </a>
        <a href="https://www.instagram.com/explore/locations/267684045/centre-hospitalier-universitaire-mohammed-vi-oujda/?hl=fr" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out text-blue-500 hover:text-blue-700">
          <FaInstagram size={18} />
        </a>
        <a href="https://www.linkedin.com/company/centre-hospitalier-universitaire-mohammed-vi/?trk=ppro_cprof&originalSubdomain=fr" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out text-blue-500 hover:text-blue-700">
          <FaLinkedinIn size={18} />
        </a>
        <a href="https://www.youtube.com/channel/UCqTdWob7LWaaGUi0biLBF3Q" target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out text-blue-500 hover:text-blue-700">
          <FaYoutube size={18} />
        </a>
        <div className="w-px h-16 bg-blue-500"></div>
      </div>
      {isHomePage ? (
        <Link to="acces-directs" smooth={true} duration={500} className="relative flex flex-col items-center justify-center bg-blue-500 text-white w-full h-56 hover:bg-blue-700 transition duration-300 ease-in-out mb-0 cursor-pointer">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 flex items-center">
            <span className="whitespace-nowrap text-sm font-bold">
              ACCÈS DIRECTS
            </span>
            <FaPlus className="ml-2 text-2xl font-bold" />
          </div>
        </Link>
      ) : (
        <div className="relative flex flex-col items-center justify-center bg-blue-500 text-white w-full h-56 hover:bg-blue-700 transition duration-300 ease-in-out mb-0 cursor-pointer group">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 flex items-center">
            <span className="whitespace-nowrap text-sm font-bold">
              ACCÈS DIRECTS
            </span>
            <FaPlus className="ml-2 text-2xl font-bold" />
          </div>
          <div className="absolute top-0 left-16 w-56 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 h-56">
            <ul className="flex flex-col h-full justify-around">
              <li className="px-4 py-2 hover:bg-blue-100 transition duration-200 ease-in-out">
                <NavLink to="/Consultation" className="text-blue-900 flex items-center">
                  <FaUserMd className="mr-2" /> Consultation
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 transition duration-200 ease-in-out">
                <NavLink to="/VisiterPatient" className="text-blue-900 flex items-center">
                  <FaProcedures className="mr-2" /> Visiter un patient
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 transition duration-200 ease-in-out">
                <NavLink 
                to="/Soins" 
                className="text-blue-900 flex items-center">
                  <FaHospitalAlt className="mr-2" /> Soins et spécialités
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 transition duration-200 ease-in-out">
                <NavLink to="/job" className="text-blue-900 flex items-center">
                  <FaBriefcase className="mr-2" /> Recrutement
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Socials;
