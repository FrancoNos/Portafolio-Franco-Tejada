// TaskbarWindows.jsx
import React from 'react';
import styles from './TaskbarWindows.module.css';

import ImagenContacto from '../../../public/images/contact.png';
import ImagenCursos from '../../../public/images/cursos.png';
import ImagenSobreMi from '../../../public/images/papelera.png';
import ImagenProyectos from '../../../public/images/projects.png';

const windowIcons = {
  aboutMe: ImagenSobreMi,
  contact: ImagenContacto,
  projects: ImagenProyectos,
  cursos: ImagenCursos,
  // Agrega más nombres según sea necesario
};

const windowTexts = {
  aboutMe: "Sobre Mí",
  contact: "Contacto",
  projects: "Proyectos",
  cursos: "Cursos",
  // Agrega más nombres según sea necesario
};

const TaskbarWindows = ({ windows, activeWindow, setActiveWindow, closeWindow }) => {
  const windowList = windows || [];

  if (windowList.length === 0) {
    return null;
  }

  return (
    <div className={styles.taskbarWindows}>
      {windowList.map((windowId) => (
        windowId !== null && (
          <div
            key={windowId}
            className={`${styles.window} ${windowId === activeWindow ? styles.activeWindow : ''}`}
            onClick={() => {
              console.log(`Clicked on ${windowId} Window`);
              setActiveWindow(windowId);
              closeWindow();
            }}
          >
            {/* Muestra el texto junto al icono */}
            <img src={windowIcons[windowId]} alt={windowId} />
            <span>{windowTexts[windowId]}</span>
          </div>
        )
      ))}
    </div>
  );
};

export default TaskbarWindows;