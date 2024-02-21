import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import ReiWallpaper from "../../../public/images/reiwallpaper.png";

import styles from './AboutMeWindow.module.css';
import useMoveWindow from '../useMoveWidow';
import TextImage from '../../../public/images/text.png';
import TextWindow from '../WindowTextAbout/TextWidow';
import iconoSobreMi from '../../../public/images/papelera.png';
import CursosHechos from '../WindowTextAbout/CursosHechosWindow';
import InfoWindow from '../WindowTextAbout/InfoWindow';
import Documents from '../../../public/images/documents.png';
import Info from '../../../public/images/info.png';
import Rei from '../../../public/images/Rei.png';



const AboutMeWindow = ({ onClose, onWallpaperChange }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const changeWallpaper = () => {
    const newWallpaperUrl = ReiWallpaper;
    onWallpaperChange(newWallpaperUrl);
  };
  
  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'aboutMeWindow', focus: () => {}, onClose }, windowRef);

  const [textWindowOpen, setTextWindowOpen] = useState(false);
  const [cursosWindowOpen, setCursosWindowOpen] = useState(false);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const openTextWindow = () => {
    setTextWindowOpen(true);
  };
  
  const openCursosWindow = () => {
    setCursosWindowOpen(true);
  };

  const openInfoWindow = () => {
    setInfoWindowOpen(true);
  };

  const closeTextWindow = () => {
    setTextWindowOpen(false);
  };

  const closeCursosWindow = () => {
    setCursosWindowOpen(false);
  };

  const closeInfoWindow = () => {
    setInfoWindowOpen(false);
  };


  return (
    <>
      <animated.div ref={windowRef} style={animationProps} className={styles.aboutMeWindow}>
        <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
        <img src={iconoSobreMi} alt="Icono Sobre Mí" className={styles.iconoSobreMi} />
          <span>¡Sobre Mí!</span>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h3 className={styles.text}>Portafolio Web <br/>Franco Tejada</h3>
            <h3 className={styles.textMovilAbout}> Versión móvil</h3>
            <div className={styles.iconContainer}>
              <p className={styles.pCompu}>¡Bienvenido a mi portafolio web! A la derecha podrás explorar más sobre mí, mis pasiones y estudios. No olvides contactarme haciendo clic en "Contacto" o clickear en Inicio para encontrarme en otras redes.<br/> ¡Gracias por visitar mi página web!</p>
              <p className={styles.pPC}>¡Bienvenido a la versión móvil de mi portafolio web! A la derecha podrás explorar más sobre mí. No olvides contactarme haciendo clic en "Contacto" o clickear en Inicio (solo  adaptado para usarlo en vertical).</p>
            </div>
          </div>
          <div className={styles.content2}>

            <img src={TextImage} onClick={openTextWindow} alt="Texto" />
            <p className={styles.text} onClick={openTextWindow}>
              Bienvenido.txt
            </p>
            <img src={Documents} onClick={openCursosWindow} alt="Cursos" />
            <p className={styles.text} onClick={openCursosWindow}>
              Cursos.txt
            </p>
            <img src={Info} onClick={openInfoWindow} alt="Info" />
            <p className={styles.text} onClick={openInfoWindow}>
              Info-sobre-mi.txt
            </p>
            <img src={Rei} onClick={changeWallpaper} alt="Fondo" />
            <p className={styles.text} onClick={changeWallpaper}>
              ¡Cambiar fondo!
            </p>
          </div>
        </div>
      </animated.div>
      {textWindowOpen && <TextWindow onClose={closeTextWindow} />}
      {cursosWindowOpen && <CursosHechos onClose={closeCursosWindow} />}
      {infoWindowOpen && <InfoWindow onClose={closeInfoWindow} />}
    </>
  );
};

export default AboutMeWindow;
