// Taskbar.js
import React from 'react';
import StartButton from '../StartButton/StartButton';
import styles from './Taskbar.module.css';
import Clock from '../Clock/clock'; 

const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <div className={styles.leftSection}>
        <StartButton />
      </div>
      <div className={styles.rightSection}>
        <Clock />
      </div>
    </div>
  );
};

export default Taskbar;