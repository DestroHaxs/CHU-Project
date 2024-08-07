import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import { FaTrashAlt } from 'react-icons/fa';

const DemandeStage = () => {
  const [demandes, setDemandes] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/stagiaire');
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

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/stagiaire/${deleteId}`);
      setDemandes(demandes.filter(demande => demande.id !== deleteId));
      setShowConfirm(false);
      setDeleteId(null);
    } catch (error) {
      console.error('Error deleting demande:', error);
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarAdmin />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Demandes de Stage</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b">Prénom</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Téléphone</th>
                <th className="py-2 px-4 border-b">CIN</th>
                <th className="py-2 px-4 border-b">CNE</th>
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
                    <td className="py-2 px-4 border-b">{demande.cne}</td>
                    <td className="py-2 px-4 border-b flex items-center">
                      <button
                        className="text-blue-500 hover:underline mr-2"
                        onClick={() => toggleDetails(demande.id)}
                      >
                        {visibleDetails[demande.id] ? 'Cacher' : 'Voir'} Détails
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteClick(demande.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                  {visibleDetails[demande.id] && (
                    <tr className="text-left">
                      <td colSpan="7" className="py-2 px-4 border-b">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <p><strong>CV:</strong> <a href={`http://localhost:8080/api/stagiaire/${demande.id}/cv`} download className="text-blue-500 hover:underline">Télécharger</a></p>
                          <p><strong>Assurance:</strong> <a href={`http://localhost:8080/api/stagiaire/${demande.id}/assurance`} download className="text-blue-500 hover:underline">Télécharger</a></p>
                          <p><strong>Attestation:</strong> <a href={`http://localhost:8080/api/stagiaire/${demande.id}/attestation`} download className="text-blue-500 hover:underline">Télécharger</a></p>
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
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirmer la suppression</h2>
            <p className="mb-4">Êtes-vous sûr de vouloir supprimer cet élément ?</p>
            <div className="flex justify-end">
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemandeStage;
