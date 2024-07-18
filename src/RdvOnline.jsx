import React, { useState } from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';

function RdvOnline() {
  const [selectedCase, setSelectedCase] = useState('');

  const handleCaseChange = (e) => {
    setSelectedCase(e.target.value);
  };

  const validateTime = (e) => {
    const time = e.target.value;
    const [hours, minutes] = time.split(':').map(Number);
    if (hours < 8 || (hours === 8 && minutes < 30) || hours > 12 || (hours === 12 && minutes > 30)) {
      alert("Veuillez choisir une heure entre 8h30 et 12h30.");
      e.target.value = ''; // Reset the invalid time
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Prendre un RDV en ligne </h1>
        <form className="max-w-xl mx-auto bg-blue-50 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomPrenom">
              Nom et prénom
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="nomPrenom"
              placeholder="Votre nom et prénom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
              Numéro de téléphone
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              id="telephone"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cin">
              Code identité nationale (CIN)
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="cin"
              placeholder="Votre CIN"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateRdv">
              Date de rendez-vous
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              id="dateRdv"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heureRdv">
              Heure de rendez-vous ( Entre 8:30 et 12:30 )
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="time"
              id="heureRdv"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cinn">
              Carte d'identité nationale 
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              id="cinn"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="case">
              Choisir un cas
            </label>
            <select
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="case"
              value={selectedCase}
              onChange={handleCaseChange}
            >
              <option value="">Sélectionner un cas</option>
              <option value="ramed">RAMED</option>
              <option value="mutualiste">Mutualiste</option>
              <option value="payant">Payant</option>
            </select>
          </div>
          
          {selectedCase === 'ramed' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carteRamed">
                  Carte RAMED (PDF)
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="file"
                  id="carteRamed"
                  accept=".pdf"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ficheLiaison">
                  Fiche de liaison ou ordonnance (PDF)
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="file"
                  id="ficheLiaison"
                  accept=".pdf"
                />
              </div>
            </>
          )}

          {selectedCase === 'mutualiste' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carteMutuelle">
                  Carte de mutuelle (PDF)
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="file"
                  id="carteMutuelle"
                  accept=".pdf"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ordonnanceMutuelle">
                  Ordonnance (PDF)
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="file"
                  id="ordonnanceMutuelle"
                  accept=".pdf"
                />
              </div>
            </>
          )}

          {selectedCase === 'payant' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ordonnancePayant">
                  Ordonnance (PDF)
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="file"
                  id="ordonnancePayant"
                  accept=".pdf"
                />
              </div>
            </>
          )}

          

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RdvOnline;
