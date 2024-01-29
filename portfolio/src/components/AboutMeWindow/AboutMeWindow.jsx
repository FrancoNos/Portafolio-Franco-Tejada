// AboutMeWindow.js
import React from 'react';
import styles from './AboutMeWindow.module.css';

const AboutMeWindow = ({ onClose }) => {
  return (
    <div className={styles.aboutMeWindow}>
      <div className={styles.header}>
        <span>¡Sobre Mí!</span>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className={styles.content}>
       <p>gracais frosz</p>
      </div>
    </div>
  );
};

export default AboutMeWindow;
