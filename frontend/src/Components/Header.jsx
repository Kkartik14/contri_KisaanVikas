import React from 'react';
import './Header.css';
const Header = ({ videoSrc }) => {
 return (
    <header className="header">
      <video src={process.env.PUBLIC_URL + videoSrc} autoPlay muted loop className="headerVideo" />
    </header>
 );
};

export default Header;
