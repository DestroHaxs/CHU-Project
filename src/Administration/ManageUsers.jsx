import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarAdmin from './NavbarAdmin';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/manage-users');
      setUsers(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/manage-users/${id}`);
      setPopupMessage('Utilisateur supprimé avec succès');
      setShowPopup(true);
      setShowDeleteConfirm(false);
      fetchUsers(); // Refresh the list of users
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      setPopupMessage('Échec de la suppression de l\'utilisateur');
      setShowPopup(true);
      setShowDeleteConfirm(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/manage-users/${editingUser.id}`, editingUser);
      setPopupMessage('Utilisateur mis à jour avec succès');
      setShowPopup(true);
      setEditingUser(null);
      fetchUsers(); // Refresh the list of users
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      setPopupMessage('Échec de la mise à jour de l\'utilisateur');
      setShowPopup(true);
    }
  };

  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    if (newRole === 'ADMIN') {
      setEditingUser({ ...editingUser, role: newRole, specialite: null });
    } else {
      setEditingUser({ ...editingUser, role: newRole });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarAdmin />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Gérer les utilisateurs</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Rôle</th>
                <th className="py-2 px-4 border-b">Spécialité</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-left">
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                  <td className="py-2 px-4 border-b">{user.specialite}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center space-x-2 justify-center">
                      <button
                        className="text-yellow-500 hover:text-yellow-700"
                        onClick={() => handleEdit(user)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => {
                          setDeleteUserId(user.id);
                          setShowDeleteConfirm(true);
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {editingUser && (
          <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Modifier l'utilisateur</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-gray-700">Nom</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mot de passe</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded"
                  value={editingUser.password}
                  onChange={(e) => setEditingUser({ ...editingUser, password: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Rôle</label>
                <select
                  className="w-full px-3 py-2 border rounded"
                  value={editingUser.role}
                  onChange={handleRoleChange}
                >
                  <option value="ASSISTANT">Assistant</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
              {editingUser.role === 'ASSISTANT' && (
                <div className="mb-4">
                  <label className="block text-gray-700">Spécialité</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    value={editingUser.specialite}
                    onChange={(e) => setEditingUser({ ...editingUser, specialite: e.target.value })}
                  />
                </div>
              )}
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Mettre à jour l'utilisateur
              </button>
            </form>
          </div>
        )}
      </div>
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
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="mr-2 bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => handleDelete(deleteUserId)}
              >
                Oui
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Non
              </button>
            </div>
          </div>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50"></div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
