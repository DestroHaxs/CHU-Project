// src/HomePage.jsx
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> {/* Use the Navbar component */}
      <main className="container mx-auto px-6 py-8">
        <section className="content">
          <img src="hospital.jpg" alt="Vue aérienne du CHU de Oujda" className="w-full rounded" />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
