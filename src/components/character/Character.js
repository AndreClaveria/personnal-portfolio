// components/Character.js
import React, { useState, useEffect } from "react";
import styles from "./Character.module.scss";
import { Logger } from "sass";

const Character = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [jumping, setJumping] = useState(false);
  const gravity = 5; // Adjust the gravity strength
  const jumpStrength = 10; // Adjust the jump strength
  const frameDuration = 16;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key ===  " " && !jumping) {
        setJumping(true);
        jump();
      }
      const stepSize = 10;
      switch (e.key) {
        case "ArrowLeft":
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x - stepSize,
          }));
          break;
        case "ArrowRight":
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x + stepSize,
          }));
          break;
        default:
          break;
      }
    };

    const jump = () => {
      console.log(position);
      const jumpInterval = setInterval(() => {
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - jumpStrength,
        }));
      }, 50);

      setTimeout(() => {
        clearInterval(jumpInterval);
        fall();
      }, 500); // Adjust the jump duration
    };

    const fall = () => {
      let jumpStrengthCopy = jumpStrength; // Create a copy of the jumpStrength
      const fallInterval = setInterval(() => {
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y + gravity,
        }));

        // Gradually reduce the jumpStrength as the character falls
        jumpStrengthCopy -= 0.2; // Adjust the decrement as needed
        if (jumpStrengthCopy < 0) {
          jumpStrengthCopy = 0;
        }
      }, 50);

      setTimeout(() => {
        clearInterval(fallInterval);
        setPosition((prevPosition) => ({ ...prevPosition, y: 0 }));
        setJumping(false);
      }, 1000); // Adjust the time for the character to fall back down
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [jumping]);

  return (
    <div
      className={styles.character}
      style={{ left: position.x, top: position.y }}></div>
  );
};

export default Character;
