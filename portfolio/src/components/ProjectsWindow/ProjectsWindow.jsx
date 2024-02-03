import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import styles from './ProjectsWindow.module.css';
import useMoveWindow from '../useMoveWidow';

const ProjectsWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'projectsWindow', focus: () => {}, onClose }, windowRef);

  return (
    <animated.div ref={windowRef} style={animationProps} className={styles.projectsWindow}>
      <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
        <span>Proyectos</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p>Contenido de proyectos...</p>
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectsWindow;
