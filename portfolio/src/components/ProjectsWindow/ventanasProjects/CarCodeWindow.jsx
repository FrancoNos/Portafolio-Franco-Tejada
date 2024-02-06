import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { animated } from 'react-spring'; 
import useMoveWindow from '../../useMoveWidow';
import useWindowAnimation from './useWindowAnimation.jsx';

import styles from './CarCodeWindow.module.css';
import Lightbox from '../../Lightbox/Lightbox.jsx';
import CarCodeImage from '../../../../public/images/CarCode.jpg';

const CarCodeWindow = ({ onClose }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { animationProps } = useWindowAnimation();

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const windowRef = useRef();
  const moveHandler = useMoveWindow(
    { id: 'carCodeWindow', focus: () => {}, onClose },
    windowRef
  );

  return (
    <>
      <animated.div ref={windowRef} style={animationProps} className={`${styles.CarCodeWindow} ${styles.NeabyTourWindow}`}>
        <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
          <span>CarCodeWindow</span>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h3>CarCodeWindow</h3>
            <p>
              Contenido específico de CarCodeWindow.
            </p>
            <div className={styles.imageGolBookingContainer} onClick={openLightbox}>
              <img
                src={CarCodeImage}
                alt="CarCodeWindow"
                className={`${styles.golBookingImage}`}
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

      {isLightboxOpen && <Lightbox imageUrl={CarCodeImage} onClose={closeLightbox} />}
    </>
  );
};

export default CarCodeWindow;
