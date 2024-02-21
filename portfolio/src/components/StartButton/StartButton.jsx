import React, { useState, useEffect, useRef } from 'react';
import styles from './StartButton.module.css';
import Inicio from "/images/Inicio.jpg";
import StartMenu from '../StartMenu/StartMenu';

const StartButton = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const startButtonRef = useRef(null);

  const toggleStartMenu = () => {
    setIsStartMenuOpen((prev) => !prev);
  };

  const handleDocumentClick = (event) => {
    if (startButtonRef.current && !startButtonRef.current.contains(event.target)) {
      setIsStartMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className={styles.startButton} ref={startButtonRef}>
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
