// StartMenu.jsx
import React from 'react';
import styles from './StartMenu.module.css';

const StartMenu = ({ onClose }) => {
  return (
    <div className={styles.startMenu}>
      {/* Contenido del menú de inicio */}
      <div className={styles.menuContent}>
        {/* Puedes agregar elementos del menú aquí */}
        <p>Programas</p>
        <p>Documentos</p>
        <p>Configuración</p>
      </div>
      {/* Botón para cerrar el menú */}
      <button className={styles.closeButton} onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
};

export default StartMenu;
