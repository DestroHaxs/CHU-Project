import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

const DemandeJob = () => {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/employee');
        setDemandes(response.data);
      } catch (error) {
        console.error('Error fetching demandes:', error);
      }
    };

    fetchDemandes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarAdmin />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Demandes d'emploi</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b">Prénom</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Téléphone</th>
                <th className="py-2 px-4 border-b">CIN</th>
                <th className="py-2 px-4 border-b">Poste</th>
                <th className="py-2 px-4 border-b">CV</th>
                <th className="py-2 px-4 border-b">Assurance</th>
              </tr>
            </thead>
            <tbody>
              {demandes.map((demande) => (
                <tr key={demande.id}>
                  <td className="py-2 px-4 border-b">{demande.nom}</td>
                  <td className="py-2 px-4 border-b">{demande.prenom}</td>
                  <td className="py-2 px-4 border-b">{demande.email}</td>
                  <td className="py-2 px-4 border-b">{demande.phone}</td>
                  <td className="py-2 px-4 border-b">{demande.cin}</td>
                  <td className="py-2 px-4 border-b">{demande.poste}</td>
                  <td className="py-2 px-4 border-b">
                    <a href={`http://localhost:8080/api/employee/${demande.id}/cv`} download className="text-blue-500 hover:underline">Télécharger</a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a href={`http://localhost:8080/api/employee/${demande.id}/assurance`} download className="text-blue-500 hover:underline">Télécharger</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DemandeJob;
