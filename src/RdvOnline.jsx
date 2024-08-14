import React, { useState } from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';
import axios from 'axios';

const RdvOnline = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [cin, setCin] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/rdv', {
        nom,
        prenom,
        email,
        phone,
        date,
        specialite,
        cin
      });
      setMessage('Votre demande a été envoyée avec succès.');
    } catch (error) {
      setMessage('Erreur lors de l\'envoi de la demande.');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-center">Demande de Rendez-vous</h1>
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Numéro de téléphone
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date souhaitée
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialite">
              Type de maladie
            </label>
            <select
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="specialite"
              value={specialite}
              onChange={(e) => setSpecialite(e.target.value)}
              required
            >
              <option value="">Sélectionnez une spécialité</option>
              <option value="Cardiologie">Cardiologie</option>
              <option value="Dermatologie">Dermatologie</option>
              <option value="Neurologie">Neurologie</option>
              {/* Add other specialities here */}
            </select>
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
};

export default RdvOnline;
