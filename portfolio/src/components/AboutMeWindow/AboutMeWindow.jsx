import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';

import styles from './AboutMeWindow.module.css';
import useMoveWindow from '../useMoveWidow';
import TextImage from '../../../public/images/text.png';
import TextWindow from "../TextWidow/TextWidow" 

const AboutMeWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'aboutMeWindow', focus: () => {}, onClose }, windowRef);

  const [textWindowOpen, setTextWindowOpen] = useState(false);

  const openTextWindow = () => {
    setTextWindowOpen(true);
  };

  const closeTextWindow = () => {
    setTextWindowOpen(false);
  };

  return (
    <>
      <animated.div ref={windowRef} style={animationProps} className={styles.aboutMeWindow}>
        <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
          <span>¡Sobre Mí!</span>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <p className={styles.text}>¿Quien soy?</p>
            <div className={styles.iconContainer}>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat, obcaecati ducimus, voluptate nesciunt sunt nostrum perspiciatis quas ipsum sapiente ullam quae necessitatibus ut consectetur tempora impedit asperiores quos ipsam!</p>
            </div>
          </div>
          <div className={styles.content2}>
            <img src={TextImage} onClick={openTextWindow} alt="Texto" />
            <p className={styles.text}>text.txt</p>
          </div>
        </div>
      </animated.div>

      {textWindowOpen && <TextWindow onClose={closeTextWindow} />}
    </>
  );
};

export default AboutMeWindow;
