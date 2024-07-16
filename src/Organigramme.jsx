import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';
import organigrammeImg from './assets/organigramme.png'; 

function Organigramme() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20 flex-grow"> 
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Organigramme</h1>
        <div className="flex justify-center my-8">
          <div className="relative">
            <img src={organigrammeImg} alt="Organigramme" className="rounded-lg shadow-lg max-w-[70%] mx-auto h-auto" />
            <div className="absolute inset-0 border-4 border-blue-100 rounded-lg pointer-events-none"></div>
          </div>
        </div>
        <p className="text-center text-gray-700 mt-4">
          L'organigramme ci-dessus montre la structure organisationnelle de notre centre hospitalier. Chaque département et rôle est interconnecté pour assurer le bon fonctionnement et l'efficacité dans la prestation des services médicaux.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Organigramme;
