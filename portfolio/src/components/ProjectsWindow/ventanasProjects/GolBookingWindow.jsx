import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import { GiSoccerBall } from 'react-icons/gi';
import styles from './NearbyTourWindow.module.css';
import useMoveWindow from '../../useMoveWidow';
import GolBookingImage from '../../../../public/images/GolBooking.jpg';

const GolBookingWindow = ({ onClose }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const imageAnimationProps = useSpring({
    transform: `scale(${isImageExpanded ? 1.2 : 1})`, // Cambia el tamaño solo de la imagen si isImageExpanded es verdadero
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'golBookingWindow', focus: () => {}, onClose }, windowRef);

  return (
    <animated.div ref={windowRef} style={animationProps} className={`${styles.NeabyTourWindow} ${styles.NeabyTourWindow}`}>
      <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
        <span>GolBooking</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>GolBooking <GiSoccerBall /></h3>
          <p>
            GolBooking, un proyecto colaborativo en NoCountry, donde contribuí al desarrollo del frontend, se enfoca en la búsqueda y reserva de canchas deportivas, brindando una experiencia eficiente para los amantes del deporte.
          </p>
          <div className={styles.imageGolBookingContainer} onClick={toggleImageSize}>
            <animated.img
              src={GolBookingImage}
              alt="GolBooking"
              className={styles.golBookingImage}
              style={imageAnimationProps}
            />
          </div>
          <p>
            Explora el proyecto en vivo: <a href="https://c13-35-t-node-react.vercel.app/" target="_blank" rel="noopener noreferrer">GolBooking</a>
          </p>
          <p>
            Descubre más sobre el proyecto en este video de YouTube: <a href="https://www.youtube.com/watch?v=GfLCNF7xmwA" target="_blank" rel="noopener noreferrer">Video de YouTube</a>
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default GolBookingWindow;
