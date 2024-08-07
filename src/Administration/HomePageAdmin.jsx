import React, { useEffect, useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import axios from 'axios';
import '../index.css';

const HomePageAdmin = () => {
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.role === 'ADMIN') {
      axios.get(`http://localhost:8080/api/auth/${user.id}`)
        .then(response => {
          const fetchedUser = response.data;
          setAdminName(fetchedUser.name);
        })
        .catch(error => {
          console.error('There was an error fetching the user data:', error);
        });
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <NavbarAdmin />
      <div className="flex-grow flex flex-col items-center justify-center space-y-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-blue-900">
            Bienvenue Admin
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Nom : {adminName}
          </h2>
          <p className="text-gray-600">
            Ceci est la page d'accueil de l'administrateur. Ici, vous pouvez gérer vos tâches et consulter des informations importantes relatives à votre rôle.
          </p>
        </div>
        <div className="bg-red-100 p-8 rounded-lg shadow-lg w-3/4 max-w-2xl text-center border border-red-500">
          <p className="text-red-700 text-xl font-semibold">
            Urgent: Veuillez vérifier vos demandes d'emploi et de stage dès que possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageAdmin;
