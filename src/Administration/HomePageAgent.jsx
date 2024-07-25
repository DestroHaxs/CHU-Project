import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarAgent from './NavbarAgent';
import Socials from '../Socials';
import Footer from '../Footer';

function HomePageAgent() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <NavbarAgent />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20 flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-left">Espace Agent</h1>
        {/* Ajoutez le contenu spécifique pour l'espace agent ici */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePageAgent;
