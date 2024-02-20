import React, { useRef, useState } from 'react';
import { animated } from 'react-spring';
import { FaTimes, FaYoutube } from 'react-icons/fa';
import styles from './NearbyTourWindow.module.css';
import useMoveWindow from '../../useMoveWidow';
import { FaHotel } from "react-icons/fa";
import NearbyTourImage from '../../../../public/images/NearbyTour.jpg';
import Lightbox from '../../Lightbox/Lightbox.jsx';

const NearbyTourWindow = ({ onClose }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
    if (!isLightboxOpen && !isImageExpanded) {
      openLightbox();
    }
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'nearbyTourWindow', focus: () => {}, onClose }, windowRef);

  return (
    <>
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
            <p className={styles.pGolBooking}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia adipisci aliquam sapiente ex ad, iure id suscipit alias nemo debitis voluptatum saepe! Unde consequatur sunt reprehenderit eius, dolore id!
            </p>
            <div className={styles.imageGolBookingContainer} onClick={toggleImageSize}>
              <img
                src={NearbyTourImage}
                alt="NearbyTour"
                className={`${styles.golBookingImage} ${isImageExpanded ? styles.expandedImage : ''}`}
              />
            </div>
            <p>
              <a href="https://nearbytour.vercel.app/home" target="_blank" rel="noopener noreferrer">NearbyTour</a>
            </p>
            <p>
               <a href="https://www.youtube.com/watch?v=Hc3N-QXwT7Q" target="_blank" rel="noopener noreferrer">Video de YouTube<FaYoutube className={styles.youtube}/></a>
            </p>
          </div>
        </div>
      </animated.div>

      {isLightboxOpen && (
        <Lightbox imageUrl={NearbyTourImage} onClose={closeLightbox} />
      )}
    </>
  );
};

export default NearbyTourWindow;
