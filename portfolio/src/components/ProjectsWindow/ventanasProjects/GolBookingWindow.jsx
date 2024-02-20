import React, { useRef, useState } from 'react';
import { FaTimes, FaYoutube  } from 'react-icons/fa';
import { GiSoccerBall } from "react-icons/gi";
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
          <span>GolBooking </span>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h3>GolBooking <GiSoccerBall /></h3>
            <p className={styles.pGolBooking}>
              GolBooking, fue un proyecto colaborativo donde contribuí al desarrollo del frontend. Se enfoca en la búsqueda y reserva de canchas deportivas, brindando una experiencia eficiente para los amantes del deporte.
            </p>
            <div className={styles.imageContainer} onClick={openLightbox}>
              <img
                src={GolBookingImage}
                alt="GolBooking"
                className={styles.golBookingImage}
              />
            </div>
            <p>
             <a href="https://c13-35-t-node-react.vercel.app/" target="_blank" rel="noopener noreferrer"> GolBooking</a>
            </p>
            <p>
            <a href="https://www.youtube.com/watch?v=GfLCNF7xmwA" target="_blank" rel="noopener noreferrer"> Video de YouTube <FaYoutube className={styles.youtube}/></a>
            </p>
          </div>
        </div>
      </animated.div>

      {isLightboxOpen && <Lightbox imageUrl={GolBookingImage} onClose={closeLightbox} />}
    </>
  );
};

export default GolBookingWindow;
