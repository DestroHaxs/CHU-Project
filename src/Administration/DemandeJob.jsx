import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

const DemandeJob = () => {
  const [demandes, setDemandes] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState({});

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

  const toggleDetails = (id) => {
    setVisibleDetails(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarAdmin />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Demandes d'emploi</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b">Prénom</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Téléphone</th>
                <th className="py-2 px-4 border-b">CIN</th>
                <th className="py-2 px-4 border-b">Poste</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {demandes.map((demande) => (
                <React.Fragment key={demande.id}>
                  <tr className="text-left">
                    <td className="py-2 px-4 border-b">{demande.nom}</td>
                    <td className="py-2 px-4 border-b">{demande.prenom}</td>
                    <td className="py-2 px-4 border-b">{demande.email}</td>
                    <td className="py-2 px-4 border-b">{demande.phone}</td>
                    <td className="py-2 px-4 border-b">{demande.cin}</td>
                    <td className="py-2 px-4 border-b">{demande.poste}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => toggleDetails(demande.id)}
                      >
                        {visibleDetails[demande.id] ? 'Cacher' : 'Voir'} Détails
                      </button>
                    </td>
                  </tr>
                  {visibleDetails[demande.id] && (
                    <tr className="text-left">
                      <td colSpan="7" className="py-2 px-4 border-b">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <p><strong>CV:</strong> <a href={`http://localhost:8080/api/employee/${demande.id}/cv`} download className="text-blue-500 hover:underline">Télécharger</a></p>
                          <p><strong>Assurance:</strong> <a href={`http://localhost:8080/api/employee/${demande.id}/assurance`} download className="text-blue-500 hover:underline">Télécharger</a></p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DemandeJob;
