// useMoveWindow.jsx
import { useState, useEffect } from 'react';

const useMoveWindow = (props, windowRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault(); // Evita que se seleccione el texto al arrastrar
    setIsDragging(true);
    setOffset({
      x: e.clientX - windowRef.current.offsetLeft,
      y: e.clientY - windowRef.current.offsetTop,
    });

    props.focus(props.id); // Enfoca la ventana al hacer clic
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;
    windowRef.current.style.left = `${x}px`;
    windowRef.current.style.top = `${y}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return {
    onMouseDown: handleMouseDown,
  };
};

export default useMoveWindow;
