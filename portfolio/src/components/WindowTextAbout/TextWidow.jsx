import React, { useRef } from 'react';
import styles from './TextWidow.module.css';
import useMoveWindow from '../useMoveWidow';
import { FaTimes } from 'react-icons/fa';

const TextWindow = ({ onClose }) => {
  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'textWindow', focus: () => {}, onClose }, windowRef);

  return (
    <div ref={windowRef} className={`${styles.TextWindow} ${styles.textWindow}`} onMouseDown={moveHandler.onMouseDown}>
      <div className={styles.titleContainer}>
        <span>Recepción</span>
        <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>Bienvenido/a.</h3>
          <p className={styles.pText}>
            ¡Hola! Soy Franco, un apasionado programador web de Buenos Aires, Argentina.  <br/>Disfruto de buscar soluciones a los desafíos que se me presentan a lo largo del camino, tanto en el aspecto técnico como en la vida misma. Esta web es un reflejo de lo que tenía en mi mente y me propuse a hacer, considero que no es mucho pero es trabajo honesto. 
             </p>
            
        </div>
      </div>
    </div>
  );
};

export default TextWindow;

