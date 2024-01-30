// Taskbar.jsx
import React, { useState } from 'react';
import StartButton from '../StartButton/StartButton';
import TaskbarWindows from '../TaskbarWindows/TaskbarWindows';
import styles from './Taskbar.module.css';
import Clock from '../Clock/clock'; 

const Taskbar = ({ openWindows, closeWindow }) => {
  const [activeWindow, setActiveWindow] = useState(null);

  // Asegúrate de que openWindows sea un array o inicialízalo como un array vacío
  const windows = openWindows || [];

  return (
    <div className={styles.taskbar}>
      <div className={styles.leftSection}>
        <StartButton />
      </div>
      <div className={styles.midSection}>
        <TaskbarWindows
          windows={windows}
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
          closeWindow={closeWindow}
        />
      </div>
      <div className={styles.rightSection}>
        <Clock />
      </div>
    </div>
  );
};

export default Taskbar;
