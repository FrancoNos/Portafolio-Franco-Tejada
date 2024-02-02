import React, { useRef } from 'react';
import styles from '../AboutMeWindow/AboutMeWindow.module.css';
import useMoveWindow from '../useMoveWidow';
import { FaTimes } from 'react-icons/fa';

const TextWindow = ({ onClose }) => {
  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'textWindow', focus: () => {}, onClose }, windowRef);

  return (
    <div ref={windowRef} className={`${styles.aboutMeWindow} ${styles.textWindow}`} onMouseDown={moveHandler.onMouseDown}>
      <div className={styles.titleContainer}>
        <span>Contenido de Text.txt</span>
        <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1>Contenido de Text.txt</h1>
          <p>Aquí va el contenido del archivo text.txt</p>
         
        </div>
      </div>
    </div>
  );
};

export default TextWindow;

