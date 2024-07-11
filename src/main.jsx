// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import HomePage from './HomePage';
import Navbar from './Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage /> 
    {/* <Navbar/> */}
  </React.StrictMode>
);
