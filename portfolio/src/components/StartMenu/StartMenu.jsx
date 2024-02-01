// StartMenu.jsx
import React, { useRef } from 'react';
import styles from './StartMenu.module.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";


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
        <p onClick={openLinkedIn}><FaLinkedin />LinkedIn</p>
        <p onClick={openGitHub}><FaGithub />GitHub</p>
        <p onClick={downloadCV}><FaBusinessTime />Descargar CV</p>
      </div>
     
    </div>
  );
};

export default StartMenu;
