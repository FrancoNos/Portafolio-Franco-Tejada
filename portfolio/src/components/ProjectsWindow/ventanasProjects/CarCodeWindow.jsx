// CarCodeWindow.jsx
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import styles from './CarCodeWindow.module.css'; // Ajusta la ruta según sea necesario
import useMoveWindow from '../../useMoveWidow';

const CarCodeWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'carCodeWindow', focus: () => {}, onClose }, windowRef);

  return (
    <animated.div ref={windowRef} style={animationProps} className={styles.golBookingWindow} onMouseDown={moveHandler.onMouseDown}>
      <div className={styles.titleContainer}>
        <span>CarCodeWindow</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <p>CarCodeWindow</p>
      </div>
    </animated.div>
  );
};

export default CarCodeWindow;

