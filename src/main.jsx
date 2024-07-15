// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import NosComites from './NosComites';
import Navbar from './Navbar';
import Socials from './Socials';
import HomePage from './HomePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage/>
    {/* <NosComites /> */}
    {/* <Navbar/> */}
    {/* <Socials/> */}
  </React.StrictMode>
);
