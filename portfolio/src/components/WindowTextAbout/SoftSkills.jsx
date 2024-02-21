import React, { useRef } from 'react';
import styles from './SoftSkills.module.css';
import useMoveWindow from '../useMoveWidow';
import { FaTimes } from 'react-icons/fa';
import Applications from '../../../public/images/applications.png';

const SoftSkills = ({ onClose }) => {
  const windowRefSoftSkills = useRef();
const moveHandlerSoftSkills = useMoveWindow({ id: 'softSkillsWindow', focus: () => {}, onClose }, windowRefSoftSkills);


  return (
    <div ref={windowRefSoftSkills} className={`${styles.SoftWindow}`} >
      <div className={styles.titleContainer} onMouseDown={moveHandlerSoftSkills.onMouseDown}>
      <img style={{ height: '24px', width: '24px', position: 'relative', marginBottom: '28px', marginLeft: "5px", }} src={Applications} alt="Applications" />
    <span>Soft Skills</span>
    <button onClick={onClose} className={styles.closeButton}>
        <FaTimes />
      </button>
  </div>
  <div className={styles.contentContainer}>
    <div className={styles.content}>
      <p className={styles.pText}>
        En este apartado quiero detenerme en hablar de lo fácil que se me hace trabajar en grupo. Me considero una persona que puede tratar con los demás de manera eficiente, siempre buscando el diálogo y la construcción de un camino para llegar a la meta. Aunque suene algo gracioso me gusta pedir ayuda, y encontrar una posible solución a algún problema. <br/>
        Estudiando para ser guía y practicando me hizo aprender mucho sobre empatía, el comprender a los demás, sus situaciones y poder entender a compañeros de grupo. También desarrollé en la carrera una capacidad de comunicación clara que me sirve para poder expresar lo que quiero desarrollar o arreglar.
      </p>
    </div>
  </div>
</div>


  );
};

export default SoftSkills;
