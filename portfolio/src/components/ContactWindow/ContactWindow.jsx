import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import styles from './ContactWindow.module.css';

const ContactWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const [formData, setFormData] = useState({
    name: '', // Agrega el campo 'name' al formulario
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuración para Email.js (reemplaza con tus propias credenciales y Service ID)
    const emailjsConfig = {
      serviceId: 'service_t55pbbv',
      templateId: 'template_4vru0of',
      userId: '0hUk-nMItE2AJKP6d',
    };

    // Crea un objeto con los datos del formulario y otros campos necesarios para el template
    const emailData = {
      ...formData,
    };

    // Envía el formulario utilizando Email.js
    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      emailData,
      emailjsConfig.userId
    )
    .then((response) => {
      console.log('Email enviado con éxito:', response);
    })
    .catch((error) => {
      console.error('Error al enviar el email:', error);
    });
  };

  return (
    <animated.div style={animationProps} className={styles.contactWindow}>
      <div className={styles.header}>
        <span>Contacto</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Asunto:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </animated.div>
  );
};

export default ContactWindow;
