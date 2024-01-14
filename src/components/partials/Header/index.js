import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import the Link component
import styles from './index.module.scss';

const Header = () => {
  const [isMouseAtTop, setIsMouseAtTop] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseY = event.clientY;
      setIsMouseAtTop(mouseY <= 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isMouseAtTop ? styles.visible : styles.hidden
      }`}
    >
      {/* Wrap the logo holder in a Link component */}
      <Link href="/home" legacyBehavior>
        <a className={styles.logoHolder}>
          {/* Set the GIF as a background */}
          <div className={styles.logoGif}></div>
        </a>
      </Link>

      <nav>
        <ul className={styles.navList}>
          <li>
            {/* Use Link for internal navigation */}
            <Link href="/projects" legacyBehavior>
              <a>Project</a>
            </Link>
          </li>
          <li>
            {/* Use Link for internal navigation */}
            <Link href="/experiences" legacyBehavior>
              <a>Experience</a>
            </Link>
          </li>
          <li>
            {/* Use Link for internal navigation */}
            <Link href="/presentation" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
