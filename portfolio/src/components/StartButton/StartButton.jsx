// StartButton.js
import React from 'react';
import styles from './StartButton.module.css';
import Inicio from "/images/Inicio.jpg";

const StartButton = () => {
  return (
    <div className={styles.startButton}>
      <img src={Inicio} alt="Inicio" className={styles.startIcon} />
    </div>
  );
};

export default StartButton;
