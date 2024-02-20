import React, { useRef, useState } from 'react';
import { FaTimes, FaCar, FaYoutube  } from 'react-icons/fa';
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
          <span>CarCode</span>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h3>CarCode <FaCar /></h3>
            <p className={styles.pGolBooking}>
              Proyecto final e-commerce del bootcamp de SoyHenry, donde usamos tecnologías como Node.js, PostgreSQL, React, React-Redux, CSS, JWT, Passport, Auth0, integraciones de billetera y servicios de implementación (tanto para el frontend como para el backend).
            </p>
            <div className={styles.imageGolBookingContainer} onClick={openLightbox}>
              <img
                src={CarCodeImage}
                alt="CarCodeWindow"
                className={`${styles.golBookingImage}`}
              />
            </div>
            <p>
<a href="https://code-car-41a-pf-7u9q.vercel.app/" target="_blank" rel="noopener noreferrer">CarCode</a>
            </p>
            <p>
              <a href="https://www.youtube.com/watch?v=KmPVvh21pFQ" target="_blank" rel="noopener noreferrer">Video de YouTube <FaYoutube className={styles.youtube}/></a>
            </p>
          </div>
        </div>
      </animated.div>

      {isLightboxOpen && <Lightbox imageUrl={CarCodeImage} onClose={closeLightbox} />}
    </>
  );
};

export default CarCodeWindow;
