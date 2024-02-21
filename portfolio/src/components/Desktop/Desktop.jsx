import React, { useState, useEffect } from 'react';
import styles from './Desktop.module.css';
import Wallpaper from "../../../public/images/Wallpaper.jpg";
import Taskbar from '../Taskbar/Taskbar';
import SobreMi from '../SobreMI/SobreMi';
import AboutMeWindow from '../AboutMeWindow/AboutMeWindow';
import CursosWindow from '../CursosWindow/CursosWindow';
import ContactWindow from '../ContactWindow/ContactWindow';
import ProjectsWindow from '../ProjectsWindow/ProjectsWindow';
import IconoContacto from '../Contact/Contact';
import IconoProjects from '../Projects/IconoProjects ';
import IconoCursos from '../IconoCursos/IconoCursos';

const Desktop = () => {
  const [openWindow, setOpenWindow] = useState('aboutMe'); 

  const openAboutMeWindow = () => {
    setOpenWindow('aboutMe');
  };

  const openContactWindow = () => {
    setOpenWindow('contact');
  };

  const openProjectsWindow = () => {
    setOpenWindow('projects');
  };

  const openCursosWindow = () => {
    setOpenWindow('cursos');
  };

  const closeWindow = () => {
    setOpenWindow(null);
  };

  useEffect(() => {
    const checkOrientation = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;

      if (!isPortrait) {
        alert('Gire su dispositivo a orientación vertical para ver la aplicación correctamente.');
      }
    };

    // Verificar la orientación al cargar la página
    checkOrientation();

    // Agregar el listener para el cambio de orientación
    window.addEventListener('orientationchange', checkOrientation);

    // Eliminar el listener cuando el componente se desmonta para evitar posibles pérdidas de memoria
    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className={styles.desktop}>
      <img className={styles.wallpaper} src={Wallpaper} alt="Wallpaper" />
      <SobreMi onClick={openAboutMeWindow} />
      <IconoContacto onClick={openContactWindow} />
      <IconoProjects onClick={openProjectsWindow} />
      <IconoCursos onClick={openCursosWindow} />
      <Taskbar openWindows={[openWindow]} closeWindow={closeWindow} />
      {openWindow === 'aboutMe' && <AboutMeWindow onClose={closeWindow} />}
      {openWindow === 'contact' && <ContactWindow onClose={closeWindow} />}
      {openWindow === 'projects' && <ProjectsWindow onClose={closeWindow} />}
      {openWindow === 'cursos' && <CursosWindow onClose={closeWindow} />}
    </div>
  );
};

export default Desktop;