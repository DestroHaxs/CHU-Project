import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';
import chartePatientPdf from './assets/charte_patient.pdf'; // Assurez-vous que le chemin vers le PDF est correct

function ChartePatient() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20 flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-left">Charte du patient</h1>
        <div className="flex justify-center my-8">
          <div className="relative w-3/4">
            <iframe
              src={chartePatientPdf}
              width="100%"
              height="600px"
              className="border border-gray-300 shadow-lg rounded-lg"
              title="Charte du patient"
            ></iframe>
            <div className="absolute inset-0 border-4 border-blue-100 rounded-lg pointer-events-none"></div>
          </div>
        </div>
        <p className="text-center text-gray-700 mt-4">
          La charte du patient ci-dessus montre les droits et responsabilités des patients au sein de notre centre hospitalier. Chaque point est important pour assurer la qualité des soins et la satisfaction des patients.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default ChartePatient;