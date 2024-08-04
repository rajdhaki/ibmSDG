import React, { useContext, useRef, useEffect } from 'react';
import gsap from 'gsap';
import context from '../context/Context';

const Cursor = () => {
  const cursor = useRef(null);
  const { setCursorRef } = useContext(context);

  useEffect(() => {
    setCursorRef(cursor);

    const handleMouseMove = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        ease: 'back.out(1.7)',
        duration: 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setCursorRef]);

  return (
    <div
      ref={cursor}
      id="cursor"
      style={{
        fontSize: '5.2px',
        textAlign: 'center',
        paddingTop: '0.1rem',
        pointerEvents: 'none', // Disable pointer events
      }}
      className="w-2.5 h-2.5 bg-blue-950 rounded-full md:visible invisible fixed z-50 text-white"
    ></div>
  );
};

export default Cursor;

