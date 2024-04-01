import React from 'react';
import TurningPage from '../Components/TurningPage';
import './Styles/MainPage.css';

const MainPage = () => {
 return (
    <div className="main-page">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="favicon.ico" alt="Logo" />
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#explore">Explore us</a>
          <a href="#forum">Information forum</a>
        </div>
      </nav>
      <div className="turning-page-container">
        <TurningPage />
      </div>
    </div>
 );
};

export default MainPage;
