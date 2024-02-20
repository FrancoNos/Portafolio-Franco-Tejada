import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import styles from './CursosWindow.module.css';
import useMoveWindow from '../useMoveWidow';
import SoftSkills from '../WindowTextAbout/SoftSkills';
import iconoCursosImage from "../../../public/images/cursos.png";
import Applications from '../../../public/images/applications.png';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiTypescript, SiSequelize, SiTailwindcss } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';

const CursosWindow = ({ onClose }) => {
  const [isCursosWindowFocused, setIsCursosWindowFocused] = useState(false);

  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const windowRefCursos = useRef();
  const moveHandlerCursos = useMoveWindow({
    id: 'cursosWindow',
    focus: () => {
      setIsCursosWindowFocused(true);
    },
    onClose
  }, windowRefCursos);

  const [softSkillsWindowOpen, setSoftSkillsWindowOpen] = useState(false);

  const openSoftSkillsWindow = () => {
    setSoftSkillsWindowOpen(true);
  };
  
  const closeSoftSkillsWindow = () => {
    setSoftSkillsWindowOpen(false);
  };

  return (
    <animated.div
      ref={windowRefCursos}
      style={animationProps}
      className={`${styles.aboutMeWindow} ${styles.cursosWindow}`}
      onMouseDown={() => {
        if (!isCursosWindowFocused) {
          moveHandlerCursos.focus();
          setIsCursosWindowFocused(true);
        }
      }}
    >
            <div className={styles.titleContainer} onMouseDown={moveHandlerCursos.onMouseDown}>

        <img src={iconoCursosImage} alt="Icono Contacto" className={styles.iconoCursosImage} />
        <span>Habilidades técnicas y blandas</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
  <div className={styles.content}>
    <p className={styles.textSkills}>Technical Skills</p>
    <div className={styles.iconContainer}>
      <div>
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <IoLogoJavascript className={styles.IoLogoJavascript} />
        </a>
        <a href="https://nextjs.org/docs/getting-started" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <SiNextdotjs className={styles.SiNextdotjs}/>
        </a>
        <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <SiTypescript className={styles.SiTypescript}/>
        </a>
      </div>
      <p className={styles.textSkills}>Front</p> 
      <div>
        <a href="https://es.react.dev/blog/2023/03/16/introducing-react-dev" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaReact className={styles.SiTypescript}/>
        </a>
        <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <IoLogoFirebase className={styles.IoLogoFirebase}/>
        </a>
        <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <SiTailwindcss className={styles.SiTailwindcss}/>
        </a>
      </div>
      <p className={styles.textSkills}>Back</p> 
      <div>
        <a href="https://expressjs.com/es/guide/routing.html" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <SiExpress className={styles.SiNextdotjs}/>
        </a>
        <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <BiLogoPostgresql className={styles.SiTypescript}/>
        </a>
        <a href="https://nodejs.org/docs/latest/api/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaNodeJs className={styles.FaNodeJs}/>
        </a>
        <a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <SiSequelize  className={styles.SiTypescript}/>
        </a>
      </div>
    </div>
  </div>

  <div className={styles.content2Window}>
    <img src={Applications} onClick={openSoftSkillsWindow} alt="Soft Skills" />
    <p className={styles.text} onClick={openSoftSkillsWindow}>Soft Skills.txt</p>

    {softSkillsWindowOpen && <SoftSkills onClose={closeSoftSkillsWindow} />}
  </div>
</div>

    </animated.div>
    
  );
};

export default CursosWindow;

