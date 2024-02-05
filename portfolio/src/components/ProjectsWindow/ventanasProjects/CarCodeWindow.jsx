import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import styles from './NearbyTourWindow.module.css';
import useMoveWindow from '../../useMoveWidow';
import { FaCar } from "react-icons/fa";
import CarCodeImage from '../../../../public/images/CarCode.jpg';

const CarCodeWindow = ({ onClose }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const imageAnimationProps = useSpring({
    transform: `scale(${isImageExpanded ? 1.2 : 1})`,
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'carCodeWindow', focus: () => {}, onClose }, windowRef);

  return (
    <animated.div ref={windowRef} style={moveHandler.animationProps} className={`${styles.NeabyTourWindow} ${styles.NeabyTourWindow}`}>
      <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
        <span>CarCodeWindow</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>CarCodeWindow <FaCar/></h3>
          <p>
            Contenido específico de CarCodeWindow.
          </p>
          <div className={styles.imageGolBookingContainer} onClick={toggleImageSize}>
            <animated.img
              src={CarCodeImage}
              alt="CarCodeWindow"
              className={`${styles.golBookingImage} ${isImageExpanded ? styles.expandedImage : ''}`}
              style={imageAnimationProps}
            />
          </div>
          <p>
            Explora más sobre CarCode en vivo: <a href="https://carcode.vercel.app/" target="_blank" rel="noopener noreferrer">CarCode</a>
          </p>
          <p>
            Descubre más sobre el proyecto en este video de YouTube: <a href="https://www.youtube.com/watch?v=your-video-id" target="_blank" rel="noopener noreferrer">Video de YouTube</a>
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default CarCodeWindow;
