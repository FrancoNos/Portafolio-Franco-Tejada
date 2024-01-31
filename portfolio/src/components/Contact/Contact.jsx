// IconoContacto.jsx
import React from 'react';
import iconoContacto from "../../../public/images/contact.png";
import styles from './Contact.module.css'; // Asegúrate de ajustar la ruta según la ubicación de tu módulo de estilos

const IconoContacto = ({ onClick }) => {
  return (
    <div className={styles.iconoContactoContainer} onClick={onClick}>
      <img src={iconoContacto} alt="Icono Contacto" className={styles.iconoContacto} />
      <p className={styles.label}>Contacto</p>
    </div>
  );
};

export default IconoContacto;
