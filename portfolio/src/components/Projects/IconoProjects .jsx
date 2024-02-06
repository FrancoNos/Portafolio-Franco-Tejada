import React from 'react';
import iconoProjectsImage from "../../../public/images/projects.png";
import styles from './IconoProjects.module.css';

const IconoProjects = ({ onClick }) => {
  return (
    <div className={styles.iconoProjectsContainer} onClick={onClick}>
      <img src={iconoProjectsImage} alt="Icono Projects" className={styles.iconoProjects} />
      <p className={styles.label}>Proyectos</p>
    </div>
  );
};

export default IconoProjects;
