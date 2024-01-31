// StartButton.js
import React, { useState } from 'react';
import styles from './StartButton.module.css';
import Inicio from "/images/Inicio.jpg";
import StartMenu from '../StartMenu/StartMenu';

const StartButton = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const toggleStartMenu = () => {
    const newIsStartMenuOpen = !isStartMenuOpen;
    setIsStartMenuOpen(newIsStartMenuOpen);

    // Agrega console.log para saber si está abriendo o cerrando
    console.log(`Start Menu ${newIsStartMenuOpen ? 'abierto' : 'cerrado'}`);
  };

  return (
    <div className={styles.startButton}>
      <img
        src={Inicio}
        alt="Inicio"
        className={styles.startIcon}
        onClick={toggleStartMenu}
      />
      {isStartMenuOpen && <StartMenu onClose={toggleStartMenu} />}
    </div>
  );
};

export default StartButton;
