import { useState, useEffect } from 'react';

const useMoveWindow = (props, windowRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();

    setOffset({
      x: e.clientX - windowRef.current.offsetLeft,
      y: e.clientY - windowRef.current.offsetTop,
    });

    props.focus(props.id);
    setIsDragging(true);
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

    const currentZIndex = parseInt(windowRef.current.style.zIndex || 1, 10);

    windowRef.current.style.zIndex = currentZIndex + 5;

    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);

    const { top, left } = windowRef.current.getBoundingClientRect();
    props.onMove({ id: props.id, top, left });
  };

  useEffect(() => {
    if (isDragging) {
      const currentZIndex = parseInt(windowRef.current.style.zIndex || 1, 10);

      windowRef.current.style.zIndex = currentZIndex + 1;

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, props.id, offset, windowRef]);

  return {
    onMouseDown: handleMouseDown,
  };
};

export default useMoveWindow;
