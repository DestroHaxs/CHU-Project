import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './HomePage';
import NosComites from './NosComites';
import Organigramme from './Organigramme';
import Stage from './Stage';
import Job from './Job';
import ChartePatient from './ChartePatient';
import { UserContext } from './UserContext';
import  Consultation from './Consultation';
import VisiterPatient from './VisiterPatient';
import SoinsSpecialites from './SoinsSpecialites';
import RdvOnline from './RdvOnline';

function App() {
  const location = useLocation();

  return (
    <UserContext.Provider value={{ isConnected: true }}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/NosComites" element={<NosComites />} />
            <Route path="/Organigramme" element={<Organigramme />} />
            <Route path="/stage" element={<Stage />} />
            <Route path="/job" element={<Job />} />
            <Route path="/chartepatient" element={<ChartePatient />} />
            <Route path="/Consultation" element={<Consultation />} />
            <Route path="/VisiterPatient" element={<VisiterPatient />} />
            <Route path="/soins" element={<SoinsSpecialites />} />
            <Route path="/rdv" element={<RdvOnline />} />

          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </UserContext.Provider>
  );
}

export default App;
