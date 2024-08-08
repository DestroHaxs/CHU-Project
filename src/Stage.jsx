import React, { useState } from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';
import axios from 'axios';

function Stage() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [cin, setCin] = useState('');
  const [cne, setCne] = useState('');
  const [service, setService] = useState(''); // New state for service
  const [assurance, setAssurance] = useState(null);
  const [cv, setCv] = useState(null);
  const [attestation, setAttestation] = useState(null);
  const [message, setMessage] = useState('');

  const services = [
    'Service Informatique',
    'Service Cardiologie',
    'Service Neurologie',
    'Service Oncologie',
    'Service Orthopédie',
    'Service Radiologie'
  ]; // Example list of services

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('prenom', prenom);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('cin', cin);
    formData.append('cne', cne);
    formData.append('service', service); // Append service
    formData.append('assurance', assurance);
    formData.append('cv', cv);
    formData.append('attestation', attestation);

    try {
      const response = await axios.post('http://localhost:8080/api/stagiaire', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Stagiaire added successfully:', response.data);
      setMessage('Votre demande a été envoyée avec succès.');
    } catch (error) {
      console.error('Error adding stagiaire:', error);
      setMessage('Il y a eu une erreur lors de l\'envoi de votre demande.');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Demande de Stage</h1>
        <form className="max-w-xl mx-auto bg-blue-50 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
              Nom
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prenom">
              Prénom
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Votre prénom"
              required
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
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
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              placeholder="Votre numéro de téléphone"
              required
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
              value={cin}
              onChange={(e) => setCin(e.target.value)}
              placeholder="Votre CIN"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cne">
              Code national étudiant (CNE)
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="cne"
              value={cne}
              onChange={(e) => setCne(e.target.value)}
              placeholder="Votre CNE"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
              Service
            </label>
            <select
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Sélectionnez un service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
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
              onChange={(e) => setAssurance(e.target.files[0])}
              required
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
              onChange={(e) => setCv(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attestation">
              Attestation scolaire ou copie du bac (PDF)
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              id="attestation"
              accept=".pdf"
              onChange={(e) => setAttestation(e.target.files[0])}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Soumettre
            </button>
          </div>
        </form>
        {message && (
          <div className="mt-4 p-4 text-center text-white bg-green-500 rounded-lg">
            {message}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Stage;
