// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import NosComites from './NosComites';
import Navbar from './Navbar';
import Socials from './Socials';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NosComites />
    {/* <Navbar/> */}
    {/* <Socials/> */}
  </React.StrictMode>
);
