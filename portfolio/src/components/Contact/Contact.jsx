import React from 'react';
import iconoContacto from "../../../public/images/contact.png";
import styles from './Contact.module.css';
const IconoContacto = ({ onClick }) => {
  return (
    <div className={styles.iconoContactoContainer} onClick={onClick}>
      <img src={iconoContacto} alt="Icono Contacto" className={styles.iconoContacto} />
      <p className={styles.label}>Contacto</p>
    </div>
  );
};

export default IconoContacto;
