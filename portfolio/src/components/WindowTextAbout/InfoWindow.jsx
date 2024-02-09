import React, { useRef } from 'react';
import styles from './TextWidow.module.css';
import useMoveWindow from '../useMoveWidow';
import { FaTimes } from 'react-icons/fa';

const InfoWindow = ({ onClose }) => {
  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'textWindow', focus: () => {}, onClose }, windowRef);

  return (
    <div ref={windowRef} className={`${styles.TextWindow} ${styles.textWindow}`} onMouseDown={moveHandler.onMouseDown}>
      <div className={styles.titleContainer}>
        <span>Información sobre mí</span>
        <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>Un rinconcito.</h3>
          <p className={styles.pText}>
ETE SECH             </p>
            
        </div>
      </div>
    </div>
  );
};

export default InfoWindow;

