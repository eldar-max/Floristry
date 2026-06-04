import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      
      <div className={styles.titleContainer}>
        <h2 className={styles.mainTitle}>НАШИ ПОСТАВЩИКИ</h2>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.partnersGrid}>
        <div className={`${styles.partnerCard} ${styles.gladiolus}`}>
          <div className={styles.gladiolusLogo}></div>
          <span className={styles.gladiolusText}>ГЛАДИОЛУС</span>
        </div>
        <div className={`${styles.partnerCard} ${styles.european}`}>
          <span className={styles.europeanText}>EUROPEAN FLOWERS</span>
        </div>
        <div className={`${styles.partnerCard} ${styles.firstRoses}`}>
          <div className={styles.roseIcon}></div>
          <span className={styles.firstRosesText}>FIRST ROSES</span>
        </div>
        <div className={`${styles.partnerCard} ${styles.sakura}`}>
          <span className={styles.sakuraText}>SAKURA</span>
        </div>
        <div className={`${styles.partnerCard} ${styles.ecuador}`}>
          <div className={styles.ecuadorContent}>
            <span className={styles.ecuadorTitle}>РОЗЫ</span>
            <span className={styles.ecuadorSub}>ИЗ</span>
            <span className={styles.ecuadorTitle}>ЭКВАДОРА</span>
          </div>
        </div>

        
        <div className={`${styles.partnerCard} ${styles.firstFlower}`}>
          <div className={styles.flowerIcon}></div>
          <div className={styles.firstFlowerText}>
            <span>ПЕРВЫЙ</span>
            <span>ЦВЕТОЧНЫЙ</span>
          </div>
        </div>

        
        <div className={`${styles.partnerCard} ${styles.worldFlowers}`}>
          <span className={styles.worldFlowersText}>ЦВЕТЫ МИРА</span>
        </div>

        
        <div className={`${styles.partnerCard} ${styles.logistic}`}>
          <div className={styles.truckIcon}></div>
          <span className={styles.logisticText}>START LOGISTIC</span>
        </div>

       
        <div className={`${styles.partnerCard} ${styles.photoStudio}`}>
          <div className={styles.cameraIcon}></div>
          <span className={styles.photoStudioText}>ФОТОСТУДИЯ №1</span>
        </div>

      </div>
    </section>
  );
};

export default Partners;