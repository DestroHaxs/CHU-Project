import React, { useEffect } from 'react';
import NavbarAdmin from './NavbarAdmin';

const HomePageAdmin = () => {
  useEffect(() => {
    console.log('HomePageAdmin rendered');
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <div style={{ padding: '100px 20px' }}>
        <h1>Welcome Admin</h1>
        <p>This is the admin homepage content.</p>
      </div>
    </div>
  );
};

export default HomePageAdmin;
