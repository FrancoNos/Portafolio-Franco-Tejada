// Clock.jsx
import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div className={styles.clockContainer}>
      <span className={styles.clockText}>
        {formattedHours}:{formattedMinutes} {ampm}
      </span>
    </div>
  );
};

export default Clock;
