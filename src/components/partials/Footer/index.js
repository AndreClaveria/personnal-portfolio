import React, { useState } from 'react';
import styles from './index.module.scss';

const Footer = () => {
  const [isFullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!isFullScreen);
  };

  const footerClass = isFullScreen ? styles.fullScreen : '';

  return (
    <div className={`${styles.footer} ${footerClass}`}>
      <div className={styles.footerContent}>
        <h2>Footer Content</h2>
        <p>Ceci est un exemple de contenu pour le footer.</p>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
      <button onClick={toggleFullScreen} className={styles.toggleButton}>
        Toggle Full Screen
      </button>
    </div>
  );
};

export default Footer;
