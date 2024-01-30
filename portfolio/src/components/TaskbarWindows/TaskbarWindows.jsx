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

const TaskbarWindows = ({ windows, activeWindow, setActiveWindow, closeWindow }) => {
  // Asegúrate de que windows sea un array o inicialízalo como un array vacío
  const windowList = windows || [];

  // Verifica si hay ventanas abiertas antes de renderizar
  if (windowList.length === 0) {
    return null; // No renderiza nada si no hay ventanas abiertas
  }

  return (
    <div className={styles.taskbarWindows}>
      {windowList.map((windowId) => (
        // Verifica si windowId es null antes de renderizar
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
            {/* Reemplaza el texto con la imagen correspondiente */}
            <img src={windowIcons[windowId]} alt={windowId} />
          </div>
        )
      ))}
    </div>
  );
};

export default TaskbarWindows;
