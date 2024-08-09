import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import { FaCheck, FaTimes, FaSave } from 'react-icons/fa'; // Imported FaSave

const DemandeStage = () => {
  const [demandes, setDemandes] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [action, setAction] = useState(null);
  const [actionId, setActionId] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [modifiedDates, setModifiedDates] = useState({}); // New state for modified dates

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

  const handleActionClick = (id, actionType) => {
    setActionId(id);
    setAction(actionType);
    setShowConfirm(true);
  };

  const handleDateChange = (id, dateType, value) => {
    setModifiedDates(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [dateType]: value,
      }
    }));
  };

  const handleSaveDates = async (id) => { // New function to save dates
    try {
      const { dateDebut, dateFin } = modifiedDates[id] || {};
      await axios.put(`http://localhost:8080/api/stagiaire/${id}/update-dates`, {
        dateDebut,
        dateFin
      });
      setPopupMessage('Les dates ont été enregistrées avec succès.');
      setShowPopup(true);
    } catch (error) {
      console.error('Error saving dates:', error);
      setPopupMessage("Erreur lors de l'enregistrement des dates.");
      setShowPopup(true);
    }
  };

  const handleConfirmAction = async () => {
    try {
      const { dateDebut, dateFin } = modifiedDates[actionId] || {};
      await axios.post(`http://localhost:8080/api/stagiaire/${actionId}/${action}`, {
        dateDebut,
        dateFin
      });
      setDemandes(demandes.filter(demande => demande.id !== actionId));
      setPopupMessage(`Le message a été envoyé avec succès.`);
      setShowPopup(true);
      setShowConfirm(false);
      setActionId(null);
    } catch (error) {
      console.error(`Error during ${action} action:`, error);
      setShowConfirm(false);
      setActionId(null);
    }
  };

  const handleCancelAction = () => {
    setShowConfirm(false);
    setActionId(null);
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
                    <td className="py-2 px-4 border-b flex items-center space-x-4">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => toggleDetails(demande.id)}
                      >
                        {visibleDetails[demande.id] ? 'Cacher' : 'Voir'} Détails
                      </button>
                      <button
                        className="text-green-500 hover:text-green-700"
                        onClick={() => handleActionClick(demande.id, 'accept')}
                      >
                        <FaCheck />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleActionClick(demande.id, 'decline')}
                      >
                        <FaTimes />
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
                          <div className="mt-4">
                            <label className="block text-gray-700">Date Début Souhaitée:</label>
                            <input
                              type="date"
                              value={modifiedDates[demande.id]?.dateDebut || demande.dateDebut}
                              onChange={(e) => handleDateChange(demande.id, 'dateDebut', e.target.value)}
                              className="border border-gray-300 p-2 rounded"
                            />
                          </div>
                          <div className="mt-4">
                            <label className="block text-gray-700">Date Fin Souhaitée:</label>
                            <input
                              type="date"
                              value={modifiedDates[demande.id]?.dateFin || demande.dateFin}
                              onChange={(e) => handleDateChange(demande.id, 'dateFin', e.target.value)}
                              className="border border-gray-300 p-2 rounded"
                            />
                          </div>
                          <div className="mt-4 flex justify-end">
                            <button
                              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                              onClick={() => handleSaveDates(demande.id)}
                            >
                              <FaSave className="mr-2" /> Enregistrer
                            </button>
                          </div>
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
            <h2 className="text-lg font-bold mb-4">Confirmer l'action</h2>
            <p className="mb-4">Êtes-vous sûr de vouloir {action === 'accept' ? 'accepter' : 'refuser'} cette demande de stage ?</p>
            <div className="flex justify-end">
              <button
                onClick={handleCancelAction}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmAction}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <p>{popupMessage}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setShowPopup(false)}
            >
              Fermer
            </button>
          </div>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default DemandeStage;
