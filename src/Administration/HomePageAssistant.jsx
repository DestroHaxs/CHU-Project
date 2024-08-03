import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarAssistant from './NavbarAssistant';

const HomePageAssistant = () => {
  const { specialite } = useParams();

  useEffect(() => {
    console.log('HomePageAssistant rendered with speciality:', specialite);
  }, [specialite]);

  return (
    <div>
      <NavbarAssistant />
      <div style={{ padding: '100px 20px' }}>
        <h1>Welcome Assistant - Speciality: {specialite}</h1>
        <p>This is the assistant homepage content.</p>
      </div>
    </div>
  );
};

export default HomePageAssistant;
