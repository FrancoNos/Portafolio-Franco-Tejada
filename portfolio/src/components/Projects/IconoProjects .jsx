// IconoProjects.js
import React from 'react';
import iconoProjectsImage from "../../../public/images/projects.png";
import styles from './IconoProjects.module.css'; // Asegúrate de ajustar la ruta según la ubicación de tu módulo de estilos

const IconoProjects = ({ onClick }) => {
  return (
    <div className={styles.iconoProjectsContainer} onClick={onClick}>
      <img src={iconoProjectsImage} alt="Icono Projects" className={styles.iconoProjects} />
    </div>
  );
};

export default IconoProjects;
