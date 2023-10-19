// components/Canvas.js
import React, { useEffect, useRef } from 'react';
import Character from '@/components/character/Character';
import styles from './Canvas.module.scss';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set the background color
    context.fillStyle = 'lightblue'; // Change 'lightblue' to your desired background color
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Your environment rendering logic
    // You can draw walls, obstacles, or any other elements here

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Character rendering
      Character.render(context);

      requestAnimationFrame(render);
    };

    render();
  }, []);
  
useEffect(() => {
    // ...
  
    // Handle keyboard input
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);
  
    function handleKeyPress(e) {
      switch (e.key) {
        case 'ArrowLeft':
          Character.moveLeft();
          break;
        case 'ArrowRight':
          Character.moveRight();
          break;
        // Handle other keys as needed
      }
    }
  
    function handleKeyUp(e) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        Character.stopMoving();
      }
    }
  
    // ...
  }, []);

  return (
    <div className={styles['canvas-container']}>
    <canvas
      className={styles.canvas}
      ref={canvasRef}
      width={800} // Set your canvas width
      height={400} // Set your canvas height
    ></canvas>
  </div>
  );
};

export default Canvas;