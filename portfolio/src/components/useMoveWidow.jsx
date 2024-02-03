import { useState, useEffect } from 'react';

const useMoveWindow = (props, windowRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);

    // Obtén el zIndex actual de la ventana
    const currentZIndex = parseInt(windowRef.current.style.zIndex || 1, 10);

    // Establece un zIndex superior para que la ventana esté por delante de las demás
    windowRef.current.style.zIndex = currentZIndex + 1;

    setOffset({
      x: e.clientX - windowRef.current.offsetLeft,
      y: e.clientY - windowRef.current.offsetTop,
    });

    props.focus(props.id);
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

    // No restablece el zIndex aquí, para que el último componente movido mantenga su zIndex superior
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