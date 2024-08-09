import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAssistant from './NavbarAssistant';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app root element for accessibility

function RdvAdmin() {
  const [rdvs, setRdvs] = useState([]);
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Docteur Ahmed' },
    { id: 2, name: 'Docteur Fatima' },
    { id: 3, name: 'Docteur Khalid' },
    { id: 4, name: 'Docteur Leila' },
    { id: 5, name: 'Docteur Youssef' },
  ]); // Liste des médecins arabes écrits en français
  const [selectedRdv, setSelectedRdv] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(''); // New state for selected doctor
  const [message, setMessage] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [updatedTime, setUpdatedTime] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchRdvs();
  }, []);

  const fetchRdvs = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/rdv?specialite=${user.specialite}`);
      setRdvs(response.data);
    } catch (error) {
      console.error('Error fetching rdvs:', error);
    }
  };

  const handleShowDetails = (rdv) => {
    setSelectedRdv(rdv);
    setUpdatedDate(rdv.date);
    setUpdatedTime(rdv.time);
    setSelectedDoctor(rdv.doctor || ''); // Set the selected doctor
  };

  const handleAcceptRdv = async () => {
    if (selectedRdv) {
      try {
        await axios.put(`http://localhost:8080/api/rdv/${selectedRdv.id}`, {
          ...selectedRdv,
          date: updatedDate,
          time: updatedTime,
          doctor: selectedDoctor, // Include selected doctor
        });
        setMessage('Le rendez-vous a été accepté et un email a été envoyé avec succès!');
        setShowMessage(true);
        setRdvs(rdvs.filter(rdv => rdv.id !== selectedRdv.id)); // Remove the RDV after acceptance
        setSelectedRdv(null); // Clear selected RDV
      } catch (error) {
        console.error('Error updating rdv:', error);
        setMessage('Erreur lors de l\'acceptation du rendez-vous.');
        setShowMessage(true);
      }
    }
  };

  const handleRefuseRdv = async () => {
    if (selectedRdv) {
      try {
        await axios.post(`http://localhost:8080/api/rdv/${selectedRdv.id}/refuse`);
        setMessage('Le rendez-vous a été refusé et un email a été envoyé avec succès!');
        setShowMessage(true);
        setRdvs(rdvs.filter(rdv => rdv.id !== selectedRdv.id)); // Remove the RDV after refusal
        setSelectedRdv(null); // Clear selected RDV
      } catch (error) {
        console.error('Error refusing rdv:', error);
        setMessage('Erreur lors du refus du rendez-vous.');
        setShowMessage(true);
      }
    }
  };

  const closeModal = () => {
    setShowMessage(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarAssistant />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Gestion des Rendez-vous</h1>
        <Modal
          isOpen={showMessage}
          onRequestClose={closeModal}
          contentLabel="Message Modal"
          className="bg-white p-6 rounded-lg shadow-md mx-auto my-auto w-1/3"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h2 className="text-lg font-semibold mb-4">Message</h2>
          <p className="mb-4">{message}</p>
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            OK
          </button>
        </Modal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rdvs.map((rdv) => (
            <motion.div
              key={rdv.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-lg font-semibold">Nom: {rdv.nom}</h2>
              <h2 className="text-lg font-semibold">Prénom: {rdv.prenom}</h2>
              <p>Date: {rdv.date}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                  onClick={() => handleShowDetails(rdv)}
                >
                  Voir Détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedRdv && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-6 rounded-lg shadow-md mt-6"
            >
              <h2 className="text-lg font-semibold">Détails du Rendez-vous</h2>
              <p><strong>Nom:</strong> {selectedRdv.nom}</p>
              <p><strong>Prénom:</strong> {selectedRdv.prenom}</p>
              <p><strong>Email:</strong> {selectedRdv.email}</p>
              <p><strong>Téléphone:</strong> {selectedRdv.phone}</p>
              <p><strong>CIN:</strong> {selectedRdv.cin}</p>
              <p><strong>Date:</strong>
                <input
                  type="date"
                  value={updatedDate}
                  onChange={(e) => setUpdatedDate(e.target.value)}
                  className="ml-2 border border-gray-300 rounded px-2 py-1"
                />
              </p>
              <p><strong>Heure:</strong>
                <input
                  type="time"
                  value={updatedTime}
                  onChange={(e) => setUpdatedTime(e.target.value)}
                  className="ml-2 border border-gray-300 rounded px-2 py-1"
                />
              </p>
              <p><strong>Médecin:</strong>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="ml-2 border border-gray-300 rounded px-2 py-1"
                >
                  <option value="">Sélectionnez un médecin</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                  ))}
                </select>
              </p>
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
                  onClick={handleAcceptRdv}
                >
                  Accepter
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
                  onClick={handleRefuseRdv}
                >
                  Refuser
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default RdvAdmin;
