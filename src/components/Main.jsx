import React from 'react';
import '@styles/Main.css';

const Main = ({ children }) => {
  return (
    <div className="Main">
      {children}
    </div>
  );
}

export default Main;