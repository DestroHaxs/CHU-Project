import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './HomePage';
import NosComites from './NosComites';
import Organigramme from './Organigramme';
import Stage from './Stage';
import Job from './Job';
import { UserContext } from './UserContext';

function App() {
  const location = useLocation();

  return (
    <UserContext.Provider value={{ isConnected: true }}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/noscomites" element={<NosComites />} />
            <Route path="/organigramme" element={<Organigramme />} />
            <Route path="/stage" element={<Stage />} />
            <Route path="/job" element={<Job />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </UserContext.Provider>
  );
}

export default App;
