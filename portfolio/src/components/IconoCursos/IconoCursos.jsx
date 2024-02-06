import React from 'react';
import iconoCursosImage from "../../../public/images/cursos.png";
import styles from './IconoCursos.module.css';

const IconoCursos = ({ onClick }) => {
  return (
    <div className={styles.iconoCursosContainer} onClick={onClick}>
      <img src={iconoCursosImage} alt="Icono Cursos" className={styles.iconoCursos} />
      <p className={styles.label}>Habilidades</p>
    </div>
  );
};

export default IconoCursos;
