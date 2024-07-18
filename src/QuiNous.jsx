// QuiNous.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';

function QuiNous() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20 flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-left">Statut juridique</h1>
        <p className="text-lg text-gray-700 mb-4">
          Le Centre Hospitalo-Universitaire Mohammed VI d'Oujda est un établissement public, doté de la personnalité morale et d'une autonomie financière.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Créé par « Décret n°2-13- 407 du 1er Ramadan 1434 (10 Juillet 2013) modifiant et complétant le décret n°2-86- 74 du 20 Kaad 1408 (05 Juillet 1988) pris pour l'application de la loi n°37-80 relative aux centres hospitaliers » ; notamment ART.2, et le « Dahir n°1-13- 06 du 27 Rabi I 1434 (08 Février 2013) portant promulgation de la loi n°83-12 complétant la loi n° 37-80 relative aux centres hospitaliers ».
        </p>

        <h2 className="text-3xl font-bold mb-4 text-blue-900 text-left">Mission de CHU</h2>
        <p className="text-lg text-gray-700 mb-4">
          Le centre hospitalier Mohammed VI Oujda, a pour mission de :
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Dispenser les soins médicaux ;</li>
          <li>Effectuer des travaux de recherche médicale, paramédicale et de santé en général dans le strict respect de l'intégrité physique, morale, et de la dignité des usagers ;</li>
          <li>Participer à l'enseignement clinique universitaire et post-universitaire médical et pharmaceutique et à la formation du personnel infirmier et technicien ;</li>
          <li>Concourir à la réalisation des objectifs en matière de santé fixés par le département de tutelle.</li>
        </ul>
        <h2 className="text-3xl font-bold mb-4 text-blue-900 text-left">En savoir plus sur nos services et notre organisation</h2>
        <div className="flex flex-wrap justify-start gap-4 mt-8">
          <NavLink to="/soins">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Soins et spécialités
            </button>
          </NavLink>
          <NavLink to="/organigramme">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Organigramme
            </button>
          </NavLink>
          <NavLink to="/noscomites">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Nos Comités
            </button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QuiNous;
