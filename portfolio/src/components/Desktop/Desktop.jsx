import React, { useState } from 'react';
import styles from './Desktop.module.css';


import Wallpaper from "../../../public/images/Wallpaper.jpg"
import Taskbar from '../Taskbar/Taskbar';
import SobreMi from '../SobreMI/sobreMi';
import AboutMeWindow from '../AboutMeWindow/AboutMeWindow';

const Desktop = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);

  const toggleAboutMeWindow = () => {
    setAboutMeVisible(!aboutMeVisible);
  };

  return (
    <div className={styles.desktop}>
      <img className={styles.wallpaper} src={Wallpaper} alt="Wallpaper" />
      <SobreMi onClick={toggleAboutMeWindow} />
      <Taskbar />
      {aboutMeVisible && <AboutMeWindow onClose={toggleAboutMeWindow} />}
    </div>
  );
};

export default Desktop;