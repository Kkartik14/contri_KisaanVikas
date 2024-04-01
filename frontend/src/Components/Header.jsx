import React from 'react';
import styles from './Styles/Header.module.css';

const { HeaderDiv, videoHeader } = styles;

const Header = ({ videoSrc }) => {
 return (
    <div className={HeaderDiv}>
      <video
        className={videoHeader}
        autoPlay
        muted
        loop
        src={videoSrc}
      />
    </div>
 );
};

export default Header;
