import React, { useRef, useState } from 'react';
import styles from './TextWidow.module.css';
import useMoveWindow from '../useMoveWidow';
import { FaTimes } from 'react-icons/fa';
import Documents from '../../../public/images/documents.png';

const CursosHechos = ({ onClose }) => {
  const windowRef = useRef();
  const moveHandler = useMoveWindow({ id: 'textWindow', focus: () => {}, onClose }, windowRef);

  const [pdfUrl, setPdfUrl] = useState('https://drive.google.com/file/d/1BMheRb61hI7lYDBkpfsl1TbBvDzWFpL5/view?usp=sharing');

  const handlePdfClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div ref={windowRef} className={`${styles.TextWindow} ${styles.textWindow}`} onMouseDown={moveHandler.onMouseDown}>
      <div className={styles.titleContainer}>
      <img src={Documents} alt="Documents" className={styles.Documents} />
        <span>Cursos</span>
        <button onClick={onClose} className={styles.closeButton}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>Educación y cursos.</h3>
          <p className={styles.pText}>
            <span onClick={() => handlePdfClick(pdfUrl)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
              #SeProgramar - Argentina Programa 4.0
            </span>
            <br />
            Etapa formativa donde aprendí los principios de la programación funcional y orientada a objetos.
          </p>

          <p className={styles.pText}>
            <span onClick={() => handlePdfClick('https://drive.google.com/file/d/1NdVr8T-HcVcgWdNkiVUD3Nss6WvjT99M/view?usp=sharing')} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
             SoyHenry
            </span>
            <br />
            Bootcamp de programación donde aprendí desarrollo web, en conjunto con desafíos teóricos y prácticos.
          </p>

          <p className={styles.pText}>
            <span onClick={() => handlePdfClick('https://drive.google.com/file/d/1xqzMx-NHWi58rDpdHmn8IxRuXBY5hiBq/view?usp=sharing')} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
             Certificado de Experiencia de NoCountry
            </span>
            <br />
            Organización sin fines de lucro en donde pude conocer nuevos programadores y encaminar diferentes proyectos funcionales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CursosHechos;


