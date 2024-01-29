// SobreMi.js
import React from 'react';
import styles from './SobreMi.module.css';
import iconoSobreMi from "../../../public/images/papelera.png";

const SobreMi = ({ onClick }) => {
  return (
    <div className={styles.sobreMiContainer} onClick={onClick}>
      <img src={iconoSobreMi} alt="Icono Sobre Mí" className={styles.iconoSobreMi} />
    </div>
  );
};

export default SobreMi;
