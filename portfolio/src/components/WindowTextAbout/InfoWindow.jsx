import React, { useRef } from 'react';
import styles from './TextWidow.module.css';
import useMoveWindow from '../useMoveWidow';
import { FaTimes } from 'react-icons/fa';
import Info from '../../../public/images/info.png';

const InfoWindow = ({ onClose }) => {
  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'textWindow', focus: () => {}, onClose }, windowRef);

  return (
    <div ref={windowRef} className={`${styles.TextWindow} ${styles.textWindow}`} onMouseDown={moveHandler.onMouseDown}>
      <div className={styles.titleContainer}>
      <img src={Info} alt="Info" className={styles.Info} />
        <span>Información sobre mí</span>
        <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>Un rinconcito.</h3>
          <p className={styles.pText}>
Estudié la carrera de Guía de Turismo durante 5 años, se me presentó la oportunidad de estudiar programación mediante un programa de estudios llamado Argentina Programa y acá estamos, totalmente inmerso en el mundo del desarrollo web. <br/>  
Soy una persona con diversos hobbies, aparte de programar me gusta mucho jugar al fútbol o ver animaciones. Me gusta aprender sobre diferentes culturas, idiomas, formas de vivir... En general me gusta relacionarme con gente distinta a mí para intercambiar ideas.            </p>
            
        </div>
      </div>
    </div>
  );
};

export default InfoWindow;

