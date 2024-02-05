// src/components/MobileMockup.js
import React from 'react';
import './mobile.css';

const MobileMockup = ({ children }) => {
  return (
    <div className="mobile-mockup">
      <div className="screen">{children}</div>
    </div>
  );
};

export default MobileMockup;

