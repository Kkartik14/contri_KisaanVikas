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
      <div className="content-container">
        <div className="turning-page-container">
          <TurningPage />
        </div>
        <div className="description-container">
          <h2><span>WELCOME TO </span><span className="green-text">KISAAN VIKAS</span></h2>
          <h3><span className="tagline-text">TAGLINE TAGLINE WELCOME TO KISAAN VIKAS</span></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id est.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id est.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id est.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
