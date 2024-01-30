import React from 'react';
import styles from './ProjectsWindow.module.css';

const ProjectsWindow = ({ onClose }) => {
  return (
    <div className={styles.projectsWindow}>
      <div className={styles.header}>
        <span>Proyectos</span>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className={styles.content}>
        {/* Contenido de la ventana de proyectos */}
        <p>Contenido de proyectos...</p>
      </div>
    </div>
  );
};

export default ProjectsWindow;
