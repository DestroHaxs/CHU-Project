import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './HomePage';
import NosComites from './NosComites';
import Organigramme from './Organigramme';
import Stage from './Stage';
import Job from './Job';
import ChartePatient from './ChartePatient';
import Consultation from './Consultation';
import VisiterPatient from './VisiterPatient';
import SoinsSpecialites from './SoinsSpecialites';
import RdvOnline from './RdvOnline';
import QuiNous from './QuiNous';
import LoginPage from './Administration/LoginPage';
import HomePageAdmin from './Administration/HomePageAdmin';
import HomePageAssistant from './Administration/HomePageAssistant';
import { UserContext } from './UserContext';
import ScrollToTop from './ScrollToTop';
import DemandeStage from './Administration/DemandeStage';
import DemandeJob from './Administration/DemandeJob';
import RdvAdmin from './Administration/RdvAdmin';
import AddUser from './Administration/AddUser';
import ManageUsers from './Administration/ManageUsers';

function App() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <UserContext.Provider value={{ isConnected: true }}>
      <ScrollToTop />
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
            <Route path="/quinous" element={<QuiNous />} />
            <Route path="/login" element={<LoginPage />} />
            {user && user.role === 'ADMIN' ? (
              <>
                <Route path="/homepageadmin" element={<HomePageAdmin />} />
                <Route path="/demandestage" element={<DemandeStage />} />
                <Route path="/demandejob" element={<DemandeJob />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/manageusers" element={<ManageUsers />} />
              </>
            ) : user && user.role === 'ASSISTANT' ? (
              <>
                <Route path="/homepageassistant/:specialite" element={<HomePageAssistant />} />
                <Route path="/rdvadmin" element={<RdvAdmin />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </UserContext.Provider>
  );
}

export default App;
