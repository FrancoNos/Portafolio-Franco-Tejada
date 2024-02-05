// CursosWindow.jsx
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiTypescript, SiSequelize, SiTailwindcss } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import styles from './CursosWindow.module.css';
import useMoveWindow from '../useMoveWidow';

const CursosWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'cursosWindow', focus: () => {}, onClose }, windowRef);

  return (
    <animated.div ref={windowRef} style={animationProps} className={`${styles.aboutMeWindow} ${styles.cursosWindow}`}>
      <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
        <span>Habilidades técnicas y blandas</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.text}>Technical Skills</p>
          <div className={styles.iconContainer}>
            <IoLogoJavascript />
            <FaReact />
            <SiExpress />
            <BiLogoPostgresql />
            <FaNodeJs />
            <SiNextdotjs />
            <SiTypescript />
            <IoLogoFirebase />
            <SiSequelize />
            <SiTailwindcss />
          </div>
        </div>
        <div className={styles.content2}>
          <p>Contenido de la segunda sección</p>
        </div>
      </div>
    </animated.div>
  );
};

export default CursosWindow;
