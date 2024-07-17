import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';   
import Socials from './Socials';
import Footer from './Footer';

function Consultation() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20 flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-left">Se rendre en consultation</h1>
        <div className="space-y-8">
          <div>
            <p>La première étape pour bénéficier d'une consultation est de se présenter à l'accueil du Centre de Consultations pour prendre un rendez-vous.</p>
            <p className="mt-4">Les pièces à fournir sont comme suit :</p>
            <ul className="list-disc list-inside mt-2">
              <li className="font-semibold">Pour les patients bénéficiant du régime d'assistance médicale RAMED :</li>
              <ul className="list-disc list-inside ml-4">
                <li>Copie de la CIN</li>
                <li>Copie de la carte RAMED</li>
                <li>La fiche de liaison ou bien l'ordonnance fournie par le Centre Hospitalier Régional (El farabi), en y indiquant le service ou la spécialité à consulter et les renseignements cliniques du patient.</li>
              </ul>
              <li className="font-semibold mt-4">Pour les patients mutualistes :</li>
              <ul className="list-disc list-inside ml-4">
                <li>Copie de la CIN</li>
                <li>Copie de la carte de la mutuelle</li>
                <li>L'ordonnance fournie par un centre hospitalier, une clinique ou un médecin, en y indiquant le service ou la spécialité à consulter et les renseignements cliniques du patient.</li>
              </ul>
              <li className="font-semibold mt-4">Pour les patients payants :</li>
              <ul className="list-disc list-inside ml-4">
                <li>Copie de la CIN</li>
                <li>L'ordonnance fournie par un centre hospitalier, une clinique ou un médecin, en y indiquant le service ou la spécialité à consulter et les renseignements cliniques du patient.</li>
              </ul>
            </ul>
            <p className="mt-4">Un bon de rendez-vous est délivré au patient.</p>
            <li className="font-semibold mt-4">Pour prendre un RDV en ligne :</li>
            <div className="mt-2">
                <NavLink to="/rdv">
                  <button className="text-xl font-semibold text-white bg-blue-700 hover:bg-blue-900 py-2 px-4 rounded mb-2 transition-colors duration-300">
                    Prendre un rendez-vous en ligne
                  </button>
                </NavLink>
                </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Le jour de la consultation</h2>
            <p>Le jour de la consultation, quatre étapes sont à franchir par le patient :</p>
            <ol className="list-decimal list-inside mt-2 ml-4">
              <li>Le patient est appelé à se présenter à l'accueil du Centre de Consultation pour vérification du bon de rendez-vous.</li>
              <li>Le patient se présente au Bureau d'Admission et de Facturation mené de son bon de rendez-vous, pour accomplir les formalités administratives relatives au paiement de la facture.</li>
              <li>Le patient se rend en consultation.</li>
              <li>Si le médecin traitant exige un autre rendez-vous, le patient est appelé à se présenter à l'accueil pour récupérer le bon du deuxième rendez-vous.</li>
            </ol>
            <p className="mt-4 text-orange-600 font-semibold">NB : Le patient est appelé à se présenter une heure avant le rendez-vous indiqué dans le bon de rendez-vous.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Consultation;
