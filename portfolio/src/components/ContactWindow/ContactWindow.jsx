import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import styles from './ContactWindow.module.css';
import useMoveWindow from '../useMoveWidow';
import emailjs from 'emailjs-com'; 

const ContactWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'contactWindow', focus: () => {}, onClose }, windowRef);

  const [formData, setFormData] = useState({
    name: '',
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
  
    const emailjsConfig = {
      serviceId: 'service_t55pbbv',
      templateId: 'template_4vru0of',
      userId: '0hUk-nMItE2AJKP6d',
    };
  
    const emailData = {
      ...formData,
    };
  
    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      emailData,
      emailjsConfig.userId
    )
      .then((response) => {
        alert('¡Email enviado con éxito!');
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        alert('¡Error al enviar el email!');
      });
  };
  

  return (
    <animated.div ref={windowRef} style={animationProps} className={styles.contactWindow}>
      <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
        <span>Contacto</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
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

            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className={styles.buttonEnviar} type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </animated.div>
  );
};

export default ContactWindow;
