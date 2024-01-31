// StartMenu.jsx
import React, { useRef } from 'react';
import styles from './StartMenu.module.css';

const StartMenu = ({ onClose }) => {
  const openLink = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer'; // Añadir noreferrer por seguridad
    link.click();
  };

  const openLinkedIn = () => {
    openLink('https://www.linkedin.com/in/franco-tejada/');
  };

  const openGitHub = () => {
    openLink('https://github.com/FrancoNos');
  };

const downloadCV = () => {
  const cvPath = 'https://drive.google.com/uc?id=1p2srSttH3NNWQM161glDxIDcxQlFbpdz';

  const link = document.createElement('a');
  link.href = cvPath;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
};


  return (
    <div className={styles.startMenu}>
      <div className={styles.menuContent}>
        <p onClick={openLinkedIn}>LinkedIn</p>
        <p onClick={openGitHub}>GitHub</p>
        <p onClick={downloadCV}>Descargar CV</p>
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
};

export default StartMenu;
