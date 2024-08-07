import React, { useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('ASSISTANT');
  const [specialite, setSpecialite] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const specialiteOptions = ['Cardiologie', 'Dermatologie', 'Neurologie'];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = {
        name,
        email,
        password,
        role,
        specialite: role === 'ASSISTANT' ? specialite : null,
      };
      await axios.post('http://localhost:8080/api/users', newUser);
      setPopupMessage('User added successfully');
      setShowPopup(true);
      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      setRole('ASSISTANT');
      setSpecialite('');
    } catch (error) {
      console.error('Error adding user:', error);
      setPopupMessage('Failed to add user');
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarAdmin />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Ajouter un utilisateur</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="ASSISTANT">Assistant</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            {role === 'ASSISTANT' && (
              <div className="mb-4">
                <label className="block text-gray-700">Specialité</label>
                <select
                  className="w-full px-3 py-2 border rounded"
                  value={specialite}
                  onChange={(e) => setSpecialite(e.target.value)}
                >
                  <option value="">Sélectionnez une spécialité</option>
                  {specialiteOptions.map((specialite) => (
                    <option key={specialite} value={specialite}>{specialite}</option>
                  ))}
                </select>
              </div>
            )}
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
              Add User
            </button>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg z-50">
            <p>{popupMessage}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"></div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
