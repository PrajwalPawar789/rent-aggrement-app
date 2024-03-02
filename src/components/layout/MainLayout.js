// MainLayout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 100px)', paddingBottom: '50px' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
