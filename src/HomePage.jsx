import React from 'react';
import Navbar from './Navbar'; 
import Socials from './Socials'; 

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> 
      <Socials /> 
    </div>
  );
}

export default HomePage;
