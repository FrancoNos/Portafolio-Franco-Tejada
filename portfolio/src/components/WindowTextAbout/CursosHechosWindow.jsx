import React, { useRef } from 'react';
import styles from './TextWidow.module.css';
import useMoveWindow from '../useMoveWidow';
import { FaTimes } from 'react-icons/fa';

const CursosHechos = ({ onClose }) => {
  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'textWindow', focus: () => {}, onClose }, windowRef);

  return (
    <div ref={windowRef} className={`${styles.TextWindow} ${styles.textWindow}`} onMouseDown={moveHandler.onMouseDown}>
      <div className={styles.titleContainer}>
        <span>Contenido de Text.txt</span>
        <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>Bienvenido/a.</h3>
          <p className={styles.pText}>
           EL PEPE
             </p>
            
        </div>
      </div>
    </div>
  );
};

export default CursosHechos;

