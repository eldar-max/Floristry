import React from 'react';
import styles from './WeddingPages.module.css'; 


const WeddingPages = ({ onSelectService, weddingOffers }) => {
  

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>СВАДЕБНАЯ ФЛОРИСТИКА</h1>
          <p className={styles.heroSubtitle}>Создаем цветочную сказку для главного дня вашей жизни</p>
          <div className={styles.goldDivider}></div>
        </div>
      </header>

      <section className={styles.infoSection}>
        <div className={styles.container}>
          <h2>ОФОРМЛЕНИЕ СВАДЕБ МЕЧТЫ</h2>
          <p>
            Каждая свадьба уникальна. Мы не работаем по шаблонам — наш шеф-флорист разрабатывает 
            индивидуальный концепт колористики и состава цветов, который подчеркнет стиль вашей пары. 
            От деликатного букета невесты до масштабных фотозон.
          </p>
        </div>
      </section>

      <section className={styles.offersSection}>
        <div className={styles.container}>
          <h3 className={styles.sectionTitle}>ГОТОВЫЕ СВАДЕБНЫЕ РЕШЕНИЯ</h3>
          
          <div className={styles.grid}>
            
            {weddingOffers.map((offer) => (
              <div key={offer.id} className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img src={offer.image} alt={offer.title} className={styles.cardImg} />
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{offer.title}</h4>
                  <p className={styles.cardDesc}>{offer.desc}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{offer.price}</span>
                    <button 
                      className={styles.orderButton}
                      onClick={() => onSelectService(offer)}
                    >
                      ЗАКАЗАТЬ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPages;