import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Applications from '../../../public/images/applications.png';
import { FaTimes } from 'react-icons/fa';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiTypescript, SiSequelize, SiTailwindcss } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import styles from './CursosWindow.module.css';
import useMoveWindow from '../useMoveWidow';
import iconoCursosImage from "../../../public/images/cursos.png";
import SoftSkills from '../WindowTextAbout/SoftSkills';

const CursosWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'cursosWindow', focus: () => {}, onClose }, windowRef);

  const [softSkillsWindowOpen, setSoftSkillsWindowOpen] = useState(false);

  const openSoftSkillsWindow = () => {
    setSoftSkillsWindowOpen(true);
  };
  
  const closeSoftSkillsWindow = () => {
    setSoftSkillsWindowOpen(false);
  };

  return (
    <animated.div ref={windowRef} style={animationProps} className={`${styles.aboutMeWindow} ${styles.cursosWindow}`}>
      <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
        <img src={iconoCursosImage} alt="Icono Contacto" className={styles.iconoCursosImage} />
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
        <div className={styles.content2Window}>

    <img src={Applications} onClick={openSoftSkillsWindow} alt="Soft Skills" />
    <p className={styles.text}  onClick={openSoftSkillsWindow} >Soft Skills.txt</p>

  {softSkillsWindowOpen && <SoftSkills onClose={closeSoftSkillsWindow} />}

</div>
      </div>
    </animated.div>
  );
};

export default CursosWindow;

