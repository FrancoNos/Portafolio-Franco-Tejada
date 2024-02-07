import React from 'react';
import styles from './StartMenu.module.css';
import { FaLinkedin, FaGithub, FaBusinessTime, FaWhatsapp } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import { IoMdMail } from "react-icons/io";
import userCat from "../../../public/images/userCat.jpg";
import Login from "../../../public/images/Login.jpg";

const StartMenu = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(0, 0) scale(1)',
    from: { opacity: 0, transform: 'translate(0, 0) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const openWhatsApp = () => {
   
    const phoneNumber = "5491173669270";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
  
    openLink(whatsappLink);
  };
  

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
      <div className={styles.titleContentMenu}>
        <img src={userCat} alt="User" />
        <p>Usuario</p>
      </div>
  
      <div className={styles.menuContent}>
        <a href="mailto:francotejada2014@gmail.com">
          <p>
            <IoMdMail /> E-mail
          </p>
        </a>
        <p onClick={openWhatsApp}>
          <FaWhatsapp /> WhatsApp
        </p>
        <p onClick={openLinkedIn}>
          <FaLinkedin /> LinkedIn
        </p>
        <p onClick={openGitHub}>
          <FaGithub /> GitHub
        </p>
        <div className={styles.pPC}>
          <p onClick={downloadCV}>
            <FaBusinessTime /> Descargar CV
          </p>
        </div>
        <div className={styles.pCeluMenu}>
          <p onClick={downloadCV}>
            <FaBusinessTime /> Currículum
          </p>
        </div>
        <img src={Login} alt="Login" className={styles.loginImage} />
      </div>
    </animated.div>
  );
  
};

export default StartMenu;

