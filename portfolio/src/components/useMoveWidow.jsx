import { useState, useEffect } from 'react';

const useMoveWindow = (props, windowRef) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (clientX, clientY) => {
    setOffset({
      x: clientX - windowRef.current.offsetLeft,
      y: clientY - windowRef.current.offsetTop,
    });

    props.focus(props.id);
    setIsDragging(true);
  };

  const handleDragMove = (clientX, clientY) => {
    if (!isDragging) return;
    const x = clientX - offset.x;
    const y = clientY - offset.y;
    windowRef.current.style.left = `${x}px`;
    windowRef.current.style.top = `${y}px`;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      handleDragMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      handleDragMove(touch.clientX, touch.clientY);
    };

    const handleMouseUp = () => {
      handleDragEnd();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchEnd = () => {
      handleDragEnd();
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleDragMove]);

  return {
    onMouseDown: (e) => {
      e.preventDefault();
      handleDragStart(e.clientX, e.clientY);
    },
    onTouchStart: (e) => {
      const touch = e.touches[0];
      handleDragStart(touch.clientX, touch.clientY);
    },
  };
};

export default useMoveWindow;
