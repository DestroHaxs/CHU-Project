import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarAssistant from './NavbarAssistant';
import '../index.css';

const HomePageAssistant = () => {
  const { specialite } = useParams();

  useEffect(() => {
    console.log('HomePageAssistant rendered with speciality:', specialite);
  }, [specialite]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <NavbarAssistant />
      <div className="flex-grow flex flex-col items-center justify-center space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-blue-900">
            Bienvenue Assistant
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Spécialité : {specialite}
          </h2>
          <p className="text-gray-600">
            Ceci est la page d'accueil de l'assistant. Ici, vous pouvez consulter des informations importantes relatives à votre spécialité.
          </p>
        </div>
        <div className="bg-red-100 p-8 rounded-lg shadow-lg w-3/4 max-w-2xl text-center border-2 border-red-600">
          <h2 className="text-2xl font-bold mb-4 text-red-800">
            Urgent
          </h2>
          <p className="text-red-700">
            Veuillez vérifier vos consultations dès que possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageAssistant;
