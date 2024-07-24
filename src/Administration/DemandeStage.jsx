import React from 'react';
import Navbar from '../Navbar'; 

const DemandeStage = () => {
  const demandes = [
    {
      id: 1,
      nom: 'Baba Ahmed',
      email: 'test@example.com',
      phone: '0612345678',
      date: '2024-07-24',
      cin: 'AB123456',
      cv: 'cv.pdf',
      assurance: 'assurance.pdf',
      attestation: 'attestation.pdf'
    },
    {
      id: 2,
      nom: 'Meziane Zaki',
      email: 'test@example.com',
      phone: '0698765432',
      date: '2024-07-23',
      cin: 'CD789012',
      cv: 'cv.pdf',
      assurance: 'assurance.pdf',
      attestation: 'attestation.pdf'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Demandes de Stage</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Nom</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Téléphone</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">CIN</th>
                <th className="py-2 px-4 border-b">CV</th>
                <th className="py-2 px-4 border-b">Assurance</th>
                <th className="py-2 px-4 border-b">Attestation Scolaire</th>
              </tr>
            </thead>
            <tbody>
              {demandes.map((demande) => (
                <tr key={demande.id}>
                  <td className="py-2 px-4 border-b">{demande.nom}</td>
                  <td className="py-2 px-4 border-b">{demande.email}</td>
                  <td className="py-2 px-4 border-b">{demande.phone}</td>
                  <td className="py-2 px-4 border-b">{demande.date}</td>
                  <td className="py-2 px-4 border-b">{demande.cin}</td>
                  <td className="py-2 px-4 border-b">
                    <a href={`path/to/cv/${demande.cv}`} download className="text-blue-500 hover:underline">Télécharger</a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a href={`path/to/assurance/${demande.assurance}`} download className="text-blue-500 hover:underline">Télécharger</a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <a href={`path/to/attestation/${demande.attestation}`} download className="text-blue-500 hover:underline">Télécharger</a>
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

export default DemandeStage;
