import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import styles from './NearbyTourWindow.module.css';
import useMoveWindow from '../../useMoveWidow';
import { FaHotel } from "react-icons/fa";
import NearbyTourImage from '../../../../public/images/NearbyTour.jpg';

const NearbyTourWindow = ({ onClose }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const imageAnimationProps = useSpring({
    transform: `scale(${isImageExpanded ? 1.2 : 1})`,
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'nearbyTourWindow', focus: () => {}, onClose }, windowRef);

  return (
    <animated.div ref={windowRef} style={moveHandler.animationProps} className={`${styles.NeabyTourWindow} ${styles.NeabyTourWindow}`}>
      <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
        <span>NearbyTour</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>NearbyTour <FaHotel/> </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia adipisci aliquam sapiente ex ad, iure id suscipit alias nemo debitis voluptatum saepe! Unde consequatur sunt reprehenderit eius, dolore id!
          </p>
          <div className={styles.imageGolBookingContainer} onClick={toggleImageSize}>
            <animated.img
              src={NearbyTourImage}
              alt="NearbyTour"
              className={`${styles.golBookingImage} ${isImageExpanded ? styles.expandedImage : ''}`}
              style={imageAnimationProps}
            />
          </div>
          <p>
            Explora el proyecto en vivo: <a href="https://nearbytour.vercel.app/home" target="_blank" rel="noopener noreferrer">NearbyTour</a>
          </p>
          <p>
            Descubre más sobre el proyecto en este video de YouTube: <a href="https://www.youtube.com/watch?v=Hc3N-QXwT7Q" target="_blank" rel="noopener noreferrer">Video de YouTube</a>
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default NearbyTourWindow;
