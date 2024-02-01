import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa'; // Importa el ícono 'X'
import styles from './CursosWindow.module.css';

const CursosWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={animationProps} className={styles.cursosWindow}>
      <div className={styles.header}>
        <span>Mis Cursos</span>
        {/* Utiliza el ícono 'FaTimes' para el botón de cerrar */}
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.content}>
        {/* Contenido de la ventana de cursos */}
        <p>Aquí puedes mostrar información sobre tus cursos.</p>
      </div>
    </animated.div>
  );
};

export default CursosWindow;
