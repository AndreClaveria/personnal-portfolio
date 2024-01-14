import React from 'react';
import styles from "@/styles/index/index.module.scss";
import Header from '@/components/partials/Header';
import Footer from '@/components/partials/Footer';

export default function Home() {
  return (
    <>
      <Header/>
        <div className={styles.section}>
          <div className={styles.middle}>experiences</div>
        </div>
      {/* <Footer/> */}
    </>
  );
}
