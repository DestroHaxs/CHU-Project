// src/HomePage.jsx
import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header>
        <div className="bg-blue-900 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-6">
            <div className="flex items-center space-x-4">
              <img src="logo_chu_oujda.png" alt="Logo CHU Oujda" className="h-12" />
              <span className="text-xl font-bold">CHU OUJDA</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">LE CHU</a></li>
                <li><a href="#" className="hover:underline">PATIENTS & VISITEURS</a></li>
                <li><a href="#" className="hover:underline">STAGE & RECRUTEMENT</a></li>
                <li><a href="#" className="hover:underline">NOS COMITES</a></li>
                <li><a href="#" className="hover:underline">CONTACT</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="bg-gray-100 text-center py-16">
          <h1 className="text-3xl font-bold text-blue-900">Bienvenue sur le site du CHU de Oujda, votre hôpital public...</h1>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Découvrez le CHU</button>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <section className="content">
          <img src="hospital.jpg" alt="Vue aérienne du CHU de Oujda" className="w-full rounded" />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
