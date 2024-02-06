import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import styles from './ProjectsWindow.module.css';
import useMoveWindow from '../useMoveWidow';
import GolBookingWindow from "./ventanasProjects/GolBookingWindow";
import NearbyTourWindow from './ventanasProjects/NearbyTourWindow';
import CarCodeWindow from './ventanasProjects/CarCodeWindow';
import ProjectImage from "../../../public/images/project.png"

const ProjectsWindow = ({ onClose }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
    from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'projectsWindow', focus: () => {}, onClose }, windowRef);

  const [golBookingWindowOpen, setGolBookingWindowOpen] = useState(false);
  const [nearbyTourWindowOpen, setNearbyTourWindowOpen] = useState(false);
  const [carCodeWindowOpen, setCarCodeWindowOpen] = useState(false);

  const openGolBookingWindow = () => {
    setGolBookingWindowOpen(true);
  };

  const closeGolBookingWindow = () => {
    setGolBookingWindowOpen(false);
  };

  const openNearbyTourWindow = () => {
    setNearbyTourWindowOpen(true);
  };

  const closeNearbyTourWindow = () => {
    setNearbyTourWindowOpen(false);
  };

  const openCarCodeWindow = () => {
    setCarCodeWindowOpen(true);
  };

  const closeCarCodeWindow = () => {
    setCarCodeWindowOpen(false);
  };

  return (
    <>
      <animated.div ref={windowRef} style={animationProps} className={styles.projectsWindow}>
        <div className={styles.titleContainer} onMouseDown={moveHandler.onMouseDown}>
          <span>Proyectos</span>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <p>Proyectos en los que participé por medio de diferentes plataformas, en colaboración con equipos multidisciplinarios.</p>
            <ul>
              <li onClick={openGolBookingWindow}>
                <img src={ProjectImage} alt="Project" className={styles.projectImage} />
                GolBooking
              </li>
              <li onClick={openNearbyTourWindow}>
                <img src={ProjectImage} alt="Project" className={styles.projectImage} />
                NearbyTour
              </li>
              <li onClick={openCarCodeWindow}>
                <img src={ProjectImage} alt="Project" className={styles.projectImage} />
                CarCode
              </li>

            </ul>
          </div>
        </div>
      </animated.div>

      {golBookingWindowOpen && <GolBookingWindow onClose={closeGolBookingWindow} />}
      {nearbyTourWindowOpen && <NearbyTourWindow onClose={closeNearbyTourWindow} />}
      {carCodeWindowOpen && <CarCodeWindow onClose={closeCarCodeWindow} />}

    </>
  );
};

export default ProjectsWindow;
