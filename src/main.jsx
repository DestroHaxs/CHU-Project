import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './transitions.css';
import App from './app';
import ChartePatient from './ChartePatient';
import DemandeStage from './Administration/DemandeStage';
import DemandeJob from './Administration/DemandeJob';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <DemandeStage/> */}
      {/* <DemandeJob/> */}
    </Router>
  </React.StrictMode>
);

