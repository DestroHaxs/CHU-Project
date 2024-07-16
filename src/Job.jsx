import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';

function Job() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Demande d'emploi</h1>
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Votre email"
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assurance">
              Assurance (PDF)
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              id="assurance"
              accept=".pdf"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
              CV (PDF)
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              id="cv"
              accept=".pdf"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
              Photo (PNG)
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              id="photo"
              accept=".png"
            />
          </div>
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

export default Job;
