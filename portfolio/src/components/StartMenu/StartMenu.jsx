import React from 'react';
import styles from './StartMenu.module.css';
import { FaLinkedin, FaGithub, FaBusinessTime } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const StartMenu = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(0, 0) scale(1)',
    from: { opacity: 0, transform: 'translate(0, 0) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });
  

  const openLink = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  const openLinkedIn = () => {
    openLink('https://www.linkedin.com/in/franco-tejada/');
  };

  const openGitHub = () => {
    openLink('https://github.com/FrancoNos');
  };

  const downloadCV = () => {
    const cvPath = 'https://drive.google.com/uc?id=1p2srSttH3NNWQM161glDxIDcxQlFbpdz';

    const link = document.createElement('a');
    link.href = cvPath;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <animated.div style={animationProps} className={styles.startMenu}>
      <div className={styles.menuContent}>
        <p onClick={openLinkedIn}><FaLinkedin />LinkedIn</p>
        <p onClick={openGitHub}><FaGithub />GitHub</p>
        <p onClick={downloadCV}><FaBusinessTime />Descargar CV</p>
      </div>
    </animated.div>
  );
};

export default StartMenu;

