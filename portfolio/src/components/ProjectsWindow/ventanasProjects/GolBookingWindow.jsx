import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { animated } from 'react-spring';
import useMoveWindow from '../../useMoveWidow';
import useWindowAnimation from './useWindowAnimation.jsx';
import styles from './GolBookingWindow.module.css';
import Lightbox from '../../Lightbox/Lightbox.jsx';
import GolBookingImage from '../../../../public/images/GolBooking.jpg';

const GolBookingWindow = ({ onClose }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { animationProps } = useWindowAnimation();
  const windowRef = useRef();
  const moveHandler = useMoveWindow(
    { id: 'golBookingWindow', focus: () => {}, onClose },
    windowRef
  );

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <animated.div ref={windowRef} style={animationProps} className={`${styles.GolBookingWindow} ${styles.NeabyTourWindow}`}>
        <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
          <span>GolBooking</span>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h3>GolBooking</h3>
            <p>
              GolBooking, un proyecto colaborativo en NoCountry, donde contribuí al desarrollo del frontend, se enfoca en la búsqueda y reserva de canchas deportivas, brindando una experiencia eficiente para los amantes del deporte.
            </p>
            <div className={styles.imageContainer} onClick={openLightbox}>
              <img
                src={GolBookingImage}
                alt="GolBooking"
                className={styles.golBookingImage}
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

      {isLightboxOpen && <Lightbox imageUrl={GolBookingImage} onClose={closeLightbox} />}
    </>
  );
};

export default GolBookingWindow;
