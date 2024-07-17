import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';
import visiteImg from './assets/Visite.png'; // Assurez-vous que le chemin vers l'image est correct

function VisiterPatient() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
      <Socials />
    <div className="container mx-auto px-6 py-4 mt-20 flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-left">Visiter un patient</h1>
        <div className="flex flex-col lg:flex-row justify-between items-center my-8">
          <div className="lg:w-1/2">
            <p className="text-lg mb-4">
              Dans le but de ne pas gêner le fonctionnement des services de soins et garantir le confort des patients hospitalisés, les visites ne sont autorisées que l'après-midi, de <span className="font-bold">14h30 à 16h</span>.
            </p>
            <h2 className="text-xl font-semibold mb-2">Les visiteurs doivent respecter les conditions suivantes :</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Deux visiteurs pour chaque malade</li>
              <li>Ne pas se faire accompagner d'enfants âgés de moins de 12 ans</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Les visiteurs sont priés de respecter les consignes suivantes :</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Respecter le repos et l'intimité des autres patients</li>
              <li>Observer un minimum de discrétion et de silence</li>
              <li>Maintenir la propreté des locaux</li>
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img src={visiteImg} alt="Visite" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VisiterPatient;