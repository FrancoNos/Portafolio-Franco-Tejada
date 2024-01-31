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

  };

  return (
    <div className={styles.startButton} onClick={toggleStartMenu}>
      <img src={Inicio} alt="Inicio" className={styles.startIcon} />
      {isStartMenuOpen && <StartMenu onClose={toggleStartMenu} />}
    </div>
  );
};

export default StartButton;