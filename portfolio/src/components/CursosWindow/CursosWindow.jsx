// CursosWindow.js
import React from 'react';
import styles from './CursosWindow.module.css';

const CursosWindow = ({ onClose }) => {
  return (
    <div className={styles.cursosWindow}>
      <div className={styles.header}>
        <span>Mis Cursos</span>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className={styles.content}>
        {/* Contenido de la ventana de cursos */}
        <p>Aquí puedes mostrar información sobre tus cursos.</p>
      </div>
    </div>
  );
};

export default CursosWindow;
