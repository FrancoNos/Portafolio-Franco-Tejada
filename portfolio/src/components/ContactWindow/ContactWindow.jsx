// ContactWindow.js
import React from 'react';
import styles from './ContactWindow.module.css';

const ContactWindow = ({ onClose }) => {
  return (
    <div className={styles.contactWindow}>
      <div className={styles.header}>
        <span>Contacto</span>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className={styles.content}>
        {/* Contenido de la ventana de contacto */}
        <p>Puedes contactarme a través de:</p>
        <ul>
          <li>Correo electrónico: ejemplo@gmail.com</li>
          <li>Teléfono: (123) 456-7890</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactWindow;
